function openCart(evt, cartState) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0 ; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    } 

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {
        tabcontent[1].className.replace("active", " ");
    }

    document.getElementById(cartState).style.display = "block";

    evt.currentTarget.className += "active";
}