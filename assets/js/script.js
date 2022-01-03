var newDay = moment().format('MMM. Do, YYYY');

var currentDay = document.querySelector('#currentDay');
currentDay.textContent = newDay;

var hourDiv = document.querySelectorAll('.hour');
var scheduleTask = document.querySelectorAll('.text');
let saveBtn = document.querySelectorAll('.saveBtn');

let taskText = [];

var hourlyTaskUpdate = moment().format('HHA');

// Controls background color and text editability according to hour of the day
for (var i = 0; i < hourDiv.length; i++) {
  if (hourDiv[i].id === hourlyTaskUpdate) {
    scheduleTask[i].classList.add('present');
    scheduleTask[i].contentEditable = 'true';
  } else if (hourDiv[i].id > hourlyTaskUpdate) {
    scheduleTask[i].classList.add('future');
    scheduleTask[i].contentEditable = 'true';
  } else if (hourDiv[i].id < hourlyTaskUpdate) {
    saveBtn[i].disabled = true;
    scheduleTask[i].classList.add('past');
    scheduleTask[i].contentEditable = 'false';
  }
  scheduleTask[i].setAttribute('id', 'task' + [i]);
  saveBtn[i].setAttribute('id', 'save' + [i]);
}

for (var i = 0; i < saveBtn.length; i++) {
  // if (!saveBtn[i].disabled) {
  saveBtn[i].addEventListener('click', function (e) {
    e.preventDefault();
    console.log(saveBtn);
  });
  console.log('ok');
  // } else {
  //   console.log('oh no');
  // }
}

// Time out function for the date
setTimeout(function () {
  location = '';
}, 3600000);
