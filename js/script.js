'use strict';

var theForm = document.getElementById('form');
var metsFanVals = document.getElementsByName('metsFan');

window.onload = function () {
  if (JSON.parse(localStorage.getItem('userName') != null)) {
    var givenName = localStorage.getItem('userName');
    var fanVal = localStorage.getItem('metsFan');
    populateForm(givenName, fanVal);
  }
}

function populateForm(givenName, fanVal) {
  document.getElementById('userName').value = givenName;
  metsFanVals[fanVal].checked = true;
}

theForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var userName = document.getElementById('userName');
  localStorage.setItem('userName', userName.value);
  for (var i = 0; i < metsFanVals.length; i++) {
  	if (metsFanVals[i].checked) {
  		localStorage.setItem('metsFan', i);
  		break;
  	}
  }
  window.location.href = 'quiz.html';
});