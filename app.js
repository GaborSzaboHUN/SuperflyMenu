const hotDrinksComponent = hotDrinks.map(hotDrink =>
    `
        <div class="hotdrinks-container">
            <p class="product-name">${hotDrink.name} <span>${hotDrink.varieties}</span></p>
            <p class="product-price">${hotDrink.price} Ft</p>
        </div>
    `
).join("")

const softDrinksComponent = softDrinks.map(softDrink =>
    `
        <div class="softdrinks-container">
            <p class="product-name">${softDrink.name} <span>${softDrink.varieties}</span></p>
            <p class="product-price">${softDrink.price} Ft</p>
        </div>
    `
).join("")

const foodsComponent = foods.map(food =>
    `
        <div class="foods-container">
            <p class="product-name">${food.name} <span>${food.varieties}</span></p>
            <p class="product-price">${food.price} Ft</p>
        </div>
    `
).join("")

const coldsComponent = colds.map(cold =>
    `
        <div class="colds-container">
            <p class="product-name">${cold.name} <span>${cold.varieties}</span></p>
            <p class="product-price">${cold.price} Ft</p>
        </div>
    `
).join("")



const loadEvent = () => {
    const rootElement = document.querySelector("#root")

    const productsContainer = () => {
        return `
            <div class="hotdrinks-main-container">
                <h2 class=".product-category-title">Forró italok</h2>
                ${hotDrinksComponent}
            </div>
            <div class="softdrinks-main-container">
                <h2 class=".product-category-title">Üditők</h2>
                ${softDrinksComponent}
            </div>
            <div class="foods-main-container">
                <h2 class=".product-category-title">Finom falatkák</h2>
                ${foodsComponent}
            </div>
            <div class="colds-main-container">
                <h2 class=".product-category-title">Jéghideg finomságok</h2>
                ${coldsComponent}
            </div>
        `
    }
    rootElement.insertAdjacentHTML("beforeend", productsContainer());
}

window.addEventListener("load", loadEvent)