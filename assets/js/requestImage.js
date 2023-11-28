// Define the API endpoint URL
const apiUrl = 'https://occhl977el.execute-api.eu-west-1.amazonaws.com/Prod/rss/';

// Get a reference to the HTML img element
const productImage = document.getElementById('productImage');
// Get a reference to the h4 heading element
const productTitle = document.getElementById('title');
// Get a reference to the p element for Google product category
const productCategory = document.getElementById('google_product_category');
// Get a reference to the p element for the price
const productPrice = document.getElementById('price');
// Get a reference to the input element for the product ID
const productIdInput = document.getElementById('productId');

// Add an event listener to the form for when it's submitted
document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the product ID from the input field
    const enteredProductId = productIdInput.value;
    console.log(enteredProductId);

    try {
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mpn: enteredProductId })
        });
        console.log(response)

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            // Check if the JSON response contains the necessary fields
            if (data.hasOwnProperty('image_url') && data.hasOwnProperty('title') && data.hasOwnProperty('google_product_category') && data.hasOwnProperty('price')) {
                // Update the src attribute of the image element with the received image URL
                productImage.src = data.image_url;
                productImage.alt = 'Product Image'; // You can set the alt text as needed

                // Update the text content of the h4 heading element with the received title
                productTitle.textContent = data.title;

                // Update the text content of the p element with the received Google product category
                productCategory.textContent = data.google_product_category;

                // Update the text content of the p element with the received price
                productPrice.textContent = data.price;

                // Clear the input value after processing (set the input field value to an empty string)
                document.getElementById('productId').value = '';

            } else {
                console.error('API response does not contain necessary fields');
            }

        } else {
            console.error('Request failed with status:', response.status);
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
});