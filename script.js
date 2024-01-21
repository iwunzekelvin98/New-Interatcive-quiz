document.addEventListener("DOMContentLoaded", ()=> {
    const quizContainer = document.getElementById('quiz-container');
    const optionElements = document.querySelectorAll('.quiz-options');

    optionElements.forEach(option => {
        option.addEventListener('click', () => {
            console.log(option.textContent);
        });
        option.addEventListener('mouseover', () => {
            option.style.backgroundColor = '#FCBB65';
        });
        option.addEventListener('mouseout', () => {
            option.style.backgroundColor = '';
        });
        option.addEventListener('click', (Skin) => {
            option.style.backgroundColor = '#00FF00'
        })

    }); 

});




