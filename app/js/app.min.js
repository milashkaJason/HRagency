const swiperAdvantages = new Swiper('.advantages_swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.slider-btn-right1',
        prevEl: '.slider-btn-left1',
    },

});
const swiperHero = new Swiper('.hero_swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.slider-btn-right',
        prevEl: '.slider-btn-left',
    },

});
const swiperFeedback = new Swiper('.feedback_swiper-container', {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.feedback_slider-next',
        prevEl: '.feedback_slider-prev',
    },

});
const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 40,
    slidesPerView: 4,
    freeMode: false,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
});
const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 40,
    navigation: {
        nextEl: '.people_slider-next',
        prevEl: '.people_slider-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});
MicroModal.init();
//............................поиск
let headerSearch = document.querySelector('.header_search')
let headerMenuItemD = document.querySelectorAll('.header_menu-item-d')
let headerLope = document.querySelector('.header_lope')

headerSearch.addEventListener('click', function () {
    let currentWidth = window.innerWidth;
    let style = document.createElement('style');
    style.textContent = `
    .activeInput {
    width: ${currentWidth / 2}px;
    }
    .activeIcoSearch {
    left: ${currentWidth / 2 - 10}px;
    }
    `
    headerMenuItemD.forEach(l => l.classList.add('d-none'))
    document.head.appendChild(style)
    headerSearch.classList.add('activeInput')
    headerLope.classList.add('activeIcoSearch')
})
headerLope.addEventListener('click', function () {
    headerSearch.classList.toggle('activeInput')
    headerMenuItemD.forEach(l => l.classList.toggle('d-none'))
    headerSearch.value = ''
    headerLope.classList.toggle('activeIcoSearch')

})
document.querySelector('.header_menu-item-search').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        headerSearch.classList.remove('activeInput');
        headerMenuItemD.forEach(l => l.classList.remove('d-none'))
        headerSearch.value = ''
        headerLope.classList.remove('activeIcoSearch')
    }
})
document.querySelector('.hero').addEventListener('click', function () {
    headerMenuItemD.forEach(l => l.classList.remove('d-none'))
    headerSearch.classList.remove('activeInput')
    headerLope.classList.remove('activeIcoSearch')
})
//...............................поиск
//......................эффект  кнопки
let buttons = document.getElementsByClassName('buttDark'),
    forEach = Array.prototype.forEach;
forEach.call(buttons, function (b) {
    b.addEventListener('mouseenter', addElementD);
});
forEach.call(buttons, function (b) {
    b.addEventListener('mouseleave', removeElementD);
});
let buttonsOrange = document.getElementsByClassName('buttOrange'),
    forEachO = Array.prototype.forEach;
forEachO.call(buttonsOrange, function (b) {
    b.addEventListener('mouseenter', addElementO);
});
forEachO.call(buttonsOrange, function (b) {
    b.addEventListener('mouseleave', removeElementO);
});


function addElementD(e) {
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect = this.getBoundingClientRect();
    sDiv = addDiv.style,
        px = 'px';
    this.classList.add('newBackground')
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulse');
    this.appendChild(addDiv);
}

function removeElementD(e) {
    this.classList.remove('newBackground')
}

//
function addElementO(e) {
    let addDiv = document.createElement('div'),
        mValue = Math.max(this.clientWidth, this.clientHeight),
        rect = this.getBoundingClientRect();
    sDiv = addDiv.style,
        px = 'px';
    this.classList.add('newBackgroundOrange')
    sDiv.width = sDiv.height = mValue + px;
    sDiv.left = e.clientX - rect.left - (mValue / 2) + px;
    sDiv.top = e.clientY - rect.top - (mValue / 2) + px;

    addDiv.classList.add('pulseOrange');
    this.appendChild(addDiv);
}

function removeElementO(e) {
    this.classList.remove('newBackgroundOrange')
}

//........................эффект  кнопки

//.......................валидация формы
//.......................валидация формы