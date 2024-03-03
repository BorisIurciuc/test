document.addEventListener("DOMContentLoaded", function() {
    const headElement = document.querySelector("h2");
    const boxElement = document.querySelector(".box");
    const btnElement1 = document.getElementById("btn-1");
    
    let btnElement2 = document.createElement("button");
    let btnElement3 = document.createElement("button");
    const main = document.querySelector("main");
    const imageElement = document.createElement("img");
    
    btnElement2.id = "btn-2";
    btnElement3.id = "btn-3";
    
    imageElement.id = "img-1";
    
let toggle = true;
btnElement1.addEventListener("click", () => {
    if(toggle){
        btnElement2.type = "button";
        btnElement2.textContent = "Click 2";
        boxElement.appendChild(btnElement2);

        btnElement3.type = "button";
        btnElement3.textContent = "Click 3";
        boxElement.appendChild(btnElement3);
    } else {
        boxElement.removeChild(btnElement2);
        boxElement.removeChild(btnElement3);
    }
    toggle = !toggle

});

toggle = true;
btnElement2.addEventListener("click", () => {
    if (toggle) {
        boxElement.style.backgroundColor = "rgb(200, 244, 200)";
    } else {
        boxElement.style.backgroundColor = "lightblue";
    }
    toggle = !toggle; 
});

toggle = true;
btnElement3.addEventListener("click", () => {
    if(toggle){
        imageElement.src = "https://imgsrv2.voi.id/Gz6oNQEqxfkrLn1Y1wN7CSmjOxwWyLhM-Je9oE4-nqs/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xMzAzODQvMjAyMjAyMDIxMjQ2LW1haW4uY3JvcHBlZF8xNjQzNzgwODEzLkpQRw.jpg";
        imageElement.style.width = "350px";
        main.appendChild(imageElement);
    } else {
        main.removeChild(imageElement);
    }
    toggle = !toggle;
});

});
