var newDay = moment().format('MMMM Do YYYY, h:mm a');

var currentDay = document.querySelector('#currentDay');
currentDay.innerHTML = newDay;

for (var i = 0; i < 9; i++) {
  var scheduleContainer = document.querySelector('.container');
  var scheduleTime = document.createElement('div');
  var scheduleTask = document.createElement('div');
  var saveTask = document.createElement('div');
  var saveTaskIcon = document.createElement('i');

  scheduleTime.className = 'col-lg-1 hour';
  scheduleTask.className = 'col-lg-10 future row';
  saveTask.className = 'col-lg-1 saveBtn';
  saveTaskIcon.className = 'fas fa-save';

  scheduleContainer.append(scheduleTime, scheduleTask, saveTask);

  saveTask.appendChild(saveTaskIcon);
}

$('.container').on('click', '.saveBtn', function () {
  console.log('was clicked');
});
