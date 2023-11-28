// // Define the API endpoint URL
// const apiUrl = 'https://occhl977el.execute-api.eu-west-1.amazonaws.com/Prod/rss/';

// // Get a reference to the HTML img element
// const productImage = document.getElementById('productImage');
// // Get a reference to the h4 heading element
// const productTitle = document.getElementById('title');
// // Get a reference to the p element for Google product category
// const productCategory = document.getElementById('google_product_category');

// // Add an event listener to the form for when it's submitted
// document.getElementById('productForm').addEventListener('submit', async function (event) {
//     event.preventDefault(); // Prevent the form from actually submitting

//     // Get the product ID from the input field
//     const productId = document.getElementById('productId').value;
//     console.log(productId)

//     try {
//         const response = await fetch(`${apiUrl}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ mpn: productId })
//         });
//         console.log(response)

//         if (response.ok) {
//             const data = await response.json();
//             console.log(data)
//             // Check if the JSON response contains the necessary fields
//             if (data.hasOwnProperty('image_url') && data.hasOwnProperty('title') && data.hasOwnProperty('google_product_category')) {
//                 // Update the src attribute of the image element with the received image URL
//                 productImage.src = data.image_url;
//                 productImage.alt = 'Product Image'; // You can set the alt text as needed

//                 // Update the text content of the h4 heading element with the received title
//                 productTitle.textContent = data.title;

//                 // Update the text content of the p element with the received Google product category
//                 productCategory.textContent = data.google_product_category;
//             } else {
//                 console.error('API response does not contain necessary fields');
//             }

//         } else {
//             console.error('Request failed with status:', response.status);
//         }
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// });

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

// Add an event listener to the form for when it's submitted
document.getElementById('productForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Get the product ID from the input field
    const productId = document.getElementById('productId').value;
    console.log(productId)

    try {
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mpn: productId })
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
