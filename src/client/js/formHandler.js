
//Handles the API call to Meaning Cloud given the api key and URL

function queryApi(key, input){
  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${input}`;
  fetch(url, {method: 'POST'})
  .then(data => {
    if(!data.ok){
      if(data.status === 404){
        throw new Error('Unable to connect to Meaning Cloud. Are you offline?')
      }
      else throw new Error(data.status);
    }
    return data.json()
  })
  .then(data =>{
    document.querySelector('#results').classList.remove('loader');
    document.querySelector('#results').innerHTML = '<p>'+data.confidence+'% Confident</p>';
  })
  .catch(error => errorMsg(error));
}

//Handles the displaying of error messages
function errorMsg(error){
  let error_message = document.querySelector('#error');
  error_message.textContent = error;
  return error;
}

//Handles the submission of the form, getting the API key from the application server and then calling the queryApi() function
function handleSubmit(event) {
      event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText)){
      document.querySelector('#results').classList.add('loader');
      fetch('/apiKey')
      .then((res) => {
        if(!res.ok){
          if(res.status === 404){
            throw new Error('Unable To Find Application Server!');
          }
          else throw new Error(error);
        }
        return res.json();
      })
      .then(res => queryApi(res.application_key, formText))
      .catch((error) => {
        errorMsg(error);
      });
    }else{
      errorMsg("Invalid URL");
    }

}
export { handleSubmit, errorMsg }
