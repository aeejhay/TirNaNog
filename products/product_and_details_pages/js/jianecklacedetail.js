// 模拟项链产品数据
const products = {
    1: {
        name: "Double Cross Me Necklace",
        originalPrice: "€100.00",
        discountedPrice: "€80.00",
        description: "Stylish and trendy necklace for modern looks.",
        image: "images/necklace1.webp",
    },
    2: {
        name: "Lover Girl Necklace",
        originalPrice: "€79.00",
        discountedPrice: "€63.20",
        description: "A charming necklace perfect for gifting.",
        image: "images/necklace2.webp",
    },
    3: {
        name: "Aura Necklace",
        originalPrice: "€130.00",
        discountedPrice: "€104.00",
        description: "A graceful necklace that adds a touch of elegance.",
        image: "images/necklace3.webp",
    },
    4: {
        name: "Custom/Personalized Nameplate Necklace",
        originalPrice: "€58.00",
        discountedPrice: "€46.40",
        description: "A personalized necklace for unique style.",
        image: "images/necklace4.webp",
    },
    5: {
        name: "Space Baby Necklace",
        originalPrice: "€65.00",
        discountedPrice: "€52.00",
        description: "A necklace inspired by the wonders of space.",
        image: "images/necklace5.webp",
    },
};

// 获取 URL 参数
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

document.addEventListener("DOMContentLoaded", () => {
    if (productId && products[productId]) {
        const product = products[productId];

        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-original-price").innerText = product.originalPrice;
        document.getElementById("product-discounted-price").innerText = product.discountedPrice;
        document.getElementById("product-description").innerText = product.description;
        document.getElementById("product-image").src = product.image;
    } else {
        document.body.innerHTML = "<h1 class='text-center mt-5'>Product not found</h1>";
    }
});



