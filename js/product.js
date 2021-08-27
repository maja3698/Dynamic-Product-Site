const url = "http//kea-alt-del.dk/t7/api/products/2801"

fetch (url)
      .then(res=>res.json())
      .then(data=>showProduct(data))

function showProduct(product){
    document.querySelector(".display .productname").textContent= product.brandbio;
    document.querySelector(".display .productbrand").textContent= product.brandname;
    document.querySelector(".display .product.image").textContent= product.image;
    document.querySelector(".display .productcategory").textContent=product.category;
}