export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  github: string
  featured?: boolean
}

export interface Experience {
  company: string
  role: string
  period: string
  bullets: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  description: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

// First 5 shown on home page, all 10 on /projects
export const projects: Project[] = [
  {
    id: 1,
    title: "Payments & Interchange Economics – Margin Leakage Investigation",
    description:
      "Identified $141K in annual margin leakage across a $130M payments portfolio by modeling interchange spreads across 220 merchants, card networks, and MCC tiers in PostgreSQL, and proposed a segment-level repricing strategy visualized in a 3-page Power BI dashboard.",
    tags: ["PostgreSQL", "Power BI", "Payments", "Financial Analytics", "Pricing Strategy"],
    github: "https://github.com/architkiran",
    featured: true,
  },
  {
    id: 2,
    title: "Position Break Intelligence System",
    description:
      "Surfaced $8.1M in unreconciled exposure by analyzing PMS and Custodian feeds, classifying 1,560 position-days by severity, and delivering findings through a 3-page Power BI dashboard.",
    tags: ["Python", "SQL", "Power BI", "Fintech", "Reconciliation"],
    github: "https://github.com/architkiran/Position-break-intelligence",
    featured: true,
  },
  {
    id: 3,
    title: "Corporate Financial Intelligence Dashboard",
    description:
      "Automated financial data collection for 30+ public companies via Python APIs, computed 10+ KPIs (P/E, ROE, margins), and built interactive Plotly visualizations for executive-level trend analysis.",
    tags: ["Python", "Plotly", "APIs", "Financial Analytics", "KPI"],
    github: "https://github.com/architkiran/financial-performance-dashboard",
    featured: true,
  },
  {
    id: 4,
    title: "Manufacturing Quality Analytics Dashboard",
    description:
      "Cleaned a 100K-row manufacturing dataset through an 8-step Python pipeline; identified a 9.7pp machine defect spread and built a 3-page Power BI dashboard with DAX measures tracking OEE, scrap cost, and maintenance signals.",
    tags: ["Python", "Power BI", "DAX", "SQL", "Manufacturing Analytics"],
    github: "https://github.com/architkiran/Manufacturing-analytics",
  },
  {
    id: 5,
    title: "Live Traffic Data Analytics (PySpark)",
    description:
      "Engineered distributed PySpark and SQL pipelines processing 2M+ real-time traffic records, performing EDA and anomaly detection to uncover congestion patterns and improve route efficiency by 18%.",
    tags: ["PySpark", "Python", "SQL", "Big Data", "Streaming Analytics"],
    github: "https://github.com/architkiran/Live-Traffic-Data-Analysis",
  },
  {
    id: 6,
    title: "Metric Reconciliation & Debugging Dashboard",
    description:
      "Designed a self-serve debugging tool for analysts to reconcile metric discrepancies across data pipelines. Reduced average debug time and improved data quality across reporting workflows.",
    tags: ["Python", "SQL", "DuckDB", "Data Quality", "Analytics Engineering"],
    github: "https://github.com/architkiran/Metric-reconciliation-dashboard-debugging",
  },
  // Additional projects — shown only on /projects page
  {
    id: 7,
    title: "Boston-Area Price & Crime Prediction",
    description:
      "A data-driven decision support project analyzing crime rates and housing rent trends to help newcomers and residents make safer, more informed choices in the Boston metro area.",
    tags: ["Python", "Machine Learning", "Regression", "EDA", "Data Analysis"],
    github: "https://github.com/HarshaBeth/Boston-Area-Price-and-Crime-Prediction",
  },
  {
    id: 8,
    title: "Music Review Rating Prediction",
    description:
      "Predicts reviewer ratings (1–5) of music releases using metadata and text features. Multi-class classification project evaluated with Macro F1 Score on Kaggle.",
    tags: ["Python", "scikit-learn", "NLP", "Classification", "Kaggle"],
    github: "https://github.com/architkiran/MusicRatingPrediction",
  },
  {
    id: 9,
    title: "EV Charging Network Resilience",
    description:
      "Research-backed project strengthening India's EV charging infrastructure by analyzing OCPP protocol vulnerabilities and proposing resilient, secure deployment frameworks.",
    tags: ["Security", "OCPP", "Infrastructure Analytics", "Research"],
    github: "https://github.com/architkiran/Safeguarding-Bharat-s-EV-Charging-Networks-Through-OCPP-Protocol-Resilience-",
  },
  {
    id: 10,
    title: "Blockchain-based E-Voting System",
    description:
      "Engineered a secure, transparent, and tamper-resistant e-voting system using blockchain to support integrity, auditability, and public trust in digital elections.",
    tags: ["Blockchain", "Security", "Node.js", "Smart Contracts"],
    github: "https://github.com/architkiran/Blockchain-Based-Voting-",
  },
  {
    id: 11,
    title: "Post-Quantum IoT Framework",
    description:
      "Designed a secure IoT communication framework resilient to quantum-era attacks by integrating post-quantum cryptography while optimizing for resource-constrained devices.",
    tags: ["IoT", "Post-Quantum Cryptography", "Security", "Embedded Systems"],
    github: "https://github.com/architkiran/Post-Quantum-Communication-framework-for-IOT-Devices",
  },
]

export const experience: Experience[] = [
  {
    company: "Millicent Technologies",
    role: "Data Analyst Intern",
    period: "Mar 2025 – Jul 2025",
    bullets: [
      "Cut reporting turnaround time by 30%, enabling same-day data availability across 3 business units, by diagnosing recurring delays in 100K+ daily records and redesigning the workflow with engineering and operations leads",
      "Became the team's default reporting tool by building 8 Tableau and Excel dashboards adopted across 1,200+ users, consolidating scattered KPI requests into a single source of truth for data quality and engagement tracking",
      "Eliminated reporting inconsistencies across 3 business units by leading requirements-gathering sessions with 5 cross-functional stakeholders to align conflicting KPI definitions into a single governance standard",
    ],
  },
  {
    company: "InternPe",
    role: "Analyst Intern",
    period: "Apr 2024 – Sep 2024",
    bullets: [
      "Built a SQL and Python extraction and validation layer for 200K+ records, applying outlier detection to flag mismatched entries and improve data accuracy by 25%",
      "Replaced manual spreadsheet reporting with 10+ Power BI and Excel reports on revenue, churn, and operational KPIs, becoming the team's standing reference and regularly presented to senior stakeholders",
      "Standardized schema and validation rules across 8 database tables, working closely with the data team to reduce downstream reporting errors by 40%",
    ],
  },
]

export const education: Education[] = [
  {
    school: "Boston University",
    degree: "Master of Science, Computer Science",
    period: "Sep 2025 – Jan 2027 (Expected)",
    description:
      "Specializing in advanced algorithms, distributed systems, applied data science, and cloud computing. Projects emphasize predictive analytics, secure systems, and scalable architectures.",
  },
  {
    school: "Ramaiah Institute of Technology",
    degree: "Bachelor of Engineering, Computer Science & Engineering",
    period: "Dec 2021 – Jun 2025",
    description:
      "Built a solid foundation in data structures, OS, networks, and blockchain. Led projects in IoT security, traffic data analysis, and post-quantum frameworks. Received Best Project Award.",
  },
]

export const skillGroups: SkillGroup[] = [
  {
    category: "Analytics & Data",
    skills: ["SQL", "Python", "Pandas", "NumPy", "R", "PySpark", "EDA", "A/B Testing", "Hypothesis Testing"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MySQL", "DuckDB", "BigQuery", "Snowflake", "Redshift", "AWS", "GCP"],
  },
  {
    category: "Visualization & BI",
    skills: ["Tableau", "Power BI", "Plotly", "Streamlit", "Dashboard Design", "Reporting Automation"],
  },
  {
    category: "Data Engineering",
    skills: ["ETL/ELT Pipelines", "Data Validation", "Data Modeling", "Data Warehousing"],
  },
  {
    category: "Tools & Methods",
    skills: ["Git", "Jira", "Agile", "Scikit-learn", "Regression", "Classification", "Feature Engineering"],
  },
]

export const contact = {
  email: "architkiran@gmail.com",
  linkedin: "https://linkedin.com/in/archit-kiran-kumar-403610243",
  github: "https://github.com/architkiran",
}
