import { useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './App.css'

const emailHref =
  'mailto:mauricio.mendonca.azevedo@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20%3CCompany%3E&body=Hi%20Maur%C3%ADcio%2C%0D%0A%0D%0AI%20saw%20your%20resume%20and%20would%20like%20to%20discuss%20a%20Senior%20Software%20Engineer%20role%20at%20%3CCompany%3E.%20Do%20you%20have%20time%20for%20a%20quick%20call%20this%20week%3F%0D%0A%0D%0AThanks%2C%0D%0A%3CYour%20Name%3E%0D%0A%3CCompany%3E%0D%0A%3CPhone%3E'

const skills = [
  ['Languages', 'TypeScript, JavaScript, Java, Ruby'],
  ['Frontend', 'React, Angular, Tailwind CSS'],
  ['Backend', 'Node.js, NestJS, Express, Spring Boot, Ruby on Rails'],
  ['Databases', 'PostgreSQL, Oracle, Redis'],
  ['Cloud & DevOps', 'AWS, Docker, GitHub Actions'],
  ['ORM/Data Access', 'Prisma, TypeORM, Active Record'],
  ['Testing', 'Jest, JUnit, RSpec'],
]

const experiences = [
  {
    role: 'Senior Full Stack Software Engineer',
    company: 'Estudologia',
    period: 'Aug 2024 – Jan 2026',
    bullets: [
      'Delivered high-quality, robust production code across multiple Ruby and React systems, including academic management platforms used by 10,000+ students and a commercial library management system.',
      'Worked closely with stakeholders and product owners to refine business rules and uncover gaps in proposed workflows to fulfill business requirements.',
      'Collaborated with designers and creative directors to turn complex workflows into intuitive UI/UX for end users.',
      'Designed and implemented the data models, APIs, and frontend interfaces behind user-facing features.',
      'Built a real-time quiz game with AI-generated questions, helping students learn while competing with each other.',
      'Expanded API test coverage from 50% to 80% by writing unit tests for critical API features.',
    ],
  },
  {
    role: 'Lead Full Stack Software Engineer',
    company: 'Inkluziva',
    period: 'Feb 2024 – Aug 2024',
    bullets: [
      'Worked alongside stakeholders to prototype the company’s Binance trading automation system and define the first version of its trading workflows.',
      'Built and shipped the React frontend and Node.js backend for the trading automation platform.',
      'Automated crypto trading tax reporting, eliminating manual errors and saving 20 hours of work per week.',
      'Identified and remediated 3 critical security vulnerabilities across the platform.',
      'Worked on a crypto trading digital wallet, integrating payment APIs and authentication logic.',
      'Built a feature for creating customizable NFTs in seconds, without requiring users to understand blockchain concepts.',
    ],
  },
  {
    role: 'Mid-Level Full Stack Software Engineer',
    company: 'Incript',
    period: 'Apr 2023 – Jan 2024',
    bullets: [
      'Led the development of the Angular frontend of an educational platform, enabling public-school students to engage with literary content and prepare for Brazil’s college entrance exams.',
      'Built the React frontend of a security devices management system for homes and buildings.',
      'Optimized critical pages, reducing load times from up to 6 seconds to less than 1 second.',
    ],
  },
  {
    role: 'Mid-Level Front-End Software Engineer',
    company: 'OpahIT',
    period: 'Feb 2021 – May 2021',
    bullets: [
      'Modernized the UI and improved mobile responsiveness in Banco Fibra’s Angular web banking app.',
    ],
  },
  {
    role: 'Junior Full Stack Software Engineer',
    company: 'Basis S.A.',
    period: 'Dec 2018 – Sep 2020',
    bullets: [
      'Contributed to new features and resolved bugs across the Java backend and Angular frontend of IBAMA’s nationwide system for managing tree-felling and logging permits in over 10 million hectares of forest.',
    ],
  },
]

async function downloadResumePdf() {
  const resume = document.querySelector<HTMLElement>('.resume-page')

  if (!resume) {
    throw new Error('Resume element was not found.')
  }

  document.body.classList.add('pdf-exporting')

  await new Promise((resolve) => window.requestAnimationFrame(resolve))

  const canvas = await html2canvas(resume, {
    backgroundColor: '#ffffff',
    scale: 2,
    useCORS: true,
    windowWidth: resume.scrollWidth,
    windowHeight: resume.scrollHeight,
  })

  const imageData = canvas.toDataURL('image/jpeg', 0.98)
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'in',
    format: 'letter',
    compress: true,
  })

  pdf.addImage(imageData, 'JPEG', 0, 0, 8.5, 11)
  pdf.save('MauricioAzevedo_Resume.pdf')

  document.body.classList.remove('pdf-exporting')
}

function App() {
  const [isDownloading, setIsDownloading] = useState(false)

  async function handleDownloadPdf() {
    try {
      setIsDownloading(true)
      await downloadResumePdf()
    } finally {
      document.body.classList.remove('pdf-exporting')
      setIsDownloading(false)
    }
  }

  return (
    <main className="resume-shell">
      <div className="toolbar" aria-label="Resume actions">
        <button
          type="button"
          className="download-button"
          onClick={handleDownloadPdf}
          disabled={isDownloading}
        >
          {isDownloading ? 'Gerando PDF...' : 'Baixar PDF'}
        </button>
      </div>

      <article className="resume-page" aria-label="Maurício Azevedo resume">
        <header className="resume-header">
          <div className="intro">
            <h1>Maurício Azevedo</h1>
            <p className="headline">Senior Full Stack Software Engineer</p>
            <p className="location">Brasília, Brazil — Remote (UTC−3)</p>
          </div>

          <address className="contact-list">
            <a href={emailHref}>mauricio.mendonca.azevedo@gmail.com</a>
            <a href="tel:+5561999997353">+55 61 99999-7353</a>
            <a href="https://mauricioazevedo.vercel.app/" target="_blank" rel="noreferrer">
              mauricioazevedo.vercel.app
            </a>
            <a href="https://github.com/mauricio-azevedo" target="_blank" rel="noreferrer">
              github.com/mauricio-azevedo
            </a>
            <a href="https://www.linkedin.com/in/mauricio-azevedo/" target="_blank" rel="noreferrer">
              linkedin.com/in/mauricio-azevedo
            </a>
          </address>
        </header>

        <div className="resume-layout">
          <section className="main-column">
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
          </section>

          <aside className="side-column">
            <section className="resume-section skills-section">
              <h2>Technical Skills</h2>
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
                <h3>Skill-Based Doubles Matchmaker</h3>
                <p className="project-links">
                  <a
                    href="https://github.com/mauricio-azevedo/skill-based-matchmaker-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>{' '}
                  <span>|</span>{' '}
                  <a href="http://playbeach.vercel.app" target="_blank" rel="noreferrer">
                    Live
                  </a>
                </p>
                <p className="project-tech">React, TypeScript, Tailwind CSS (Shadcn/ui)</p>
                <ul>
                  <li>Mobile-first web app for scheduling doubles matches with skill-based balancing and court management.</li>
                </ul>
              </article>
            </section>

            <section className="resume-section compact-section">
              <h2>Languages</h2>
              <p>
                <strong>English:</strong> professional working proficiency
              </p>
              <p>
                <strong>Portuguese:</strong> native
              </p>
            </section>

            <section className="resume-section education-section">
              <h2>Education</h2>
              <article className="side-item">
                <h3>Centro Universitário do Distrito Federal (UDF)</h3>
                <p>Systems Analysis and Development</p>
                <p>2018 – 2023</p>
              </article>
            </section>
          </aside>
        </div>
      </article>
    </main>
  )
}

export default App
