'use strict';

var quizForm = document.getElementById('quizForm');
var resetForm = document.getElementById('resetForm');
var tag2msg = ['Let\'s Go Mets!', 'Good luck with the quiz.', 'Yankees, though? Really?'];
var userScore = 0;
var quizQuestions = document.querySelectorAll('fieldset');
var numberOfQuestions = quizQuestions.length;
var quizAnswers = [1,0,3,3,1,1,2,2,0,1,3,2,2,3,0];

window.onload = function () {
  welcomeMsg();
}

function welcomeMsg() {
  document.getElementById('welcome').innerHTML = 'Thanks for playing, ' + localStorage.getItem('userName') + '!';
  document.getElementById('tag2').innerHTML = tag2msg[localStorage.getItem('metsFan')];
}

quizForm.addEventListener('submit', function(event) {
  	event.preventDefault();
	for (var i=0; i<numberOfQuestions; i++) {
		var thisQuestion = document.getElementsByName('quiz' + i);
		for (var ii = 0; ii < thisQuestion.length; ii++) {
			if (ii === quizAnswers[i]) {
				thisQuestion[ii].parentNode.className = 'correct';
				if (thisQuestion[ii].checked) {
					userScore++;
				}
			}
			if (thisQuestion[ii].checked && ii !== quizAnswers[i]) {
				thisQuestion[ii].parentNode.className = 'incorrect';
			}
		}
	}
	updateMsg(userScore);
});

function updateMsg(userScore) {
	document.getElementById('welcome').innerHTML = 'Here are your results, ' + localStorage.getItem('userName') + '!';
	document.getElementById('tag2').innerHTML = userScore + ' out of 15.';
	document.getElementById('submit').className = ('hidden');
	document.getElementById('reset').classList.remove('hidden');
	window.scrollTo(0, 0);
}

resetForm.addEventListener('submit', function(event) {
  	event.preventDefault();
  	window.location.href = 'index.html';
});