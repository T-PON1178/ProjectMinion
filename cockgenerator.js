
object.onscroll = generate_cock()



function generate_cock(cock_type) {
    var new_cock = document.createElement("IMG");
    new_cock.setAttribute("src", "./images/shlong.png") ;
    new_cock.setAttribute("width", "500");
    new_cock.setAttribute("height", "333"); 
    new_cock.setAttribute("class", "image");
    new_cock.setAttribute("alt", "CockPiece");
    document.body.appendChild(new_cock);
}
