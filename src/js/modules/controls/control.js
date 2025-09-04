import { getCarDetails, loadDefault, renderCarDetails } from '../builder.js';
import { pageElements } from '../pageElements.js';
import { colorChangeControl } from './btnsControl.js';
export function modalControl() {
    const { modalSelectList, modalFormOption, modalFormBtn, modalForm, modalFormSelect } =
        pageElements();
    modalFormSelect.addEventListener('click', () => {
        const listHeight = modalSelectList.scrollHeight;
        modalFormSelect.classList.toggle('active');
        if (modalFormSelect.classList.contains('active')) {
            modalSelectList.style.height = `${listHeight}px`;
            modalSelectList.style.opacity = 1;
        } else {
            modalSelectList.style.height = '';
            modalSelectList.style.opacity = 0;
        }
    });
    modalSelectList.addEventListener('click', e => {
        const target = e.target;
        modalFormOption.value = target.innerText;
        modalFormOption.innerText = target.innerText;
        modalFormSelect.classList.remove('active');
        modalSelectList.style.height = '';
        modalSelectList.style.opacity = 0;
    });
    modalFormBtn.addEventListener('click', e => {
        e.preventDefault();
        const formData = new FormData(modalForm);
        const product = Object.fromEntries(formData);
        console.log(product);
    });
}

export function carSelect(data) {
    const { carVariansBtns, carModelTitle, colorsList } = pageElements();

    carVariansBtns.forEach((item, index) => {
        item.addEventListener('click', () => {
            for (let i = 0; i < carVariansBtns.length; i += 1) {
                if (index === i) {
                    carVariansBtns[i].classList.add('active');
                    const selectedCarId = carVariansBtns[i].getAttribute('data-id');

                    localStorage.setItem('selectedModel', selectedCarId);

                    carModelTitle.textContent = getCarDetails(data);
                    colorsList.textContent = '';
                    renderCarDetails(data);
                } else {
                    carVariansBtns[i].classList.remove('active');
                }
            }
            colorChangeControl();
        });
    });
}
