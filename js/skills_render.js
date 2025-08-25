/** skills_render.js */
function renderSkills() {
    const container = document.getElementById("skills-container");
    container.innerHTML = skills.map(skillGroup => `
        <div class="skill-card">
            <h3>${skillGroup.category}</h3>
            <ul>
                ${skillGroup.items.map(item => `
                <li>
                    ${item.icon ? `<i class="${item.icon} bullet-icon"></i>` : ""}
                    ${item.svg ? `<img src="${item.svg}" class="bullet-svg">` : ""}
                    ${item.emoji ? `<span class="bullet-emoji">${item.emoji}</span>` : ""}
                    ${item.text}
                </li>
                `).join("")}
            </ul>
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", renderSkills);
