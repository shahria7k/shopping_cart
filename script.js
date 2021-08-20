function updateCaseNumber(isIncreasing) {
    const caseInput = document.getElementById('case-number');
    let caseNumber = parseInt(caseInput.value);
    if (isIncreasing) {
        caseNumber = caseNumber + 1;
        caseInput.value = caseNumber;
    } else if (caseNumber > 0) {
        caseNumber = caseNumber - 1;
        caseInput.value = caseNumber;
    }
    //update case total
    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;

}

document.getElementById('case-plus').addEventListener('click', e => {
    updateCaseNumber(true);
});
document.getElementById('case-minus').addEventListener('click', e => {
    updateCaseNumber(false);
});