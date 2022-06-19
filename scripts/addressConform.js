function appendAddress(el) {
    
    let data=document.getElementById('name');
    let h1=document.createElement('h3');
    h1.innerText=el.name;

    let data1=document.getElementById('number');
    let h2=document.createElement('h3');
    h2.innerText=el.mobileNo;

    let data2=document.getElementById('address');
    let h3=document.createElement('p');
    h3.innerText=el.address;

    let data3=document.getElementById('pincode');
    let h4=document.createElement('h3');
    h4.innerText=el.pincode;

    let data4=document.getElementById('state');
    let h5=document.createElement('h3');
    h5.innerText=el.state;

    data.append(h1,h2,h3,h4,h5);

    // var data_div = document.getElementById("newContainer");
    // var div = document.createElement("div");

    // let p_name = document.createElement("p_name");
    // p_name.innerHTML = el.name;

    // let p_mobile = document.createElement("p_mobile");
    // p_mobile.innerHTML = el.mobileNo;

    // let p_pincode = document.createElement("p_pincode");
    // p_pincode.innerHTML = el.pincode;

    // let p_address = document.createElement("p_address");
    // p_address.innerHTML = el.address;

    // let p_location = document.createElement("p_location");
    // p_location.innerHTML = el.location;

    // let p_city = document.createElement("p_city");
    // p_city.innerHTML = el.city;

    // let p_state = document.createElement("p_state");
    // p_state.innerHTML = el.state;


    // div.append(p_name, p_mobile, p_pincode, p_address, p_location, p_city, p_state);
    // data_div.append(div);

}

function showAddress() {
    let data = JSON.parse(localStorage.getItem("address1"));

   

    data.forEach(function(el) {
        // console.log(el);
        appendAddress(el);

    });


}
showAddress();


function add(){
    window.location.href="paymentPage.html";
}
