window.onload = function () {
    let minutes = 00;
    let seconds = 00;
    let miliseconds = 00;
    let appendMiliseconds = document.getElementById("miliseconds");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById("start");
    let buttonStop = document.getElementById("stop");
    let buttonReset = document.getElementById("reset");
    let interval;

        buttonStart.onclick = function() {
            clearInterval(interval);
            interval = setInterval(startTimer, 10);
        }

        buttonStop.onclick = function() {
            clearInterval(interval);
        }

        buttonReset.onclick = function() {
            clearInterval(interval);
            miliseconds = "00";
            seconds = "00";
            minutes = "00";
            appendMiliseconds.innerHTML = miliseconds;
            appendSeconds.innerHTML = seconds;
            appendMinutes.innerHTML = minutes;
        }

        function startTimer(){
            miliseconds++;

            if(miliseconds <= 9){
                appendMiliseconds.innerHTML = "0" + miliseconds;
            }

            if(miliseconds > 9){
                appendMiliseconds.innerHTML = miliseconds;
            }

            if(miliseconds > 99) {
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                miliseconds = 0;
                appendMiliseconds.innerHTML = "0" + 0;
            }

            if(seconds > 9) {
                appendSeconds.innerHTML = seconds;
            }

            if(seconds > 60) {
                minutes++;
                appendSeconds.innerHTML = "0" + seconds;
                seconds = 0
                appendMinutes.innerHTML = "0" + minutes;
            }
        }

        

}