var hours = [
  {
    hour: 9,
    meridiem: 'AM',
  },
  {
    hour: 10,
    meridiem: 'AM',
  },
  {
    hour: 11,
    meridiem: 'AM',
  },
  {
    hour: 12,
    meridiem: 'PM',
  },
  {
    hour: 1,
    meridiem: 'PM',
  },
  {
    hour: 2,
    meridiem: 'PM',
  },
  {
    hour: 3,
    meridiem: 'PM',
  },
  {
    hour: 4,
    meridiem: 'PM',
  },
  {
    hour: 5,
    meridiem: 'PM',
  },
];

var newDay = moment().format('MMMM Do YYYY');
var currentTime = moment().format('h');
console.log(currentTime);

var currentDay = document.querySelector('#currentDay');
currentDay.textContent = newDay;

var toDoArr = [];

for (var i = 0; i < hours.length; i++) {
  var scheduleContainer = document.querySelector('.container');
  var scheduleTime = document.createElement('div');
  var timeHour = document.createElement('p');
  var scheduleTask = document.createElement('div');
  var saveTask = document.createElement('div');
  var saveTaskIcon = document.createElement('i');

  scheduleTime.className = 'col-lg-1 hour';
  timeHour.id = hours[i].hour;
  scheduleTask.className = 'col-lg-10 past row text';
  scheduleTask.id = 'textBox';
  saveTask.className = 'col-lg-1 saveBtn';
  saveTaskIcon.className = 'fas fa-save';

  timeHour.textContent = hours[i].hour + hours[i].meridiem;

  scheduleContainer.append(scheduleTime, scheduleTask, saveTask);
  scheduleTime.appendChild(timeHour);
  saveTask.appendChild(saveTaskIcon);
  if (currentTime < hours.length) {
    document.getElementById('textBox').style.backgroundColor = 'red';
  } else {
    document.getElementById('textBox').style.backgroundColor = 'blue';
  }

  var saveTasks = function (text) {
    localStorage.setItem('toDoArr', JSON.stringify(text));
    console.log(toDoArr);
  };
}

$('.container').on('click', '.saveBtn', function () {
  saveTasks();
  console.log('I was clicked');
});

$('.container').on('click', '.text', function () {
  $(this).attr('contenteditable', 'true');
  console.log('Text was clicked');
});

setTimeout(function () {
  location = '';
}, 3600000);
