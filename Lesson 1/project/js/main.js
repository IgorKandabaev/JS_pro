const products = [
  { id: 1, title: "Notebook", price: 2000, img: "https://fakeimg.pl/250x100/" },
  { id: 2, title: "Mouse", price: 20, img: "https://fakeimg.pl/250x100/" },
  { id: 3, title: "Keyboard", price: 200, img: "https://fakeimg.pl/250x100/" },
  { id: 4, title: "Gamepad", price: 50 },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (product, img) => {
  return `<div class="product-item">
								<img src="${img}" alt="">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;
};
const renderPage = (list) => {
  const productsList = list
    .map((product) =>
      renderProduct(product, product.img ?? "https://fakeimg.pl/250x100/")
    )
    .join("");
  console.log(productsList);
  document.querySelector(".products").innerHTML = productsList;
};

renderPage(products);
