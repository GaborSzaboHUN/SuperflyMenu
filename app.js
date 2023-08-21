let index = 0;

let hotDrinksComponent = hotDrinks.map((hotDrink) =>
    `
        <div class="hotdrinks-container">
            <p class="product-name">${hotDrink.name[index]} <span>${hotDrink.varieties[index]}</span></p>
            <p class="product-price">${hotDrink.price} Ft</p>
        </div>
    `
).join("")

let softDrinksComponent = softDrinks.map(softDrink =>
    `
        <div class="softdrinks-container">
            <p class="product-name">${softDrink.name[index]} <span>${softDrink.varieties[index]}</span></p>
            <p class="product-price">${softDrink.price} Ft</p>
        </div>
    `
).join("")

let foodsComponent = foods.map(food =>
    `
        <div class="foods-container">
            <p class="product-name">${food.name[index]} <span>${food.varieties[index]}</span></p>
            <p class="product-price">${food.price} Ft</p>
        </div>
    `
).join("")

let coldsComponent = colds.map(cold =>
    `
        <div class="colds-container">
            <p class="product-name">${cold.name[index]} <span>${cold.varieties[index]}</span></p>
            <p class="product-price">${cold.price} Ft</p>
        </div>
    `
).join("")

const productsContainer = () => {
    return `
        <div class="hotdrinks-main-container">
            <h2 class=".product-category-title">${titles[0].title[index]}</h2>
            ${hotDrinksComponent}
        </div>
        <div class="softdrinks-main-container">
            <h2 class=".product-category-title">${titles[1].title[index]}</h2>
            ${softDrinksComponent}
        </div>
        <div class="foods-main-container">
            <h2 class=".product-category-title">${titles[2].title[index]}</h2>
            ${foodsComponent}
        </div>
        <div class="colds-main-container">
            <h2 class=".product-category-title">${titles[3].title[index]}</h2>
            ${coldsComponent}
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
                <p class="product-price">${hotDrink.price} Ft</p>
            </div>
        `
        ).join("")

        softDrinksComponent = softDrinks.map(softDrink =>
            `
            <div class="softdrinks-container">
                <p class="product-name">${softDrink.name[index]} <span>${softDrink.varieties[index]}</span></p>
                <p class="product-price">${softDrink.price} Ft</p>
            </div>
        `
        ).join("")

        foodsComponent = foods.map(food =>
            `
            <div class="foods-container">
                <p class="product-name">${food.name[index]} <span>${food.varieties[index]}</span></p>
                <p class="product-price">${food.price} Ft</p>
            </div>
        `
        ).join("")

        coldsComponent = colds.map(cold =>
            `
            <div class="colds-container">
                <p class="product-name">${cold.name[index]} <span>${cold.varieties[index]}</span></p>
                <p class="product-price">${cold.price} Ft</p>
            </div>
        `
        ).join("")

        rootElement.insertAdjacentHTML("beforeend", productsContainer());
    })
})
