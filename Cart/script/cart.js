var alert =document.getElementById('alert');
var button=document.getElementsByClassName('add-btn');
var item=document.getElementsByClassName('item')
var cart_body=document.getElementById('cart-body')
var cart_item_code=document.getElementsByClassName('item-code')
var total_items=document.getElementById('total_items');
var checkout_btn=document.getElementById('checkout');
var checkout_item_num=document.getElementById('number')
var quantity=document.getElementsByClassName('quantity')
// console.log(button);
for(let i=0;i<button.length;i++)
{
    button[i].addEventListener('click',function()
    {
        // console.log(i);
        AddToCart(i)
    })
}
 function AddToCart (i) { 
     // get item code  
     let item_code=item[i].value;
    //  console.log(item_code);
    var duplicate= checkDuplicate(item_code);
    // console.log(duplicate);
    if(duplicate)
    {
        alert.innerHTML=`<div class="alert alert-danger" role="alert">
        Item Has been already added to <a href="" data-toggle="modal" data-target="#cart-modal">cart</a> 
      </div>`
     
        setTimeout(() => {
            alert.innerHTML=``;
        }, 2000);
        return;
    }
    //  add item to cart 
     cart_body.innerHTML+=`  <div class="cart-item mt-2">
     <span class="text-dark">Item Code-: <span class="item-code">${item_code}</span></span>
     <input type="number" min="0" class="quantity" value="1">
 </div>`

// update cart item numbers  
var cart_items=document.getElementById('cart-body')
let items_in_cart=cart_items.childNodes.length/2;
    total_items.innerHTML=`${items_in_cart}`
    checkout_item_num.innerHTML=`${items_in_cart}`
//  show alert
    alert.innerHTML=`<div class="alert alert-success" role="alert">
    Item Has been added to <a href="" data-toggle="modal" data-target="#cart-modal">cart</a> 
  </div>`

//   remove alert
  setTimeout(() => {
      alert.innerHTML=``;
  }, 2000);
  }

//   check duplicate item in cart
 function checkDuplicate(item_code)
 {
    //  console.log('item code',item_code);
   let  duplicate=false;
    for(let i=0;i<cart_item_code.length;i++)
    {
    //    console.log( cart_item_code.length);
       
    if(cart_item_code[i].innerText==item_code)
    {
        
        // console.log('duplicate found');
         duplicate =true
       
    }   
  
    }
    return duplicate;
 }

 var checkout_codes=[]
 var confirm_quantity=[]
 
 checkout_btn.addEventListener('click', PurchaseCart);

 function PurchaseCart()
 {
    var checkout_codes=[]
    var confirm_quantity=[]
     for(let j=0;j<cart_item_code.length;j++)
     {
      
        let checkout_item_code=cart_item_code[j].innerText;
        let  checkout_quantity=quantity[j].value;
        if(quantity[j].value>0)
        {
            checkout_codes.push(checkout_item_code)
            confirm_quantity.push(checkout_quantity)
        }
        }
       console.log(checkout_codes);
       console.log(confirm_quantity);
       
 }



