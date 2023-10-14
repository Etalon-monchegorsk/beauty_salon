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
            mainName: "Массажный сервис",
            priceDetailedList: [
                {
                    name: "Асахи лицо",
                    cost: "1086₽"
                },
                {
                    name: "Асахи с воротниковой зоной",
                    cost: "1345₽"
                },
                {
                    name: "Миофасцальный массаж лицо",
                    cost: "1316₽"
                },
                {
                    name: "Шарм тело",
                    cost: "1526₽"
                },
                {
                    name: "Хаким спины",
                    cost: "1526₽"
                },
                {
                    name: "Хаким спины и ног",
                    cost: "1699₽"
                },
                {
                    name: "Хаким лица",
                    cost: "1331₽"
                },
                {
                    name: "Хаким лица и рук",
                    cost: "1388₽"
                },
                {
                    name: "Классический массаж спина, <br> руки, голова",
                    cost: "1350₽"
                },
                {
                    name: "Классический массаж по телу",
                    cost: "1800₽"
                },
            ]
        },
        {
            mainName: "Процедура чистки лица",
            priceDetailedList: [
                {
                    name: "Мануальная",
                    cost: "2630₽"
                },
                {
                    name: "Комбинированная",
                    cost: "3000₽"
                },
                {
                    name: "Ультразвуковая",
                    cost: "2100₽"
                },
                {
                    name: "Консультация дерматолога",
                    cost: "750₽"
                },
                {
                    name: "Консультация косметолога",
                    cost: "350₽"
                },
            ]
        },
        {
            mainName: "Вакуумный массаж",
            priceDetailedList: [
                {
                    name: "Вакуумный массаж лицо",
                    cost: "1100₽"
                },
                {
                    name: "Тело(Бедра, Ягодицы, Живот)",
                    cost: "1250₽"
                },
                {
                    name: "Спина, руки",
                    cost: "1200₽"
                },
                {
                    name: "Лицо с воротниковой зоной",
                    cost: "1400₽"
                },
                {
                    name: "Воротниковая зона с руками",
                    cost: "1100₽"
                },
            ]
        },
        {
            mainName: "Микротоки, Ультразвук, Лимфодренаж",
            priceDetailedList: [
                {
                    name: "Микротоки, Ультразвук, <br> Лимфодренаж",
                    cost: "1530₽"
                },         
                {
                    name: "Электропарация",
                    cost: "1810₽"
                },   
            ]
        },
        {
            mainName: "РФ Лифтинг",
            priceDetailedList: [
                {
                    name: "Лицо+шея+Декольте",
                    cost: "1320₽"
                },  
                {
                    name: "Лицо+шея+Декольте",
                    cost: "1320₽"
                },  
                {
                    name: "Лицо",
                    cost: "1120₽"
                },  
                {
                    name: "1 зона на лице",
                    cost: "950₽"
                },  
                {
                    name: "РФ Тела 1 зона или электро <br> порация тело",
                    cost: "850₽"
                },  
            ]
        },
        {
            mainName: "Вакуумный массаж+обертывание",
            priceDetailedList: [
                {
                    name: "Бедра+Ягодицы+Живот+обертование",
                    cost: "1750₽"
                }, 
                {
                    name: "Бедра+Ягодицы+Живот+Обертывание:<br> Бедра+Ягодицы",
                    cost: "1660₽"
                },  
                {
                    name: "Воротниковая зона+руки+обертование руки",
                    cost: "1500₽"
                }, 
            ]
        },
        {   
            mainName: "Фракционная мезотерапия",
            priceDetailedList: [
                {
                    name: "Лицо+шея+Декольте",
                    cost: "1900₽"
                },
                {
                    name: "Лицо+шея",
                    cost: "1800₽"
                },
                {
                    name: "Лицо",
                    cost: "1600₽"
                },
                {
                    name: "Шея+Декольте",
                    cost: "1600₽"
                },
                {
                    name: "Кисти рук",
                    cost: "1500₽"
                },
                {
                    name: "Волосы",
                    cost: "1500₽"
                },
                {
                    name: "1 зона на теле",
                    cost: "1500₽"
                },
            ]
        },
        {
            mainName: "Мезотерапия лицо",
            priceDetailedList: [
                {
                    name: "Лицо+шея+Делькольте",
                    cost: "1890₽"
                },
                {
                    name: "Лицо+шея+Делькольте+сосуд.<br> этап",
                    cost: "2236₽"
                },    
                {
                    name: "Лицо+шея",
                    cost: "1813₽"
                },    
                {
                    name: "Лицо+шея+сосуд.этап",
                    cost: "2160₽"
                },  
                {
                    name: "Лицо",
                    cost: "1810₽"
                },      
                {
                    name: "Лицо+сосуд.этап",
                    cost: "2160₽"
                },
                {
                    name: "Шея+Делькольте",
                    cost: "1770₽"
                },
                {
                    name: "Шея+Делькольте+сосуд.этап",
                    cost: "1890₽"
                },
                {
                    name: "Лоб или глаза или кисти рук",
                    cost: "1220₽"
                },
                {
                    name: "Лоб или глаза или кисти рук<br>+сосуд.этап",
                    cost: "1570₽"
                },
                {
                    name: "Подбородок",
                    cost: "770₽"
                },
                {
                    name: "Подбородок+сосуд.этап",
                    cost: "1110₽"
                },
                {
                    name: "Волосистая часть головы",
                    cost: "1220₽"
                },
                {
                    name: "Волосистая часть головы+сосуд.этап",
                    cost: "1570₽"
                },    
            ]
        },
        {
            mainName: "Мезотерапия тело",
            priceDetailedList: [
                {
                    name: "1 зоны", 
                    cost: "820₽"
                },
                {
                    name: "1 зоны+сосуд.этап", 
                    cost: "1970₽"
                },
                {
                    name: "2 зоны", 
                    cost: "1770₽"
                },
                {
                    name: "2 зоны+сосуд.этап", 
                    cost: "1770₽"
                },
                {
                    name: "3 зоны", 
                    cost: "2150₽"
                },
                {
                    name: "3 зоны+сосуд.этап", 
                    cost: "2150₽"
                },
            ]
        },
        {
            mainName: "Нейротоксины типа A",
            priceDetailedList: [
                {
                    name: "Релатокс",
                    cost: "385₽"
                },
            ]
        }, 
        {
            mainName: "Плазмолифтинг",
            priceDetailedList: [
                {
                    name: "1 пробирка", 
                    cost: "2720₽"
                },
            ]
        },
        {
            mainName: "Уходный сервис",
            priceDetailedList: [
                {
                    name: "Лифтинг с альгинатной маской",
                    cost: "2170₽"
                },
                {
                    name: "Лифтинг с гипсовой маской",
                    cost: "2310₽"
                },
                {
                    name: "Альгинатная маска коротко",
                    cost: "1750₽"
                },
                {
                    name: "Термо маска коротко",
                    cost: "1890₽"
                },
                {
                    name: "Анти-акне",
                    cost: "1970₽"
                },
                {
                    name: "Липид-баланс",
                    cost: "1310₽"
                },
                {
                    name: "Шлубокое увлажнение",
                    cost: "1680₽"
                },
                {
                    name: "Антикупероз",
                    cost: "1970₽"
                },
                {
                    name: "Антистресс",
                    cost: "1680₽"
                },
                {
                    name: "Лифтинг",
                    cost: "1680₽"
                },
                {
                    name: "Карбокси терапия",
                    cost: "1480₽"
                },
                {
                    name: "Пилинг химический",
                    cost: "1800₽"
                },
                {
                    name: "LED маска",
                    cost: "400₽"
                },
            ]
        },
        {
            mainName: "Депиляционный сервис",
            priceDetailedList: [
                {
                    name: "Руки",
                    cost: "1330₽"
                },
                {
                    name: "Ноги+колено",
                    cost: "1330₽"
                },
                {
                    name: "Бедро",
                    cost: "1330₽"
                },
                {
                    name: "Ноги полностью",
                    cost: "1660₽"
                },
                {
                    name: "Спина",
                    cost: "1660₽"
                },
            ]
        },
        {
            mainName: "Шугаринг, полимерный воск",
            priceDetailedList: [
                {
                    name: "Усы",
                    cost: "720₽"
                },
                {
                    name: "Лицо",
                    cost: "780₽"
                },
                {
                    name: "Подмышки",
                    cost: "1270₽"
                },
                {
                    name: "Живот",
                    cost: "1300₽"
                },
                {
                    name: "Бикини",
                    cost: "1610₽"
                },
                {
                    name: "Глубокое бикини",
                    cost: "1900₽"
                },
                {
                    name: "Ягодицы",
                    cost: "1300₽"
                },
            ]
        },
        {
            mainName: "Прокол ушей",
            priceDetailedList: [
                {
                    name: "Прокол ушей",
                    cost: "1500₽"
                },
                {
                    name: "Прокол 1 уха",
                    cost: "850₽"
                },
                {
                    name: "Прокол ушей(своя серьга)",
                    cost: "420₽"
                },
            ]
        },
        {
            mainName: "Биовитализация",
            priceDetailedList: [
                {
                    name: "Princess 1мл+обезбол.",
                    cost: "8000₽"
                },
                {
                    name: "Белларти 1мл+обезбол.",
                    cost: "8600₽"
                },
                {
                    name: "Белларти 2мл+обезбол.",
                    cost: "12500₽"
                },
                {
                    name: "Реви силк 1мл+обезбол.",
                    cost: "10450₽"
                },
                {
                    name: "Реви силк 2мл+обезбол.",
                    cost: "14700₽"
                },
                {
                    name: "Revi eye 1мл+обезбол.",
                    cost: "9550₽"
                },
                {
                    name: "Revi Strong 1мл+обезбол.",
                    cost: "11280₽"
                },
                {
                    name: "Revi Strong 2мл+обезбол.",
                    cost: "15600₽"
                },
                {
                    name: "Мезовартон/мезоксантин 1.5мл<br>+обезбол.",
                    cost: "13400₽"
                },
                {
                    name: "Новакутан 2мл+обезбол.",
                    cost: "13100₽"
                },
            ]
        },
        {
            mainName: "Контурная пластика",
            priceDetailedList: [
                {
                    name: "Прицесс волюм+обезбол.",
                    cost: "11000₽"
                },
                {
                    name: "Нейрамис+обезбол.",
                    cost: "9300₽"
                },
                {
                    name: "Стиллаж М для губ+обезбол.",
                    cost: "12210₽"
                },
                {
                    name: "Лонгидаза 1 флакон+обезбол.",
                    cost: "11000₽"
                },
                {
                    name: "Преп-т клиента+обезбол.",
                    cost: "3000₽"
                },
                {
                    name: "Канюля+обезбол.",
                    cost: "660₽"
                },
            ]
        },
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