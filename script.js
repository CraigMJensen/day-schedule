var hours = [
  {
    hour: 9,
  },
  {
    hour: 10,
  },
  {
    hour: 11,
  },
  {
    hour: 12,
  },
  {
    hour: 13,
  },
  {
    hour: 14,
  },
  {
    hour: 15,
  },
  {
    hour: 16,
  },
  {
    hour: 17,
  },
];

var newDay = moment().format('MMM. Do, YYYY');
var hourlyTaskUpdate = moment().format('HH');
console.log(hourlyTaskUpdate);
var scheduleTimeEl = document.querySelector('#hourDiv');
var scheduleTaskEl = document.getElementById('textarea');

var currentDay = document.querySelector('#currentDay');
currentDay.textContent = newDay;

var toDoArr = [];

for (var i = 0; i < hours.length; i++) {
  var scheduleContainer = document.querySelector('.container');
  var scheduleTime = document.createElement('div');
  var scheduleTask = document.createElement('div');
  var saveTask = document.createElement('div');
  var saveTaskIcon = document.createElement('i');

  scheduleTime.className = 'col-lg-1 hour';
  scheduleTime.id = 'hourDiv';
  scheduleTask.className = 'col-lg-10 row text';
  scheduleTask.id = 'textarea';
  saveTask.className = 'col-lg-1 saveBtn';
  saveTaskIcon.className = 'fas fa-save';

  scheduleTime.textContent = hours[i].hour;

  scheduleContainer.append(scheduleTime, scheduleTask, saveTask);

  saveTask.appendChild(saveTaskIcon);

  if (hourlyTaskUpdate === hours[i].hour) {
    scheduleTask.style.backgroundColor = '#ff6961';
    console.log('ok');
  } else if (hourlyTaskUpdate < hours[i].hour) {
    scheduleTask.style.backgroundColor = '#77dd77';
    console.log('okay');
  } else if (hourlyTaskUpdate > hours[i].hour) {
    scheduleTask.style.backgroundColor = '#d3d3d3';
    console.log('okie dokie');
  }
}

var saveTasks = function () {
  localStorage.setItem('toDoArr', JSON.stringify(toDoArr));

  console.log('saved');
};

$('.container').on('click', '.saveBtn', function () {
  saveTasks();

  console.log('I was clicked');
});

$('.container').on('click', '.text', function () {
  $(this).attr('contentEditable', 'true');

  console.log('Text was clicked');
});

setTimeout(function () {
  location = '';
}, 3600000);
