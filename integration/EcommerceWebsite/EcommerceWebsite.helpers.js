export const loadAlltheProducts = () =>{
    cy.get('[class*="sc-uhudcz-0"]').should('be.visible');
}
export const verifyNameofProduct = () =>{
    cy.get('[class*="sc-uhudcz-0"] .sc-124al1g-4').contains('Cropped Stay Groovy off white').should('be.visible'); //verify name of product
}
export const verifyAddToCartButton = () =>{
    cy.get('[class*="sc-uhudcz-0"]').contains('Add to cart').should('be.visible').should('be.enabled'); //verify add to cart button
}
export const openCart = () =>{
    cy.get('[class*="sc-1h98xa9-2"]').click(); //verify that cart can be opened
}
export const clickOnAddToCartButton = () =>{
    cy.get('[class*="sc-uhudcz-0"] .sc-124al1g-0').eq(0).should('be.visible').click();
}
export const verifyProductInCartWithQuantityandPrice = () =>{
    cy.get('[class*="sc-11uohgb-0"]').contains('Cropped Stay Groovy off white').should('be.visible');
    cy.get('[class*="sc-11uohgb-3"]').contains('Quantity: 1').should('be.visible');
    cy.get('[class*="sc-11uohgb-4"]').contains('$  10.90').should('be.visible');
}
export const clickOnIncrementButtonInCart = () =>{
    cy.get('[class*="sc-11uohgb-0"] .sc-11uohgb-6').eq(1).click(); //click on increment button to add quantity of the product
    
}
export const VerifyInCartQuantityIndicator = () =>{
    cy.get('[class*="sc-1h98xa9-3"]').contains(2).should('be.visible'); //verify in cart quantity indicator 
}
export const verifyTotalAmountInCart = () =>{
    cy.get('[class*="sc-1h98xa9-12"] .sc-1h98xa9-9').contains(21.80).should('be.visible');
}
export const clickOnDecrementButtonIncartAndVerifyInCartQuantityIndicator = () =>{
    cy.get('[class*="sc-11uohgb-0"] .sc-11uohgb-6').eq(0).click({force: true});
    // cy.get('[class*="sc-1h98xa9-3"]').contains(1).should('be.visible');
}
export const clickOnRemoveButtonIncart = () =>{
    cy.get('[class*="sc-11uohgb-0"] .sc-11uohgb-5').eq(0).click({force:true});
}
export const closeCart = () =>{
    cy.get('[class*="sc-1h98xa9-0"]').click();	 //verify that cart should be closed
}
