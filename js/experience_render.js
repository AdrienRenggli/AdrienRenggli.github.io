function renderExperience() {
    const container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = experience.map(entry => `
        <div class="timeline-entry">
            <div class="timeline-icon"><i class="${entry.icon}"></i></div>
            <div class="timeline-content">
            <h3>${entry.enterprise}</h3>
            <p><strong>${entry.time} | ${entry.place}</strong></p>
            <ul class="icon-list">
                ${entry.jobs.map(j => `<li>${j}</li>`).join("")}
            </ul>
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", () => {
    renderExperience();
    document.querySelectorAll(".timeline-entry").forEach((el, i) => {
        setTimeout(() => {
            el.classList.add("appear");
        }, i * 200);
    });
});