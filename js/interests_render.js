function renderInterests() {
    const container = document.getElementById("interests-container");
    if (!container) return;

    container.innerHTML = interests.map(card => `
        <div class="card">
            ${card.icon ? `<i class="${card.icon} fa-2x"></i>` : 
            `<img src="${card.src}" alt="${card.alt}" class="card-img"></img>`}
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join("");
}
document.addEventListener("DOMContentLoaded", renderInterests);