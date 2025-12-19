function renderProjects() {
    const container = document.getElementById("projects-container");
    if (!container) return;

    container.innerHTML = projects.map(card => `
        <div class="card">
            ${card.image ? `<img src="${card.image}" alt="${card.title}" class="card-img">` : `<i class="${card.icon} fa-2x"></i>`}
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            ${card.link ? `<a href="${card.link}" target="_blank" class="link-btn">
                <i class="${card.linkIcon}"></i> ${card.linkText}</a>` : ""}
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", renderProjects);