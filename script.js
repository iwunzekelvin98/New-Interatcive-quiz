document.addEventListener("DOMContentLoaded", function () {
    const quizContainer = document.getElementById('quiz-container');
    const optionElements = document.querySelectorAll('.quiz-options');

    optionElements.forEach(option => {
        option.addEventListener('click', () => {

            console.log(option.textContent);
        });

    }); 

});




