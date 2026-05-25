import "./App.css";

const emailHref =
  "mailto:mauricio.mendonca.azevedo@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20%3CCompany%3E&body=Hi%20Maur%C3%ADcio%2C%0D%0A%0D%0AI%20saw%20your%20resume%20and%20would%20like%20to%20discuss%20a%20Senior%20Software%20Engineer%20role%20at%20%3CCompany%3E.%20Do%20you%20have%20time%20for%20a%20quick%20call%20this%20week%3F%0D%0A%0D%0AThanks%2C%0D%0A%3CYour%20Name%3E%0D%0A%3CCompany%3E%0D%0A%3CPhone%3E";

type ContactIconName = "email" | "phone" | "github" | "linkedin" | "portfolio";

type ContactItem = {
  href: string;
  label: string;
  icon: ContactIconName;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    href: emailHref,
    label: "mauricio.mendonca.azevedo@gmail.com",
    icon: "email",
  },
  {
    href: "tel:+5561999997353",
    label: "+55 61 99999-7353",
    icon: "phone",
  },
  {
    href: "https://github.com/mauricio-azevedo",
    label: "github.com/mauricio-azevedo",
    icon: "github",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/mauricio-azevedo/",
    label: "linkedin.com/in/mauricio-azevedo",
    icon: "linkedin",
    external: true,
  },
  {
    href: "https://mauricioazevedo.vercel.app/",
    label: "mauricioazevedo.vercel.app",
    icon: "portfolio",
    external: true,
  },
];

const skills = [
  ["Programming Languages", "TypeScript, JavaScript, Java, Ruby"],
  [
    "Libraries & Frameworks",
    "React, Angular, Node.js, NestJS, Express, Spring Boot, Ruby on Rails, Tailwind CSS",
  ],
  [
    "Tools & Platforms",
    "PostgreSQL, Oracle, Redis, AWS, Docker, GitHub Actions, Prisma, TypeORM, Active Record, Jest, JUnit, RSpec",
  ],
];

