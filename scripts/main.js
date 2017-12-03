var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/index.png') {
      myImage.setAttribute ('src','images/Nude.jpg')
    } else {
      myImage.setAttribute ('src','images/index.png');
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
    myHeading.textContent = 'Nicht drauf klicken' + myName ;
}
myButton.onclick = function () {
    setUserName();
}