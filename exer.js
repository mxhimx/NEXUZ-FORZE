document.addEventListener('DOMContentLoaded', function () {
    const timerElement = document.getElementById('timer');
    const startTimerButton = document.getElementById('startTimer');
    const resetTimerButton = document.getElementById('resetTimer');
    const exerciseElement = document.getElementById('exercise');
    const completeExerciseButton = document.getElementById('completeExercise');
    const streakElement = document.getElementById('streak');

    let studyTime = 25 * 60; // 25 minutes in seconds
    let timerInterval;
    let streak = localStorage.getItem('exerciseStreak') ? parseInt(localStorage.getItem('exerciseStreak')) : 0;
    streakElement.textContent = streak;

    const exercises = [
        "Stretching",
        "10 Push-ups",
        "20 Jumping Jacks",
        "5-minute Walk",
        "Deep Breathing",
        "Arm Circles",
        "Squats"
    ];

    // Function to start the study timer
    function startTimer() {
        timerInterval = setInterval(() => {
            studyTime--;
            const minutes = Math.floor(studyTime / 60);
            const seconds = studyTime % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            if (studyTime <= 0) {
                clearInterval(timerInterval);
                alert("Time for an exercise break!");
                suggestExercise();
            }
        }, 1000);
    }

    // Function to reset the timer
    function resetTimer() {
        clearInterval(timerInterval);
        studyTime = 25 * 60;
        timerElement.textContent = "25:00";
    }

    // Function to suggest a random exercise
    function suggestExercise() {
        const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
        exerciseElement.textContent = randomExercise;
    }

    // Function to complete an exercise and increase streak
    function completeExercise() {
        streak++;
        localStorage.setItem('exerciseStreak', streak);
        streakElement.textContent = streak;
        alert("Great job! Keep it up!");
        resetTimer();
    }

    // Event Listeners
    startTimerButton.addEventListener('click', startTimer);
    resetTimerButton.addEventListener('click', resetTimer);
    completeExerciseButton.addEventListener('click', completeExercise);
});