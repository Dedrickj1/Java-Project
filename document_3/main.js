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
    crypto_list :'.crypto-list'
}

// Create the crypto list html
const create_list = (name ) => {
    const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light"${name}</a>`
    document.querySelector(DOM_Elements.crypto_list).insertAdjacentHTML('beforeend', html)
}

// functions to load data and display HTML
const load_data = async () => {
    const crypto = await getData();
    console.log(crypto);
    console.log(typeof crypto);
    crypto.name.forEach(crypto => create_list(crypto.symbol, crypto.name))
}

const clear_data = () => {
    document.querySelector(DOM_Elements.crypto_list).innerHTML = ''
}