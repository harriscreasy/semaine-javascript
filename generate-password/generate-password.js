function getPassword(){
    let chars = "0123456789azertyuiopqsdfghjklmwxcvbn?./%£*¨%/§";
    // Stocker les caractères que l'on veut dans le mot de passe
    let passwordLenght = 16;
    // La taille que l'on veut pour le mot de passe
    var password = "";
     // Le mot de passe est vide

    for (let i=0; i<passwordLenght; i++){
         // Tant que la longueur 16 du mot de passe n'est pas atteinte ajouter un caractère
        let randomNumber = Math.floor(Math.random() * chars.length);
        // Ajoute aleatoirement des caractères de la variable chars qui content les caractères
        password += chars.substring(randomNumber, randomNumber+1);
        // Donne à password sa valeur 
        // La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.

    }
    document.getElementById("password").value = password;
}

















