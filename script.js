


let change = document.querySelector(".linha");

change.addEventListener("click", function() {
    change.textContent = "Voce esta pronto ?";
});

// -----------------------------------------------



let join = document.querySelector(".join");
// let login = document.getElementById("area");

join.addEventListener("click", function() {
    console.log("he")
    document.getElementById("area").classList.toggle("hidden");
   
    
    
})


// document.getElementById("formulario").addEventListener("mouseout", function(){
//     // document.getElementById("area").classList.toggle("hidden");
// })

document.querySelector(".fechar").addEventListener("click", function(){
    document.getElementById("area").classList.toggle("hidden");
})



