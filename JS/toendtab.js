let form=document.getElementById("formSubmission");

let table=document.getElementById('data');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  submit();
})


const submit=()=>{
    let address = document.getElementById("shippingAddress1").value;
    let address2 = document.getElementById("shippingAddress2").value;
    let suburb = document.getElementById("shippingSuburb").value;
    let city = document.getElementById("shippingCity").value;


  let newArray = [address,address2,suburb,city];
  newArray.forEach((item)=>{
      var li = document.createElement("li");
  var text = document.createTextNode(item);
  li.appendChild(text);
  table.appendChild(li);
  })
  form.reset(); 
}