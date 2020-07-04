var bill = document.getElementById("billinput");
var service = document.getElementById('howgoodinput');
var people = document.getElementById('peopleinput');
var tip = document.getElementById('tip');
var amount1 = document.getElementById('amount1');
var amount2 = document.getElementById('amount2');

function calculate() {
  var percsntage = 0;
  if (service.options[service.selectedIndex].value == 0) {
    percsntage = 30;
  };
  if (service.options[service.selectedIndex].value == 1) {
    percsntage = 20;
  };
  if (service.options[service.selectedIndex].value == 2) {
    percsntage = 15;
  };
  if (service.options[service.selectedIndex].value == 3) {
    percsntage = 10;
  };
  if (service.options[service.selectedIndex].value == 4) {
    percsntage = 5;
  };
  var tipamount = Math.round(bill.value * (percsntage / 100));
  console.log(tipamount);
  tip.innerHTML = "$" + tipamount;
  amount1.innerHTML = "The amount is";
  amount2.innerHTML = "for each";
}
