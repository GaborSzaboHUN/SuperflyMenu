const hotDrinksComponent = hotDrinks.map(hotDrink =>
    `
        <div class="hotdrinks-container">
            <p class="product-name">${hotDrink.name} <span>${hotDrink.varieties}</span></p>
            <p class="product-price">${hotDrink.price} Ft</p>
        </div>
    `
)

const softDrinksComponent = softDrinks.map(softDrink =>
    `
        <div class="softdrinks-container">
            <p class="product-name">${softDrink.name} <span>${softDrink.varieties}</span></p>
            <p class="product-price">${softDrink.price} Ft</p>
        </div>
    `
)

const foodsComponent = foods.map(food =>
    `
        <div class="foods-container">
            <p class="product-name">${food.name} <span>${food.varieties}</span></p>
            <p class="product-price">${food.price} Ft</p>
        </div>
    `
)

const coldsComponent = colds.map(cold =>
    `
        <div class="colds-container">
            <p class="product-name">${cold.name} <span>${cold.varieties}</span></p>
            <p class="product-price">${cold.price} Ft</p>
        </div>
    `
)



const loadEvent = () => {
    const rootElement = document.querySelector("#root")

    rootElement.insertAdjacentHTML("beforeend", hotDrinksComponent);
    rootElement.insertAdjacentHTML("beforeend", softDrinksComponent);
    rootElement.insertAdjacentHTML("beforeend", foodsComponent);
    rootElement.insertAdjacentHTML("beforeend", coldsComponent);
}

window.addEventListener("load", loadEvent)