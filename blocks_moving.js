window.onload = ()=>{
    let player = document.querySelector(".player");
    let area = document.querySelector(".area");
    let PositionX = 0;
    let PositionY = 0;
    let step = 1;
    
    let playerWidth = Number(window.getComputedStyle(player).getPropertyValue("width").replace("px",""));
    let areaWidth = Number(window.getComputedStyle(area).getPropertyValue("width").replace("px",""));
    let playerHeight = Number(window.getComputedStyle(player).getPropertyValue("height").replace("px",""));
    let areaHeight = Number(window.getComputedStyle(area).getPropertyValue("height").replace("px",""));

    document.addEventListener("keydown", function(event) {
        if (event.code  === "ArrowLeft" && PositionX > 0) {
            PositionX -= step;
            player.style.left = PositionX + "px";
        } else if (event.code  === "ArrowRight" && PositionX < areaWidth-playerWidth) {
            PositionX += step;
            player.style.left = PositionX + "px";
        } else if (event.code  === "ArrowUp" && PositionY > 0) {
            PositionY -= step;
            player.style.top = PositionY + "px";
        } else if (event.code  === "ArrowDown" && PositionY < areaHeight-playerHeight) {
            PositionY += step;
            player.style.top = PositionY + "px";
        }
    });

    let images = ["images/Blue_ellipse.png", "images/Grey_triangle.png", "images/green_orange_rectangle_small.png"];

    let n = 0;
    let bool = true;

    function count () {
        document.querySelector(".player").style.backgroundImage = `url(${images[n]})`;
        n === 2 ? n = 0 : n++;
    }
    
    let time;

    player.onmouseover = function(){
        clearInterval(time);
    }
    player.onmouseout = function(){
        time = setInterval(count, 3000);
    }    
}