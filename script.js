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
      "Supported editorial coverage and creator partnerships to grow awareness for Pho & Roll, using brand storytelling and social-first content to strengthen credibility and attract new audiences.",
    tech: ["Media Partnerships", "Influencer Marketing", "Brand Storytelling"],
    liveUrl: "https://vanmag.com/taste/restaurants/this-modern-vietnamese-restaurant-is-perfect-for-your-next-corporate-event/",
    liveLabel: "Campaign Example",
    extraLinks: [
      {
        href: "https://www.instagram.com/p/DT3gKjEkoz6/",
        label: "Instagram Post",
      },
      {
        href: "https://www.instagram.com/reels/C9yim7FxLLG/",
        label: "Instagram Reel",
      },
    ],
  },
  {
    title: "Consumer Insight Dashboard for Beats by Dre",
    description:
      "Used Perplexity-led market research and AI-assisted analysis to turn product feedback into pain points, comparative themes, and positioning opportunities that support clearer brand decisions.",
    tech: ["Consumer Research", "Market Research", "Perplexity", "Dashboard Design"],
    liveUrl: "pain-points-dashboard.png",
    liveLabel: "Dashboard Image",
  },
  {
    title: "Business Performance Reporting at Sunrise Soya Foods",
    description:
      "Built KPI dashboards and forecasting workflows using large operational datasets to improve reporting visibility, support planning decisions, and reduce manual work across finance operations.",
    tech: ["Performance Reporting", "Forecasting", "KPI Dashboards", "Regression Analysis", "Process Improvement"],
    liveUrl: "",
  },
  {
    title: "Delta Utilities Forecasting and Cost Optimization",
    description:
      "Built an electricity forecasting and cost optimization model for the Delta plant, using production and demand patterns to support planning decisions and identify annual savings opportunities.",
    tech: ["Forecasting", "Cost Optimization", "Operations Analysis", "Excel"],
    liveUrl: "delta-forecast-chart.png",
    liveLabel: "Forecast Chart",
    extraLinks: [
      {
        href: "https://github.com/phuongtrang1301-maker/Trang-Portfolio/blob/main/Electricity_729_Powell_Model_V3.ipynb",
        label: "Model Notebook",
      },
      {
        href: "Delta_Electricity.pptx",
        label: "PowerPoint",
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
