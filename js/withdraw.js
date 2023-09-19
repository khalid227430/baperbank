// step-1
document.getElementById('btn-withdraw').
addEventListener('click', function(){
    // console.log("withdraw button clicked")

    // step-2
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawTotal)
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString =balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotalElement.innerText=newBalanceTotal;

//    step-7
withdrawField.value = '';

})