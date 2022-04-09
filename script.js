const adId = document.querySelector('.advice-id');
const quote = document.querySelector('.quote');
const btn = document.querySelector('.dice');

function onBtnClick (){
    fetch('https://api.adviceslip.com/advice', {cache: 'no-store'})
        .then(resp => resp.json())
        .then(jsonData => {
            adId.innerText = 'advice #' + jsonData['slip']['id'];
            quote.innerText = '"' + jsonData['slip']['advice'] + '"';
        })

}

btn.addEventListener('click', onBtnClick);