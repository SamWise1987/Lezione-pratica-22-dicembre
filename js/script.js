function createH1(){
    const shopName = document.createElement("h1");
    shopName.innerText = "Amazon 2.0";
    const shopNameDiv = document.createElement("div");
    shopNameDiv.append(shopName);
    document.body.append(shopNameDiv);
}

createH1();


function renderProducts(){
    const mainContainer = document.createElement("main")
    const container = document.createElement("div");
    container.classList.add("products-container");
    products.forEach((product) =>{
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card-container");
        const title = document.createElement("h2");
        title.textContent = product.title;
        const description = document.createElement("p");
        description.textContent = product.description;
        const price = document.createElement("p");
        price.textContent = product.price;
        const img  = document.createElement("img")
        img.src = product.img;
        img.classList.add("card-img");
        const link = document.createElement("a");
        link.href = product.link;
        link.target = "_blank";
        link.textContent = "link Amazon";
        cardContainer.append(title, description, price, img, link);    

        

        container.append(cardContainer); 
        mainContainer.append(container);

    })
    document.body.append(mainContainer);
  
    
}
renderProducts()


function renderFooter(){
    const footer = document.createElement("footer");
    footer.classList.add("footer-container");
    const containerName = document.createElement("div");
    containerName.textContent = footerData.name; 
    const containerLink = document.createElement("div");
    containerLink.textContent = footerData.link;
    footer.append(containerName, containerLink);
    document.body.append(footer);


}

renderFooter()
