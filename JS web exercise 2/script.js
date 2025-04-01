const button = document.getElementById('amabutonu');
const userNameInput = document.getElementById('amaIsimi');
const Greet = document.getElementById('AmMesaji');

button.addEventListener('click', function(event) {

    event.preventDefault();

    const userName = userNameInput.value;

    if (userName) {
        Greet.textContent = `Selamm, ${userName} (^^) Welcome to Bulent's learned Js project`;
    } else {
        Greet.textContent = 'Please enter your name!';
    }
    userNameInput.value = ''; // Inputu sıfırla
});
