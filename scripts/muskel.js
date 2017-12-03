var myHeadingg = document.querySelector('h1');

function setMuskelGruppe () {
    var myMuskel = prompt('Gib deine Muskelgrupe ein:');
    localStorage.setItem('muskel',myMuskel);
    myHeading.textContent =   myMuskel;
}
if (localStorage.getItem != 'muskel'){
    setMuskelGruppe ();
} else{
    var storedMuskel = localStorage.getItem('muskel');
    myHeadingg.textContent = 'Bankdrücken 3*15';
}