const experiences = [
  {
    role: "Senior Full Stack Software Engineer",
    company: "Estudologia",
    period: "Aug 2024 – Jan 2026",
    bullets: [
      "Delivered high-quality, robust production code across multiple Ruby and React systems, including academic management platforms used by 10,000+ students and a commercial library management system.",
      "Worked closely with stakeholders and product owners to refine business rules and uncover gaps in proposed workflows to fulfill business requirements.",
      "Collaborated with designers and creative directors to turn complex workflows into intuitive UI/UX for end users.",
      "Built a real-time quiz game with AI-generated questions, helping students learn while competing with each other.",
      "Expanded API test coverage from 50% to 80% by writing unit tests for critical API features.",
    ],
  },
  {
    role: "Lead Full Stack Software Engineer",
    company: "Inkluziva",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      "Worked alongside stakeholders to prototype the company’s Binance trading automation system and define the first version of its trading workflows.",
      "Built and shipped the React frontend and Node.js backend for the trading automation platform.",
      "Automated crypto trading tax reporting, eliminating manual errors and saving 20 hours of work per week.",
      "Identified and remediated 3 critical security vulnerabilities across the platform.",
      "Worked on a crypto trading digital wallet, integrating payment APIs and authentication logic.",
      "Built a feature for creating customizable NFTs in seconds, without requiring users to understand blockchain concepts.",
    ],
  },
  {
    role: "Mid-Level Full Stack Software Engineer",
    company: "Incript",
    period: "Apr 2023 – Jan 2024",
    bullets: [
      "Built and shipped the Angular frontend for an educational platform that helped public-school students engage with literature and prepare for Brazil’s college entrance exams.",
      "Designed and delivered the platform’s admin panel for managing published content and creators.",
    ],
  },
  {
    role: "Mid-Level Front-End Software Engineer",
    company: "OpahIT",
    period: "Feb 2021 – May 2021",
    bullets: [
      "Modernized the UI and improved mobile responsiveness in Banco Fibra’s Angular web banking app.",
    ],
  },
  {
    role: "Junior Full Stack Software Engineer",
    company: "Basis S.A.",
    period: "Dec 2018 – Sep 2020",
    bullets: [
      "Contributed to new features and resolved bugs across the Java backend and Angular frontend of IBAMA’s nationwide system for managing tree-felling and logging permits in over 10 million hectares of forest.",
    ],
  },
];

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "github") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.8c-5.1 0-9.2 4.1-9.2 9.2 0 4.1 2.6 7.5 6.3 8.7.5.1.6-.2.6-.5v-1.8c-2.6.6-3.1-1.1-3.1-1.1-.4-1.1-1-1.4-1-1.4-.8-.6.1-.6.1-.6.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.7.8.1-.6.3-1 .6-1.3-2-.2-4.2-1-4.2-4.5 0-1 .4-1.8.9-2.5-.1-.2-.4-1.2.1-2.4 0 0 .8-.2 2.5.9.7-.2 1.5-.3 2.3-.3s1.5.1 2.3.3c1.7-1.1 2.5-.9 2.5-.9.5 1.2.2 2.2.1 2.4.6.6.9 1.5.9 2.5 0 3.5-2.1 4.3-4.2 4.5.3.3.6.9.6 1.7v2.6c0 .3.2.6.7.5 3.7-1.2 6.3-4.6 6.3-8.7 0-5.1-4.1-9.2-9.2-9.2Z"
        />
      </svg>
    );
  }

  const paths = {
    email: (
      <>
        <rect x="4" y="6" width="16" height="12" rx="2" />
        <path d="m5 7 7 6 7-6" />
      </>
    ),
    phone: (
      <path d="M7.6 4.5 10 4l1.4 4-2 1.1a9.7 9.7 0 0 0 5.5 5.5l1.1-2 4 1.4-.5 2.4c-.2 1-1.1 1.7-2.1 1.6A13.5 13.5 0 0 1 6 6.6c-.1-1 .6-1.9 1.6-2.1Z" />
    ),
    linkedin: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8.2v.1" />
        <path d="M12 16v-5" />
        <path d="M12 13.2c0-1.3.8-2.2 2-2.2s2 .9 2 2.2V16" />
      </>
    ),
    portfolio: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16" />
        <path d="M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8" />
        <path d="M12 4c-2 2.2-3 4.9-3 8s1 5.8 3 8" />
      </>
    ),
  };

  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function App() {
  return (
    <main className="resume-shell">
      <div className="toolbar" aria-label="Resume actions">
        <button
          type="button"
          className="download-button"
          onClick={() => window.print()}
        >
          Baixar PDF
        </button>
      </div>

      <article className="resume-page" aria-label="Maurício Azevedo resume">
        <header className="resume-header">
          <div className="intro">
            <h1>Maurício Azevedo</h1>
            <p className="headline">Senior Full Stack Software Engineer</p>
            <p className="location">Brasília, Brazil — Remote Woldwide</p>
          </div>

          <address className="contact-list">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="contact-item"
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                <ContactIcon name={item.icon} />
                <span>{item.label}</span>
              </a>
            ))}
          </address>
        </header>

        <div className="resume-layout">
          <section className="main-column">
            <section className="resume-section experience-section">
              <h2>Professional Experience</h2>
              {experiences.map((experience) => (
                <article
                  className="experience"
                  key={`${experience.role}-${experience.company}`}
                >
                  <div className="item-heading">
                    <p>
                      {experience.role}, <em>{experience.company}</em>
                    </p>
                    <span>{experience.period}</span>
                  </div>
                  <ul>
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </section>

          <aside className="side-column">
            <section className="resume-section skills-section">
              <h2>Skills</h2>
              <div className="skill-list">
                {skills.map(([label, value]) => (
                  <div className="skill-group" key={label}>
                    <h3>{label}</h3>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="resume-section projects-section">
              <h2>Selected Projects</h2>
              <article className="side-item">
                <h3>Beachrank</h3>
                <p>
                  BeachRank is a mobile-first web app that turns casual beach
                  tennis matches into group rankings, player ratings, match
                  history, and a lightweight social feed.
                </p>
              </article>
            </section>

            <section className="resume-section compact-section">
              <h2>Languages</h2>
              <p>
                <strong>English:</strong> C1
              </p>
              <p>
                <strong>Portuguese:</strong> native
              </p>
            </section>

            <section className="resume-section education-section">
              <h2>Education</h2>
              <article className="side-item">
                <h3>UDF</h3>
                <p>Systems Analysis and Development</p>
              </article>
            </section>
          </aside>
        </div>
      </article>
    </main>
  );
}

export default App;
