(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDownDate = new Date("Jun 13, 2022 10:00:00").getTime();
    const x = setInterval(function() {

            const now = new Date().getTime();
            const distance = countDownDate - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)).toString(),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)).toString(),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)).toString(),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second).toString();

            //do something later when date is reached
            if (distance < 0) {
                document.getElementById("headline").innerText = "Open!!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());