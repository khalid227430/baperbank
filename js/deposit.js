//  step-1
 document.getElementById('btn-deposit').addEventListener('click', function(){
      //   console.log('deposit button clicked')
    // step-2
     const depositField = document.getElementById('deposit-field');
     const newDepositAmountString = depositField.value;
     const newDepositAmount = parseFloat(newDepositAmountString);
      // const newDepositAmountString=depositField.value;
      // const newDepositAmount = parseFloat(newDepositAmountString); 
      //  console.log(depositAmount);
    // step-3
        const depositTotalElement = document.getElementById('deposit-total');
        const previousDepositTotalString = depositTotalElement.innerText;
        const previousDepositTotal = parseFloat(previousDepositTotalString)

        // const currentDepositTotal = previousDepositTotal + newDepositAmount;
        // depositTotalElement.innerText= currentDepositTotal;
      //  const previousDepositTotalString = depositTotalElement.innerText;
    //  const previousDepositTotal = parseFloat(previousDepositTotalString);
      //  console.log(typeof previousDepositTotal);
   //   step-4
    const currentDepositTotal =  previousDepositTotal + newDepositAmount;
   depositTotalElement.innerText = currentDepositTotal;
   
      //  const currentDepositTotal = previousDepositTotal + newDepositAmount;

    //  depositTotalElement.innerText=currentDepositTotal;
      //  console.log(depositTotal);

      // step-5
       const balanceTotalElement = document.getElementById('balance-total');
       const previousBalanceTotalString = balanceTotalElement.innerText;
       const previousBalanceTotal = parseFloat(previousBalanceTotalString);

      // step-6
       const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     balanceTotalElement.innerText= currentBalanceTotal;
      // step-7
    depositField.value = '';  
 })
