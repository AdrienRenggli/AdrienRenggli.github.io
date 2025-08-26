function renderEducation() {
    const container = document.getElementById("education-container");
    if (!container) return;

    container.innerHTML = education.map(entry => `
        <div class="timeline-entry">
            <div class="timeline-icon"><i class="${entry.icon}"></i></div>
            <div class="timeline-content">
                <h3>${entry.title}
                    ${entry.badge ? `<span class="badge">${entry.badge}</span>` : ""}
                    ${entry.status ? `<span class="status">${entry.status}</span>` : ""}
                </h3>
                <p><strong>${entry.date}</strong></p>

                ${entry.coursesComputer ? `
                    <h4>Cours en Informatique</h4>
                    <ul class="skill-list">
                        ${entry.coursesComputer.map(c => `<li><i class="${c.icon}"></i>${c.text}</li>`).join("")}
                    </ul>
                ` : ""}

                ${entry.coursesOthers ? `
                    <h4>Cours généraux</h4>
                    <ul class="skill-list">
                        ${entry.coursesOthers.map(c => `<li><i class="${c.icon}"></i>${c.text}</li>`).join("")}
                    </ul>
                ` : ""}

                ${entry.options ? `
                    <h4>Option spécifique</h4>
                    <ul class="skill-list">
                        ${entry.options.map(o => `<li><i class="${o.icon}"></i>${o.text}</li>`).join("")}
                    </ul>
                ` : ""}

                ${entry.maturite ? `
                    <h4>Travail de Maturité</h4>
                    <p>
                        ${entry.maturite}<br>
                        ${entry.youtube ? `<a href="${entry.youtube}" target="_blank" class="yt-link">
                            <i class="fab fa-youtube"></i> Voir sur YouTube
                        </a>` : ""}
                    </p>
                ` : ""}
            </div>
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    renderEducation();
    document.querySelectorAll(".timeline-entry").forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("appear");
        }, i * 200);
    });
});

