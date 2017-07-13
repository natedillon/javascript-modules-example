//
// Module
// --------------------------------------------------


function helloWorld() {
  var messageElement = document.createElement('p')
  var messageContent = document.createTextNode('Hello, World! I’m a JavaScript module!')
  messageElement.appendChild(messageContent)

  document.body.appendChild(messageElement)

  console.log('The helloWorld function has executed.')
}

export { helloWorld }
