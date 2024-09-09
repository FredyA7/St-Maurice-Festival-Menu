{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww30040\viewh16060\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let cart = [];\
let total = 0;\
\
function addToCart(item, price) \{\
    cart.push(\{ item, price \});\
    total += price;\
    displayCart();\
\}\
\
function displayCart() \{\
    const cartItems = document.getElementById('cart-items');\
    const totalDisplay = document.getElementById('total');\
    \
    cartItems.innerHTML = '';\
    \
    cart.forEach((cartItem) => \{\
        const li = document.createElement('li');\
        li.textContent = `$\{cartItem.item\} - $$\{cartItem.price\}`;\
        cartItems.appendChild(li);\
    \});\
\
    totalDisplay.textContent = total;\
\}\
\
// Square payment form (replace 'sandbox' with your Square application id for production)\
const paymentForm = new SqPaymentForm(\{\
    applicationId: 'sandbox-sq0idb-XXXXXXXXXXXXX',\
    locationId: 'XXXXXXX',\
    inputClass: 'sq-input',\
    autoBuild: false,\
    inputStyles: [\{\
        fontSize: '16px',\
        padding: '10px',\
    \}],\
    cardNumber: \{\
        elementId: 'sq-card-number',\
        placeholder: 'Card Number',\
    \},\
    cvv: \{\
        elementId: 'sq-cvv',\
        placeholder: 'CVV',\
    \},\
    expirationDate: \{\
        elementId: 'sq-expiration-date',\
        placeholder: 'MM/YY',\
    \},\
    postalCode: \{\
        elementId: 'sq-postal-code',\
        placeholder: 'Postal',\
    \},\
    callbacks: \{\
        cardNonceResponseReceived: function(errors, nonce, cardData) \{\
            if (errors) \{\
                // Handle errors here\
                console.error(errors);\
                return;\
            \}\
            alert('Payment successful with nonce: ' + nonce);\
        \}\
    \}\
\});\
\
document.getElementById('checkout-button').addEventListener('click', function() \{\
    paymentForm.requestCardNonce();\
\});}