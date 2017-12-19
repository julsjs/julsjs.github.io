
var myHeading = document.querySelector('username');

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