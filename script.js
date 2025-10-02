// Variables

// DOM Manipulation
const orderDialog = document.getElementById("orderDialog");
const bottomBasketDialog = document.getElementById("bottomBasketDialog");

// State
let basketDishes = JSON.parse(localStorage.getItem("basket")) || [];
index = 0;


// Functions

function init() {
    getFromLocalStorage()
    renderDishesContent();
    renderBasket()
    renderSideBasket();
    renderBottomBasket();
}


// Renders main content
function renderDishesContent() {
    const dishesContentRef = document.getElementById("dishesContent");
    dishesContentRef.innerHTML = "";

    // Renders category names using Object.keys() to return an array
    for (let indexCategory = 0; indexCategory < Object.keys(dishes.dishes).length; indexCategory++) {
        const categoryName = Object.keys(dishes.dishes)[indexCategory];
        dishesContentRef.innerHTML += getDishesContent(categoryName);

        const dishesCardContentRef = document.getElementsByClassName("cardWrapper");
        const currentCardWrapper = dishesCardContentRef[dishesCardContentRef.length - 1];

        // Renders cards
        for (let cardIndex = 0; cardIndex < dishes.dishes[categoryName].length; cardIndex++) {
            const card = dishes.dishes[categoryName][cardIndex];
            currentCardWrapper.innerHTML += getDishesCardContent(card);
        }
    }
}


// Renders side basket
function renderSideBasket() {
    let placeSideBasket = document.getElementById("sideBasket")
    placeSideBasket.innerHTML = "";
    placeSideBasket.innerHTML = getSideBasket();
}


// Renders bottom basket
function renderBottomBasket() {
    let placeBottomBasket = document.getElementById("bottomBasketDialog")
    placeBottomBasket.innerHTML = "";
    placeBottomBasket.innerHTML = getBottomBasket();
}


// Renders and shows basket content
function renderBasket() {
    const sideContainer = document.getElementById("sideBasketContainer");
    const bottomContainer = document.getElementById("bottomBasketContainer");
    if (!sideContainer || !bottomContainer) return; // Otherwise properties of null

    sideContainer.innerHTML = "";
    bottomContainer.innerHTML = "";

    for (let i = 0; i < basketDishes.length; i++) {
        const item = basketDishes[i];
        sideContainer.innerHTML += getSideBasketProducts(item, i);
        bottomContainer.innerHTML += getBottomBasketProducts(item, i);
    }
}


// Adds dishes to basket array
function addDishToBasket(title, price) {
    let productIndex = basketDishes.findIndex(item => item.title === title);

    if (productIndex > -1) { // -1: no item found; > -1: item found
        basketDishes[productIndex].amount += 1;
    } else {
        basketDishes.push({
            title: title,
            price: parseFloat(price),
            amount: 1
        });
    }

    saveToLocalStorage();
    renderBasket();
}


// Basket item plus 1 via onclick
function increaseAmount(index) {
    basketDishes[index].amount += 1;

    saveToLocalStorage();
    renderBasket();
}


// Basket item minus 1 via onclick
function decreaseAmount(index) {
    if (basketDishes[index].amount > 1) {
        basketDishes[index].amount -= 1;
    } else {
        basketDishes.splice(index, 1);
    }

    saveToLocalStorage();
    renderBasket();
}


// Delets item from array via onclick
function deleteBasketProduct(index) {
    basketDishes.splice(index, 1);

    saveToLocalStorage();
    renderBasket()
}


// Clears all basket array data via onclick "Bestellung absenden"
function clearBasket() {
    basketDishes = [];
    saveToLocalStorage();
    renderBasket();

    document.getElementById("subtotalPriceSideBasket").textContent = "0,00 €";
    document.getElementById("totalPriceSideBasket").textContent = "0,00 €";
    document.getElementById("subtotalPriceBottomBasket").textContent = "0,00 €";
    document.getElementById("totalPriceBottomBasket").textContent = "0,00 €";
}


// Stringify saves object data to strings
function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(basketDishes));
}


// Parse saves array data to an object
function getFromLocalStorage() {
    let basketArray = JSON.parse(localStorage.getItem("basket"));

    if (basketArray != null) {
        basketDishes = basketArray;

        renderBasket();
    }
}


// Opens all dialogs
function openDialog(dialogRef) {
    dialogRef.showModal();
    document.body.style.overflow = "hidden"; // Hides the scrollbar

    dialogRef.focus();
}


// Closes all dialogs
function closeDialog(dialogRef) {
    dialogRef.close();
    document.body.style.overflow = "auto";
}