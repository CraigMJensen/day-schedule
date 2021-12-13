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

var scheduleTask = document.querySelectorAll('#textarea');

var currentDay = document.querySelector('#currentDay');
currentDay.textContent = newDay;

for (var i = 0; i < hours.length; i++) {
  var scheduleContainer = document.querySelector('.container');

  var scheduleTime = document.createElement('div');
  scheduleTime.className = 'col-lg-1 hour';
  scheduleTime.id = 'hourDiv';

  var scheduleTask = document.createElement('div');
  scheduleTask.className = 'col-lg-10 row text form-control';
  scheduleTask.id = 'textarea' + [i];
  scheduleTask.setAttribute('contenteditable', 'true');

  var saveTask = document.createElement('div');
  saveTask.className = 'col-lg-1 saveBtn';
  saveTask.id = 'save' + [i];

  var saveTaskIcon = document.createElement('i');
  saveTaskIcon.className = 'fas fa-save';

  scheduleTime.textContent = hours[i].hour;

  scheduleContainer.append(scheduleTime, scheduleTask, saveTask);
  saveTask.appendChild(saveTaskIcon);

  if (hourlyTaskUpdate == hours[i].hour) {
    scheduleTask.style.backgroundColor = '#ff6961';
  } else if (hourlyTaskUpdate < hours[i].hour) {
    scheduleTask.style.backgroundColor = '#77dd77';
  } else if (hourlyTaskUpdate > hours[i].hour) {
    scheduleTask.style.backgroundColor = '#d3d3d3';
  }
}

$('.container').on('click', '#save0', function () {
  localStorage.setItem('text0', textarea0.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save1', function () {
  localStorage.setItem('text1', textarea1.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save2', function () {
  localStorage.setItem('text2', textarea2.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save3', function () {
  localStorage.setItem('text3', textarea3.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save4', function () {
  localStorage.setItem('text4', textarea4.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save5', function () {
  localStorage.setItem('text5', textarea5.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save6', function () {
  localStorage.setItem('text6', textarea6.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save7', function () {
  localStorage.setItem('text7', textarea7.textContent);

  console.log('I was clicked');
});

$('.container').on('click', '#save8', function () {
  localStorage.setItem('text8', textarea8.textContent);

  console.log('I was clicked');
});

function displayLocalStor() {
  textarea0.textContent = localStorage.getItem('text0');
  localStorage.getItem('text0');
  textarea1.textContent = localStorage.getItem('text1');
  localStorage.getItem('text1');
  textarea2.textContent = localStorage.getItem('text2');
  localStorage.getItem('text2');
  textarea3.textContent = localStorage.getItem('text3');
  localStorage.getItem('text3');
  textarea4.textContent = localStorage.getItem('text4');
  localStorage.getItem('text4');
  textarea5.textContent = localStorage.getItem('text5');
  localStorage.getItem('text5');
  textarea6.textContent = localStorage.getItem('text6');
  localStorage.getItem('text6');
  textarea7.textContent = localStorage.getItem('text7');
  localStorage.getItem('text7');
  textarea8.textContent = localStorage.getItem('text8');
  localStorage.getItem('text8');
}

displayLocalStor();

setTimeout(function () {
  location = '';
}, 3600000);
