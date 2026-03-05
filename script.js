const projects = [
  {
    title: "Delta Plant Electricity Forecast Model (2026)",
    description:
      "Built a production-driven electricity cost model with seasonality and lag factors; January forecast was within ~2% of predicted bill variance.",
    tech: ["Forecast Modeling", "Variance Analysis", "Excel", "Operations Data"],
    liveUrl: "Delta_Electricity.pptx",
    githubUrl: "TRANG_HOANG_0226.pdf",
  },
  {
    title: "Cost Optimization Strategy (Delta Utilities)",
    description:
      "Identified annual savings levers through energy-intensity and peak-demand controls, with estimated impact ranges of $9K-$15K and $8K-$12K per year.",
    tech: ["Cost Modeling", "Demand Analysis", "Scenario Planning"],
    liveUrl: "Delta_Electricity.pptx",
    githubUrl: "TRANG_HOANG_0226.pdf",
  },
  {
    title: "Finance Operations KPI System (Sunrise Soya Foods)",
    description:
      "Analyzed 3M+ data points and built KPI reporting workflows that reduced monthly manual reporting by 5 hours while improving management visibility.",
    tech: ["Python", "Excel", "Business Central", "KPI Dashboards"],
    liveUrl: "TRANG_HOANG_0226.pdf",
    githubUrl: "TRANG_HOANG_0226.pdf",
  },
  {
    title: "Predictive Budget Forecasting",
    description:
      "Developed forecasting models for operations and cost projections that improved budget accuracy by 13% and supported planning decisions affecting ~$2M.",
    tech: ["Python", "Forecasting", "Financial Planning", "Variance Tracking"],
    liveUrl: "TRANG_HOANG_0226.pdf",
    githubUrl: "TRANG_HOANG_0226.pdf",
  },
];

function renderProjects() {
  const list = document.querySelector("#project-list");
  if (!list) return;

  list.innerHTML = projects
    .map(
      (project) => `
      <article class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.tech.map((item) => `<span>${item}</span>`).join("")}
        </div>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank" rel="noreferrer">Case Material</a>
          <a href="${project.githubUrl}" target="_blank" rel="noreferrer">Resume Context</a>
        </div>
      </article>
    `
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
