const plusPhone = document.getElementById('plusPhone')
const minusPhone = document.getElementById('minusPhone')
const plusCase = document.getElementById('plusCase')
const minusCase = document.getElementById('minusCase')


plusPhone.addEventListener('click', function () {
    //  console.log(updateValue(getInputNumber('NumberPhone', '+'), 1219))
    //  let total = (updateValue(getInputNumber('NumberPhone', '+'), 1219))

    // sum(updateValue(getInputNumber('NumberPhone', '+'), 1219))
    updateSpanText('phone-price', updateValue(getInputNumber('NumberPhone', '+'), 1219))
    //  updateSpanText('Subtotal', getSpanText('phone-price'))
    finalCost()
})

minusPhone.addEventListener('click', function () {
    //  console.log(updateValue(getInputNumber('NumberPhone', '-'), 1219))
  //  checkPositiveInput('minusPhone', 'NumberPhone')
    /*if (document.getElementById('NumberPhone').value < 0) document.getElementById('minusPhone').disabled = true
    document.getElementById('minusPhone').disabled = false*/
    updateSpanText('phone-price', updateValue(getInputNumber('NumberPhone', '-'), 1219))
    finalCost()
    // updateSpanText('Subtotal', getSpanText('phone-price'))
})

plusCase.addEventListener('click', function () {
    //  console.log(updateValue(getInputNumber('NumberCase', '+'), 59))
    updateSpanText('case-price', updateValue(getInputNumber('NumberCase', '+'), 59))
    finalCost()
})


minusCase.addEventListener('click', function () {
    //  console.log(updateValue(getInputNumber('NumberCase', '-'), 59))
    checkPositiveInput('minusCase', 'NumberCase')
    updateSpanText('case-price', updateValue(getInputNumber('NumberCase', '-'), 59))
    finalCost()
})

function checkPositiveInput(button, value) {
    if (document.getElementById(value).value < 0) document.getElementById(button).disabled = true
}

function getSpanText(id) {
    const current = document.getElementById(id).innerText;
    return parseFloat(current)
}


function getInputNumber(id, operator) {
    // if (Math.sign(document.getElementById(id).value) === 1) document.getElementById(button).disabled = true
    // else document.getElementById(button).disabled = false
    let amount = document.getElementById(id).value;
    if ( amount > 0) {
        if (operator === '-') amount = parseInt(amount) - 1
    }
    if (operator === '+') amount = parseInt(amount) + 1
    document.getElementById(id).value = amount.toString()
    return parseFloat(amount)
}

function updateValue(itemNumber, price) {

    return (itemNumber * price)
}


function updateSpanText(id, result) {

    document.getElementById(id).innerText = result
}

function finalCost() {
    let sum = (getSpanText('phone-price') + getSpanText('case-price')).toString()
    if (sum.length > 2) sum = sum.insert(1, ',')
    updateSpanText('Subtotal', sum)
    updateSpanText('Total', sum)
}


String.prototype.insert = function (index, string) {
    if (index > 0) {
        return this.substring(0, index) + string + this.substr(index);
    }

    return this;
};



