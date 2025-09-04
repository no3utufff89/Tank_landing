export const fromControl = ({
    modalForm,
    modalSubmitBtn,
    errorTextModel,
    errorTextPhone,
    modalCheckbox,
    checkboxText,
}) => {
    modalSubmitBtn.addEventListener('click', e => {
        e.preventDefault();
        const modelSelect = document.querySelector('.modal-form__select');
        const phoneInput = document.querySelector('.modal-form__phone');
        let isValid = true;
        [errorTextModel, errorTextPhone].forEach(errorField => {
            errorField.textContent = '';
        });

        if (modelSelect.value === '') {
            errorTextModel.textContent = 'Заполните поле';
            isValid = false;
        }

        if (phoneInput.value === '') {
            errorTextPhone.textContent = 'Заполните поле';
            isValid = false;
        }
        if (modalCheckbox.checked !== true) {
            checkboxText.querySelector('span').style.color = '#ff9549';
            isValid = false;
        }
        if (isValid) {
            modalForm.submit();
        }
    });
};
