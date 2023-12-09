function checkLogin(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === 'admin' && password === 'password') {
        window.location.href = 'admin-panel.html';
    } else {
        document.getElementById('error-message').innerText = 'Hatalı kullanıcı adı veya şifre.';
    }
}