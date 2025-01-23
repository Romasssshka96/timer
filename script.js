const deadLine = '2025-02-01T11:59:59.999'

function getTimeValues (finish){
    const difference = Date.parse(finish) - Date.parse(new Date());
    const days = Math.floor(difference/(1000*60*60*24));
    const hours = Math.floor((difference/(1000*60*60)%24));
    const minutes = Math.floor((difference/1000/60)%60);
    const seconds = Math.floor((difference/1000)%60);

    return{
        'total': difference,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds,
    }
}


function setTimer (selector, finish){
    const timer = document.querySelector('.timer')
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds =timer.querySelector('#seconds');
    const interval = setInterval(refreshClock, 1000)

    function refreshClock (){
        const difference = getTimeValues(finish);

        days.innerHTML = difference.days;
        hours.innerHTML = difference.hours;
        minutes.innerHTML = difference.minutes;
        seconds.innerHTML = difference.seconds;

        if(difference.total <=0){
            clearInterval(interval)
        }
    }
}

setTimer('.timer', deadLine)



console.log(new Date())
