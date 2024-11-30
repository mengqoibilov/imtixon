
async function fetchProducts() {
  try {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();

      const productsContainer = document.getElementById("products");

      productsContainer.innerHTML = products
          .map(
              (product) => `
              <div class="col-md-4" style="border: 1px solid #ddd; padding: 10px; margin: 10px;">
                  <img src="${product.image}" alt="${product.name}" style="width:100%; height:150px; object-fit:cover;">
                  <h3>${product.name}</h3>
                  <p>${product.info}</p>
                  <p><strong>Price:</strong> $${product.price}</p>
              </div>
          `
          )
          .join("");
  } catch (error) {
      console.log("Error fetching products:", error);
  }
}

fetchProducts();



document.addEventListener('DOMContentLoaded', () => {
  const productForm = document.getElementById('productForm');
  const openModalBtn = document.getElementById('openModalBtn');
  const productModal = new bootstrap.Modal(document.getElementById('productModal'));

  openModalBtn.addEventListener('click', () => {
      productModal.show();
  });

  productForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const productName = document.getElementById('productName').value;
      const productInfo = document.getElementById('productInfo').value;
      const productPrice = document.getElementById('productPrice').value;
      const imageUrl = document.getElementById('imageUrl').value;

      let Elwrap = document.querySelector(".wrap");
      const newProductDiv = document.createElement("div");
      newProductDiv.style.border = "1px solid #ddd";
      newProductDiv.style.padding = "10px";
      newProductDiv.style.margin = "10px";
      newProductDiv.style.width = "200px";

      const mewimg = document.createElement("img");
      mewimg.src = imageUrl; 
      mewimg.style.width = "100%";
      mewimg.style.height = "150px";
      mewimg.style.objectFit = "cover";

      const nameElem = document.createElement("h3");
      nameElem.textContent = productName;

      const infoElem = document.createElement("p");
      infoElem.textContent = productInfo;

      const priceElem = document.createElement("p");
      priceElem.innerHTML = `<strong>Price:</strong> $${productPrice}`;

      newProductDiv.appendChild(mewimg);
      newProductDiv.appendChild(nameElem);
      newProductDiv.appendChild(infoElem);
      newProductDiv.appendChild(priceElem);

      Elwrap.appendChild(newProductDiv);

      console.log("Product added successfully!");
      productForm.reset();
      productModal.hide();
  });
});





