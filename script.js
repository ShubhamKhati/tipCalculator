const inputBill=document.getElementById('input-bill');
const inputTip=document.getElementById('input-tip');
let billPlusTip=document.getElementById('total');
let people=document.getElementById('people-count');

let noOfPeople=Number(people.innerText);

function calculateBill(){
       console.log(noOfPeople);
    let bill=Number(inputBill.value);
       console.log(bill);
    // console.log(bill);
    let tipPercentage=Number(inputTip.value)/100;
    console.log(tipPercentage);
    let totalTip=bill*tipPercentage;
    let totalBill=(bill+totalTip)/noOfPeople;
    billPlusTip.innerText=`$${totalBill.toFixed(2)}`;
    console.log(billPlusTip.innerHTML);
}
const increasePeople=()=>{
    noOfPeople+=1;
    people.innerText=noOfPeople;
    calculateBill();
}
const decreasePeople=()=>{
    if(noOfPeople>1){
        noOfPeople-=1;
    }
    people.innerText=noOfPeople;
    calculateBill();
}



