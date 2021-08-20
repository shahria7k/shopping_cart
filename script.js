function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    if (isIncreasing) {
        productNumber = productNumber + 1;
        productInput.value = productNumber;
    } else if (productNumber > 0) {
        productNumber = productNumber - 1;
        productInput.value = productNumber;
    }
    //update product total
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseFloat(productInput.value);
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}
//phone case change events
document.getElementById('phone-plus').addEventListener('click', e => {
    updateProductNumber("phone", 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', e => {
    updateProductNumber("phone", 1219, false);
});
//handle case change events
document.getElementById('case-plus').addEventListener('click', e => {
    updateProductNumber("case", 59, true);
});
document.getElementById('case-minus').addEventListener('click', e => {
    updateProductNumber("case", 59, false);
});