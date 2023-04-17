describe("Tests on saucedemo.com", () =>{
  it("Login should not working with incorrect credentials", () =>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('#password').type("secretpass")
    cy.get('[data-test="login-button"]').click()

    //We check if the error message appears partial when we enter the wrong credentials

    const errorMessage = cy.get('[data-test="error"]')
    errorMessage.should('include.text' , 'Username and password do not match any user in this service')
  })
  it("Login should work with correct credentials", () =>{
    cy.visit('https://www.saucedemo.com/')
    const correctUser = cy.get('[data-test="username"]')
    const correctPassword = cy.get('#password')

    correctUser.type("standard_user")
    correctPassword.type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    //We check if we have the logout option immediately after logging in.

    cy.get('.bm-burger-button').click()
    cy.get('#logout_sidebar_link').should('be.visible')
  })
  it("Logout function should works properly", () =>{
    cy.visit('https://www.saucedemo.com/')
    const correctUser = cy.get('[data-test="username"]')
    const correctPassword = cy.get('#password')

    correctUser.type("standard_user")
    correctPassword.type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    //We check if we have the logout option in menu immediately after logging in.

    cy.get('.bm-burger-button').click()

    // We check if the logout function works properly.
    cy.get('#logout_sidebar_link').click()

  //We check if the logout button worked correctly and we returned to the login page, checking if the login button exists and the username and password input fields also exist.
  cy.get('[data-test="login-button"]').should('be.visible')
  correctUser.should('exist')
  correctPassword.should('exist')
  })
  it("Shopping cart functions should works properly", () =>{
    cy.visit('https://www.saucedemo.com/')
    const correctUser = cy.get('[data-test="username"]')
    const correctPassword = cy.get('#password')
    
    // Login with correct credentials
    correctUser.type("standard_user")
    correctPassword.type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    //Accesing shopping cart
    cy.get('.shopping_cart_link').click() 
    cy.wait(500)
    cy.get('[data-test="continue-shopping"]').click()

    //We select a product to add it to the basket and check if the functionality works properly(Ex:backpack)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    //We check if the shopping cart has been transitioned from 0 to 1.
    cy.get('.shopping_cart_badge').should('include.text', '1')
    cy.get('.shopping_cart_link').click() 

    //We remove the product from the cart and add several products at the same time to check if the functionality works with several products simultaneously, as well as the removal functionality.
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.wait(500)
    cy.get('[data-test="continue-shopping"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    //We check if the shopping cart has been transitioned from 0 to 3.
    cy.get('.shopping_cart_badge').should('include.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.get('.shopping_cart_badge').should('include.text', '3')

    // We check if the process of placing the order works properly.
    cy.get('[data-test="checkout"]').click()
    //Add informations on form and complete order
    cy.get('[data-test="firstName"]').type('Razvan')
    cy.get('[data-test="lastName"]').type('Gabriel')
    cy.get('[data-test="postalCode"]').type('1234')
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header').should('include.text', 'Thank you for your order')    
  })
})