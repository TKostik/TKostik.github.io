// app.js  –  rendering & filtering logic

let currentRole = "all";

// ---- Initialisation ----

document.addEventListener("DOMContentLoaded", () => {
  renderRoleFilter();
  renderAll();
});

// ---- Role management ----

function setRole(role) {
  currentRole = role;

  // Update active button
  document.querySelectorAll(".role-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.role === role);
  });

  // Update hero subtitle
  const titleEl = document.getElementById("hero-title");
  if (titleEl) {
    titleEl.textContent = DATA.personal.titles[role] || DATA.personal.titles.all;
  }

  renderAll();
}

function matchesRole(tags) {
  if (currentRole === "all") return true;
  return tags.includes(currentRole);
}

// ---- Sorting ----

// Parses the start of a period string into a sortable YYYYMM number.
// "July 2024 – Present" → 202407,  "2022 – 2025" → 202200
function sortKey(period) {
  const monthMap = {
    january:1, february:2, march:3, april:4, may:5, june:6,
    july:7, august:8, september:9, october:10, november:11, december:12,
  };
  const s = (period || "").trim().toLowerCase();
  const full = s.match(/^([a-z]+)\s+(\d{4})/);
  if (full && monthMap[full[1]]) return parseInt(full[2]) * 100 + monthMap[full[1]];
  const year = s.match(/^(\d{4})/);
  if (year) return parseInt(year[1]) * 100;
  return 0;
}

function byDateDesc(a, b) { return sortKey(b.period) - sortKey(a.period); }

// ---- Renderers ----

function renderRoleFilter() {
  const container = document.getElementById("role-filter");
  container.innerHTML = DATA.roles
    .map(
      (r) =>
        `<button class="role-btn${r.id === currentRole ? " active" : ""}"
                 data-role="${r.id}"
                 onclick="setRole('${r.id}')">
          ${r.label}
        </button>`
    )
    .join("");
}

function renderAll() {
  renderSkills();
  renderExperience();
  renderAchievements();
  renderProjects();
  renderEducation();
}

function renderSkills() {
  const container = document.getElementById("skills-content");
  let html = "";

  DATA.skills.forEach((category) => {
    const items = category.items.filter((item) => matchesRole(item.tags));
    if (items.length === 0) return;

    html += `<div class="skill-category">
      <h3 class="skill-category-title">${category.category}</h3>
      <div class="skill-tags">
        ${items.map((i) => `<span class="skill-tag">${i.name}</span>`).join("")}
      </div>
    </div>`;
  });

  container.innerHTML = html || emptyState("skills");
}

function renderExperience() {
  const container = document.getElementById("experience-content");
  const items = DATA.experience.filter((i) => matchesRole(i.tags)).sort(byDateDesc);

  if (items.length === 0) {
    container.innerHTML = emptyState("experience entries");
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>${item.role}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-sub">${item.company} &middot; ${item.location}</div>
        ${item.description ? `<p class="timeline-desc">${item.description}</p>` : ""}
        ${item.details ? `<button class="details-btn" onclick='openModal(${JSON.stringify(item)})'>Details &rsaquo;</button>` : ""}
      </div>
    </div>`
    )
    .join("");
}

function renderProjects() {
  const container = document.getElementById("projects-content");
  const items = DATA.projects.filter((i) => matchesRole(i.tags)).sort(byDateDesc);

  if (items.length === 0) {
    container.innerHTML = emptyState("projects");
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
    <div class="project-card">
      <div class="project-header">
        <h3 class="project-title">${item.title}</h3>
        <span class="project-period">${item.period}</span>
      </div>
      <p class="project-location">${item.location}</p>
      <p class="project-desc">${item.description}</p>
      <div class="project-footer">
        <div class="tech-tags">
          ${item.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
        ${item.details ? `<button class="details-btn" onclick='openModal(${JSON.stringify(item)})'>Details &rsaquo;</button>` : ""}
      </div>
    </div>`
    )
    .join("");
}

function renderEducation() {
  const container = document.getElementById("education-content");
  const items = DATA.education.filter((i) => matchesRole(i.tags)).sort(byDateDesc);

  if (items.length === 0) {
    container.innerHTML = emptyState("education entries");
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h3>${item.degree}</h3>
          <span class="timeline-period">${item.period}</span>
        </div>
        <div class="timeline-sub">${item.institution} &middot; ${item.location}</div>
        ${item.note ? `<p class="timeline-desc">${item.note}</p>` : ""}
      </div>
    </div>`
    )
    .join("");
}

function renderAchievements() {
  const section = document.getElementById("achievements");
  const container = document.getElementById("achievements-content");
  const items = DATA.achievements.filter((i) => matchesRole(i.tags)).sort(byDateDesc);

  // Hide the whole section when nothing matches
  section.style.display = items.length === 0 ? "none" : "";

  container.innerHTML = items
    .map(
      (item) => `
    <div class="achievement-item">
      <span class="achievement-icon">${item.icon}</span>
      <div class="achievement-body">
        <span class="achievement-title">${item.title}</span>
        <span class="achievement-meta">${item.period} &middot; ${item.location}</span>
      </div>
    </div>`
    )
    .join("");
}

// ---- Helpers ----

function emptyState(label) {
  return `<p class="empty-message">No ${label} for this role.</p>`;
}

// ---- Modal ----

function openModal(item) {
  // Title: projects use .title, experience uses .role
  document.getElementById("modal-title").textContent = item.title || item.role;
  document.getElementById("modal-meta").textContent = item.period || "";

  // Subtitle: projects show location, experience shows company + location
  const sub = item.company
    ? `${item.company} · ${item.location}`
    : item.location || "";
  document.getElementById("modal-sub").textContent = sub;

  // Bullet points
  const list = document.getElementById("modal-details");
  list.innerHTML = item.details.map((d) => `<li>${d}</li>`).join("");

  const overlay = document.getElementById("modal-overlay");
  requestAnimationFrame(() => overlay.classList.add("open"));
  document.addEventListener("keydown", onModalKey);
}

function closeModal(event) {
  // If clicking the overlay itself (not the modal card), close
  if (event && event.target !== document.getElementById("modal-overlay")) return;
  _dismissModal();
}

function onModalKey(e) {
  if (e.key === "Escape") _dismissModal();
}

function _dismissModal() {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("open");
  document.removeEventListener("keydown", onModalKey);
}
