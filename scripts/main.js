var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zwinkern.jpg') {
      myImage.setAttribute ('src','images/penis.jpg');
    } else {
      myImage.setAttribute ('src','images/zwinkern.jpg');
    }
}
var myButton = document.querySelector('Button');
var myHeading = document.querySelector('h1');

function setUserName () {
    var myName = prompt('Gib deinen Namen ein:');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Send Nudes ' + myName;
}
if (!localStorage.getItem('name')){
    setUserName ();
} else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Send Nudes' + myName ;
}
myButton.onclick = function () {
    setUserName();
}