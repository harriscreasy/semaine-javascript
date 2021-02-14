let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let joueur = buttons[i].innerHTML;
        let robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML;
        let resultat = "";

        if (joueur === robot){
            resultat = "Égalité";
        }
        else if (
            (joueur === "Pierre" && robot === "Ciseaux") 
        || // Opérateur logique "Ou"
            (joueur === "Ciseaux" && robot === "Feuilles") 
        || 
            (joueur === "Feuilles") && (robot === "Pierre")
            
                ) 
        
        {
            resultat = "Gagné";
        }

        else
        
        {
            resultat = "Perdu";
        }

        document.querySelector(".resultat").innerHTML = 
        `   Joueur : ${joueur} </br>
            Robot : ${robot} <br/>
            Résultat : ${resultat}
        `  ;
          

    });
}