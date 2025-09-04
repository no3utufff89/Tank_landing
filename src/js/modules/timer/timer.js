class CountdownTimer {
    constructor(deadline, onUpdate, onComplete) {
        if (!(deadline instanceof Date)) {
            throw new Error('`deadline` должен быть объектом Date.');
        }

        this.deadline = deadline;
        this.onUpdate = onUpdate;
        this.onComplete = onComplete;
        this.timerId = null;

        this.start();
    }

    // Склонение числительных для отображения корректной формы слова
    static declensionNum(num, words) {
        return words[
            num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
        ];
    }

    // Запуск таймера
    start = () => {
        this.update();
        this.timerId = setInterval(this.update, 1000);
    };

    // Остановка таймера
    stop = () => {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    };

    // Вычисление оставшегося времени
    calculateTime = () => {
        const now = new Date();
        const diff = Math.max(0, this.deadline - now);

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
            diff,
        };
    };

    // Форматирование чисел с ведущим нулём
    formatTime = value => String(value).padStart(2, '0');

    // Обновление данных таймера
    update = () => {
        const { days, hours, minutes, seconds, diff } = this.calculateTime();

        const formattedTime = {
            days: this.formatTime(days),
            hours: this.formatTime(hours),
            minutes: this.formatTime(minutes),
            seconds: this.formatTime(seconds),
            daysTitle: CountdownTimer.declensionNum(days, ['день', 'дня', 'дней']),
            hoursTitle: CountdownTimer.declensionNum(hours, ['час', 'часа', 'часов']),
            minutesTitle: CountdownTimer.declensionNum(minutes, ['минута', 'минуты', 'минут']),
            secondsTitle: CountdownTimer.declensionNum(seconds, ['секунда', 'секунды', 'секунд']),
        };

        // Callback при обновлении
        this.onUpdate?.(formattedTime);

        // Остановка таймера по завершении
        if (diff === 0) {
            this.stop();
            this.onComplete?.();
        }
    };
}

export const countDownTimer = () => {
    const elDays = document.querySelector('.timer__days');
    const elDaysText = document.querySelector('.timer__days-text');
    const elHours = document.querySelector('.timer__hours');
    const elHoursText = document.querySelector('.timer__hours-text');
    const elMinutes = document.querySelector('.timer__minutes');
    const elMinutesText = document.querySelector('.timer__minutes-text');
    const elSeconds = document.querySelector('.timer__seconds');
    const elSecondsText = document.querySelector('.timer__seconds-text');
    // Конечная дата
    const now = new Date();
    const deadline = new Date(
        `${now.getFullYear() + 1}`,
        `${now.getMonth()}`,
        `${now.getDate() + 10}`
    );

    // Создание нового таймера
    const timer = new CountdownTimer(deadline, time => {
        elDays.textContent = time.days;
        elHours.textContent = time.hours;
        elMinutes.textContent = time.minutes;
        elSeconds.textContent = time.seconds;

        elDaysText.textContent = time.daysTitle;
        elHoursText.textContent = time.hoursTitle;
        elMinutesText.textContent = time.minutesTitle;
        elSecondsText.textContent = time.secondsTitle;
    });
};
