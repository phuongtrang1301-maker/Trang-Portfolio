const projects = [
  {
    title: "Growth Strategy and Expansion Plan for Pho & Roll",
    description:
      "Led the market analysis, customer insight, and demand forecasting behind a business plan that secured roughly $220K in expansion funding for a second location, and built the reporting that gave clearer visibility across sales, labour, and customer performance.",
    tech: ["Business Planning", "Demand Forecasting", "Customer Insight", "Excel"],
    liveUrl: "https://dailyhive.com/vancouver/pho-and-roll-vancouver",
    liveLabel: "Project Coverage",
  },
  {
    title: "Corporate Booking Campaign and Media Partnerships",
    description:
      "Designed and sold a corporate booking campaign for Pho & Roll using paid editorial in Daily Hive and Vancouver Magazine plus creator partnerships, generating $10K in revenue on $6.5K of spend (1.54x ROAS) and building credibility with new corporate and group audiences.",
    tech: ["Campaign Strategy", "Media Partnerships", "Influencer Marketing", "ROAS"],
    liveUrl: "https://vanmag.com/taste/restaurants/this-modern-vietnamese-restaurant-is-perfect-for-your-next-corporate-event/",
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
    title: "Catering and Event Sales",
    description:
      "Managed the inbound catering and event sales pipeline end to end, closing two summer 2025 weddings worth $10K through agenda-setting, follow-ups, and stakeholder coordination, while shaping a guest experience aligned with the brand's corporate and group-dining positioning.",
    tech: ["Account Management", "Sales Pipeline", "Stakeholder Coordination", "Event Execution"],
    liveUrl: "https://www.instagram.com/p/DLd0SuDReFr/?img_index=1",
    liveLabel: "Event Example",
  },
  {
    title: "Customer Insight and Brand Positioning for Beats by Dre",
    description:
      "Turned customer feedback into structured pain points, comparative themes, and positioning opportunities through market research and dashboard-based analysis, and delivered brand positioning recommendations to Beats by Dre leadership.",
    tech: ["Consumer Insight", "Brand Positioning", "Market Research", "Dashboard Design"],
    liveUrl: "pain-points-dashboard.png",
    liveLabel: "Insight Dashboard",
  },
  {
    title: "Business Performance Reporting and Cost Automation at Sunrise Soya Foods",
    description:
      "Built KPI dashboards, forecasting workflows, and an Excel-based electricity cost model from large operational datasets at Sunrise Soya Foods, a consumer goods manufacturer. I automated cost calculations from production inputs for one site and translated the results into a presentation that explained the main cost drivers and supported operational decisions.",
    tech: ["Performance Reporting", "Forecasting", "KPI Dashboards", "Excel Automation", "Cost Analysis"],
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
        const links = primaryLink || extraLinks ? `
        <div class="project-links">
          ${primaryLink}
          ${extraLinks}
        </div>` : "";

        return `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${links}
      </article>
    `;
      }
    )
    .join("");
}

function setYear() {
  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function setupReveal() {
  const sections = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section, index) => {
    section.style.transitionDelay = `${index * 90}ms`;
    observer.observe(section);
  });
}

renderProjects();
setYear();
setupReveal();
