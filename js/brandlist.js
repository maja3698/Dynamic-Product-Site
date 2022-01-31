// const urlParams = new URLSearchParams(window.location.search);
// const brandname = urlParams.get("brandname");

const url = "https://kea-alt-del.dk/t7/api/brands";

fetch(url)
  .then((res) => res.json())
  .then((data) => loopBrandlist(data));

function loopBrandlist(data) {
  data.forEach(showBrandlist);
}

function showBrandlist(brand) {
  const template = document.querySelector("#brand-temp").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".brandname").textContent = brand.brandname;
  copy.querySelector("a").href = "productlist.html?brandname=" + brand.brandname;
  const parent = document.querySelector(".brands_con");
  parent.appendChild(copy);
}
