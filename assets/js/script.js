// Variables
var newDay = moment().format('MMM. Do, YYYY');
var hourlyTaskUpdate = moment().format('HH');

var infoDiv = document.querySelectorAll('.time-block');
var scheduleTask = document.querySelectorAll('.text');

// Displays current day
var currentDay = document.querySelector('#currentDay');
currentDay.textContent = newDay;

// Document ready function sets local storage on save button click
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.text').val();
    localStorage.setItem(time, text);
    console.log(time, text);
  });
});

// Controls background color according to hour of the day and sets readonly for schedule that has past
for (var i = 0; i < infoDiv.length; i++) {
  if (infoDiv[i].id === hourlyTaskUpdate) {
    scheduleTask[i].classList.add('present');
  } else if (infoDiv[i].id > hourlyTaskUpdate) {
    scheduleTask[i].classList.add('future');
  } else if (infoDiv[i].id < hourlyTaskUpdate) {
    scheduleTask[i].setAttribute('readonly', true);
    scheduleTask[i].classList.add('past');
  }
}

// Function to get local storage text to display
var loadMemory = () => {
  $('#09 .text').val(localStorage.getItem('09'));
  $('#10 .text').val(localStorage.getItem('10'));
  $('#11 .text').val(localStorage.getItem('11'));
  $('#12 .text').val(localStorage.getItem('12'));
  $('#13 .text').val(localStorage.getItem('13'));
  $('#14 .text').val(localStorage.getItem('14'));
  $('#15 .text').val(localStorage.getItem('15'));
  $('#16 .text').val(localStorage.getItem('16'));
  $('#17 .text').val(localStorage.getItem('17'));
};

// Function call to load local storage
loadMemory();
