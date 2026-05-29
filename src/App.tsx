import "./App.css";

type ContactItem = {
  href?: string;
  label: string;
  external?: boolean;
};

type Experience = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

type SkillGroup = {
  label: string;
  value: string;
};

const contactItems: ContactItem[] = [
  {
    label: "Brasília, Brazil",
  },
  {
    label: "Remote Worldwide",
  },
  {
    href: "mailto:mauricio.mendonca.azevedo@gmail.com",
    label: "Email",
  },
  {
    href: "https://wa.me/5561999997353",
    label: "WhatsApp",
    external: true,
  },
  {
    href: "https://github.com/mauricio-azevedo",
    label: "GitHub",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/mauricio-azevedo",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://mauricioazevedo.com",
    label: "Portfolio",
    external: true,
  },
];

const experiences: Experience[] = [
  {
    role: "Senior Full Stack Software Engineer",
    company: "Estudologia",
    period: "Aug 2024 – Jan 2026",
    bullets: [
      "Delivered production features across Ruby and React systems powering an AI-assisted education platform used daily by 10,000+ students and hundreds of teachers across dozens of schools.",
      "Worked on core learning workflows where AI generated assessments, analyzed student performance, and helped create personalized teaching plans based on individual results.",
      "Contributed to AI-powered essay review workflows, including production fixes in a dedicated essay reading and correction microservice that provided automated feedback to students.",
      "Resolved critical production issues across authentication and account-access flows, including login, password reset, and SSO microservices.",
      "Expanded API test coverage from 50% to 80% by adding unit tests around critical backend features and business rules.",
      "Partnered with product owners, stakeholders, designers, and creative directors to turn complex academic workflows into intuitive, reliable product experiences.",
    ],
  },
  {
    role: "Lead Full Stack Software Engineer",
    company: "Inkluziva",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      "Led the development of a USDT trading automation platform integrated with the Binance API, supporting daily buy/sell operations involving BRL 10M+ with limited manual supervision.",
      "Owned product and technical execution as the initial sole developer, working directly with the company owner to define trading workflows, operational requirements, and system behavior.",
      "Built and shipped the platform’s React frontend and Node.js backend, including trading flows, Binance API integration, banking/payment API integrations, business rules, and edge-case handling.",
      "Co-designed and implemented complex financial reconciliation workflows across Binance trading operations and banking/payment APIs, covering payments, statements, transfers, withdrawals, and operational discrepancies.",
      "Automated crypto trading tax reporting, eliminating recurring manual errors and replacing full-day manual reporting work.",
      "Reduced dependency on manual trading operations previously handled by a 3-person team and later mentored a junior developer as the engineering team expanded.",
      "Identified and remediated 3 critical security vulnerabilities across the platform, improving reliability and reducing production risk.",
    ],
  },
  {
    role: "Mid-Level Full Stack Software Engineer",
    company: "Incript",
    period: "Apr 2023 – Jan 2024",
    bullets: [
      "Re-architected inherited React and Node.js codebases for a crypto digital wallet, improving maintainability through feature-based organization, reusable frontend components, service layers, thin controllers, and repository patterns.",
      "Built production features across wallet workflows, payment API integrations, authentication logic, and user-facing financial operations.",
      "Designed and implemented an end-to-end NFT creation feature from scratch, enabling users to generate customizable NFTs in seconds without requiring blockchain knowledge.",
      "Built the frontend from scratch for an educational platform that adapted classic literary works into comics to help students prepare for Brazilian college entrance exams.",
      "Developed a complex mobile-like continuous web reader and a backoffice interface for managing platform content, working directly with the client to refine requirements, business rules, and design details.",
    ],
  },
  {
    role: "Mid-Level Front-End Software Engineer",
    company: "OpahIT",
    period: "Feb 2021 – May 2021",
    bullets: [
      "Modernized UI components and improved mobile responsiveness in Banco Fibra’s Angular web banking application, contributing to a more reliable and usable digital banking experience.",
    ],
  },
  {
    role: "Junior Full Stack Software Engineer",
    company: "Basis S.A.",
    period: "Dec 2018 – Sep 2020",
    bullets: [
      "Contributed to Java and Angular features, bug fixes, and maintenance in IBAMA’s nationwide environmental licensing system for managing tree-felling and logging permits across millions of hectares of forest.",
    ],
  },
];

