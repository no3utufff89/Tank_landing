import { pageElements } from './pageElements.js';
const { modalSelectList, colorsList, carVariansBtns, carModelTitle, carPreviewImage } =
    pageElements();
const createSelectListRow = ({ title }) => {
    const rowElement = document.createElement('li');
    rowElement.classList.add('select-list__item');
    rowElement.textContent = title;
    return rowElement;
};

export const getCarDetails = data => {
    const carTitle = data.find(item => item.id === +localStorage.getItem('selectedModel')).title;

    return carTitle;
};

const createColorsListElement = ({ colorValue, colorName, image, first }) => {
    const colorsListElement = document.createElement('li');
    colorsListElement.classList.add('colors-list__item');

    const colorBtn = document.createElement('button');

    if (!first) {
        colorBtn.classList.add('btn', 'colors-list__btn');
    } else {
        colorBtn.classList.add('btn', 'colors-list__btn', 'active');
    }
    colorBtn.setAttribute('aria-label', `${colorName} color button`);
    colorBtn.setAttribute('type', 'button');
    colorBtn.setAttribute('data-image', image);
    colorBtn.style.backgroundColor = colorValue;
    colorsListElement.append(colorBtn);

    return colorsListElement;
};
export const renderCarDetails = data => {
    const currentCarId = +localStorage.getItem('selectedModel');

    const selectedCar = data.find(car => car.id === currentCarId);
    selectedCar.colors.map(item => {
        colorsList.append(createColorsListElement(item));
    });
    const defaultImage = selectedCar.colors.find(item => item.first === true);
    const imageParrent = document.querySelector('.preview__image');
    const currentImg = imageParrent.querySelector('img');
    currentImg.src = `img/cars/${defaultImage.image}`;
};
export const loadDefault = data => {
    const selectedCar = localStorage.getItem('selectedModel');

    if (!selectedCar) {
        localStorage.setItem('selectedModel', carVariansBtns[0].getAttribute('data-id'));
        carVariansBtns[0].classList.add('active');
        carModelTitle.textContent = getCarDetails(data);
    } else {
        carVariansBtns.find(item => {
            if (item.getAttribute('data-id') === selectedCar) {
                item.classList.add('active');
                carModelTitle.textContent = getCarDetails(data);
            }
        });
    }
    renderCarDetails(data);
};

export function builder(data) {
    data.map(item => {
        modalSelectList.append(createSelectListRow(item));
    });
    loadDefault(data);
}
