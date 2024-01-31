const getData = async () => {
    try {
        let response = await axios.get(`http://api.coinlayer.com/api/list?access_key=f9daa63f77122eab6ef8fce9e8767eb3`);
        console.log(response.data);
        return response.data.crypto;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
}

// Create constants to hold dom elements
const DOM_Elements = {
    crypto_list :'.cryptocurrency-list'
};

// Create the crypto list html
const create_list = (symbol, name, max_supply) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light">${name} (${symbol} ${max_supply})</a>`;
    document.querySelector(DOM_Elements.crypto_list).insertAdjacentHTML('beforeend', html);
}

// functions to load data and display HTML
const load_data = async () => {
    const cryptos = await getData();
    console.log(cryptos);
    console.log(typeof cryptos);

 // Assuming `crypto` is an object where each key is a cryptocurrency symbol and its value is an object containing the name
 Object.entries(cryptos).forEach(([symbol, cryptoInfo]) => {
    create_list(symbol, cryptoInfo.name);
});
}

const clear_data = () => {
    document.querySelector(DOM_Elements.crypto_list).innerHTML = ''
}