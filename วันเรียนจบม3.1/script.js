
const graduationDate = new Date('2025-02-21');

function updateCountdown() {
    const today = new Date();
    const timeDifference = graduationDate - today;

    
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');

    if (daysRemaining > 0) {
        countdownElement.textContent = {daysRemaining} ;
        messageElement.textContent = "เตรียมตัวให้พร้อม!";
    } else if (daysRemaining === 0) {
        countdownElement.textContent = "วันนี้คือวันเรียนจบของม.3/1 🎉";
        messageElement.textContent = "ยินดีด้วยกับความสำเร็จ!";
    } else {
        countdownElement.textContent = "คุณเรียนจบไปแล้ว! 🎓";
        messageElement.textContent = "ยินดีด้วยกับความสำเร็จของม.3/1";
    }
}


setInterval(updateCountdown, 1000);
updateCountdown();


setInterval(updateCountdown, 1000);
updateCountdown();