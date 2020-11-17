function checkForName(inputText) {
  //(https?:\/\/)? checks for http/https
  //([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z\.]?[a-z])*){2,255} checks for the subdomains and domain
  //(\/[\w-\.~!$&'()*+,;=:@%]*)* checks for any queries and parameters
  const regex = /^(https?:\/\/)?([a-z\d]([a-z\d-.]?[a-z\d])*\.[a-z]([a-z\.]?[a-z])*){2,255}(\/[\w-\.~!$&'()*+,;=:@%]*)*$/i;
  return regex.test(inputText);
}

export { checkForName }
