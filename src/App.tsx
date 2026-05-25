import { useState } from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import './App.css'

const emailHref =
  'mailto:mauricio.mendonca.azevedo@gmail.com?subject=Software%20Engineering%20Opportunity%20-%20%3CCompany%3E&body=Hi%20Maur%C3%ADcio%2C%0D%0A%0D%0AI%20saw%20your%20resume%20and%20would%20like%20to%20discuss%20a%20Senior%20Software%20Engineer%20role%20at%20%3CCompany%3E.%20Do%20you%20have%20time%20for%20a%20quick%20call%20this%20week%3F%0D%0A%0D%0AThanks%2C%0D%0A%3CYour%20Name%3E%0D%0A%3CCompany%3E%0D%0A%3CPhone%3E'

const experiences = [
  {
    role: 'Senior Full Stack Software Engineer',
    company: 'Estudologia',
    period: 'Aug 2024 – Jan 2026',
    bullets: [
      'Built the Ruby backend and React frontend for two academic management systems serving 10,000+ low-income students, expanding access to interactive content and boosting engagement.',
      'Built a quiz game feature end to end, from database schema and backend API design to asynchronous question generation with background jobs and the OpenAI API.',
      'Implemented real-time game state updates and notifications using WebSockets.',
      'Implemented Redis-based inter-service communication and queue orchestration for an automated student essay grading pipeline powered by the OpenAI API.',
      'Optimized a critical API used on nearly every screen, reducing response time from 20s to 300ms.',
      'Expanded API test coverage from 50% to 80% by writing unit tests for over 5,000 lines of code across critical API features.',
      'Built a Ruby backend for a full-featured commercial library management system, covering core workflows such as catalog management, member accounts, reservations, and book checkouts and returns.',
    ],
  },
  {
    role: 'Lead Full Stack Software Engineer',
    company: 'Inkluziva',
    period: 'Feb 2024 – Aug 2024',
    bullets: [
      'Led technical delivery as the primary engineer on the team, working closely with stakeholders to shape requirements and define solutions.',
      'Led the development of a React frontend and Node.js backend for an automated trading system on Binance.',
      'Automated the company’s tax reporting for crypto trading, eliminating human error and saving 20 hours of manual work per week.',
      'Remediated 3 critical security vulnerabilities and strengthened platform security controls.',
      'Built the Angular frontend and Node.js backend for a digital wallet used in crypto trading, integrating PIX and credit card payment APIs and implementing cookie-based JWT authentication with refresh token flows.',
      'Developed a feature for creating fully customizable NFTs in seconds, with no blockchain knowledge required.',
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
          <div className="identity">
            <h1>
              Maurício Azevedo <span>Senior Full Stack Software Engineer</span>
            </h1>
            <p className="contact-line">
              <a href={emailHref}>mauricio.mendonca.azevedo@gmail.com</a>
              <span>|</span>
              <a href="tel:+5561999997353">+55 61 99999-7353</a>
              <span>|</span>
              <a href="https://github.com/mauricio-azevedo" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <span>|</span>
              <a href="https://www.linkedin.com/in/mauricio-azevedo/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
          <p className="location">Brasília, Brazil — Remote (UTC−3)</p>
        </header>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <p className="skills-line">
            <strong>Languages:</strong> TypeScript, JavaScript, Java, Ruby <span>|</span>{' '}
            <strong>Frontend:</strong> React, Angular, Tailwind CSS <span>|</span>{' '}
            <strong>Backend:</strong> Node.js, NestJS, Express, Spring Boot, Ruby on Rails <span>|</span>{' '}
            <strong>Databases:</strong> PostgreSQL, Oracle, Redis <span>|</span>{' '}
            <strong>Cloud &amp; DevOps:</strong> AWS, Docker, GitHub Actions <span>|</span>{' '}
            <strong>ORM/Data Access:</strong> Prisma, TypeORM, Active Record <span>|</span>{' '}
            <strong>Testing:</strong> Jest, JUnit, RSpec
          </p>
        </section>

        <section className="resume-section experience-section">
          <h2>Professional Experience</h2>
          {experiences.map((experience) => (
            <article className="experience" key={`${experience.role}-${experience.company}`}>
              <div className="item-heading">
                <p>
                  <strong>{experience.role}</strong> at <em>{experience.company}</em>
                </p>
                <strong>{experience.period}</strong>
              </div>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="resume-section projects-section">
          <h2>Selected Projects</h2>
          <div className="item-heading project-heading">
            <p>
              <strong>Skill-Based Doubles Matchmaker</strong> —{' '}
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
            <strong>React, TypeScript, Tailwind CSS (Shadcn/ui)</strong>
          </div>
          <ul>
            <li>Mobile-first web app for scheduling doubles matches with skill-based balancing and court management.</li>
          </ul>
        </section>

        <section className="resume-section compact-section">
          <h2>Languages</h2>
          <p>
            <strong>English:</strong> professional working proficiency <span>|</span>{' '}
            <strong>Portuguese:</strong> native
          </p>
        </section>

        <section className="resume-section compact-section education-section">
          <h2>Education</h2>
          <div className="item-heading">
            <p>
              <strong>Centro Universitário do Distrito Federal (UDF)</strong> — Systems Analysis and Development
            </p>
            <strong>2018 – 2023</strong>
          </div>
        </section>
      </article>
    </main>
  )
}

export default App
