let buttonUpdate = document.querySelector('.advice-update')
let adviceId = document.getElementsByClassName('advice-id')
let advicePhrase = document.getElementsByClassName('advice-phrase')
const apiUrl = 'https://api.adviceslip.com/advice'

    buttonUpdate.addEventListener('click', function(){
    fetch(apiUrl)
        .then((response) =>{
            if(!response.ok) {
                throw new Error(`Error getting data from API: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data['slip'])
            advicePhrase[0].innerHTML = data['slip'].advice
            adviceId[0].innerHTML = `ADVICE #${data['slip'].id}`
            // advicePhrase.innerText = apiPhrase['slip']['advice']
        })
        .catch(error => {
            console.error(`Error in API request: ${error}`)
        })
    })
