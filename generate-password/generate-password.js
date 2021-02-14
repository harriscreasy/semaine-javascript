function getPassword(){ //Début de la fonction
    let chars = "maiwennharris";
    // Stocker les caractères que l'on veut dans le mot de passe
    let passwordLenght = 8;
    // La taille que l'on veut pour le mot de passe
    let password = "";
     // Le mot de passe est vide

    for (let i=0; i<passwordLenght; i++){ //Ouverture de la boucle for
         // Tant que la longueur 16 du mot de passe n'est pas atteinte ajouter un caractère
        let randomNumber = Math.floor(Math.random() * chars.length);
        // Ajoute aleatoirement des caractères de la variable chars qui content les caractères
        password += chars.substring(randomNumber, randomNumber+1);
        // Donne à password sa valeur 
        // La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.

    }
    document.getElementById("password").value = password;
}

















