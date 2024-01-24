document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById('quiz-container');
    const optionElements = document.querySelectorAll('.quiz-options');
    const navigationButtons = document.getElementById('navigation-buttons') 
    const nextButton = document.getElementById('next-button')
    const previousButton = document.getElementById('previous-button')

    let currentQuestion = 0;
    let quizData;

    fetch(quizData.json)
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuestion(currentQuestion);
        })
        .catch(error => console.error('Error Fetching the Quiz Data', error));

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
    function displayQuestion(){


    };
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
        previousButton.addEventListener('mouseover', () => {
            previousButton.style.backgroundColor = '#FCBB65'; 
        });
         previousButton.addEventListener('mouseout', () => {
            previousButton.style.backgroundColor = '';
        });
        nextButton.addEventListener('mouseover', () => {
            nextButton.style.backgroundColor = '#FCBB65';
        });
        nextButton.addEventListener('mouseout', () => {
            nextButton.style.backgroundColor = '';
        });
    
});




