function update_text(){

let user_text = document.getElementById("user_text");
let meme_text = document.getElementById("meme_text");

meme_text.innerHTML = user_text.value;

}

function update_image(){

    let img = document.querySelector("img");
    let file = document.querySelector("input[type=file]").files[0];
    img.src = window.URL.createObjectURL(file);

    let dlbtn = document.getElementById("deletebutton");
    
    dlbtn.addEventListener("click", function(e){
        img.src = window.URL.revokeObjectURL(file);
    })
    
    }


  