// ============================================================
//  PORTFOLIO DATA  –  edit this file to update your website
// ============================================================
//
//  Every item has a "tags" array that controls which role view
//  it appears in.  Available tags: "software", "embedded", "ai", "robotics"
//  Leave tags empty [] to hide an item, or add all four to
//  always show it.
//
// ============================================================

const DATA = {

  // ----------------------------------------------------------
  // Personal info
  // ----------------------------------------------------------
  personal: {
    name: "Konstantin Teplykh",
    email: "konstantin.teplykh@gmail.com",
    phone: "+31626934949",
    location: "Delft, Netherlands",
    // Title shown in the hero per role
    titles: {
      all:      "Software Engineer",
      software: "Software Engineer",
      embedded: "Embedded Systems Engineer",
      ai:       "AI Specialist",
      robotics: "Robotics Engineer",
    },
    bio: "Master's student in Computer & Embedded Systems Engineering at TU Delft, passionate about reliable, high-performance systems across software, embedded, AI and robotics domains.",
  },

  // ----------------------------------------------------------
  // Role filter buttons  (add / remove roles here)
  // ----------------------------------------------------------
  roles: [
    { id: "all",      label: "All" },
    { id: "software", label: "Software Engineer" },
    { id: "embedded", label: "Embedded Systems" },
    { id: "ai",       label: "AI Specialist" },
    { id: "robotics", label: "Robotics" },
  ],

  // ----------------------------------------------------------
  // Skills
  // ----------------------------------------------------------
  skills: [
    {
      category: "Languages",
      items: [
        { name: "Rust",       tags: ["embedded"] },
        { name: "C++",        tags: ["embedded", "software", "robotics"] },
        { name: "Python",     tags: ["software", "ai", "robotics"] },
        { name: "Java",       tags: ["software"] },
        { name: "Kotlin",     tags: ["software"] },
        { name: "C#",         tags: ["software"] },
        { name: "JavaScript", tags: ["software"] },
        { name: "TypeScript", tags: ["software"] },
        { name: "Haskell",    tags: ["software"] },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "ReactJS",     tags: ["software"] },
        { name: ".NET",        tags: ["software"] },
        { name: "Spring Boot", tags: ["software"] },
        { name: "Django",      tags: ["software"] },
        { name: "ROS",         tags: ["robotics", "embedded"] },
        { name: "TensorFlow",  tags: ["ai"] },
        { name: "OpenCV",      tags: ["ai", "software", "robotics"] },
        { name: "JavaFX",      tags: ["software"] },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL",      tags: ["software"] },
        { name: "MongoDB",    tags: ["software"] },
        { name: "PostgreSQL", tags: ["software"] },
        { name: "MSSQL",      tags: ["software"] },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git",               tags: ["software", "embedded", "ai", "robotics"] },
        { name: "GitLab",            tags: ["software", "embedded", "ai", "robotics"] },
        { name: "Docker",            tags: ["software"] },
        { name: "Google Colab",      tags: ["ai"] },
        { name: "Autodesk Inventor", tags: ["robotics"] },
      ],
    },
    {
      category: "Operating Systems",
      items: [
        { name: "Linux",   tags: ["embedded", "software", "robotics"] },
        { name: "Windows", tags: ["software"] },
        { name: "MacOS",   tags: ["software"] },
      ],
    },
  ],

  // ----------------------------------------------------------
  // Work experience  (most recent first)
  // ----------------------------------------------------------
  experience: [
    {
      company:     "Milvum IT Company",
      role:        "Part-time Software Engineer",
      period:      "July 2024 – Present",
      location:    "Den Haag, Netherlands",
      tags:        ["software", "ai"],
      description: "Developing software products and AI-powered features as a part-time engineer at a Dutch IT consultancy.",
      details: [
        "Evaluated and selected optimal technology stacks (including .NET, Java, and Node.js) to meet specific client requirements and scalability goals.",
        "Engineered robust backend endpoints and microservices using .NET and Spring Boot to facilitate secure data exchange.",
        "Managed and optimized complex data structures using MSSQL and PostgreSQL, resolving high-priority support tickets and maintaining data integrity.",
        "Architected and maintained fully containerized environments using Docker, ensuring consistent deployment across development and production stages.",
        "Developed and integrated chatbot solutions to automate user interactions and improve service efficiency.",
        "Collaborated directly with clients to translate business bottlenecks into functional technical specifications and integrated software solutions.",
      ],
    },
    {
      company:     "Lunar Zebro – TU Delft",
      role:        "Embedded Software Engineer",
      period:      "November 2023 – December 2024",
      location:    "Delft, Netherlands",
      tags:        ["embedded", "robotics"],
      description: "Embedded software engineer on the Lunar Zebro project, a student-built lunar rover at TU Delft.",
    },
    {
      company:     "TU Delft",
      role:        "Teaching Assistant – Computer Science & Engineering",
      period:      "December 2023 – February 2024",
      location:    "Delft, Netherlands",
      tags:        ["software", "embedded", "ai"],
      description: "Supported students in the Computer Science and Engineering Bachelor programme.",
    },
    {
      company:     "RSA – Robotics Student Association",
      role:        "Board Member",
      period:      "September 2023 – September 2024",
      location:    "Delft, Netherlands",
      tags:        ["robotics"],
      description: "Member of the board of the Robotics Student Association at TU Delft.",
    },
    {
      company:     "RSA – Robotics Student Association",
      role:        "PAL Project Participant",
      period:      "September 2022 – August 2023",
      location:    "Delft, Netherlands",
      tags:        ["robotics"],
      description: "Participant in the PAL (Personal Assistant and Logistics) robot project within the RSA.",
    },
    {
      company:     "University of Twente",
      role:        "DroneTeam Freelancer",
      period:      "2021 – 2022",
      location:    "Enschede, Netherlands",
      tags:        ["robotics", "embedded"],
      description: "Freelance member of the drone team at the University of Twente.",
    },
  ],

  // ----------------------------------------------------------
  // Achievements & Awards  (competitions, exhibitions)
  // ----------------------------------------------------------
  achievements: [
    {
      title:    "1st Place – FIRA 2019, Autonomous Car League",
      period:   "August 2019",
      location: "Changwon, Korea",
      tags:     ["robotics"],
      icon:     "🥇",
    },
    {
      title:    "1st Place – RoboCup Asia-Pacific Junior, Home Education League",
      period:   "November 2019",
      location: "Moscow, Russia",
      tags:     ["robotics"],
      icon:     "🥇",
    },
    {
      title:    "2nd Place – RoboCup Russia Open 2021",
      period:   "May 2021",
      location: "Tomsk, Russia",
      tags:     ["robotics"],
      icon:     "🥈",
    },
    {
      title:    "INNOPROM World Industrial Exhibition – Robocamel with Rotating Monitor",
      period:   "July 2021",
      location: "Ekaterinburg, Russia",
      tags:     ["robotics"],
      icon:     "🏭",
    },
    {
      title:    "2nd Place – FIRA 2023, Autonomous Cars League",
      period:   "July 2023",
      location: "Wolfenbüttel, Germany",
      tags:     ["robotics"],
      icon:     "🥈",
    },
  ],

  // ----------------------------------------------------------
  // Projects  (most recent first)
  // ----------------------------------------------------------
  projects: [
    {
      title:       "Real-Time Drone Flight Controller",
      period:      "February 2026 – Present",
      location:    "TU Delft, Delft, Netherlands",
      tags:        ["embedded", "software", "robotics"],
      tech:        ["Rust", "RTOS", "ARM"],
      description: "Real-time drone flight controller implemented in Rust as part of the TU Delft Master's programme.",
    },
    {
      title:       "Real-Time Audio Synthesizer",
      period:      "January 2026",
      location:    "TU Delft, Delft, Netherlands",
      tags:        ["embedded", "software"],
      tech:        ["C", "Zephyr RTOS"],
      description: "Real-time audio synthesizer built with C and Zephyr RTOS as part of the TU Delft Master's programme.",
    },
    {
      title:       "UART Driver for ARM Cortex-M3",
      period:      "December 2025",
      location:    "Delft, Netherlands",
      tags:        ["embedded"],
      tech:        ["Rust", "ARM Cortex-M3", "Embedded"],
      description: "UART driver implementation in Rust for ARM Cortex-M3 (Stellaris LM3S6965) within an emulated embedded environment.",
    },
    {
      title:       "Final Thesis: Multimodal Storytelling Robots in Dementia-Care",
      period:      "June 2025",
      location:    "Delft, Netherlands",
      tags:        ["ai", "robotics"],
      tech:        ["Python", "AI", "ROS", "HRI"],
      description: "Evaluating Multimodal Storytelling Robots in Dementia-Care for Bias and Activity Enjoyment.",
    },
    {
      title:       "Functional jq JSON Processor Clone",
      period:      "March 2025",
      location:    "Delft, Netherlands",
      tags:        ["software"],
      tech:        ["Haskell", "Functional Programming"],
      description: "Fully functional clone of the jq JSON processor built in Haskell.",
    },
    {
      title:       "Fat Block Unpacker Robot",
      period:      "February 2025",
      location:    "Delft, Netherlands",
      tags:        ["embedded", "software", "robotics"],
      tech:        ["C++", "Robotics", "ROS"],
      description: "Autonomous Fat Block Unpacker Robot designed and built for Rademaker BV.",
    },
    {
      title:       "Scalable E-Commerce Integration Platform",
      period:      "June 2024",
      location:    "Delft, Netherlands",
      tags:        ["software"],
      tech:        ["Django", "Python", "Microservices", "REST API"],
      description: "Platform built with Django microservices to sync data from various e-commerce sources for Dizconto.",
    },
    {
      title:       "Embedded Linux on Raspberry Pi Zero WH",
      period:      "February 2024",
      location:    "Delft, Netherlands",
      tags:        ["embedded"],
      tech:        ["Linux", "C", "Raspberry Pi", "FUSE", "PWM"],
      description: "Embedded Linux development covering kernel modules, device drivers, PWM, threading, security, and FUSE.",
    },
    {
      title:       "Food Delivery Platform – Spring Boot Microservice",
      period:      "January 2024",
      location:    "Delft, Netherlands",
      tags:        ["software"],
      tech:        ["Java", "Spring Boot", "REST API", "Role-based Access"],
      description: "Spring Boot microservice with role-based access control and REST APIs for a food delivery platform.",
    },
    {
      title:       "C++ Ray Tracing Renderer",
      period:      "November 2023",
      location:    "Delft, Netherlands",
      tags:        ["software"],
      tech:        ["C++", "OpenGL", "BVH", "Multi-threading"],
      description: "Ray tracing renderer with BVH acceleration, multi-threading, and real-time OpenGL visualisation.",
    },
    {
      title:       "AI Avatar Generation",
      period:      "August 2023",
      location:    "Den Haag, Netherlands",
      tags:        ["ai"],
      tech:        ["Python", "Stable Diffusion", "LORA", "Fine-tuning"],
      description: "AI avatar generation project using Python, LORA fine-tuning, and Stable Diffusion at Milvum.",
    },
    {
      title:       "Real-Time Collaborative Task Manager",
      period:      "February 2023",
      location:    "Delft, Netherlands",
      tags:        ["software"],
      tech:        ["Java", "JavaFX", "Spring Boot"],
      description: "Real-time collaborative task management application built with JavaFX and Spring Boot.",
    },
  ],

  // ----------------------------------------------------------
  // Education  (most recent first)
  // ----------------------------------------------------------
  education: [
    {
      institution: "TU Delft",
      degree:      "MSc Computer & Embedded Systems Engineering",
      period:      "2025 – Present",
      location:    "Delft, Netherlands",
      tags:        ["software", "embedded", "ai", "robotics"],
      note:        "",
    },
    {
      institution: "TU Delft",
      degree:      "BSc Computer Science and Engineering",
      period:      "2022 – 2025",
      location:    "Delft, Netherlands",
      tags:        ["software", "embedded", "ai", "robotics"],
      note:        "",
    },
    {
      institution: "Twente Pathway College",
      degree:      "Foundation Year of Engineering",
      period:      "2021 – 2022",
      location:    "Enschede, Netherlands",
      tags:        ["software", "embedded", "ai", "robotics"],
      note:        "Business and Entrepreneurship courses · DroneTeam Freelancer at University of Twente",
    },
    {
      institution: "Robotics School \"Sphere of Knowledge\"",
      degree:      "Robotics & Engineering",
      period:      "2016 – 2021",
      location:    "Chelyabinsk, Russia",
      tags:        ["robotics", "embedded"],
      note:        "",
    },
    {
      institution: "Technical Lyceum No. 97",
      degree:      "Secondary Education",
      period:      "2010 – 2021",
      location:    "Chelyabinsk, Russia",
      tags:        ["robotics", "software", "embedded", "ai"],
      note:        "",
    },
  ],

};
