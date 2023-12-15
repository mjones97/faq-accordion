let questionContainers = document.querySelectorAll('.question-container');

questionContainers.forEach(container => {
    container.addEventListener('click', () => {
        let answer = container.nextElementSibling;
        answer.classList.toggle('d-none');

        let iconPlus = container.querySelector('.icon-plus');
        let iconMinus = container.querySelector('.icon-minus');

        iconPlus.classList.toggle('d-none');
        iconMinus.classList.toggle('d-none');
    });
});