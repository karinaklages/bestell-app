// Variables

// DOM Manipulation
const orderDialog = document.getElementById("orderDialog");
const bottomBasketDialog = document.getElementById("bottomBasketDialog");

// State
index = 0;


// Functions

function init() {
    // getFromLocalStorage()
    renderDishesContent()
}


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


// function addDishToBasket() {
//     saveToLocalStorage()
// }


function openDialog(dialogRef) {
    dialogRef.showModal();
    document.body.style.overflow = "hidden"; // Hides the scrollbar
}

function closeDialog(dialogRef) {
    dialogRef.close();
    document.body.style.overflow = "";
}