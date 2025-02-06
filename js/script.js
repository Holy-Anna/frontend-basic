$(function () {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1500,
        values: [39, 1230],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});


const shop_link = document.querySelector('.shop_link');
const span_planet = document.querySelector('.span_planet');

shop_link.addEventListener('mouseover', () => {
    span_planet.style.color = '#ffffff';
    span_planet.style.webkitTextStroke = '2.5px #46A358';
});

shop_link.addEventListener('mouseout', () => {
    span_planet.style.color = '#46A358';
    span_planet.style.webkitTextStroke = '2.5px transparent';
});



const btn = document.querySelector('.js-burger-menu-btn');
const menu = document.querySelector('.js-menu');

btn.addEventListener("click", () => {
  btn.classList.toggle('active'); // Переключает класс 'active' у кнопки
  menu.classList.toggle('active'); // Переключает класс 'active' у меню
});


const menuBtn = document.querySelector('.js-menu-btn');
const submenu = document.querySelector('.js-submenu');

menuBtn.addEventListener("click", () => {
  submenu.classList.toggle('active'); // Переключает класс 'active' у меню
});


const submenuBtn = document.querySelector('.js-submenu-btn');
const subSubmenu = document.querySelector('.js-sub-submenu');

submenuBtn.addEventListener("click", () => {
    subSubmenu.classList.toggle('active');
});




const filtersButton = document.querySelector('.filters-btn');

// Добавляем обработчик события клика
filtersButton.addEventListener('click', () => {
    // Находим элементы
    const leftBox = document.querySelector('.left-box');
    const itemList = document.querySelector('.item-list');
    const items = document.querySelectorAll('.item');

    // Проверяем текущее состояние блока .left-box
    if (leftBox && leftBox.style.display === 'block') {
        // Отменяем изменения
        leftBox.style.display = ''; // Возвращаем значение по умолчанию
        if (itemList) {
            itemList.style.width = '';
            itemList.style.alignSelf = ''; // Убираем align-self
        }
        items.forEach(item => {
            item.style.width = ''; // Сбрасываем ширину
        });
    } else {
        // Применяем изменения в зависимости от ширины экрана
        const screenWidth = window.innerWidth;

        if (leftBox) {
            leftBox.style.display = 'block';
        }

        if (itemList) {
            if (screenWidth <= 575) {
                itemList.style.width = '100%';
                itemList.style.alignSelf = 'center'; // Устанавливаем align-self
            } else if (screenWidth <= 840) {
                itemList.style.width = '70%';
                itemList.style.alignSelf = 'flex-end'; // Устанавливаем align-self
            } else if (screenWidth <= 991) {
                itemList.style.width = '75%';
                itemList.style.alignSelf = 'flex-end';
            }
        }

        items.forEach(item => {
            if (screenWidth <= 840) {
                item.style.width = '50%';
            } else if (screenWidth <= 991) {
                item.style.width = '33.333%';
            }
        });
    }
});






document.querySelector('.next-btn').addEventListener('click', function () {


    // Изменить стили .next-btn path
    const nextBtnPath = document.querySelector('.next-btn path');
    if (nextBtnPath) {
        nextBtnPath.style.fill = '#dedede';
        nextBtnPath.style.stroke = '#dedede';
    }

    // Изменить стили .previous-btn и .previous-btn path
    const previousBtn = document.querySelector('.previous-btn');
    if (previousBtn) {
        previousBtn.style.boxShadow = '0 0 10px #dfdfdf85';

        const previousBtnPath = previousBtn.querySelector('path');
        if (previousBtnPath) {
            previousBtnPath.style.fill = '#93c69a';
            previousBtnPath.style.stroke = '#93c69a';
        }
    }

    // Изменить стиль .next-btn, чтобы убрать box-shadow
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.style.boxShadow = 'none';
    }
});



document.querySelector('.previous-btn').addEventListener('click', function () {
    // Изменить стили .next-btn path обратно
    const nextBtnPath = document.querySelector('.next-btn path');
    if (nextBtnPath) {
        nextBtnPath.style.fill = ''; // Оставить стиль по умолчанию
        nextBtnPath.style.stroke = ''; // Оставить стиль по умолчанию
    }

    // Изменить стили .previous-btn и .previous-btn path обратно
    const previousBtn = document.querySelector('.previous-btn');
    if (previousBtn) {
        previousBtn.style.boxShadow = ''; // Убираем box-shadow

        const previousBtnPath = previousBtn.querySelector('path');
        if (previousBtnPath) {
            previousBtnPath.style.fill = ''; // Оставить стиль по умолчанию
            previousBtnPath.style.stroke = ''; // Оставить стиль по умолчанию
        }
    }

    // Изменить стиль .next-btn, чтобы вернуть box-shadow
    const nextBtn = document.querySelector('.next-btn');
    if (nextBtn) {
        nextBtn.style.boxShadow = ''; // Возвращаем box-shadow
    }
});