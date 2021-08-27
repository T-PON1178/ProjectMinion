
function generate_cock(cock_type, cock_amount) {
    var new_cock = document.createElement("IMG");
    new_cock.setAttribute("src", `./images/${cock_type}`) ;
    new_cock.setAttribute("width", "500");
    new_cock.setAttribute("height", "333"); 
    new_cock.setAttribute("alt", "CockPiece");
    
    for (var i = 0; i < cock_amount; i++) {
        if (i === 0) {
            new_cock.setAttribute("class", "generator");
            document.body.appendChild(new_cock);
            document.body.getElementsByClassName("generator").onscroll = function() {scrollEvent()};
            
        }

        else {
            new_cock.setAttribute("class", "image");
            document.body.appendChild(new_cock);
        }

    }
       
}

function scrollEvent() {
    generate_cock('shlong', 20);
}