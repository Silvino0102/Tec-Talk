const is_logged = JSON.parse(localStorage.getItem('is_logged'))

if (is_logged === true) {
    window.location.href = "kk.html"
    window.location.href = "TT-Curso.html"
    window.location.href = "TT-Home page.html"
} else {
    localStorage.setItem('is_logged', JSON.stringify(false))
}


document.querySelector('#signin-form')
.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.querySelector('input[name="email"]').value
    const password = document.querySelector('input[name="password"]').value

    let users = localStorage.getItem('users')

    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
    }
    
    users = JSON.parse(localStorage.getItem('users'))

    users.forEach(user => {
        if (user.email === email  && user.password === password) {
            localStorage.setItem('is_logged', JSON.stringify(true))

            window.location.href = "TT-Home page.html"
        } 
        else {
            document.querySelector('#msg')
            .innerText = 'Credenciais inválidas'
        }
    });
})
