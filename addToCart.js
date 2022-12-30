var totalNumbers = 0;
/*--Added click listener events to variables below at the bottom of js page.  */
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const addToCart = document.getElementById("buttoncart");
const cartIcon = document.getElementById("cartIcon");
const x = document.getElementById("x");
/*--Added click listener events to variables above at the bottom of js page.  */

const items = document.getElementById("items");
const cartSpan = document.getElementById("cartTotal");
let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");
const cartPopUp = document.getElementById("cartPopUp");
const body = document.getElementById("body1");
const cartList = document.getElementById("cartList");
const cartP = document.getElementById("cartP");
var cost = 125;

function addNumber() {
    const items = document.getElementById("items");
    totalNumbers++;
    items.innerHTML = totalNumbers;
}

function subtractNumber() {
    const items = document.getElementById("items");
    totalNumbers--;
    if (totalNumbers < 0) {
        totalNumbers = 0;
    }
    items.innerHTML = totalNumbers;
}

//        /* highlightShoeThumbNail-- Looping through each thumbnail, adding mouseover event listener, if the images with the
//        class of active is more than 0 we will remove active, active class will be added to "this", and
//        "featured src attribute will be changed to "this".src attribute */

function highlightShoeThumbNail() {
    let activeImages = document.getElementsByClassName("active");
    if (activeImages.length > 0) {
        activeImages[0].classList.remove("active");
    }
    this.classList.add("active");
    document.getElementById("featured").src = this.src;
}

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", highlightShoeThumbNail)
}

function addingToCart() {
    const cartSpan = document.getElementById("cartTotal");
    const cartP = document.getElementById("cartP");
    const cartList = document.getElementById("cartList");
    cartSpan.innerHTML = items.innerHTML;
    if (cartSpan.innerHTML > 0) {
        cartP.style.display = "none";
        if (cartList.childElementCount == 0) {
            createItem();
            /* totalNumbers = 0;
            items.innerHTML = 0; */
        }
        if (cartList.childElementCount == 1) {
            cartList.firstChild.remove();
            createItem();
            /* totalNumbers = 0;
            items.innerHTML = 0; */
        }
    }
}

function makeCartPopUp() {
    const cartPopUp = document.getElementById("cartPopUp");
    cartPopUp.classList.toggle("show");
    body.classList.toggle("gray");
}

function closeCart() {
    const cartPopUp = document.getElementById("cartPopUp");
    cartPopUp.classList.remove("show");
    body.classList.remove("gray");
}

function createItem() {
    /*  if (cartList.childElementCount == 0) */
    var listItem = document.createElement("li");
    listItem.innerHTML =
        "<p class='listP'> <img src='images/image-product-1-thumbnail.jpg' class='thumbnailSmall float' /> Fall Limited Edition Sneakers <span>$125.00</span><span> * </span><span id='amount' class='orange'></span> </p> <p>TOTAL = <span id='total' class='orange'></span></p><button id='buy'>Buy Now!</button><button id='delete'>Delete</button>";
    cartList.appendChild(listItem);
    const total = document.getElementById("total");
    const amount = document.getElementById("amount");
    amount.innerHTML = items.innerHTML;
    total.innerHTML = "$" + cost * items.innerHTML;
    const deleteButton = document.getElementById("delete");
    deleteButton.onclick = function () {
        listItem.remove();
        cartP.style.display = "block";
        cartSpan.innerHTML = 0;
    };
}

plus.addEventListener("click", addNumber);
minus.addEventListener("click", subtractNumber);
addToCart.addEventListener("click",addingToCart)
cartIcon.addEventListener("click", makeCartPopUp);
x.addEventListener("click", closeCart);

