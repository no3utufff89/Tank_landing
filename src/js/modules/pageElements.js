export function pageElements() {
    const modal = document.querySelector('.modal');
    const modalForm = document.querySelector('.modal-form');
    const modalFormOption = document.querySelector('.modal-form__select-option');
    const modalFormBtn = document.querySelector('.modal-form__btn');
    //select-list
    const selectElems = document.querySelectorAll('.select-list__item');
    const modalFormSelect = document.querySelector('.modal-form__select');
    const modalSelectList = document.querySelector('.select-list');
    //car-variants
    const carVariansBtns = [...document.querySelectorAll('.cars-variants__btn')];
    //car-info actions
    const carModelTitle = document.querySelector('.offer__car-title');
    //car-colors
    const colorsList = document.querySelector('.colors-list');
    const carPreviewImage = document.querySelector('.preview__image');
    //open-modal
    const actionElements = document.querySelectorAll('.action-elem');
    const overlay = document.querySelector('.overlay');
    const modalCloseBtn = document.querySelector('.modal__close-btn');
    const modalSubmitBtn = document.querySelector('.modal-form__btn');
    const errorTextModel = document.querySelector('.modal-form__error-text-model');
    const errorTextPhone = document.querySelector('.modal-form__error-text-phone');
    const modalCheckbox = document.querySelector('.modal-form__checkbox');
    const checkboxText = document.querySelector('.modal-form__label_agreement');
    return {
        modal,
        modalForm,
        modalSelectList,
        modalFormSelect,
        modalFormOption,
        modalFormBtn,
        selectElems,
        carVariansBtns,
        carModelTitle,
        colorsList,
        carPreviewImage,
        actionElements,
        overlay,
        modalCloseBtn,
        modalSubmitBtn,
        errorTextModel,
        errorTextPhone,
        modalCheckbox,
        checkboxText,
    };
}
