function MV(categoria) {
    document.getElementById('Botão').style.display = 'none'
    let TC = document.querySelectorAll('.V');
    TC.forEach(div => div.classList.remove('active'));
    
    document.getElementById(categoria).classList.add('active');
}

const is_logged = JSON.parse(localStorage.getItem('is_logged'))

if (is_logged !== true) {
    window.location.href = "TT-Sign in.html"
}

function ape(){
    console.log("apertou")

   localStorage.setItem('is_logged', JSON.stringify(false))
    window.location.href = "TT-Sign in.html"
 }