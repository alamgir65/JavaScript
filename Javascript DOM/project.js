function handleDeposit(){
    var inputVal =getConvert("input-val","value");
    
    var depositedVal =getConvert("deposit-val","innerText");

    var total = inputVal+depositedVal;
    setInnerText("deposit-val",total);


    var previousTotalVal =getConvert("total-val","innerText");
    var newTotalVal = previousTotalVal+inputVal;
    setInnerText("total-val",newTotalVal);

    document.getElementById("input-val").value = " ";
}

function handleWithdraw(){
    var inputVal =getConvert("inputVal","value");
    var withdrawedVal =getConvert("withdraw-val","innerText");
    var total = inputVal+withdrawedVal;
    setInnerText("withdraw-val",total);
    
    var previousTotalVal =getConvert("total-val","innerText");
    var newTotalVal = previousTotalVal-inputVal;
    setInnerText("total-val",newTotalVal);

    document.getElementById("inputVal").value=" ";
}


function setInnerText(id,val){
    document.getElementById(id).innerText=val.toFixed(2);
}

function getConvert(id,element){
    var val=0;
    (element=="innerText")? Val = document.getElementById(id).innerText: Val = document.getElementById(id).value;
    return parseFloat(Val)
}
