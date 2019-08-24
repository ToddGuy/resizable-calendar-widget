(function initCalendar() {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const div = document.createElement('div');

  const calendarWeekdaysWeekendsDiv = document.getElementById('calendar-weekdays-weekends');

  daysOfWeek.forEach(dayOfWeek => {
    const dayOfWeekDiv = div.cloneNode();
    dayOfWeekDiv.innerText = dayOfWeek;
    calendarWeekdaysWeekendsDiv.appendChild(dayOfWeekDiv);
  });

  const curDate = new Date();
  const refCurDate = new Date(curDate).getDate();


  const list = document.getElementById('calendar-header').querySelectorAll('h1');
  console.log(list);

  for (let item of Array.from(list)) {
    item.innerText += ' ' + curDate.getFullYear();
  }


  curDate.setDate(1);
  const curMonth = curDate.getMonth();

  let day = 0;
  const calendarDaysDiv = document.getElementById('calendar-days');

  const appendHiddenDay = function() {
    const calendarDayDiv = div.cloneNode();
    calendarDayDiv.className = 'hidden-day';
    calendarDaysDiv.appendChild(calendarDayDiv);
    day++;
  };

  while (day !== curDate.getDay()) {
    appendHiddenDay();
  }

  while (curDate.getMonth() === curMonth) {
    const calendarDayDiv = div.cloneNode();
    calendarDayDiv.className = 'calendar-day';

    const dayBlock = div.cloneNode();
    dayBlock.className = `day-block  ${(refCurDate === curDate.getDate()) ? 'current-day' : 'other-day'}`;

    dayBlock.innerText = curDate.getDate();
    calendarDayDiv.appendChild(dayBlock);

    calendarDaysDiv.appendChild(calendarDayDiv);

    curDate.setDate(curDate.getDate() + 1);
    day++;
  }

  while (day % 7 !== 0) {
    appendHiddenDay();
  }

})();

