# AutomationWithCypress

In this automation test I used Cypress with JavaScript for my tests.

In the first test, I checked if the "Login" functionality works with the wrong credentials, checking if an error message appears when the user enters the wrong data.(Test Passed)

In the second test, I checked if the "Login" functionality works with the correct credentials. I checked if the login was done correctly by looking for the "Logout" button.(Test Passed)

In the third test, I checked the "Logout" function if it works correctly. I logged in on the page, I looked in the menu to see if there is a "Logout" function and I accessed it, then I checked if it redirected me to the " Login", looking for the "username" and "password" fields, as well as the "login" button.(Test Passed)

In the fourth test I checked the functionalities of the shopping cart, immediately after logging in I accessed the shopping cart to see if the functionality is functional, after this check I returned to the main page to add a single product to the cart and check if the shopping cart transition updated from 0 to 1. After these steps I removed that product from the cart and returned to the main menu to add more products to the cart to check if the functionality works with more products and if the cart transition of shopping is updated according to the number of products. After adding the desired products to the shopping cart, I checked if the order placement process works correctly, entering the data to place the order and checking if the application displays a message if the order was placed successfully or not.(Test Passed)
