function generateRandom() {
    const result = document.getElementById("result1");
    const random = Math.floor((Math.random() * 5) + 2);
    result.innerHTML = random;
}
const checkPhone = document.getElementById("phone");
checkPhone.onchange = function () {
    let phone = document.getElementById("phone").value;
    console.log("phone", phone);
    let hasLetter = /[a-zA-Z]/.test(phone);
    if (hasLetter) {
      window.alert("Please enter a number");
    } 
  };

  const checkName = document.getElementById("name");
  checkName.onchange = function () {
    let name = document.getElementById("name").value;
    console.log("name", name);
    let hasNumber = /\d/.test(name);
    if (hasNumber) {
      window.alert("Please enter name in string");  
    } 
  };