/**
 * Calcul mon âge en fonction de la date du jour.
 */
function calculateAge() {
    var today = new Date();
    var birthDate = new Date(2004, 3, 2);   // Comme ça ne va jamais changer, NOMBRE MAGIQUE !!!
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("age").innerHTML = age;
}

/**
 * Révèle mon numéro de téléphone sans jamais l'afficher en clair dans le code source.
 * Limiter l'accès aux bots (n'apparaitra jamais dans l'html et est décomposé)
 */
function revealPhone() {
    var tel = ["+41", "79", "179", "03", "13"];
    document.getElementById("phone").innerHTML = tel.join(" ");
    document.getElementById("phoneLink").setAttribute("href", "tel:" + tel.join(""));
}

/**
 * Révèle mon adresse email sans jamais l'afficher en clair dans le code source.
 * Limiter l'accès aux bots (n'apparaitra jamais dans l'html et est décomposé)
 */
function revealEmail() {
    var user = ["adrien", "renggli"];
    var domain = ["gmail", "com"];
    var email = user.join(".") + "@" + domain.join(".");
    document.getElementById("email").innerHTML = email;
    document.getElementById("emailLink").setAttribute("href", "mailto:" + email);
}

calculateAge();
revealPhone();
revealEmail();
