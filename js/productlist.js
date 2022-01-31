const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brandname");

const url = "https://kea-alt-del.dk/t7/api/products?brandname=" + brandname;

fetch(url)
  .then((res) => res.json())
  .then((data) => loopProductlist(data));

function loopProductlist(data) {
  data.forEach(showProductlist);
}

function showProductlist(product) {
  document.querySelector(".brandname").textContent = product.brandname;

  const template = document.querySelector("#productlist").content;
  const copy = template.cloneNode(true);
  copy.querySelector("a").href = "product.html?id=" + product.id;
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("img").alt = product.productdisplayname;
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".info").textContent = `${product.articletype} - ${product.brandname}`;
  copy.querySelector(".price").textContent = `${product.price},-`;
  copy.querySelector(".percentage").textContent = `${product.discount}% off`;

  if (product.soldout) {
    copy.querySelector("section").classList.add("soldout");
  }
  if (product.discount) {
    copy.querySelector("section").classList.add("onsale");
  }

  copy.querySelector(".discount p").textContent = `Get it now for ${product.price - (product.price / 100) * product.discount},- DKK`;

  const parent = document.querySelector(".productlist_container");
  parent.appendChild(copy);
}
