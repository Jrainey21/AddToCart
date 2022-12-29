var totalNumbers = 0;
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const items = document.getElementById("items");
const cartSpan = document.getElementById("cartTotal");
const addToCart = document.getElementById("buttoncart");
let thumbnails = document.getElementsByClassName("thumbnail");
let activeImages = document.getElementsByClassName("active");
const cornercart = document.getElementById("cornercart");
const cartPopUp = document.getElementById("cartPopUp");
const x = document.getElementById("x");
const body = document.getElementById("body1");
const cartList = document.getElementById("cartList");
const cartP = document.getElementById("cartP");
const allDiv = document.querySelectorAll("body>div:not(.yes)");

//plus.onclick = function () {
//    totalNumbers++;
//    items.innerHTML = totalNumbers;
//};
function addNumber() {
    const items = document.getElementById("items");
    totalNumbers++;
    items.innerHTML = totalNumbers;
}
plus.addEventListener("click", addNumber);

function subtractNumber() {
    const items = document.getElementById("items");
    totalNumbers--;
    if (totalNumbers < 0) {
        totalNumbers = 0;
    }

    items.innerHTML = totalNumbers;
}
minus.addEventListener("click", subtractNumber);
//minus.onclick = function () {
//    totalNumbers--;
//    if (totalNumbers < 0) {
//        totalNumbers = 0;
//    }

//    items.innerHTML = totalNumbers;
//};

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        /* Looping through each thumbnail, adding mouseover event listener, if the images with the
        class of active is more than 0 we will remove active, active class will be added to "this", and
        "featured src attribute will be changed to "this".src attribute */
        if (activeImages.length > 0) {
            activeImages[0].classList.remove("active");
        }
        this.classList.add("active");
        document.getElementById("featured").src = this.src;
    });
}

addToCart.onclick = function () {
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
};

cornercart.onclick = function () {
    cartPopUp.classList.toggle("show");
    body.classList.toggle("gray");
};
x.onclick = function () {
    cartPopUp.classList.remove("show");
    body.classList.remove("gray");
};
const numAdded = document.getElementById("numAdded");

var cost = 125;

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