const projects = [
  {
    title: "Growth Strategy & Expansion Plan — Pho & Roll",
    description:
      "Led the market analysis, customer insight, and demand forecasting behind a business plan that secured ~$220K in expansion funding for a second location. Coordinated across operations, finance, and marketing to build the financial model and pitch deck.",
    tech: ["Business Planning", "Demand Forecasting", "Customer Insight", "Excel", "Financial Modelling"],
    liveUrl: "https://dailyhive.com/vancouver/pho-and-roll-vancouver",
    liveLabel: "Project Coverage",
  },
  {
    title: "Corporate Booking Campaign & Media Partnerships",
    description:
      "Designed, sold, and executed a corporate booking campaign using paid editorial placements (Daily Hive, Vancouver Magazine) and social media influencer partnerships. Generated $10K in revenue on $6.5K of spend (1.54x ROAS). Managed cross-functional coordination between media partners, operations, and front-of-house teams.",
    tech: ["Campaign Strategy", "Media Partnerships", "Influencer Marketing", "ROAS", "Paid Media"],
    liveUrl: "https://vanmag.com/taste/restaurants/this-modern-vietnamese-restaurant-wants-to-be-your-next-favourite",
    liveLabel: "Media Coverage",
    extraLinks: [
      {
        href: "https://www.instagram.com/p/DKWTr_2RJw2/",
        label: "Influencer Post 1",
      },
      {
        href: "https://www.instagram.com/p/C-4QSmOR43-/",
        label: "Influencer Post 2",
      },
    ],
  },
  {
    title: "Catering & Event Sales — Pipeline Management",
    description:
      "Managed the full inbound catering and event sales pipeline end-to-end, closing two summer 2025 weddings worth $10K. Responsibilities included agenda-setting, follow-up cadences, stakeholder coordination across vendors and venue partners, and contract execution.",
    tech: ["Account Management", "Sales Pipeline", "Stakeholder Coordination", "Event Planning"],
    liveUrl: "https://www.instagram.com/p/DLd0SuDReFr/?img_index=1",
    liveLabel: "Event Example",
  },
  {
    title: "Consumer Insight & Brand Positioning — Beats by Dre",
    description:
      "Turned customer feedback into structured pain points, comparative themes, and actionable brand positioning recommendations delivered to Beats by Dre leadership. Built an AI-powered dashboard (OpenAI, Perplexity, Replit) to segment survey data and surface consumer insights — translating raw data into a clear selling story for the brand team.",
    tech: ["Consumer Insight", "Brand Positioning", "Market Research", "Dashboard Design", "AI Tools"],
    liveUrl: "pain-points-dashboard.png",
    liveLabel: "Insight Dashboard",
  },
  {
    title: "Business Performance Reporting & Cost Forecasting — Sunrise Soya Foods",
    description:
      "Built KPI dashboards, forecasting workflows, and an Excel-based electricity cost model for a multi-facility food manufacturer. Developed a regression-based (OLS) utilities forecasting model in Python across 3 facilities, reducing the gap between predicted and actual utility costs by 2%. Automated manual Excel reporting, saving 5+ hours per accrual cycle. Coordinated with finance and operations teams to clean and integrate 3M+ records across ERP and production systems.",
    tech: ["Performance Reporting", "Forecasting", "KPI Dashboards", "Excel Automation", "Python (OLS)"],
    liveUrl: "powell_2026_analysis_electricity_729.pdf",
    liveLabel: "Cost Driver Deck",
    extraLinks: [
      {
        href: "729 Powell Electricity Forecast.xlsx",
        label: "Automated Excel Model",
      },
    ],
  },
];

function renderProjects() {
  const list = document.querySelector("#project-list");
  if (!list) return;

  list.innerHTML = projects
    .map(
      (project) => {
        const primaryLabel = project.liveLabel || "Case Material";
        const primaryLink = project.liveUrl
          ? `<a href="${project.liveUrl}" target="_blank" rel="noreferrer">${primaryLabel}</a>`
          : "";
        const extraLinks = (project.extraLinks || [])
          .map(
            (link) =>
              `<a href="${link.href}" target="_blank" rel="noreferrer">${link.label}</a>`
          )
          .join("");
        return `<li class="project-card">
          <div class="project-header">
            <h3>${project.title}</h3>
          </div>
          <p>${project.description}</p>
          <div class="tech-tags">
            ${project.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
          <div class="project-links">
            ${primaryLink}
            ${extraLinks}
          </div>
        </li>`;
      }
    )
    .join("");
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < windowHeight - 80) {
      el.classList.add("visible");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setYear();
  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll, { passive: true });
});
