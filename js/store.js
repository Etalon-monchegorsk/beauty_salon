let Store = {
    ServiceList: [
        {
            name: "Инъекционная косметология лица",
            img: "./img/Услуги/faceKosmetology.jpg"
        },
        {
            name: "Нитевой Фейслифтинг",
            img: "./img/Услуги/faceLifting.jpg"
        },
        {
            name: "Контурная пластика",
            img: "./img/Услуги/contrPlastic.jpg"
        },
        {
            name: "Комплексные уходы для лица",
            img: "./img/Услуги/komplecsFace.jpg"
        },
        {
            name: "Массажи ручные и аппаратные",
            img: "./img/Услуги/massage.jpg"
        },
        {
            name: "Аппаратные методики",
            img: "./img/Услуги/aparatMetodika.jpg"
        },
        {
            name: "Депиляция",
            img: "./img/Услуги/depilation.jpg"
        },
        {
            name: "Консультация",
            img: "./img/Услуги/konsultation.jpg"
        }
    ],
    MasterList: [
        {
            imgSrc: "./img/другое/krikpaeva.jpg",
            name: "Крыкпаева Ольга",
            proffesion: "Медсестра в косметологии",
            skils: [
                "Опыт ухода за ногтями",
                "Санитарно-гигиенические нормы",
                "Кропотливая и точная работа",
                "Взаимопонимание с клиентами",
                "Креативность и осведомленность о тенденциях"
            ]
        },
        {
            imgSrc: "./img/другое/Elvira.jpg",
            name: "Макарова Эльвира",
            proffesion: "Медсестра в косметологии",
            skils: [
                "Опыт ухода за ногтями",
                "Санитарно-гигиенические нормы",
                "Кропотливая и точная работа",
                "Взаимопонимание с клиентами",
                "Креативность и осведомленность о тенденциях"
            ]
        },
        {
            imgSrc: "./img/другое/popeskyNatalia.jpg",
            name: "Попеску Наталья",
            proffesion: "Медсестра в косметологии",
            skils: [
                "Опыт ухода за ногтями",
                "Санитарно-гигиенические нормы",
                "Кропотливая и точная работа",
                "Взаимопонимание с клиентами",
                "Креативность и осведомленность о тенденциях"
            ]
        },
        {
            imgSrc: "./img/другое/Yankovskaya.jpg",
            name: "Янковская Юлия",
            proffesion: "Медсестра в косметологии",
            skils: [
                "Опыт ухода за ногтями",
                "Санитарно-гигиенические нормы",
                "Кропотливая и точная работа",
                "Взаимопонимание с клиентами",
                "Креативность и осведомленность о тенденциях"
            ]
        },
        {
            imgSrc: "./img/другое/KarpovicKatya.svg",
            name: "Карпович Екатерина",
            proffesion: "Врач дерматолог",
            skils: [
                "Опыт ухода за ногтями",
                "Санитарно-гигиенические нормы",
                "Кропотливая и точная работа",
                "Взаимопонимание с клиентами",
                "Креативность и осведомленность о тенденциях"
            ]
        }
    ],
    PriceList: [
        {
            mainName: "Ногтевой сервис",
            priceDetailedList: [
                {
                    name: "Маникюр",
                    cost: "800₽"
                },
                {
                    name: "Покрытие гель-лаком",
                    cost: "4.000₽"
                },
                {
                    name: "Маникюр + покрытие <br>  гель-лаком",
                    cost: "4.500₽"
                }
            ]
        },
        {
            mainName: "Парикмахерский сервис",
            priceDetailedList: [
                {
                    name: "Стрижка мужские",
                    cost: "500₽"
                },
                {
                    name: "Стрижка женская",
                    cost: "900₽"
                },
                {
                    name: "Покраска волос",
                    cost: "1.500₽"
                }
            ]
        }
    ]
}

let servicesListDiv = document.querySelector(".services__list");
let servicesImgDiv = document.querySelector(".services__img");
let servicesSpansDiv = document.querySelector(".services__spans");

