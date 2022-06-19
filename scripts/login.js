let array = JSON.parse(localStorage.getItem("userdata"));
  let tak = document.querySelector("use");
  let againcallme = () => {
    event.preventDefault();
    let tom = {
      uemail: two.nameone.value,
      upassword: two.nametwo.value,
    };
    if (array == null) {
      alert("Create-Account");
    } else if (array.email == tom.uemail && array.password == tom.upassword) {
      alert("Login Successful");
      window.location.href = "index.html";
    } else {
      alert("User Does'nt Exist");
    }
  };
  document.querySelector("form").addEventListener("submit", againcallme);