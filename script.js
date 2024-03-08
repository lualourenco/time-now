function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var hour = data.getHours();
    var minute = data.getMinutes();
    var formattedHour = hour < 10 ? '0' + hour : hour;
    var formattedMinute = minute < 10 ? '0' + minute : minute;
    msg.innerHTML = `It's ${formattedHour}:${formattedMinute}.`;

    if (hour >= 0 && hour < 12) {
        // Good Morning!
        img.src = './photos/morning.jpg';
        document.body.style.backgroundColor = '#e2cd9f';
    } else if (hour >= 12 && hour < 18) {
        // Good Afternoon!
        img.src = './photos/afternoon.jpg';
        document.body.style.backgroundColor = '#b9846f';
    } else {
        // Good evening!
        img.src = './photos/evening.jpg';
        document.body.style.backgroundColor = '#515154';
    }
}

window.onload = load;

