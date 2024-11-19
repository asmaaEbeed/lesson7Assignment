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