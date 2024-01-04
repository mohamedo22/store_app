let cart =[];
let size = 0;
const airf = {
    title: "Air Force",
    price: "$119",
    Image: "e_commerce_Img/air.png"
};
const airj = {
    title: "Air Jordan",
    price: "$149",
    Image: "e_commerce_Img/air2.png"
};
const blaz = {
    title: "Blazer",
    price: "$109",
    Image: "e_commerce_Img/blazer.png"
};
const blaz2 = {
    title: "Crater",
    price: "$129",
    Image: "e_commerce_Img/blazer2.png"
};
const Hippie = {
    title: "Hippie",
    price: "$99",
    Image: "e_commerce_Img/hippie.png"
};
    var price = document.getElementById("price");
    var image = document.getElementById("img");
    var description = document.getElementById("disc");
    var image2 = document.getElementById("im_in_s3");
    var tit_of3 = document.getElementById("tit_of_s3");
    var price_se3 = document.getElementById("price_sc3");
function changedata(i) {
    
    image2.style.transform = `translateX(${100}px)`;
    image2.style.opacity = 0;
    price.style.opacity = 0;
    price.style.transform = `translateX(${100}px)`;
    image.style.opacity = 0;
    image.style.transform = `translateX(${100}px)`;
    description.style.opacity = 0;
    description.style.transform = `translateX(${-100}px)`;
    if (i == 1) {
        price.textContent = airf.price;
        image.src = airf.Image;
        description.textContent = airf.title;
        image2.src = airf.Image;
        tit_of3.textContent = airf.title;
        price_se3.textContent = airf.price;
    } else if (i == 2) {
        price.textContent = airj.price;
        image.src = airj.Image;
        description.textContent = airj.title;
        image2.src = airj.Image;
        tit_of3.textContent = airj.title;
        price_se3.textContent = airj.price;
    } else if (i == 3) {
        price.textContent = blaz.price;
        image.src = blaz.Image;
        description.textContent = blaz.title;
        image2.src = blaz.Image;
        tit_of3.textContent = blaz.title;
        price_se3.textContent = blaz.price;
    } else if (i == 4) {
        price.textContent = blaz2.price;
        image.src = blaz2.Image;
        description.textContent = blaz2.title;
        image2.src = blaz2.Image;
        tit_of3.textContent = blaz2.title;
        price_se3.textContent = blaz2.price;
    } else if (i == 5) {
        price.textContent = Hippie.price;
        image.src = Hippie.Image;
        description.textContent = Hippie.title;
        image2.src = Hippie.Image;
        tit_of3.textContent = Hippie.title;
        price_se3.textContent = Hippie.price;
    }
   
    setTimeout(() => {
        price.style.opacity = 1;
        price.style.transform = `translateX(0)`;
        image.style.opacity = 1;
        image.style.transform = `translateX(0)`;
        image2.style.opacity = 1;
        image2.style.transform = `translateX(0)`;
        description.style.opacity = 1;
        description.style.transform = `translateX(0)`;
    }, 500);
}

function checkCheckbox() {
    var checkbox = document.getElementById('checkbox');
    checkbox.checked = !checkbox.checked;
  }

  function send_size(i) {
    size = i;
    console.log(size)
    if(i == 42)
    {
        document.getElementById("si42").style.backgroundColor = "black";
        document.getElementById("si42").style.color = "white";
        document.getElementById("si43").style.backgroundColor = "white";
        document.getElementById("si43").style.color = "black";
        document.getElementById("si44").style.backgroundColor = "white";
        document.getElementById("si44").style.color = "black";
    }
    if(i == 43)
    {
        document.getElementById("si42").style.backgroundColor = "white";
        document.getElementById("si42").style.color = "black";
        document.getElementById("si43").style.backgroundColor = "black";
        document.getElementById("si43").style.color = "white";
        document.getElementById("si44").style.backgroundColor = "white";
        document.getElementById("si44").style.color = "black";
    }
    if(i == 44)
    {
        document.getElementById("si42").style.backgroundColor = "white";
        document.getElementById("si42").style.color = "black";
        document.getElementById("si43").style.backgroundColor = "white";
        document.getElementById("si43").style.color = "black";
        document.getElementById("si44").style.backgroundColor = "black";
        document.getElementById("si44").style.color = "white";
    }
}
function buyit() {
    var cartElement = document.getElementById("cart");
    var newItem = document.createElement("div");
    newItem.classList.add("item_con");
    newItem.innerHTML = `
        <img src="${image.src}" class="image_item">
        <p class="price_items">Price : ${price.textContent}</p>
        <p class="size">Size : ${size}</p>
        <button class="btn-delete" onclick="delete_item(this.parentElement)">Delete</button>
    `;
    cartElement.appendChild(newItem);
    cart.push(newItem);
}

function delete_item(i) {
    cart.shift(i);
    var cartElement = document.getElementById("cart");
    cartElement.removeChild(i)
}
function count(){
let counter = document.getElementById("counter");
counter.textContent = cart.length
}
setInterval(count ,1)
