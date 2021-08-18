var number=document.getElementsByClassName('number');
var genrate_btn=document.getElementById('genrate_btn');
var result=document.getElementById('result');
genrate_btn.addEventListener('click', Show);
var message=document.getElementById('message');
function Show()
{
    var total_numbers=0;
    // Show table structure
    result.innerHTML=`<table class="table w-100 text-center">
    <thead>
      <tr>
        <th scope="col">Sr.no.</th>
        <th scope="col">Genrated Numbers</th>
      </tr>
    </thead>
    <tbody>
      <tr class="output">
        <td>1</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>2</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>3</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>4</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>5</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>6</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>7</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>8</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>9</td>
        <td class="number"></td>
      </tr>
      <tr class="output">
        <td>10</td>
        <td class="number">10</td>
      </tr>
    </tbody>
  </table>`;

  var output=document.getElementsByClassName('output');
  
  for(let i=0;i<number.length;i++)
  {
    //   for styling only numbers
    //   number[i].style.backgroundColor = "blue";
      output[i].style.backgroundColor = "#00BFFF"; 
  }
 
//   Insert Random values
    for (let i=0; i<=9;i++)
    {
        let random_num=Math.floor(Math.random() * 1001);
        number[i].innerText=`${random_num}`
        let prime=isPrime(random_num);
        if(prime)
        {
    //   number[i].style.backgroundColor = "red";
      output[i].style.backgroundColor = "#FF3030 ";
      total_numbers++

        }
        
    }

    if(total_numbers>0)
    {
        message.innerHTML=`<div class="alert alert-success" role="alert">
        ${total_numbers} Prime numbers found
      </div>`
    }
    else
    {
        message.innerHTML=`<div class="alert alert-warning" role="alert">
        No prime numbers found in table
      </div>`
    }
    
}

    
// check prime number
function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
    var prime = num != 1;
          for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
            if(num % i == 0) {
                  prime = false;
                  break;
                }
            }
            return prime;
}        
        