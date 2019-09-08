let firstName;
let lastName;
let UIN;
let email;
let phone;
let requesterPhone;

function checkIn() {
    firstName = document.getElementById("fname").value;
    lastName = document.getElementById("lname").value;
    UIN = document.getElementById("uin").value;
    email = document.getElementById("email").value;
    phone = document.getElementById("phone").value;
    requesterPhone = document.getElementById("rphone").value;

    /*
    Ask during Corps login who is the client they are responding to
    */
    let query =
        "fname=" + firstName + "&" +
        "lname=" + lastName + "&" +
        "uin=" + UIN + "&" +
        "email=" + email + "&" +
        "phone=" + phone + "&" +
        "rphone=" + requesterPhone;

    alert(query);

    fetch("http://localhost:7071/api/HttpTrigger" + "?" + query, {
        method: "POST",
        headers: {
            accept: "application/json"
        }
    }).then(function (res) {
        return res.json()
    }).then(function (res) {

    });
}