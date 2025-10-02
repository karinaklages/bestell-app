// Template for category names in main content
function getDishesContent(categoryName) {
    return `
        <h2>${categoryName}</h2>
        <div class="cardWrapper"></div>
        <div class="space_area_height"></div>
    `;
}


// Template for dishes cards in main content
function getDishesCardContent(card) {
    return `
        <div class="dishes_card_content" tabindex="0">
            <img class="card_content_img" src="${card.img}" alt="${card.alt}">
            <div class="card_text_box">
                <h3>${card.title}</h3>
                <p>${card.description}</p><br>
                <p><b>${card.price.toFixed(2).replace( '.', ',')} &euro;</b></p>
            </div>
            <img class="add_icon" src="./assets/icons/add-icon.png" alt="Gericht zum Warenkorb hinzufügen" onclick="addDishToBasket('${card.title}', '${card.price}')" aria-label="Gericht zum Warenkorb hinzufügen">
        </div>
    `;
}


// Template for html structure in side basket
function getSideBasket() {
    return `
        <div class="basket_content">
            <h2>Warenkorb</h2>
            <div class="space_area_height_small"></div>

            <div id="sideBasketContainer"></div>
            
            <div class="price_text">
                <div class="price_text_child">
                    <span>Zwischensumme:</span>
                    <span id="subtotalPriceSideBasket" align="right">9,00 €</span>
                </div>
                <div class="price_text_child">
                    <span>Lieferkosten:</span>
                    <span align="right">5,00 €</span>
                </div>
                <div class="price_text_child">
                    <span>Gesamtsumme:</span>
                    <span id="totalPriceSideBasket" align="right">14,00 €</span>
                </div>
                <div class="space_area_height_small"></div>
                <div class="space_area_height_small"></div>
            </div>
            <button class="order_button_basket" onclick="openDialog(orderDialog); clearBasket()" aria-haspopup="dialog" aria-controls="orderDialog">Bestellung absenden</button>
        </div>
    `;
}


// Template for new array data in side basket
function getSideBasketProducts(item, index) {
    return `
        <div class="product_info">
            <h4>${item.title}</h4>
            <div class="product_info_aligned">
                <div class="product_info_aligned_child">
                    <img class="white_aligned_icons" src="./assets/icons/minus-icon.png" alt="Minus Icon" aria-label="Produkt subtrahieren" onclick="decreaseAmount(${index})">
                    <p>${item.amount} x</p>
                    <img class="white_aligned_icons" src="./assets/icons/plus-icon.png" alt="Plus Icon" aria-label="Produkt addieren" onclick="increaseAmount(${index})">
                </div>
                <div class="product_info_aligned_child">
                    <p align="right">${item.price.toFixed(2).replace( '.', ',')} €</p>
                    <img class="white_aligned_icons" src="./assets/icons/close-icon.png" alt="Close Icon" aria-label="Produkt löschen" onclick="deleteBasketProduct(${index})">
                </div>
            </div>
            <hr class="hr_basket_content">
        </div>
    `;
}


// Template for html structure in bottom basket
function getBottomBasket() {
    return `
        <div class="basket_bottom_content">
            <h2>Warenkorb</h2>
            <div class="space_area_height_small"></div>

            <div id="bottomBasketContainer"></div>            
            
            <div class="price_text">
                <div class="price_text_child">
                    <span>Zwischensumme:</span>
                    <span id="subtotalPriceBottomBasket" align="right">9,00 €</span>
                </div>
                <div class="price_text_child">
                    <span>Lieferkosten:</span>
                    <span align="right">5,00 €</span>
                </div>
                <div class="price_text_child">
                    <span>Gesamtsumme:</span>
                    <span  id="totalPriceBottomBasket" align="right">14,00 €</span>
                </div>
                <div class="space_area_height_small"></div>
                <div class="space_area_height_small"></div>
            </div>
            <button class="order_button_basket" onclick="openDialog(orderDialog); clearBasket()" aria-haspopup="dialog" aria-controls="orderDialog">Bestellung absenden</button>
            <div class="close_responsive_basket">
                <img class="white_aligned_icons" src="./assets/icons/close-icon.png" onclick="closeDialog(bottomBasketDialog)" alt="Close Icon" aria-label="Warenkorb schließen">
            </div>
        </div>
    `; 
}


function getBottomBasketProducts(item, index) {
    return `
        <div class="product_info">
            <h4>${item.title}</h4>
            <div class="product_info_aligned">
                <div class="product_info_aligned_child">
                    <img class="white_aligned_icons" src="./assets/icons/minus-icon.png" alt="Minus Icon" aria-label="Produkt subtrahieren" onclick="decreaseAmount(${index})">
                    <p>${item.amount} x</p>
                    <img class="white_aligned_icons" src="./assets/icons/plus-icon.png" alt="Plus Icon" aria-label="Produkt addieren" onclick="increaseAmount(${index})">
                </div>
                <div class="product_info_aligned_child">
                    <p align="right">${item.price.toFixed(2).replace( '.', ',')} €</p>
                    <img class="white_aligned_icons" src="./assets/icons/close-icon.png" alt="Close Icon" aria-label="Produkt löschen" onclick="deleteBasketProduct(${index})">
                </div>
            </div>
            <hr class="hr_basket_content">
        </div>
    `;
}