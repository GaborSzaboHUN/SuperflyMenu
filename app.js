let index = 0;

let hotDrinksComponent = hotDrinks.map((hotDrink) =>
    `
        <div class="hotdrinks-container">
            <p class="product-name">${hotDrink.name[index]} <span>${hotDrink.varieties[index]}</span></p>
            <p class="product-price">${addThousandsSeparator(hotDrink.price)} <span>Ft</span></p>
        </div>
    `
).join("")

let softDrinksComponent = softDrinks.map(softDrink =>
    `
        <div class="softdrinks-container">
            <p class="product-name">${softDrink.name[index]} <span>${softDrink.varieties[index]}</span></p>
            <p class="product-price">${addThousandsSeparator(softDrink.price)} <span>Ft</span></p>
        </div>
    `
).join("")

let foodsComponent = foods.map(food =>
    `
        <div class="foods-container">
            <p class="product-name">${food.name[index]} <span>${food.varieties[index]}</span></p>
            <p class="product-price">${addThousandsSeparator(food.price)} <span>Ft</span></p>
        </div>
    `
).join("")

let coldsComponent = colds.map(cold =>
    `
        <div class="colds-container">
            <p class="product-name">${cold.name[index]} <span>${cold.varieties[index]}</span></p>
            <p class="product-price">${addThousandsSeparator(cold.price)} <span>Ft</span></p>
        </div>
    `
).join("")

const productsContainer = () => {
    return `
        <div class=products-containers-wrapper>
            <div class="hotdrinks-main-container">
                <h2 class="product-category-title">${titles[0].title[index]}</h2>
                ${hotDrinksComponent}
            </div>
            <div class="softdrinks-main-container">
                <h2 class="product-category-title">${titles[1].title[index]}</h2>
                ${softDrinksComponent}
            </div>
            <div class="foods-main-container">
                <h2 class="product-category-title">${titles[2].title[index]}</h2>
                ${foodsComponent}
            </div>
            <div class="colds-main-container">
                <h2 class="product-category-title">${titles[3].title[index]}</h2>
                ${coldsComponent}
            </div>
            <div class="vertical-border"></div>
            <div class="horizontal-border"></div>
        </div>
    `
}

const rootElement = document.querySelector("#root")

const loadEvent = () => {
    rootElement.insertAdjacentHTML("beforeend", productsContainer());
}

window.addEventListener("load", loadEvent)


// - - - - - - - - - - LANGUAGE SELECTOR

const languageSelectorsContainer = document.querySelector(".language-selector-container")
const languageSelectors = document.querySelectorAll(".language-selector")

languageSelectors.forEach((languageSelector) => {
    languageSelector.addEventListener("click", () => {

        languageSelectorsContainer.querySelector(".active").classList.remove("active")
        languageSelector.classList.add("active")
        index = languageSelector.getAttribute("data-id") * 1

        rootElement.innerHTML = ""

        hotDrinksComponent = hotDrinks.map((hotDrink) =>
            `
            <div class="hotdrinks-container">
                <p class="product-name">${hotDrink.name[index]} <span>${hotDrink.varieties[index]}</span></p>
                <p class="product-price">${addThousandsSeparator(hotDrink.price)} <span>Ft</span></p>
            </div>
        `
        ).join("")

        softDrinksComponent = softDrinks.map(softDrink =>
            `
            <div class="softdrinks-container">
                <p class="product-name">${softDrink.name[index]} <span>${softDrink.varieties[index]}</span></p>
                <p class="product-price">${addThousandsSeparator(softDrink.price)} <span>Ft</span></p>
            </div>
        `
        ).join("")

        foodsComponent = foods.map(food =>
            `
            <div class="foods-container">
                <p class="product-name">${food.name[index]} <span>${food.varieties[index]}</span></p>
                <p class="product-price">${addThousandsSeparator(food.price)} <span>Ft</span></p>
            </div>
        `
        ).join("")

        coldsComponent = colds.map(cold =>
            `
            <div class="colds-container">
                <p class="product-name">${cold.name[index]} <span>${cold.varieties[index]}</span></p>
                <p class="product-price">${addThousandsSeparator(cold.price)} <span>Ft</span></p>
            </div>
        `
        ).join("")

        rootElement.insertAdjacentHTML("beforeend", productsContainer());
    })
})

function addThousandsSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// - - - - - - - - - - PARALAX EFFECT

const pizzaRay = document.querySelector('.pizza-container')
const menuImage = document.querySelector('.menu-image-container')
const logo = document.querySelector('.logo-container')

const galssBottle = document.querySelector('.side-images.left>.top-image-container:first-child')
const dougnot = document.querySelector('.side-images.left>.top-image-container:last-child ')
const paperBottle = document.querySelector('.side-images.right>.top-image-container:first-child')
const iceCream = document.querySelector('.side-images.right>.top-image-container:last-child')



window.addEventListener('scroll', () => {
    const scrollSpeed = window.scrollY

    pizzaRay.style.top = scrollSpeed * 0.2 + 'px';
    menuImage.style.top = scrollSpeed * 0.35 + 'px';
    logo.style.top = scrollSpeed * 0.2 + 'px';
    galssBottle.style.top = scrollSpeed * 0.1 + 'px';
    paperBottle.style.top = scrollSpeed * 0.1 + 'px';

    galssBottle.style.transform = `rotate(${scrollSpeed * 0.025}deg)`;
    dougnot.style.transform = `rotate(${scrollSpeed * -0.025}deg)`;
    paperBottle.style.transform = `rotate(${scrollSpeed * -0.025}deg)`;
    iceCream.style.transform = `rotate(${scrollSpeed * -0.025}deg)`;

    galssBottle.style.left = scrollSpeed * 0.03 + 'px';
    dougnot.style.left = scrollSpeed * 0.03 + 'px';
    paperBottle.style.right = scrollSpeed * 0.03 + 'px';
    iceCream.style.right = scrollSpeed * 0.03 + 'px';
}
)