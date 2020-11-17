function queryApi(key, txt){
  const url = `https://api.meaningcloud.com/sentiment-2.1?key=${key}&lang=en&url=${txt}`;
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
  .then(data => document.querySelector('#results').innerHTML = '<p>'+data.confidence+'% Confident</p>')
  .catch(error => document.querySelector('#error').textContent = error);
}

function handleSubmit(event) {
      event.preventDefault()
    const errorMsg = document.querySelector('#error');
    errorMsg.textContent = "";


    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkForName(formText)){
      console.log("::: Form Submitted :::")
      fetch('/test')
      .then((res) => {
        if(!res.ok){
          if(res.status === 404){
            throw new Error('Unable To Find Application Server!');
          }
          else throw new Error(error);
        }
        return res.json();
      })
      .then(res => queryApi(res.application_key, encodeURIComponent(formText)))
      .catch((error) => {
        errorMsg.textContent = error;
        console.log(error);
        return false;
      });
    }else{
      errorMsg.textContent = "Invalid URL";
      return false;
    }

}
export { handleSubmit }
