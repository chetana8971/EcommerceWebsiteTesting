import { loadAlltheProducts, verifyNameofProduct,verifyAddToCartButton ,openCart, 
    clickOnAddToCartButton, verifyProductInCartWithQuantityandPrice,   clickOnIncrementButtonInCart,
         VerifyInCartQuantityIndicator, verifyTotalAmountInCart, clickOnRemoveButtonIncart, 
         clickOnDecrementButtonIncartAndVerifyInCartQuantityIndicator, closeCart } from "./EcommerceWebsite.helpers"
    
    describe('Testing Of Products',function(){
    
      before(() => {
    
            cy.visit('https://react-shopping-cart-67954.firebaseapp.com/')
            cy.url().should('include','react-shopping-cart-67954') //verify URL
    
          })
    
    it('Test if all products are loaded and displayed correctly, Test if the product image, name, and price are displayed correctly, Test if the Add to Cart button is displayed and enabled for each product.', function(){
    
        loadAlltheProducts(); //verify loading of all products
        verifyNameofProduct(); //verify name of product
        verifyAddToCartButton();  //verify add to cart button
    })
    
    it('Adding Products to Cart and Cart Functionality', function(){
        openCart(); //verify that cart can be opened
        clickOnAddToCartButton(); //click On add to cart button
        verifyProductInCartWithQuantityandPrice(); //verify the same product in cart
        clickOnIncrementButtonInCart(); //click on increment button to add quantity of the product
        VerifyInCartQuantityIndicator(); //verify in cart quantity indicator
        cy.wait(5000);
        verifyTotalAmountInCart(); //verify total cart amount
        cy.wait(5000)
        clickOnDecrementButtonIncartAndVerifyInCartQuantityIndicator(); //click on decrement
        clickOnRemoveButtonIncart(); //Verify that product is removed from cart
         closeCart();//verify that cart should be closed
    })
    
    })
    