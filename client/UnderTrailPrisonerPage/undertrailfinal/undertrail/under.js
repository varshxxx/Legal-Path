var tab1=document.getElementById("major-main-tab");
var tab2=document.getElementById("bailable-tab");
var tab3=document.getElementById("non-bailable-tab")

tab1.addEventListener("click", ()=>{
    tab1.style.backgroundColor="rgba(155, 6, 32, 0.9)";
    tab1.style.color="white";
    tab2.style.backgroundColor="white";
    tab2.style.color="rgba(155, 6, 32, 0.9)"
    tab3.style.backgroundColor="white";
    tab3.style.color="rgba(155, 6, 32, 0.9)"


})
tab2.addEventListener("click", ()=>{
    tab2.style.backgroundColor="rgba(155, 6, 32, 0.9)";
    tab2.style.color="white";
    tab1.style.backgroundColor="white";
    tab1.style.color="rgba(155, 6, 32, 0.9)"
    tab3.style.backgroundColor="white";
    tab3.style.color="rgba(155, 6, 32, 0.9)"
    
})

tab3.addEventListener("click", ()=>{
    tab3.style.backgroundColor="rgba(155, 6, 32, 0.9)";
    tab3.style.color="white";
    tab1.style.backgroundColor="white";
    tab1.style.color="rgba(155, 6, 32, 0.9)"
    tab2.style.backgroundColor="white";
    tab2.style.color="rgba(155, 6, 32, 0.9)"
    
})

var tab11 = document.getElementById("minor-main-tab");
var tab22 = document.getElementById("regular-bail-tab");
var tab33 = document.getElementById("anticipatory-bail-tab");
var tab44 = document.getElementById("interim-bail-tab");

tab11.addEventListener("click", () => {
    tab11.style.backgroundColor = "rgba(155, 6, 32, 0.9)";
    tab11.style.color = "white";
    tab22.style.backgroundColor = "white";
    tab22.style.color = "rgba(155, 6, 32, 0.9)";
    tab33.style.backgroundColor = "white";
    tab33.style.color = "rgba(155, 6, 32, 0.9)";
    tab44.style.backgroundColor = "white";
    tab44.style.color = "rgba(155, 6, 32, 0.9)";
});

tab22.addEventListener("click", () => {
    tab22.style.backgroundColor = "rgba(155, 6, 32, 0.9)";
    tab22.style.color = "white";
    tab11.style.backgroundColor = "white";
    tab11.style.color = "rgba(155, 6, 32, 0.9)";
    tab33.style.backgroundColor = "white";
    tab33.style.color = "rgba(155, 6, 32, 0.9)";
    tab44.style.backgroundColor = "white";
    tab44.style.color = "rgba(155, 6, 32, 0.9)";
});

tab33.addEventListener("click", () => {
    tab33.style.backgroundColor = "rgba(155, 6, 32, 0.9)";
    tab33.style.color = "white";
    tab11.style.backgroundColor = "white";
    tab11.style.color = "rgba(155, 6, 32, 0.9)";
    tab22.style.backgroundColor = "white";
    tab22.style.color = "rgba(155, 6, 32, 0.9)";
    tab44.style.backgroundColor = "white";
    tab44.style.color = "rgba(155, 6, 32, 0.9)";
});

tab44.addEventListener("click", () => {
    tab44.style.backgroundColor = "rgba(155, 6, 32, 0.9)";
    tab44.style.color = "white";
    tab11.style.backgroundColor = "white";
    tab11.style.color = "rgba(155, 6, 32, 0.9)";
    tab22.style.backgroundColor = "white";
    tab22.style.color = "rgba(155, 6, 32, 0.9)";
    tab33.style.backgroundColor = "white";
    tab33.style.color = "rgba(155, 6, 32, 0.9)";
});


