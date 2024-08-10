const form = document.querySelector("form")

form.addEventListener( "submit",(e) =>  {
    e.preventDefault()

    const username = form.username.value
    const password = form.password.value

    const authenticated = authentication(username,password)

    if(authenticated) {
        window.location.href = "Data.json"
    }
    else {
        alert("invalid username or passwrod")
    }
})

function authentication(username, password) {
    if(username === "admin" && password === "password123") {
        return true
    } else {
        return false 
    }
}