const skills: SkillGroup[] = [
  {
    label: "Languages",
    value: "TypeScript, JavaScript, Java, Ruby",
  },
  {
    label: "Frontend",
    value: "React, Angular, component architecture, complex UI workflows, mobile-first web applications",
  },
  {
    label: "Backend",
    value: "Node.js, NestJS, Express, Spring Boot, Ruby on Rails, REST APIs, authentication, third-party integrations",
  },
  {
    label: "Data & Infrastructure",
    value: "PostgreSQL, Oracle, Redis, AWS, Docker",
  },
  {
    label: "Architecture & Quality",
    value: "modular codebases, service layers, microservices, test automation, CI/CD, production debugging, security remediation",
  },
  {
    label: "Testing",
    value: "Jest, JUnit, RSpec",
  },
];

const beachRankBullets = [
  "Built a full-stack product that turns casual beach tennis matches into group rankings, player ratings, match history, profiles, invites, and a lightweight social feed.",
  "Designed a score-aware Elo-inspired rating engine for doubles matches, with group-scoped ratings, rating snapshots, append-only fast-path updates, and full historical recalculation for edits, deletes, and retroactive matches.",
  "Modeled a persisted event feed for meaningful competitive moments, with visibility rules, event lifecycle handling, and transactionally synced domain events for close matches, blowouts, and group activity.",
  "Structured the monorepo around product/domain features, with backend-owned business logic, typed domain models, feature-based frontend architecture, ADR-style documentation, and clear separation between UI, API, domain, and persistence concerns.",
];

function App() {
  return (
    <main className="resume-shell">
      <div className="toolbar" aria-label="Resume actions">
        <button type="button" className="download-button" onClick={() => window.print()}>
          Download PDF
        </button>
      </div>

      <article className="resume-page" aria-label="Maurício Azevedo resume">
        <header className="resume-header">
          <h1>Maurício Azevedo</h1>
          <p className="headline">Senior Software Engineer — Full Stack & Product Engineering</p>
          <address className="contact-list">
            {contactItems.map((item, index) => (
              <span className="contact-entry" key={item.label}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
                {index < contactItems.length - 1 ? <span className="contact-separator">·</span> : null}
              </span>
            ))}
          </address>
        </header>

        <section className="resume-section summary-section">
          <p>
            Senior Software Engineer with 6+ years of experience building production web platforms across education, fintech, crypto, public-sector systems, and AI-enabled products. Strong ownership across frontend, backend, APIs, testing, security, integrations, and product workflows. Proven impact in systems used by 10,000+ users, test coverage expansion, workflow automation, and business-critical product delivery.
          </p>
        </section>

        <section className="resume-section experience-section">
          <h2>Professional Experience</h2>
          {experiences.map((experience) => (
            <article className="experience" key={`${experience.role}-${experience.company}`}>
              <div className="item-heading">
                <p>
                  <strong>{experience.role}</strong>, <em>{experience.company}</em>
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

        <section className="resume-section skills-section">
          <h2>Technical Skills</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <p key={skill.label}>
                <strong>{skill.label}:</strong> {skill.value}
              </p>
            ))}
          </div>
        </section>

        <section className="resume-section project-section">
          <h2>Selected Project</h2>
          <article className="project">
            <div className="project-heading">
              <h3>
                BeachRank — Mobile-first sports ranking platform ·{" "}
                <a href="https://beachrank-eight.vercel.app" target="_blank" rel="noreferrer">
                  Live
                </a>
                {" · "}
                <a href="https://github.com/mauricio-azevedo/beachrank" target="_blank" rel="noreferrer">
                  Repo
                </a>
              </h3>
              <p>Next.js, NestJS, PostgreSQL, Prisma</p>
            </div>
            <ul>
              {beachRankBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="resume-section education-languages-section">
          <h2>Education & Languages</h2>
          <p>
            <strong>UDF:</strong> Systems Analysis and Development · <strong>English:</strong> C1 · <strong>Portuguese:</strong> Native
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
