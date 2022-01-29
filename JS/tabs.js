function openCart(evt, cartState) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0 ; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    } 

    tablinks = document.getElementsByClassName("tablinks");

    document.getElementById(cartState).style.display = "block";

    evt.currentTarget.className;
}