for (let i = 0; i < Store.ServiceList.length; i++) {
    let servicesItemDiv = document.createElement("div");
    servicesItemDiv.classList.add("services__item");
    if (i == 0) {
        servicesItemDiv.classList.add("_active");
    }
    let servicesNameH4 = document.createElement("h4");
    servicesNameH4.innerHTML = Store.ServiceList[i].name;

    servicesItemDiv.appendChild(servicesNameH4);
    servicesListDiv.appendChild(servicesItemDiv);

    let servicesImage = document.createElement("img");
    servicesImage.setAttribute("src", Store.ServiceList[i].img);
    if (i == 0) {
        servicesImage.classList.add("_show");
    }
    servicesImgDiv.appendChild(servicesImage);

    let servicesSpan = document.createElement("span");
    if (i == 0) {
        servicesSpan.classList.add("services__span_active");
    }
    servicesSpansDiv.appendChild(servicesSpan);
}



let MasterListDiv = document.querySelector(".master__list");
for (let i = 0; i < Store.MasterList.length; i++) {
    console.log("ок")
    let masterItemDiv = document.createElement("div");
    masterItemDiv.classList.add("master__item");
    masterItemDiv.classList.add("swiper-slide");

    let masterItemImg = document.createElement("img");
    masterItemImg.setAttribute("src", Store.MasterList[i].imgSrc);

    let masterItemH4 = document.createElement("h4");
    masterItemH4.innerHTML = Store.MasterList[i].name;

    let masterItemSpan = document.createElement("span");
    masterItemSpan.innerHTML = Store.MasterList[i].proffesion;

    // let masterItemUL = document.createElement("ul")
    // for (let h = 0; h < Store.MasterList[i].skils.length; h++) {
    //     let masterItemLi = document.createElement("li");
    //     masterItemLi.innerHTML = Store.MasterList[i].skils[h];
    //     masterItemUL.appendChild(masterItemLi);
    // }

    masterItemDiv.appendChild(masterItemImg);
    masterItemDiv.appendChild(masterItemH4);
    masterItemDiv.appendChild(masterItemSpan);
    // masterItemDiv.appendChild(masterItemUL);
    MasterListDiv.appendChild(masterItemDiv);
}



let priceList = document.querySelector(".price__list");
for (let i = 0; i < Store.PriceList.length; i++) {

    let priceItemDiv = document.createElement("div");
    priceItemDiv.classList.add("price__item");
    priceItemDiv.classList.add("swiper-slide");

    let priceItemH3 = document.createElement("h3");
    priceItemH3.setAttribute("data-swiper-parallax", "-500");
    priceItemH3.setAttribute("data-swiper-parallax-opacity", "0.5");
    priceItemH3.setAttribute("data-swiper-parallax-duration", "600");
    priceItemH3.innerHTML = Store.PriceList[i].mainName;

    let priceDetailedListDiv = document.createElement("div");
    priceDetailedListDiv.classList.add("price-detailed-list");

    for (let k = 0; k < Store.PriceList[i].priceDetailedList.length; k++) {

        let priceDetailedListItemDiv = document.createElement("div");
        priceDetailedListItemDiv.setAttribute("data-swiper-parallax", k * -200);
        priceDetailedListItemDiv.setAttribute("data-swiper-parallax-opacity", "0.5");
        priceDetailedListItemDiv.setAttribute("data-swiper-parallax-duration", "500");
        priceDetailedListItemDiv.classList.add("price-detailed-list__item");

        let priceDetailedListItemH4 = document.createElement("h4");
        priceDetailedListItemH4.innerHTML = Store.PriceList[i].priceDetailedList[k].name;

        let priceSpan = document.createElement("span");
        
        let priceDetailedListItemP = document.createElement("p");
        priceDetailedListItemP.innerHTML = Store.PriceList[i].priceDetailedList[k].cost;

        priceDetailedListItemDiv.appendChild(priceDetailedListItemH4);
        priceDetailedListItemDiv.appendChild(priceSpan);
        priceDetailedListItemDiv.appendChild(priceDetailedListItemP);
        priceDetailedListDiv.appendChild(priceDetailedListItemDiv);
    }

    priceItemDiv.appendChild(priceItemH3);
    priceItemDiv.appendChild(priceDetailedListDiv);
    priceList.appendChild(priceItemDiv);
}




