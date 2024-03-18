function load() {
    updateTime();
    updateMessageAndImage();
}

function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById('current-time').innerText = formattedTime;
}

function updateMessageAndImage() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var msgElement = document.getElementById('msg');
    var imageElement = document.getElementById('image');
    var imageSrc = '';
    var message = '';

    if (hours >= 5 && hours < 12) {
        message = 'Good morning!';
        imageSrc = './photos/morning.jpg';
    } else if (hours >= 12 && hours < 18) {
        message = 'Good afternoon!';
        imageSrc = './photos/afternoon.jpg';
    } else {
        message = 'Good evening!';
        imageSrc = './photos/evening.jpg';
    }

    msgElement.innerText = message;
    imageElement.innerHTML = '<img src="' + imageSrc + '" alt="' + message + '">';
}

// Atualizar a hora a cada segundo
setInterval(function() {
    updateTime();
}, 1000);
