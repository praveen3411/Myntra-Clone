     
     let cont=document.getElementById("container")
     let get_item =JSON.parse(localStorage.getItem("save-item"))
     console.log(get_item)
 
     if(get_item==null||get_item.length==0){
 
         let div=document.createElement("div")
         div.setAttribute("class","box1")
 
         let img=document.createElement("img")
         img.src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp"
 
         let h3=document.createElement("h3")
         h3.innerText="Hey,it feels so light!"
 
         let p=document.createElement("p")
         p.innerText="There is nothing in your bag.Let's add some items."
 
         btn1=document.createElement("button")
         btn1.innerText="ADD ITEMS FROM WISHLIST"
         btn1.setAttribute("class","btn1")
         btn1.addEventListener("click",function(){
        
         window.location.href="wishList.html"
        })
        
         div.append(img,h3,p,btn1)
         cont.append(div)
     }
     else{
         let div1=document.createElement("div")
         div1.setAttribute("class","div1")
 
         let h1=document.createElement("h4")
         h1.innerText="Check delivery time & services"
 
         let btn2=document.createElement("button")
         btn2.innerText="ENTER PIN CODE"
         btn2.setAttribute("class","btn2")
         div1.append(h1,btn2)
         cont.append(div1)
 
         let div2=document.createElement("div")
         div2.setAttribute("class","div2")
 
         let h2=document.createElement("h4")
         h2.innerText="Available offers"
 
         let p1=document.createElement("p")
         p1.innerText=".10% instant discount on debit & credit card,T&C apply!"
 
 
         let h3=document.createElement("h4")
         h3.innerText="Show More >>"
         h3.style.color="red"
         div2.append(h2,p1,h3)
         cont.append(div2)
        
         get_item.forEach((ele,index)=>{
 
             let div4=document.createElement("div")
             div4.setAttribute("class","div4")
 
             let div5=document.createElement("div")
           
            div5.setAttribute("class","div5")
            
 
             let div6=document.createElement("div")
             div6.setAttribute("class","div6")
 
             let img=document.createElement("img")
            img.src=ele.img;
 
         let h1=document.createElement("h4")
         h1.innerText=ele.name
       
         let h2=document.createElement("p")
         h2.innerText=ele.brand
         
         let h3=document.createElement("h4")
         h3.innerText=` Rs ${ele.price}`
 
         let h4=document.createElement("p")
         h4.innerText=` Rs ${ele.pstrike}`
         h4.setAttribute("class","pstrike")
 
         let rmv=document.createElement("img")
          rmv.src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-gray-cross-symbol-free-illustration-image_1280885.jpg"
          rmv.setAttribute("class","remove")
          rmv.addEventListener("click",function(){
             rmve(ele,index)
          })
         div4.append(img)
         div5.append(h1,h2,h3,h4)
         div6.append(div4,div5,rmv)
         cont.append(div6)
 
           function rmve(ele,index){
             event.target.parentNode.remove()
             get_item.splice(index,1)
             localStorage.setItem("save-item",JSON.stringify(get_item))
             window.location.reload()
           }
         
 
         })
       
         let div7=document.createElement("div")
         div7.setAttribute("class","div7")
 
         let h4=document.createElement("h4")
         h4.innerText="Add More from WishList"
        
         div7.append(h4)
         div7.addEventListener("click",function(){
         window.location.href="wishList.html"
       })
        cont.append(div7)
      
          
        let order_box=document.getElementById("order_box")
        let div8 =document.createElement("div")
           div8.setAttribute("class","div8")
       //  let div9 =document.createElement("div")
 
        let p3 =document.createElement("p")
        p3.innerText=`PRICE DETAILS (${get_item.length}items)`
         // div9.append(p3)
         // order_box.append(div9)
 
        let p2 =document.createElement("p")
        p2.innerText="Total MRP"
  
        let Discount=document.createElement("p")
        Discount.innerText="Dicount"
 
        let h5=document.createElement("h4")
        h5.innerText="Total Amount"
 
        let btn3=document.createElement("button")
        btn3.innerText="PLACE ORDER"
        btn3.setAttribute("class","btn3")
        btn3.addEventListener("click",my_order)
 
        div8.append(p3,p2,Discount,h5,btn3)
       order_box.append(div8)
       
         let sum=0
         for(let i=0;i<get_item.length;i++){
           let price=+get_item[i].price
           sum=sum+price
       }
         
         h5.innerText=`Total Amount:---->    ₹${sum}`
         
         let sum1=0
       for(let i=0;i<get_item.length;i++){
         let price=+get_item[i].pstrike
         sum1=sum1+price
       
       }
      
        p2.innerText=`TOtal MRP:----->    ₹${sum1}`
 
        let diff=sum1-sum
        Discount.innerText=`Discount:------>    -₹${diff}`
      
        let billing={
           bill:p3.innerText,
           MRP:p2.innerText,
           dis:Discount.innerText,
           price:h5.innerText,
        }
        console.log(billing)
    
        
        function my_order(){
         setTimeout(()=>{
           localStorage.setItem("Bill_detail",JSON.stringify(billing))
        window.location.href="addressPage.html"
         },2000)
      
        }
 
       }
 