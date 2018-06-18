const btn = document.querySelector('button');
const img = document.getElementById('photo');
const url = 'https://dog.ceo/api/breeds/image/random';

const getJSON = (url, callback) => {
  //crear instancia del objeto XMLHttpRequest
  const request = new XMLHttpRequest(); //

  request.onload = () =>{
    // readyState cuando devuelve 4 esta listo. y si le pide que el estatus este en 200, esta ok!
    if(request.readyState === 4 && request.status === 200){
      callback(request.responseText); //me lo devuelve en un formato no manipulable aún. 
    } 
  }
  //open()
  request.open('GET', url);
  //send()
  request.send();
}

btn.addEventListener('click', () => { 
  getJSON(url, response => {
    let doggie = JSON.parse(response).message; //esto me permite pasar "response" a objeto manipulable.
    console.log(doggie);
    img.src = doggie;
  })
})