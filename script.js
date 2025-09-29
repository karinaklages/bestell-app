// Variables

// DOM Manipulation
const orderDialogRef = document.getElementById ("orderDialog");

// State
index = 0;


// Functions

function init() {
    renderDishesContent();
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
        for (let index = 0; index < dishes.dishes[categoryName].length; index++) {
            const card = dishes.dishes[categoryName][index];
            currentCardWrapper.innerHTML += getDishesCardContent(card);
        }
    }
}


function openDialog() {
    orderDialogRef.showModal();
    document.body.style.overflow = "hidden"; // Hides the scrollbar
}


function closeDialog() {
    orderDialogRef.close();
    document.body.style.overflow = "";
}