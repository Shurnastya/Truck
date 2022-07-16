async function getResponse() {
    let response = await fetch('https://raw.githubusercontent.com/alexnaidovich/frontend_test_task/master/dataset.json');
    let content = await response.json()
    let stock = content.stock;
    let nav = content.nav;
    let page = content.page_text;
    let product = document.querySelector('.product');
    let naigation = document.querySelector('.nav');
    let infoTruck = document.querySelector('.wrapper');
    let key;

    for (key in nav) {
        naigation.innerHTML +=`
        <ul>
            <li><a href="${nav[key].href}">${nav[key].text}</a></li>
        </ul>
        `;
    }

    for (key in stock) {
        product.innerHTML +=`
        <div class="block-wrapper">
            <div class="block">
                <h2>${stock[key].model}</h2>
                <img src="./img/${stock[key].image}">
                
            </div>
            <div class="hidden">
                <h3>${stock[key].title}<br>${stock[key].year}</h3>
                    <div class="info">
                        <p>${stock[key].price} ${stock[key].price_currency}</p>
                        <p>${stock[key].mileage} ${stock[key].mileage_measure}</p>
                    </div>
                </div>
        </div>
        `;
    }

    for (key in page) {
        infoTruck.innerHTML +=`
            <p>${page[key].content}</p>
        `;

    }
    
}
getResponse();