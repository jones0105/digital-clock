var newdate = new Date();
console.log(newdate);
var getdate = document.getElementById("date");
console.log(getdate);
var getmonth = document.getElementById("month");
console.log(getmonth);
var getyear = document.getElementById("year");
console.log(getyear);
var totaldays = ["sunday", "monday", "thesday", "wenasday", "thurday", "friday", "staurday"];
console.log(totaldays);
function displayyear() {
    var date = document.getElementById("date");
    var newdate = new Date();
    var datedisplay = newdate.getDate();
    var monthdisplay = newdate.getMonth() + 1;
    var yeardisplay = newdate.getFullYear();
    console.log(datedisplay);
    console.log(monthdisplay);
    console.log(yeardisplay);
    getdate.innerHTML =datedisplay;
    getmonth.innerHTML = "0" + monthdisplay;
    getyear.innerHTML = yeardisplay;
}
 function displayTime() {

    var amget = document.getElementById('am');
    console.log(amget);
    var pmget = document.getElementById('pm');
    console.log(amget);
    var datetime = new Date();
    var hr = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    if (hr > 12) {
        hr = hr - 12;
        pmget.style.backgroundColor = "yellow";
    }
    else {
        pmget.style.backgroundColor = "yellow";
    }
    document.getElementById("houers").innerHTML = zero(hr);
    document.getElementById("minitus").innerHTML = zero(min);
    document.getElementById("seconds").innerHTML = zero(sec);
    displayyear();
    displayday();
}
function zero(num) {
    return num < 10 ? "0" + num : num;
}

//day find
var sunday = document.getElementById("sun");
console.log(sunday);
var monday = document.getElementById("mun");
console.log(monday);
var thueshday = document.getElementById("thu");
console.log(thueshday);
var wenshday = document.getElementById("wed");
console.log(wenshday);
var thurday = document.getElementById("thues");
console.log(thurday);
var friday = document.getElementById("fri");
console.log(friday);
var saturday = document.getElementById("sat");
console.log(saturday);

function displayday() {
    
    var dats = new Date();
    var day = dats.getDay();
    console.log(day);

    // console.log(day);
    if (totaldays[day] == "sunday") {
        sunday.style.backgroundColor = "yellow";
    }
    else{
        sunday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "monday") {
        monday.style.backgroundColor = "yellow";
    }
    else{
        monday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "thesday") {
        thueshday.style.backgroundColor = "yellow";
    }
    else{
        thueshday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "wenasday") {
        wenshday.style.backgroundColor = "yellow";
    }
    else{
        wenshday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "thurday") {
        thurday.style.backgroundColor = "yellow";
    }
    else{
        thurday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "friday") {
        friday.style.backgroundColor = "yellow";
    }
    else{
        friday.style.backgroundColor = "white";
    }
    if (totaldays[day] == "staurday") {
        saturday.style.backgroundColor = "yellow";
    }
    else{
        saturday.style.backgroundColor = "white";
    }


}
displayday()

setInterval(displayTime, 500)