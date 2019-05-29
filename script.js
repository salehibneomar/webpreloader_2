function preLoader(){
    setTimeout(function(){
       document.getElementById("loading_screen").style.display = "none";
       document.getElementById("whole-content-wrapper").style.display = "block";
    }, 6200);
}
window.addEventListener("load", preLoader); 