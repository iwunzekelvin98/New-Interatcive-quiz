document.addEventListener("DOMContentLoaded", () => {
    const optionsList = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const previousButton = document.getElementById('previous-button');

    let currentQuestion = 0;
    let quizData;

    fetch('quizData.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuestion(currentQuestion);
        })
        .catch(error => console.error('Error Fetching the Quiz Data', error));

    function displayQuestion(questionIndex) {
        const currentQuizData = quizData[questionIndex];
        const questionElement = document.getElementById('question');

        questionElement.textContent = currentQuizData.question;

        // Clear previous options
        optionsList.innerHTML = '';

        // Create new options
        currentQuizData.options.forEach((option, index) => {
            const li = document.createElement('li');
            li.className = 'quiz-option';
            li.textContent = String.fromCharCode(65 + index) + ') ' + option;
            optionsList.appendChild(li);
        });
    }

    function checkAnswer(selectedOption) {
        if (!quizData) {
            console.error('Quiz data not loaded yet');
            return;
        }
    
        const correctAnswer = quizData[currentQuestion].correctAnswer;
    
        optionsList.querySelectorAll('.quiz-option').forEach(option => {
            const optionText = option.textContent.trim().slice(3); // Extract option text
            if (optionText === selectedOption) {
                if (selectedOption === correctAnswer) {
                    option.style.backgroundColor = '#00FF00'; // Green for correct answer
                } else {
                    option.style.backgroundColor = '#FF0000'; // Red for incorrect answer 
                }
            }
        });
    }
    
    optionsList.addEventListener('click', (event) => {
        const selectedOption = event.target.textContent.trim().slice(3); // Extract option text
        checkAnswer(selectedOption);
    });
    
    optionsList.addEventListener('mouseover', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = '#FCBB65';
        }
    });
    
    optionsList.addEventListener('mouseout', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.backgroundColor = '';
        }
    });
    
    previousButton.addEventListener('click', () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            displayQuestion(currentQuestion);
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentQuestion < quizData.length - 1) {
            currentQuestion++;
            displayQuestion(currentQuestion);
        }
    });

});
