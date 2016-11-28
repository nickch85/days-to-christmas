

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function getNextChristmas() {
  var d = new Date();
  var y = d.getFullYear();
  var christmas = new Date(y, 11, 26);
  var afterChristmas = new Date(y, 11, 27);

  // Check if its after the 26th of Dec
  // Set year + 1 if so
  if (d > afterChristmas) {
    console.log('is after christmas');
    christmas = new Date(y+1, 11, 26);
    afterChristmas = new Date(y+1, 11, 27);
  }
  return {christmas: christmas, afterChristmas: afterChristmas};
}

function isTodayChristmas() {
  var d = new Date();
  var r = getNextChristmas();
  // Check if its Christmas Day
  return (d >= r.christmas && d < r.afterChristmas)

}

function setText(){
  var r = getNextChristmas().christmas;
  if(isTodayChristmas()) {
    return "<p>It's Christmas Today! Merry Christmas!</p>"
  } else {
    var t = getTimeRemaining(r);
    return (
      "<p><span class='label label-default'>" + t.days + "</span> days</p>" +
      "<p><span class='label label-default'>" + t.hours + "</span> hours</p>" +
      "<p><span class='label label-default'>" + t.minutes + "</span> minutes</p>" +
      "<p><span class='label label-default'>" + t.seconds + "</span> seconds</p>" +
      "<p>to go until Christmas</p>");
  }
}

function startCountdown() {
  var target = $('.countdown');
  var timer = setInterval(function () {
    target.show();
    target.html(setText());
  }, 1000);
}



$(document).ready(function () {
  startCountdown();
})