// CV Data for Malloju Vishwam
export const personalInfo = {
  name: "Malloju Vishwam",
  title: "Computer Science & AI/ML Student",
  tagline: "Building intelligent systems at the intersection of AI and Software Engineering",
  email: "mallojuvishwam@gmail.com",
  phone: "+91-7989533010",
  linkedin: "https://www.linkedin.com/in/malloju-vishwam",
  github: "https://github.com/Malloju",
  location: "Punjab, India",
};

export const about = {
  summary: "I'm a Computer Science student focused on building practical, high-impact solutions rather than just completing coursework. My work sits at the intersection of AI, machine learning, and full-stack development, where I turn ideas into functioning systems that solve real problems. I prioritize hands-on learning—shipping projects, debugging failures, and improving performance—over passive theory.\n\nI've worked with modern tools and frameworks across the MERN stack, along with core machine learning concepts such as model training, evaluation, and data preprocessing. I don't chase trends blindly; I focus on understanding fundamentals and applying them effectively. Whether it's developing intelligent applications or handling real-world datasets, I aim for clarity, efficiency, and measurable results.\n\nI value discipline, consistency, and accountability. I don't rely on motivation—I build habits that produce outcomes. I take feedback seriously, iterate quickly, and push my limits when something feels uncomfortable or complex.\n\nMy goal is simple: become a developer who can design, build, and scale systems that matter. Not just someone who knows concepts, but someone who delivers results.",
};

export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "Java", level: 82 },
    { name: "JavaScript", level: 85 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 80 },
    { name: "C", level: 70 },
    { name: "HTML & CSS", level: 88 },
  ],
  frameworks: [
    { name: "React.js", level: 85 },
    { name: "Node.js / Express.js", level: 78 },
    { name: "TensorFlow / Keras", level: 82 },
    { name: "Pandas & NumPy", level: 90 },
    { name: "Scikit-Learn", level: 80 },
    { name: "Matplotlib / Seaborn", level: 78 },
    { name: "Flask", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 88 },
    { name: "Docker", level: 65 },
    { name: "AWS", level: 62 },
    { name: "Power BI", level: 78 },
    { name: "MySQL", level: 82 },
    { name: "Linux", level: 72 },
    { name: "Google Colab", level: 88 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "AI-Driven Tumor Detection",
    description:
      "Built a deep learning system to detect infected and cancerous tissues from MRI, X-ray, and histopathology images for early diagnosis. Achieved high accuracy using transfer learning with MobileNet architecture.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "MobileNet", "NumPy", "Matplotlib"],
    period: "Oct 2025 – Nov 2025",
    category: "AI / Supervised Learning",
    icon: "🧠",
    color: "#6c63ff",
    github: "https://github.com/AKSHAYA1323/ai-pneumonia-detection",
    demo: "https://ai-pneumonia-detection-gwmkcuxlxn66xdnbn4g5gy.streamlit.app/",
    image: "/images/projects/project1.png",
  },
  {
    id: 2,
    title: "Pitch-Port",
    description:
      "Developed a startup-investor matchmaking platform with an inbuilt AI assistant for personalized recommendations. Full-stack MERN application with real-time data flow and CRUD operations.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    period: "Jun 2025 – Jul 2025",
    category: "Full Stack",
    icon: "🚀",
    color: "#22d3ee",
    github: "https://github.com/Malloju",
    demo: "https://pitchport-frontend.onrender.com/",
    image: "/images/projects/project2.png",
  },
  {
    id: 3,
    title: "Fuzzy Logic Air Quality System",
    description:
      "Created an air quality estimating system using fuzzy logic to classify air quality levels (Good, Moderate, Bad) based on parameters like CO, NO2, O3, PM10, and PM2.5 with a web interface.",
    tech: ["Python", "Flask", "Fuzzy Logic", "HTML", "CSS", "MySQL"],
    period: "Mar 2025 – Apr 2025",
    category: "Soft Computing Project",
    icon: "🌿",
    color: "#34d399",
    github: "https://github.com/Malloju/air_quality",
    demo: "https://air-quality-qox4.onrender.com/",
    image: "/images/projects/project3.png",
  },
];

export const experience = [
  {
    id: 1,
    type: "training",
    title: "Full Stack (MERN) Trainee",
    organization: "W3Grads",
    period: "Jun 2025 – Jul 2025",
    description:
      "Developed a full-stack startup-investor matchmaking platform (Pitch-Port). Gained hands-on experience with backend logic, API-driven data flow, and CRUD operations using MongoDB, Express.js, React, and Node.js.",
    icon: "💼",
    color: "#6c63ff",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering (AI & ML)",
    institution: "Lovely Professional University",
    location: "Punjab, India",
    period: "Aug 2023 – Present",
    grade: "CGPA: 7.9",
    icon: "🎓",
    color: "#6c63ff",
  },
  {
    id: 2,
    degree: "Intermediate (MPC)",
    institution: "Narayana Jr College",
    location: "Hyderabad, Telangana",
    period: "Apr 2021 – Mar 2023",
    grade: "96.2%",
    icon: "📚",
    color: "#22d3ee",
  },
  {
    id: 3,
    degree: "Matriculation (Class X)",
    institution: "Krishnaveni Talent School",
    location: "Kondamallpally, Telangana",
    period: "Apr 2020 – Mar 2021",
    grade: "100%",
    icon: "🏆",
    color: "#34d399",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Oracle Certified Foundations Associate",
    issuer: "Oracle",
    date: "Nov 2025",
    icon: "☁️",
    color: "#f59e0b",
    certificatePath: "/certificates/oracle.png",
    certificateImage: "/certificates/oracle.png",
  },
  {
    id: 2,
    title: "ChatGPT-4 Prompt Engineering",
    issuer: "Infosys",
    date: "Aug 2025",
    icon: "🤖",
    color: "#6c63ff",
    certificatePath: "/certificates/chatgpt.png",
    certificateImage: "/certificates/chatgpt.png",
  },
  {
    id: 3,
    title: "Computational Theory Language Principles & Finite Automata",
    issuer: "Infosys",
    date: "Aug 2025",
    icon: "⚙️",
    color: "#22d3ee",
    certificatePath: "/certificates/master-automata.png",
    certificateImage: "/certificates/master-automata.png",
  },
  {
    id: 4,
    title: "Full Stack (MERN) with GenAI",
    issuer: "W3Grads",
    date: "Jun – Jul 2025",
    icon: "🔥",
    color: "#34d399",
    certificatePath: "/certificates/fullstack.jpg",
    certificateImage: "/certificates/fullstack.jpg",
  },
];

export const achievements = [];
