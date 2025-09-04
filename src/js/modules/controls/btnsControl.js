export function colorChangeControl() {
    const colorChangeBtn = [...document.querySelectorAll('.colors-list__btn')];
    const imageParrent = document.querySelector('.preview__image');
    const currentImg = imageParrent.querySelector('img');

    colorChangeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            currentImg.src = `img/cars/${btn.getAttribute('data-image')}`;

            for (let i = 0; i < colorChangeBtn.length; i += 1) {
                if (index === i) {
                    colorChangeBtn[i].classList.toggle('active');
                } else {
                    colorChangeBtn[i].classList.remove('active');
                }
            }
        });
    });
}
function openModal(overlay) {
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
}
export function overlayControl({ overlay, modalCloseBtn, actionElements }) {
    overlay.addEventListener('click', e => {
        const target = e.target;
        if (target === overlay) {
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
        if (target === modalCloseBtn.querySelector('svg')) {
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    actionElements.forEach(item => {
        item.addEventListener('click', () => {
            openModal(overlay);
        });
    });
}
