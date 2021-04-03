//Display countdown from 10 to 1 on the screen and then display Happy Independence Day on the screen.

let count = 10 ;
document.body.style.fontSize = "50px";
document.body.style.color = 'red';
let countdown = function (){
    setTimeout(function() {
        let b = document.createElement('br');
        document.body.append(count--,b);
    { count !== 0 ? countdown() : document.body.append("Independence day");};
  },1000);
    
}
countdown();