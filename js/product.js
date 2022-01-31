const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea-alt-del.dk/t7/api/products/" + id;

fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrumbs .brand").textContent = product.brandname;
  document.querySelector(".breadcrumbs .productname").textContent = product.productdisplayname;
  document.querySelector("img.productimage").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector("img.productimage").alt = product.productdisplayname;
  document.querySelector(".purchase_box .productname").textContent = product.productdisplayname;
  document.querySelector(".purchase_box .brandindicator").textContent = product.brandname;
  document.querySelector(".purchase_box .pricetag").textContent = `${product.price} DKK`;
  document.querySelector(".displayname").textContent = product.productdisplayname;
  document.querySelector(".category").textContent = product.category;
  document.querySelector(".productid").textContent = product.id;
  document.querySelector(".breadcrumbs .brand").href = "productlist.html?brandname=" + product.brandname;
}
