let interval = setTimeout(update_clock, 0);
function update_clock() {
    const date = new Date();
    let output = "";
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    output += (hours < 10) ? "0" + hours + ":": hours + ':';
    output += (minutes < 10) ? "0" + minutes + ':':minutes + ':';
    output += (seconds < 10) ? '0' + seconds: seconds;
    document.getElementById("clock").innerHTML = output;
}
setInterval(update_clock, 1000);
