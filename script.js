// Variables

// DOM Manipulation
const orderDialogRef = document.getElementById ("orderDialog");

// State
index = 0;



// Functions

function init() {
  
}


function openDialog() {
    orderDialogRef.showModal();
    document.body.style.overflow = "hidden"; // Scrollbar hidden
}


function closeDialog() {
    orderDialogRef.close();
    document.body.style.overflow = "";
}