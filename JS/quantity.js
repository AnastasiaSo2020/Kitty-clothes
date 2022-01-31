function increaseCount (e, el) {
    var input = el.previousElementSibling; 
    var value = parseInt(input.value, 10); 
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}


const price = 5;

const totalDiv = document.getElementById("total");
totalDiv.innerHTML = '<p> 5 Eur </p>';

function totalPrice() {
    const qvt = document.getElementById('quantity').value;
    const total = parseInt(qvt)*price;

    totalDiv.innerHTML = total;
}
