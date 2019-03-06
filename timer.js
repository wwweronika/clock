function getToday() {

var today = new Date();

var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();

var dayofweek = today.getDay();

switch(dayofweek) {
    case 1:
    dayofweek = "Poniedziałek";
    break;
    case 2:
    dayofweek = "Wtorek";
    break;
    case 3:
    dayofweek = "Środa";
    break;
    case 4:
    dayofweek = "Czwartek";
    break;
    case 5:
    dayofweek = "Piątek";
    break;
    case 6:
    dayofweek = "Sobota";
    break;
    default:
    dayofweek = "Niedziela";

}

function week(year,month,day) {
    function serial(days) { return 86400000*days; }
    function dateserial(year,month,day) { return (new Date(year,month-1,day).valueOf()); }
    function weekday(date) { return (new Date(date)).getDay()+1; }
    function yearserial(date) { return (new Date(date)).getFullYear(); }
    var date = year instanceof Date ? year.valueOf() : typeof year === "string" ? new Date(year).valueOf() : dateserial(year,month,day), 
        date2 = dateserial(yearserial(date - serial(weekday(date-serial(1))) + serial(4)),1,3);
    if (~~((date - date2 + serial(weekday(date2) + 5))/ serial(7)) % 2 === 0) {return "TYDZIEŃ PARZYSTY"}
    else {return "TYDZIEŃ NIEPARZYSTY"};
    
}

var hour = today.getHours();
if (hour < 10) hour = "0" + hour;
var minute = today.getMinutes();
if (minute < 10) minute = "0" + minute;
var second = today.getSeconds();
if (second < 10) second = "0" + second;



document.getElementById("time").innerHTML = dayofweek + " " + day + "/" + month + "/" + year + " "+ hour + ":" + minute + ":" + second +  "   " + week(today)

setTimeout("getToday()",1000);

}

