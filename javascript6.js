console.log("Welcome to Alarm clock");
let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const alarm = document.getElementById("alarm");
    const alarmDate = new Date(alarm.value);
    console.log(alarmDate);
    let alertBox=document.getElementById("alertBox");
    alertBox.innerHTML=`<div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong>Congratulations!</strong> You have set the alarm successfully for ${alarmDate}.
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`
    console.log(`Setting alarm for.....${alarmDate}`);
    let now = new Date();
    let secondDiff = alarmDate - now;
    console.log(secondDiff);
    function alarmTick() {
        var audio = new Audio('https://mobcup.net/ringtone/veer-zaara-movie-ysakxs5a');
        audio.play();
         setInterval(() => {
             var audio = new Audio('https://mobcup.net/ringtone/veer-zaara-movie-ysakxs5a');
             audio.play();
         }, 15000);
    }
    if (secondDiff >= 0) {

        setTimeout(alarmTick,secondDiff);
    }

});

