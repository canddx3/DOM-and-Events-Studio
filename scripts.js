// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', () => {
    const status = document.getElementById('flightStatus');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const background = document.getElementById('shuttleBackground');
    
    //direction btns
    const left = document.getElementById('left');
    const right = document.getElementById('right');
    const up = document.getElementById('up');
    const down = document.getElementById('down');

    // buttons
    const takeOffBtn = document.getElementById('takeoff');
    const landBtn = document.getElementById('landing');
    const abortBtn = document.getElementById('missionAbort');

    const rocket = document.getElementById('rocket');

takeOffBtn.addEventListener('click', () => {
    const response = confirm('Ready for takeoff');
    if (response) {
        status.innerText = 'shuttle in flight';
        const currentHeight = Number(shuttleHeight.innerText);
        shuttleHeight.innerText = currentHeight + 10000;
        background.style.backgroundColor = 'blue';
    }
});

landBtn.addEventListener('click', () => {
    const response = alert('the shuttle is landing. landing gear engaged.');
    status.innerText = 'the shuttle has landed';
    background.style.backgroundColor = 'green';
    shuttleHeight.innerText = '0';
});

abortBtn.addEventListener('click', () => {
    const response = confirm('abort confirmed');
    if (response) {
        status.innerText = 'Mission aborted';
        background.style.backgroundColor = 'black';
        shuttleHeight.innerText = '0';
    }
})
});