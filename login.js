document.getElementById("submit-btn").addEventListener("click", function () {
    // getting values 
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    // validation
    if ('sontan@baap.com' === email && 'secret' === pass) {
        window.location.href = "bank.html";
    } else {
        alert("Email & Password is not matching");
    }
})
