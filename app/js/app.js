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
    slidesPerView: 'auto',
    navigation: {
        // el: '.swiper-pagination',
        //     clickable: true,
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
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        100: {
            slidesPerView: 1.2,
            spaceBetween: 10
        },
    }
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
const swiper = new Swiper('.scroll', {
    slidesPerView: 3,
    // slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
});
const swiper1 = new Swiper('.scroll2', {
    // slidesPerView: 2,
    slidesPerView: 'auto',
    spaceBetween: 0,
    // freeMode: true,
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
});
MicroModal.init();
//............................поиск
function serchfunk() {
    if(window.innerWidth<1228) {
        let lope = document.querySelector('.header_lope')
        lope.style.top = `0px`;
        lope.style.left = `8px`;
        lope.style.transform = `scale(1.5)`;
        let searchinp = document.querySelectorAll('.header_menu-item')[7].firstChild.nextSibling
        searchinp.style.width = `0px`

    }
}
serchfunk()
window.addEventListener('resize', serchfunk)
let headerSearch = document.querySelector('.header_search')
let headerMenuItemD = document.querySelectorAll('.header_menu-item-d')
let headerLope = document.querySelector('.header_lope')
let headerLopeBurger = document.querySelector('.header_lope-menu')
let headerSearchMenu = document.querySelector('.header_search-menu')

headerSearch.addEventListener('click', function () {
    let currentWidth = window.innerWidth;
    let style = document.createElement('style');
    console.log()
    style.textContent = `
    .activeInput {
    width: ${currentWidth / 2}px;
    }
    .activeIcoSearch {
    left: ${currentWidth / 2 - 10}px;
    }
    `
    headerMenuItemD.forEach(l => l.classList.add('d-nonen'))
    document.head.appendChild(style)
    headerSearch.classList.add('activeInput')
    headerLope.classList.add('activeIcoSearch')
})
headerLope.addEventListener('click', function () {
    let currentWidth = window.innerWidth;
    let style = document.createElement('style');
    console.log(currentWidth);
    style.textContent = `
    .activeInput {
    width: ${currentWidth / 2}px!important;
    }
    .activeIcoSearch {
    left: ${currentWidth / 2 - 10}px!important;
    }
    `
    document.head.appendChild(style)
    headerSearch.classList.toggle('activeInput')
    headerMenuItemD.forEach(l => l.classList.toggle('d-nonen'))
    headerSearch.value = ''
    headerLope.classList.toggle('activeIcoSearch')

})

document.querySelector('.header_menu-item-search').addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        headerSearch.classList.remove('activeInput');
        headerMenuItemD.forEach(l => l.classList.remove('d-nonen'))
        headerSearch.value = ''
        headerLope.classList.remove('activeIcoSearch')
    }
})
document.querySelector('.hero').addEventListener('click', function () {
    headerMenuItemD.forEach(l => l.classList.remove('d-nonen'))
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
    sDiv = addDiv.style;
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
    sDiv = addDiv.style;
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




headerLopeBurger.addEventListener('click', function () {
    headerSearchMenu.value = ''

})
//........................эффект  кнопки

//.......................валидация формы
//.......................валидация формы


//.......................menu burger

document.querySelector('.menu-burger').addEventListener('click', showMenu)
function showMenu () {
    document.querySelector('.menu').classList.toggle('menu-display')
    document.body.classList.toggle('body-overflow')
}

//.......................menu burger

//.....................читать полностью

document.querySelectorAll('.feedback_link').forEach(u=>u.addEventListener('click', openAllText))
function openAllText() {
    this.innerText === 'Скрыть'?this.innerText = 'Читать еще':this.innerText = 'Скрыть'
    this.previousSibling.previousSibling.classList.toggle('d-none')
    this.previousSibling.previousSibling.previousSibling.previousSibling.classList.toggle('d-none')
}
//.....................читать полностью

//.....................Filter
document.querySelectorAll('.podcat').forEach(u=> {
    u.addEventListener('click', () => {
        document.querySelectorAll('.vacancy_tabs-item-sub').forEach(u=> {
            u.classList.toggle('hideSubtitle')
        })
    })
})
const filterBox = document.querySelectorAll('.box-filter')
document.querySelector('.vacancy_tabs-body').addEventListener('click', event => {
    if(event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['filter'];
    console.log(filterClass)
    filterBox.forEach(elem => {
        elem.classList.remove(('hideOpasity'));
        if(!elem.classList.contains(filterClass)) {

            elem.classList.add('hideOpasity');
        }
    })
})

//.....................Filter

