window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  let currentYear = now.getFullYear(),
    currentMonth = now.getMonth(),
    currentDay = now.getDay(),
    currentHour = now.getHours(),
    nextMonth = currentMonth + 2;

  const arr = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  function getMonth(currentMonth) {
    return arr[currentMonth];
  }

  const nowCurrentMonth = document.querySelector(".promotion__text .title");
  nowCurrentMonth.innerHTML = `Текущий месяц: ${getMonth(currentMonth)}`;

  console.log(getMonth(currentMonth));

  const deadline = `${currentYear}-${getZero(nextMonth)}-${getZero(
    currentDay
  )}`;

  console.log(deadline);

  function getTimeRemaining(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", deadline);

  let prasdnics = {
    7: new Date(2020, 7, 19).getDate(),
    10: new Date(2020, 10, 28).getDate(),
    9: new Date(2020, 9, 2).getDate(),
    8: new Date(2020, 8, 13).getDate(),
    11: new Date(2020, 11, 5).getDate(),
    // 7: new Date(2020, 7, 1).getDate()
  };

  //   function start() {
  //     timert = setInterval(upgrate, 1000);
  //     upgrate();
  //   }

  //   function stop() {
  //     clearInterval(timert);
  //     timert = null;
  //   }
  //   var arr = [
  //     "Январь",
  //     "Февраль",
  //     "Март",
  //     "Апрель",
  //     "Май",
  //     "Июнь",
  //     "Июль",
  //     "Август",
  //     "Сентябрь",
  //     "Октябрь",
  //     "Ноябрь",
  //     "Декабрь",
  //   ];

  let weekDays = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресение",
  ];

  function createCalendar(elem, year, month, day) {
    let d = new Date(year, month);

    let table =
      "<table><caption>" +
      arr[month] +
      " " +
      year +
      "</caption><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";
    let d1 = new Date(year, month, day);
    let today = d1.getDate();

    for (let i = 0; i < getDay(d); i++) {
      table += "<td></td>";
    }
    while (d.getMonth() == month) {
      if (
        prasdnics.hasOwnProperty(d.getMonth()) &&
        prasdnics[d.getMonth()] == d.getDate()
      )
        table += "<td id = 'bd'>" + d.getDate() + "</td>";
      else if (d.getDate() == today)
        table += "<td id = 'cd'>" + d.getDate() + "</td>";
      else {
        table += "<td>" + d.getDate() + "</td>";
      }

      if (getDay(d) % 7 == 6) {
        table += "</tr><tr>";
      }
      d.setDate(d.getDate() + 1);
    }

    // while (d.getMonth() == month) {
    //   table += "<td>" + d.getDate() + "</td>";

    //   if (getDay(d) % 7 == 6) {
    //     table += "</tr><tr>";
    //   }
    //   d.setDate(d.getDate() + 1);
    // }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += "<td></td>";
      }
    }
    table += "</tr></table>";
    elem.innerHTML = table;
  }

  function getDay(date) {
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }

    return day - 1;
  }
  let curDate = new Date();
  let curMon = curDate.getMonth();
  let curYear = curDate.getFullYear();

  let curDay = curDate.getDate();
  createCalendar(cal, curYear, curMon, curDay);
  today.innerHTML =
    curDay +
    " " +
    arr[curMon] +
    "<br>" +
    '<span class="wd">' +
    weekDays[getDay(curDate)] +
    "</span>";
  //   MonName.innerHTML = arr[curMon] + " " + curYear;
  console.log(curMon);
  next.onclick = function () {
    curMon = curMon + 1;
    if (curMon <= 11) {
      createCalendar(cal, curYear, curMon);
      //   MonName.innerHTML = arr[curMon] + " " + curYear;
    } else {
      curYear = curYear + 1;
      curMon = 0;
      createCalendar(cal, curYear, curMon);
      //   MonName.innerHTML = arr[curMon] + " " + curYear;
    }
  };

  pre.onclick = function () {
    curMon = curMon - 1;
    if (curMon > 0) {
      createCalendar(cal, curYear, curMon);
    } else {
      curYear = curYear - 1;
      curMon = 11;
      createCalendar(cal, curYear, curMon);
    }
    // MonName.innerHTML = arr[curMon] + " " + curYear;
  };

  function upgrate() {
    let clock = document.getElementById("clock");
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    let min = date.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    let sec = date.getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    }
    // clock.children[0].innerHTML = hours;
    // clock.children[1].innerHTML = min;
    // clock.children[2].innerHTML = sec;
    let h = document.querySelector("#hours1"),
      m = document.querySelector("#minutes1"),
      s = document.querySelector("#seconds1");

    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;
  }
  let timert;
  setInterval(upgrate, 1000);
});
