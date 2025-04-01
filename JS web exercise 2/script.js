const button = document.getElementById('amabutonu');
const userNameInput = document.getElementById('amaIsimi');
const Greet = document.getElementById('AmMesaji');

button.addEventListener('click',function(){
    const userName = userNameInput.value;

    if(userName){
        Greet.textContent = `selamm, ${userName} (^^) Welcome to Bulent's learned Js project`;
    }
    else{
        Greet.textContent='pLEASE eNTER yOUR nAME : ';
    }
    userNameInput.value= '';

});