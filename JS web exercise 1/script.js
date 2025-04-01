const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt (document.querySelector('#height').value);
    const weigth = parseInt (document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if((height ==='' || height<0 || (isNaN(height)))){
        results.innerHTML="Please provide a valid heigth";
    }
    else if(weigth=== '' || weigth<0 || isNaN(weigth)){
        results.innerHTML = "Please provide a valid weigth";
    }

    else {
        const bmi = (weigth / ((height*height)/10000)).toFixed(2);
        results.innerHTML= `<span>${bmi}</span>`
    }

});