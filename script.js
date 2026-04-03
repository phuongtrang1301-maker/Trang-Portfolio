const projects = [
  {
    title: "Growth and Operations Strategy for Pho & Roll",
    description:
      "Combined customer insight, business analysis, and operational data to support expansion planning, improve internal workflows, and create clearer visibility across sales, labour, and customer performance.",
    tech: ["Growth Strategy", "Operations Analysis", "Customer Insight", "Excel"],
    liveUrl: "https://dailyhive.com/vancouver/pho-and-roll-vancouver",
    liveLabel: "Project Coverage",
  },
  {
    title: "Media and Influencer Marketing Campaigns",
    description:
      "Supported editorial placements and creator partnerships to build awareness for Pho & Roll, using third-party credibility and social content to strengthen brand visibility and attract new audiences.",
    tech: ["Media Partnerships", "Influencer Marketing", "Brand Awareness"],
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
    title: "Event Coordination and Brand Experience",
    description:
      "Supported event coordination and guest-facing execution for Pho & Roll, shaping the in-person experience so the brand felt polished, memorable, and aligned with corporate and group dining positioning.",
    tech: ["Event Coordination", "Brand Experience", "Guest Experience", "Execution"],
    liveUrl: "https://www.instagram.com/p/DLd0SuDReFr/?img_index=1",
    liveLabel: "Event Example",
  },
  {
    title: "Business Performance Reporting at Sunrise Soya Foods",
    description:
      "Built KPI dashboards and forecasting workflows using large operational datasets to improve reporting visibility, support planning decisions, and reduce manual work across finance operations.",
    tech: ["Performance Reporting", "Forecasting", "KPI Dashboards", "Regression Analysis", "Process Improvement"],
    liveUrl: "",
  },
  {
    title: "729 Powell Electricity Cost Automation and Driver Analysis",
    description:
      "Built an Excel-based model that automated electricity cost calculations from production inputs for the 729 Powell site, then translated the results into a presentation that explained the main cost drivers and supported operational decision-making.",
    tech: ["Excel Automation", "Cost Analysis", "Production Planning", "PowerPoint"],
    liveUrl: "powell_2026_analysis_electricity_729.pdf",
    liveLabel: "Cost Driver Deck",
    extraLinks: [
      {
        href: "729 Powell Electricity Forecast.xlsx",
        label: "Automated Excel Model",
      },
    ],
  },
  {
    title: "Customer Insight and Brand Positioning for Beats by Dre",
    description:
      "Turned customer feedback into structured pain points, comparative themes, and positioning opportunities through market research and dashboard-based analysis.",
    tech: ["Consumer Insight", "Brand Positioning", "Perplexity", "Dashboard Design"],
    liveUrl: "pain-points-dashboard.png",
    liveLabel: "Insight Dashboard",
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
