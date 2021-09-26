window.onload = function (){
    main();
}

function main(){
    showClock();
}


function showClock(){
    var currentDate = new Date();
    var divClock = document.getElementById('time')
    divClock.innerHTML = currentDate.getHours().toString().padStart(2, '0') + ":" + currentDate.getMinutes().toString().padStart(2, '0');
    setInterval("showClock()", 1000);  // 1초마다 실행
}

function getTodo(){
    var todoJson = new Object();
    var currentDate = new Date();

    todoJson.name = "재민";
    todoJson.date = currentDate.getFullYear().toString() + "-" + currentDate.getMonth().toString().padStart(2, '0') + "-" + currentDate.getDate().toString().padStart(2, '0');
    todoJson.todo = document.getElementById('todo-input').value;

    var today_json = JSON.stringify(todoJson);

    console.log(today_json);

    const fs = require('fs');
    fs.writeFileSync
}

function entercheck(){
    if(window.event.keyCode == 13){
        getTodo();
    }
}

