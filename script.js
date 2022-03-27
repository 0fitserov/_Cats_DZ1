const main = document.querySelector(".main");

const infoBlock = document.querySelector(".info__block");

const infoRate = function(n) {
    let fill = "<img src='img/cat-fill.svg'>";
    let stroke = "<img src='img/cat-stroke.svg'>";
    let rate = "";
    let count = 10;
    let rt = 0;
    for (let  i=1; i < count; i++){
        if (rt = rt + i < n) {
            rate += fill;
        } else {
            rate += stroke;
        }
    }
    return rate;
}

const getCard = function (data) {
    const card = `
        <div class="card">
            <div class="card__img" style="background-image: url(${data.img_link})"></div>
            <h3>${data.name}</h3>
            <p class="rate">${infoRate(data.rate)}</p>
        </div>
    `
    main.innerHTML += card;
}

cats.forEach(cat => {
    getCard(cat);
});

const getWord = function (n) {
    const ag1 = "год";
    const ag2 = "года";
    const ag3 = "лет";
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return ag1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return ag2;
        } else {
            return ag3;
        }
    } else {
        return ag3;
    }
}


const showInfo = function (data) {
    infoBlock.classList.add("active");
    infoBlock.firstElementChild.innerHTML = `
                        <img class="info__img" src="${data.img_link}" alt="${data.name}">
                           <div class="info">
                              <h2>${data.name}</h2>
                              <h3>${data.age} ${getWord(data.age)}</h3>
                              <p>${data.description}</p>
                           </div>
                        <div class="info__close" onclick="closeInfo()"></div>
    `;
}


const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(e) {
        showInfo(cats[i]);
    })
}

const closeInfo = function () {
    infoBlock.classList.remove("active");
}