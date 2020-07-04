var output = document.getElementById("outputvalue");
result_str =""
const delay = 500;

var buttonElements = document.querySelectorAll('.number');
for (var i = 0;i < buttonElements.length;i++){
  buttonElements[i].addEventListener('click',function(){
      result_str += this.innerHTML;
      output.innerHTML = result_str;
    });
  };

var operatorElements = document.querySelectorAll('.operater');
for (var i = 0;i < operatorElements.length;i++){
  operatorElements[i].addEventListener('click',function(){
      result_str += ` ${this.innerHTML} `;
      output.innerHTML = result_str;
    });
  };

function equal() {
  try {
    output.innerHTML = eval(result_str);
  } catch (err) {
    result_str = "Not valid";
    output.innerHTML = result_str;
    setTimeout(function() {
  //your code to be executed after 1 second
    result_str = "";
    output.innerHTML = result_str;
}, delay);
  } finally {
    result_str = "";
  }
}

function remove() {
  numbers = result_str.split(" ")
  numbers.pop()
  result_str = numbers.join(" ")
  output.innerHTML = result_str;
}
