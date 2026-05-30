import { useState } from "react";
import "./App.css";

type Language = "en" | "pt";

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
  stack?: string;
};

type SkillGroup = {
  label: string;
  value: string;
};

type ResumeContent = {
  downloadLabel: string;
  headline: string;
  contacts: ContactItem[];
  summary: string;
  experienceTitle: string;
  experiences: Experience[];
  skillsTitle: string;
  skills: SkillGroup[];
  projectTitle: string;
  projectName: string;
  projectStack: string;
  projectLiveLabel: string;
  projectRepoLabel: string;
  projectBullets: string[];
  educationLanguagesTitle: string;
  educationLanguages: {
    school: string;
    degree: string;
    englishLabel: string;
    english: string;
    portugueseLabel: string;
    portuguese: string;
  };
};

const sharedLinks = {
  email: "mailto:mauricio.mendonca.azevedo@gmail.com",
  whatsapp: "https://wa.me/5561999997353",
  github: "https://github.com/mauricio-azevedo",
  linkedin: "https://www.linkedin.com/in/mauricio-azevedo",
  portfolio: "https://mauricioazevedo.com",
  beachRankLive: "https://beachrank-eight.vercel.app",
  beachRankRepo: "https://github.com/mauricio-azevedo/beachrank",
};

const resumeContent: Record<Language, ResumeContent> = {
  en: {
    downloadLabel: "Download PDF",
    headline: "Senior Software Engineer — Full Stack & Product Engineering",
    contacts: [
      { label: "Brasília, Brazil" },
      { label: "Remote Worldwide" },
      { href: sharedLinks.email, label: "Email" },
      { href: sharedLinks.whatsapp, label: "WhatsApp", external: true },
      { href: sharedLinks.github, label: "GitHub", external: true },
      { href: sharedLinks.linkedin, label: "LinkedIn", external: true },
      { href: sharedLinks.portfolio, label: "Portfolio", external: true },
    ],
    summary:
      "Senior Software Engineer with 6+ years of experience building production web platforms across education, fintech, crypto, public-sector systems, and AI-enabled products. Strong ownership across frontend, backend, APIs, testing, security, integrations, and product workflows. Proven impact in systems used by 10,000+ users, test coverage expansion, workflow automation, and business-critical product delivery.",
    experienceTitle: "Professional Experience",
    experiences: [
      {
        role: "Senior Full Stack Software Engineer",
        company: "Estudologia",
        stack: "React, Next.js, Ruby on Rails",
        period: "Aug 2024 – Jan 2026",
        bullets: [
          "Delivered production features for an AI-assisted education platform used daily by 10,000+ students and hundreds of teachers across dozens of schools.",
          "Worked on core learning workflows where AI generated assessments, analyzed performance, and helped create personalized teaching plans based on individual results.",
          "Contributed to AI-powered essay review workflows, including production fixes in an essay reading/correction microservice providing automated feedback to students.",
          "Resolved critical production issues across authentication and account-access flows, including login, password reset, and SSO microservices.",
          "Expanded API test coverage from 50% to 80% by adding unit tests around critical backend features and business rules.",
          "Partnered with product owners, stakeholders, designers, and creative directors to turn complex academic workflows into intuitive, reliable product experiences.",
        ],
      },
      {
        role: "Lead Full Stack Software Engineer",
        company: "Inkluziva",
        stack: "React, Node.js, NestJS",
        period: "Feb 2024 – Aug 2024",
        bullets: [
          "Led development of a USDT trading automation platform integrated with Binance API, supporting daily buy/sell operations involving BRL 10M+ with limited supervision.",
          "Owned product and technical execution as the initial sole developer, working directly with the company owner to define trading workflows, operational requirements, and system behavior.",
          "Built and shipped the platform end to end, including trading flows, Binance API integration, banking/payment APIs, business rules, and edge-case handling.",
          "Co-designed and implemented complex financial reconciliation workflows across Binance trading operations and banking/payment APIs, covering payments, statements, transfers, withdrawals, and operational discrepancies.",
          "Automated crypto trading tax reporting, eliminating recurring manual errors and replacing full-day manual reporting work.",
          "Reduced dependency on manual trading operations previously handled by a 3-person team and later mentored a junior developer as the engineering team expanded.",
          "Identified and remediated 3 critical security vulnerabilities across the platform, improving reliability and reducing production risk.",
        ],
      },
      {
        role: "Mid-Level Full Stack Software Engineer",
        company: "Incript",
        stack: "React, Angular, Node.js, NestJS",
        period: "Apr 2023 – Jan 2024",
        bullets: [
          "Re-architected inherited codebases for a crypto digital wallet, improving maintainability with feature-based organization, reusable components, service layers, thin controllers, and repository patterns.",
          "Built production features across wallet workflows, payment API integrations, authentication logic, and user-facing financial operations.",
          "Designed and implemented an end-to-end NFT creation feature from scratch, enabling users to generate customizable NFTs in seconds without blockchain knowledge.",
          "Built the frontend from scratch for an educational platform that adapted classic literary works into comics to help students prepare for Brazilian college entrance exams.",
          "Developed a complex mobile-like continuous web reader and a backoffice interface for managing platform content, working directly with the client to refine requirements, business rules, and design details.",
        ],
      },
      {
        role: "Mid-Level Front-End Software Engineer",
        company: "OpahIT",
        stack: "Angular",
        period: "Feb 2021 – May 2021",
        bullets: [
          "Modernized UI components and improved mobile responsiveness in Banco Fibra’s web banking app, contributing to a more reliable and usable banking experience.",
        ],
      },
      {
        role: "Junior Full Stack Software Engineer",
        company: "Basis S.A.",
        stack: "Angular, Java, Spring Boot",
        period: "Dec 2018 – Sep 2020",
        bullets: [
          "Contributed features, bug fixes, and maintenance to IBAMA’s nationwide environmental licensing system for tree-felling and logging permits across millions of hectares.",
        ],
      },
    ],
    skillsTitle: "Technical Skills",
    skills: [
      { label: "Languages", value: "TypeScript, JavaScript, Java, Ruby" },
      {
        label: "Frontend",
        value: "React, Angular, component architecture, complex UI workflows, mobile-first web applications",
      },
      {
        label: "Backend",
        value: "Node.js, NestJS, Express, Spring Boot, Ruby on Rails, REST APIs, authentication, third-party integrations",
      },
      { label: "Data & Infrastructure", value: "PostgreSQL, Oracle, Redis, AWS, Docker" },
      {
        label: "Architecture & Quality",
        value: "modular codebases, service layers, microservices, test automation, CI/CD, production debugging, security remediation",
      },
      { label: "Testing", value: "Jest, JUnit, RSpec" },
    ],
    projectTitle: "Selected Project",
    projectName: "BeachRank — Mobile-first sports ranking platform",
    projectStack: "Next.js, NestJS, PostgreSQL, Prisma",
    projectLiveLabel: "Live",
    projectRepoLabel: "Repo",
    projectBullets: [
      "Built a full-stack product that turns casual beach tennis matches into group rankings, player ratings, match history, profiles, invites, and a lightweight social feed.",
      "Designed a score-aware Elo-inspired rating engine for doubles matches, with group-scoped ratings, rating snapshots, append-only fast-path updates, and full historical recalculation for edits, deletes, and retroactive matches.",
      "Modeled a persisted event feed for meaningful competitive moments, with visibility rules, event lifecycle handling, and transactionally synced domain events for close matches, blowouts, and group activity.",
      "Structured the monorepo around product/domain features, with backend-owned business logic, typed domain models, feature-based frontend architecture, ADR-style documentation, and clear separation between UI, API, domain, and persistence concerns.",
    ],
    educationLanguagesTitle: "Education & Languages",
    educationLanguages: {
      school: "UDF",
      degree: "Systems Analysis and Development",
      englishLabel: "English",
      english: "C1",
      portugueseLabel: "Portuguese",
      portuguese: "Native",
    },
  },
  pt: {
    downloadLabel: "Baixar PDF",
    headline: "Engenheiro de Software Sênior — Full Stack & Engenharia de Produto",
    contacts: [
      { label: "Brasília, Brasil" },
      { label: "Remoto global" },
      { href: sharedLinks.email, label: "Email" },
      { href: sharedLinks.whatsapp, label: "WhatsApp", external: true },
      { href: sharedLinks.github, label: "GitHub", external: true },
      { href: sharedLinks.linkedin, label: "LinkedIn", external: true },
      { href: sharedLinks.portfolio, label: "Portfólio", external: true },
    ],
    summary:
      "Engenheiro de Software Sênior com 6+ anos de experiência construindo plataformas web em produção nos setores de educação, fintech, cripto, setor público e produtos com IA. Forte ownership em frontend, backend, APIs, testes, segurança, integrações e fluxos de produto. Impacto comprovado em sistemas usados por 10.000+ usuários, expansão de cobertura de testes, automação de workflows e entregas críticas para o negócio.",
    experienceTitle: "Experiência Profissional",
    experiences: [
      {
        role: "Engenheiro de Software Full Stack Sênior",
        company: "Estudologia",
        period: "ago 2024 – jan 2026",
        bullets: [
          "Entreguei features em produção em sistemas Ruby e React que sustentavam uma plataforma educacional assistida por IA usada diariamente por 10.000+ alunos e centenas de professores em dezenas de escolas.",
          "Trabalhei em fluxos centrais de aprendizagem nos quais IA gerava avaliações, analisava desempenho dos alunos e ajudava a criar planos de ensino personalizados com base nos resultados individuais.",
          "Contribuí para fluxos de correção de redação com IA, incluindo correções em produção em um microserviço dedicado de leitura e correção que fornecia feedback automatizado aos alunos.",
          "Resolvi problemas críticos de produção em fluxos de autenticação e acesso à conta, incluindo login, troca de senha e microserviços de SSO.",
          "Expandi a cobertura de testes de API de 50% para 80% adicionando testes unitários em features críticas de backend e regras de negócio.",
          "Trabalhei com product owners, stakeholders, designers e diretores criativos para transformar fluxos acadêmicos complexos em experiências intuitivas e confiáveis.",
        ],
      },
      {
        role: "Engenheiro de Software Full Stack Líder",
        company: "Inkluziva",
        period: "fev 2024 – ago 2024",
        bullets: [
          "Liderei o desenvolvimento de uma plataforma de automação de compra e venda de USDT integrada à API da Binance, suportando operações diárias envolvendo BRL 10M+ com supervisão manual limitada.",
          "Assumi a execução técnica e de produto como dev inicial único, trabalhando diretamente com o dono da empresa para definir fluxos de trading, requisitos operacionais e comportamento do sistema.",
          "Construí e entreguei o frontend React e backend Node.js da plataforma, incluindo fluxos de trading, integração com Binance, APIs bancárias/de pagamento, regras de negócio e tratamento de edge cases.",
          "Co-desenhei e implementei fluxos complexos de conciliação financeira entre operações na Binance e APIs bancárias/de pagamento, cobrindo pagamentos, extratos, transferências, saques e divergências operacionais.",
          "Automatizei o tax reporting de operações cripto, eliminando erros manuais recorrentes e substituindo trabalho manual de dia inteiro.",
          "Reduzi a dependência de operações manuais de trading antes conduzidas por uma equipe de 3 pessoas e depois mentorei um desenvolvedor júnior conforme o time de engenharia cresceu.",
          "Identifiquei e corrigi 3 vulnerabilidades críticas de segurança na plataforma, melhorando confiabilidade e reduzindo risco em produção.",
        ],
      },
      {
        role: "Engenheiro de Software Full Stack Pleno",
        company: "Incript",
        period: "abr 2023 – jan 2024",
        bullets: [
          "Rearquitetei codebases herdadas em React e Node.js de uma carteira digital cripto, melhorando manutenibilidade com organização por feature, componentes reutilizáveis, services, controllers enxutos e repositories.",
          "Construí features em produção para fluxos de wallet, integrações com APIs de pagamento, lógica de autenticação e operações financeiras voltadas ao usuário.",
          "Projetei e implementei do zero uma feature end-to-end de criação de NFT, permitindo gerar NFTs customizáveis em segundos sem exigir conhecimento de blockchain.",
          "Construí do zero o frontend de uma plataforma educacional que adaptava obras literárias clássicas para quadrinhos e ajudava estudantes a se prepararem para vestibulares brasileiros.",
          "Desenvolvi um leitor web contínuo e arrastável com comportamento mobile-like e um backoffice para gerenciar conteúdos, trabalhando diretamente com o cliente para refinar requisitos, regras de negócio e design.",
        ],
      },
      {
        role: "Engenheiro de Software Front-End Pleno",
        company: "OpahIT",
        period: "fev 2021 – mai 2021",
        bullets: [
          "Modernizei componentes de UI e melhorei a responsividade mobile no web banking Angular do Banco Fibra, contribuindo para uma experiência bancária digital mais confiável e usável.",
        ],
      },
      {
        role: "Engenheiro de Software Full Stack Júnior",
        company: "Basis S.A.",
        period: "dez 2018 – set 2020",
        bullets: [
          "Contribuí com features, correções de bugs e manutenção em Java e Angular no sistema nacional do IBAMA para gestão de autorizações de supressão vegetal e exploração florestal em milhões de hectares de floresta.",
        ],
      },
    ],
    skillsTitle: "Competências Técnicas",
    skills: [
      { label: "Linguagens", value: "TypeScript, JavaScript, Java, Ruby" },
      {
        label: "Frontend",
        value: "React, Angular, arquitetura de componentes, fluxos complexos de UI, aplicações web mobile-first",
      },
      {
        label: "Backend",
        value: "Node.js, NestJS, Express, Spring Boot, Ruby on Rails, REST APIs, autenticação, integrações de terceiros",
      },
      { label: "Dados & Infraestrutura", value: "PostgreSQL, Oracle, Redis, AWS, Docker" },
      {
        label: "Arquitetura & Qualidade",
        value: "codebases modulares, service layers, microserviços, automação de testes, CI/CD, debugging em produção, correções de segurança",
      },
      { label: "Testes", value: "Jest, JUnit, RSpec" },
    ],
    projectTitle: "Projeto Selecionado",
    projectName: "BeachRank — Plataforma mobile-first de ranking esportivo",
    projectStack: "Next.js, NestJS, PostgreSQL, Prisma",
    projectLiveLabel: "Live",
    projectRepoLabel: "Repo",
    projectBullets: [
      "Construí um produto full-stack que transforma partidas casuais de beach tennis em rankings de grupos, ratings de jogadores, histórico de partidas, perfis, convites e um feed social leve.",
      "Projetei um motor de rating inspirado em Elo e sensível ao placar para partidas de duplas, com ratings por grupo, snapshots históricos, fast-path append-only e recálculo histórico completo para edições, exclusões e partidas retroativas.",
      "Modelei um feed de eventos persistidos para momentos competitivos relevantes, com regras de visibilidade, lifecycle de eventos e eventos de domínio sincronizados transacionalmente para jogos apertados, atropelos e atividade de grupos.",
      "Estruturei o monorepo em torno de features e domínios de produto, com regras de negócio no backend, modelos tipados, frontend organizado por feature, documentação em estilo ADR e separação clara entre UI, API, domínio e persistência.",
    ],
    educationLanguagesTitle: "Formação & Idiomas",
    educationLanguages: {
      school: "UDF",
      degree: "Análise e Desenvolvimento de Sistemas",
      englishLabel: "Inglês",
      english: "C1",
      portugueseLabel: "Português",
      portuguese: "Nativo",
    },
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");
  const content = resumeContent[language];

  return (
    <main className="resume-shell">
      <div className="toolbar" aria-label="Resume actions">
        <div className="language-toggle" aria-label="Select resume language">
          <button
            type="button"
            className={`language-button ${language === "en" ? "is-active" : ""}`}
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`language-button ${language === "pt" ? "is-active" : ""}`}
            onClick={() => setLanguage("pt")}
          >
            PT
          </button>
        </div>

        <button type="button" className="download-button" onClick={() => window.print()}>
          {content.downloadLabel}
        </button>
      </div>

      <article className="resume-page" aria-label="Maurício Azevedo resume">
        <header className="resume-header">
          <h1>Maurício Azevedo</h1>
          <p className="headline">{content.headline}</p>
          <address className="contact-list">
            {content.contacts.map((item, index) => (
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
                {index < content.contacts.length - 1 ? <span className="contact-separator">·</span> : null}
              </span>
            ))}
          </address>
        </header>

        <section className="resume-section summary-section">
          <p>{content.summary}</p>
        </section>

        <section className="resume-section experience-section">
          <h2>{content.experienceTitle}</h2>
          {content.experiences.map((experience) => (
            <article className="experience" key={`${experience.role}-${experience.company}`}>
              <div className="item-heading">
                <p>
                  <strong>{experience.role}</strong>, <em>{experience.company}</em>
                  {experience.stack ? <span className="role-stack"> — {experience.stack}</span> : null}
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
          <h2>{content.skillsTitle}</h2>
          <div className="skill-list">
            {content.skills.map((skill) => (
              <p key={skill.label}>
                <strong>{skill.label}:</strong> {skill.value}
              </p>
            ))}
          </div>
        </section>

        <section className="resume-section project-section">
          <h2>{content.projectTitle}</h2>
          <article className="project">
            <div className="project-heading">
              <h3>
                {content.projectName} ·{" "}
                <a href={sharedLinks.beachRankLive} target="_blank" rel="noreferrer">
                  {content.projectLiveLabel}
                </a>
                {" | "}
                <a href={sharedLinks.beachRankRepo} target="_blank" rel="noreferrer">
                  {content.projectRepoLabel}
                </a>
              </h3>
              <p>{content.projectStack}</p>
            </div>
            <ul>
              {content.projectBullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="resume-section education-languages-section">
          <h2>{content.educationLanguagesTitle}</h2>
          <p>
            <strong>{content.educationLanguages.school}:</strong> {content.educationLanguages.degree} ·{" "}
            <strong>{content.educationLanguages.englishLabel}:</strong> {content.educationLanguages.english} ·{" "}
            <strong>{content.educationLanguages.portugueseLabel}:</strong> {content.educationLanguages.portuguese}
          </p>
        </section>
      </article>
    </main>
  );
}

export default App;
