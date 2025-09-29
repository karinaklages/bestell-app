function getDishesContent(categoryName) {
    return `
        <h2>${categoryName}</h2>
        <div class="cardWrapper"></div>
        <div class="space_area_height"></div>
    `;
}


function getDishesCardContent(card) {
    return `
        <div class="dishes_card_content" tabindex="0">
            <img class="card_content_img" src="${card.img}" alt="${card.alt}">
            <div>
                <h3>${card.title}</h3>
                <p>${card.description}</p><br>
                <p><b>${card.price.toFixed(2)} &euro;</b></p>
            </div>
            <img class="add_icon" src="./assets/icons/add-icon.png" alt="Gericht zum Warenkorb hinzufügen" onclick="addDishToBasket()" aria-label="Gericht zum Warenkorb hinzufügen">
        </div>
    `;
}