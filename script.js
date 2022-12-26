let bill = document.getElementById("bill")
let noOfPersons = document.getElementById("people")
let tipOut = document.getElementById("tipout")
let billOut = document.getElementById("billout")
let totalBill = 0
let tipBill = 0
let tipPercent = 0
function tipFun(v) {
    let buttons = document.getElementsByClassName("btn")
    //console.log(buttons);
    buttons[0].setAttribute("style", "background-color:hsl(183, 100%, 15%)")
    buttons[1].setAttribute("style", "background-color:hsl(183, 100%, 15%)")
    buttons[2].setAttribute("style", "background-color:hsl(183, 100%, 15%)")
    buttons[3].setAttribute("style", "background-color:hsl(183, 100%, 15%)")
    buttons[4].setAttribute("style", "background-color:hsl(183, 100%, 15%)")
    tipPercent = v
    let buttonID = "btn"
    buttonID += v
    document.getElementById(buttonID).setAttribute("style", "background-color:hsl(172, 67%, 45%)")
    //    console.log(buttonID);
}
function billFun() {
    tipBill = (bill.value * tipPercent / 100) / noOfPersons.value
    // console.log(bill.value,noOfPersons.value);
    totalBill = tipBill + (bill.value / noOfPersons.value)
    tipOut.value = tipBill
    billOut.value = totalBill
}
function reset() {
    let id = "btn"
    id += tipPercent
    tipPercent = 0
    bill.value = 0
    //    console.log(id);
    noOfPersons.value = 0
    tipOut.value = 0
    billOut.value = 0
    document.getElementById(id).setAttribute("style", "background-color:hsl(183, 100%, 15%)")
}