// Main function that runs as soon as the page is loaded
window.onload = function () {
  
    let minutes = 00;  
    let seconds = 00; 
    let miliseconds = 00; 
    let appendMili = document.getElementById("miliseconds");
    let appendSeconds = document.getElementById("seconds");
    let appendMinutes = document.getElementById("minutes");
    let buttonStart = document.getElementById('button-start');
    let buttonStop = document.getElementById('button-stop');
    let buttonReset = document.getElementById('button-reset');
    let Interval ;
    let start = false;
  
    buttonStop.style.display="none"  


    buttonStart.onclick = function() {
      document.getElementById('button-stop').style.display="inline"
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
      buttonStop.onclick = function() {
         clearInterval(Interval);
    }
    
  
    buttonReset.onclick = function() {
      document.getElementById('button-stop').style.display="none"
      clearInterval(Interval);
      buttonStop.innerHTML = "Stop"
      miliseconds = "00";
        seconds = "00";
          minutes = "00";
      appendMili.innerHTML = miliseconds;
        appendSeconds.innerHTML = seconds;
          appendMinutes.innerHTML = minutes;
    }
    
     
    
    function startTimer () {
      miliseconds++; 
      start = true;
      buttonStop.innerHTML = "Pause";
      
      if(miliseconds <= 9){
        appendMili.innerHTML = "0" + miliseconds;
      }
      
      if (miliseconds > 9){
        appendMili.innerHTML = miliseconds;  
      } 
      
      if (miliseconds > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        miliseconds = 0;
        appendMili.innerHTML = "0" + 0;
      }
      

      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }

      if (seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + seconds;
      }


      if (minutes > 9){
        appendMinutes.innerHTML = minutes;
      }
    
    }
    
  
  }