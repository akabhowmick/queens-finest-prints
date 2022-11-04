const XAUTHORIZATION = "pk_test_425760b934b89ad5046a55ca0801429580aa7aa2138df"

const url = new URL (
    "https://api.chec.io/v1/products"
)

let headers = {
    "X-Authorization": XAUTHORIZATION,
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With"
};

class InputData{
    async productListings() {
        return new Promise(async (success, failure) => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: headers,
                })
                if (response) {
                    const json = await response.json();
                    const data = json.data
                    .filter(item => item !== 'meta')
                    .map(data => ({
                        name: data.name,
                        desc: data.description,
                        price: data.price.raw,
                        inventory: data.inventory.available,
                        img: data.image.url,
                        id: data.id,
                        quantity: 1,
                        addedToCart: false,
                        imageCarosel: data.assets,
                        requiredFields: data.extra_fields,
                        requiredCustomized: {}
                    }))
                    success({ response, data })
                } else {
                    failure({ error: "Invalid http Request"})
                }
            } catch(error) {
                failure(error);
            }
        })
    }
}

export default InputData;
