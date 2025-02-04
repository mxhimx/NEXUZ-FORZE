document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const streakElement = document.getElementById('streak');
    const resetStreakButton = document.getElementById('resetStreak');

    let streak = localStorage.getItem('streak') ? parseInt(localStorage.getItem('streak')) : 0;
    streakElement.textContent = streak;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                streak++;
                localStorage.setItem('streak', streak);
                streakElement.textContent = streak;
            } else {
                streak--;
                localStorage.setItem('streak', streak);
                streakElement.textContent = streak;
            }
        });
    });

    resetStreakButton.addEventListener('click', function() {
        streak = 0;
        localStorage.setItem('streak', streak);
        streakElement.textContent = streak;
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    });
});