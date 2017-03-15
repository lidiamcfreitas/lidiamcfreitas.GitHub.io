(function($) {
    "use strict"; // Start of use strict
    
    var bigTime = 1499; // time in seconds
        var mode = "normal";
        var animation = "fadeToBlack";

        var color = "0D5B85";
        var percent;

        var mins;
        var secs;

        var countdownID;

        // get all the elements
        var minutes = document.getElementById("minutes");
        var seconds = document.getElementById("seconds");
        var message = document.getElementById("message");

        var test = document.getElementById("test");

        // register the buttons
        var start = document.getElementById("start");
        start.addEventListener("click", startTimer, false);  

        var stop = document.getElementById("stop");
        stop.addEventListener("click", stopTimer, false);

        var reset = document.getElementById("reset");  
        reset.addEventListener("click", resetTimer, false);

        // COUNTER ========================================================
        function counter() {

          // calculate the minutes and seconds from bigTime
          mins = Math.floor(bigTime / 60);
          secs = bigTime - mins * 60;

          // change the HTML to show new minutes and seconds
          minutes.innerHTML = (mins < 10 ? '0' : '') + mins;
          seconds.innerHTML = (secs < 10 ? '0' : '') + secs;

          // handle the animations
            var divisor = 300;

            percent = secs / divisor;
            color = shadeColor(color, -percent);
            document.body.style.background = "#" + color;
            test.innerHTML = color;
            divisor - 100;

          // change the message at 00
          if (secs == 0) {
            message.innerHTML = "change out the messages";
          }

          // switch modes if timer ends
          if (bigTime == 0) {

            if (mode == "normal") {

              // cooldown is 5min 
              mode = "cooldown";    
              bigTime = 300;

            } else if (mode == "cooldown") {

              // switch back to normal 25min mode
              mode = "normal";    
              bigTime = 1499;  

              minutes.innerHTML = "25";
              seconds.innerHTML = "00";

              document.body.style.background = "#" + color;

              // show start button
              start.style.display = "block"; 
              stop.style.display = "none"; 
              reset.style.display = "none"; 

              // stop timer
              clearInterval(countdownID);
            }    

          } else {
            // decrement
            bigTime = bigTime - 1; 
          }

        }

        // ACTIONS =======================================================

        // start timer
        function startTimer() {
          // start timer
          countdownID = setInterval("counter()", 1000);

          // show message
          message.innerHTML = "slow and steady wins something";

          // show stop button
          start.style.display = "none"; 
          stop.style.display = "block"; 
          reset.style.display = "none"; 
        } 

        // stop timer
        function stopTimer() {
          // change message
          message.innerHTML = "why are you such a quitter";

          // stop timer
          clearInterval(countdownID);

          // show reset button
          start.style.display = "none"; 
          stop.style.display = "none"; 
          reset.style.display = "block"; 
        }

        // reset timer
        function resetTimer() {
          // reset big time
          bigTime = 1499;

          // change message
          message.innerHTML = "keep up the good work";

          // show start button
          start.style.display = "block"; 
          stop.style.display = "none"; 
          reset.style.display = "none"; 
        }

        // ANIMATIONS ================================================ 
        function fadeToBlack() {

        }

        function colorChange() {

        }

        // HELPER FUNCTIONS ============================================ 
        function shadeColor(color, percent) {   
            var num = parseInt(color,16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            B = (num >> 8 & 0x00FF) + amt,
            G = (num & 0x0000FF) + amt;
            return (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
        }

    $(".header-collapse").click(function () {

    $header = $(this);
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $("#btn-pomodoro").text(function () {
            //change text based on condition
            return $content.is(":visible") ? "Hide Pomodoro" : "Click for Pomodoro!";
        });
    });

});
    
})(jQuery); 