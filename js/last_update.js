/** last_update.js */
// Get the date of the last commit for the last update
fetch('https://api.github.com/repos/AdrienRenggli/AdrienRenggli.github.io/commits?per_page=1')
    .then(response => response.json())
    .then(data => {
        const commitDate = new Date(data[0].commit.committer.date);
        const formattedDate = commitDate.toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
        });
    document.getElementById('last-updated').textContent = `Dernière mise à jour : ${formattedDate}`;
})
.catch(error => {
    console.error('Erreur lors de la récupération de la date du dernier commit :', error);
    document.getElementById('last-updated').textContent = "Impossible de récupérer la date de mise à jour.";
});
