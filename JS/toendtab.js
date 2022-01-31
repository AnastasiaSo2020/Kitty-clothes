let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
let tableBill = document.getElementById("dataBill");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
    let address = document.getElementById("shippingAddress1").value;
    let address2 = document.getElementById("shippingAddress2").value;
    let suburb = document.getElementById("shippingSuburb").value;
    let city = document.getElementById("shippingCity").value;
    let country = document.getElementById("country").value;
    let postcode = document.getElementById("shippingPostcode").value;

    let addressBill = document.getElementById("billingAddress1").value;
    let addressBill2 = document.getElementById("billingAddress2").value;
    let suburbBill = document.getElementById("billingSuburb").value;
    let cityBill = document.getElementById("billingCity").value;
    let countryBill = document.getElementById("billingCountry").value;
    let postcodeBill = document.getElementById("billingPostcode").value;


let newArray = [address,address2,suburb,city, country, postcode];
newArray.forEach((item)=>{
    var li = document.createElement("li");
    var text = document.createTextNode(item);
    li.appendChild(text);
    table.appendChild(li);
  })

let billArray = [addressBill, addressBill2, suburbBill, cityBill, countryBill, postcodeBill];
billArray.forEach((item) => {
    var li2 =document.createElement("li");
    var text2 = document.createTextNode(item);
    li2.appendChild(text2);
    dataBill.appendChild(li2);
})

}