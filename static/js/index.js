function showClock(){
    var currentDate = new Date();
    var divClock = document.getElementById('time')
    divClock.innerHTML = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0');
    setInterval("showClock()", 1000);  // 1초마다 실행
}