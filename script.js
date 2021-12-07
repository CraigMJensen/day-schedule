var newDay = moment().format('MMMM Do YYYY, h:mm a');
console.log(newDay);

var currentDay = document.querySelector('#currentDay');
currentDay.innerHTML = newDay;

var scheduleContainer = document.querySelector('.container');
var scheduleTime = document.createElement('div');
var scheduleTask = document.createElement('div');
var saveTask = document.createElement('div');
var saveTaskIcon = document.createElement('i');

scheduleTime.className = 'col-lg-1 hour';
scheduleTask.className = 'col-lg-10 present row';
saveTask.className = 'col-lg-1 saveBtn';
saveTaskIcon.className = 'fas fa-save';

scheduleContainer.append(scheduleTime, scheduleTask, saveTask);

saveTask.appendChild(saveTaskIcon);

$('.container').on('click', 'i', function () {
  console.log('was clicked');
});
