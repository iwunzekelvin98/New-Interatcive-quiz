document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz-container');
    const optionElements = document.querySelectorAll('.quiz-options');

    optionElements.forEach(option => {
        option.addEventListener('click', () => {
            checkAnswer(option.textContent);
        });
        option.addEventListener('mouseover', () => {
            option.style.backgroundColor = '#FCBB65';
        });
        option.addEventListener('mouseout', () => {
            option.style.backgroundColor = '';
        });
    });

    function checkAnswer(selectedOption) {
        const correctAnswer = 'C) Skin';
       optionElements.forEach(option => {
            if (option.textContent.trim() === selectedOption) {
                if (selectedOption === correctAnswer) {
                    option.style.backgroundColor = '#00FF00'; // Green for correct answer
                } else {
                    option.style.backgroundColor = '#FF0000'; // Red for incorrect answer 
                }
             };
        });
    }; 
});




