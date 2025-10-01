function toggleBasket() {
  const bottomBasket = window.innerWidth < 790;

  if (bottomBasket) {
    openDialog(bottomBasketDialog);
  }

  else {
    document.getElementById("sideBasket").classList.toggle("d_none");
  }
}