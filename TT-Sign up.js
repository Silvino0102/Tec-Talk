function hide() {
    let HD = document.getElementById("pass");
    if (HD.type === "password") {
        HD.type = "text";
    } else{
        HD.type = "password";
    }
}

const is_logged = JSON.parse(localStorage.getItem('is_logged'))

if (is_logged === true) {
    window.location.href = "TT-Home page.html"
}


document.querySelector('#signup-form').addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.querySelector('input[name="email"]').value
    const password = document.querySelector('input[name="password"]').value
    const fullName = document.querySelector('input[name="fullName"]').value

    let users = localStorage.getItem('users')

    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
    }
    
    users = JSON.parse(localStorage.getItem('users'))
    
    users.push({
        email: email,
        password: password,
        fullName: fullName,
    })
    
    localStorage.setItem('users', JSON.stringify(users))

    window.location.href = "TT-Sign in.html"
})