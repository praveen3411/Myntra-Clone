let store=JSON.parse(localStorage.getItem("storeW"))
console.log(store)

let store1=JSON.parse(localStorage.getItem("storeMen"))
console.log(store)

let cont= document.getElementById("container")

if(store!=null){

let arr=JSON.parse(localStorage.getItem("save-item"))||[]
 store.forEach((ele,index)=>{
   
   let div=document.createElement("div")

   let div1=document.createElement("div")
        div1.setAttribute("class","div1")  
       let img=document.createElement("img")
       img.src=ele.img;
       img.style.width="98%"


   let img1=document.createElement("img")
   img1.src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-gray-cross-symbol-free-illustration-image_1280885.jpg" 
   img1.style.width="20%"
   img1.setAttribute("class","cross_img")
   img1.addEventListener("click",function(){
     rmv(ele,index)
   })

   function rmv(ele,index){
    event.target.parentNode.remove()
  store.splice(index,1)
       localStorage.setItem("storeW",JSON.stringify(store))
       window.location.reload()
   
   }

   let h1=document.createElement("h4")
   h1.innerText=ele.name
 
   let h2=document.createElement("p")
   h2.innerText=ele.brand
   
   let h3=document.createElement("p")
   h3.innerText=`Rs ${ele.price} `

   let h4=document.createElement("h4")
   h4.innerText=` Rs ${ele.pstrike}`
    h4.setAttribute("class","pstrike")

   let btn=document.createElement("button")
  btn.innerText="MOVE TO BAG"
  btn.setAttribute("class","btn")
  btn.addEventListener("click",function(){
   arr.push(ele)
   alert("item added to bag successfully!")
    localStorage.setItem("save-item",JSON.stringify(arr))
   window.location.reload()
  })
  
   div1.append(img,img1)
  div.append(div1,h1,h2,h3,h4,btn)
  cont.append(div)

 
   
 //  let wish=document.getElementById("wishList")
 //  wish.innerText=`My WishList: ${data.length} item`
 })
}
//  mens-section

// let cont= document.getElementById("container")

if(store1!=null){
let arr1=JSON.parse(localStorage.getItem("save-item"))||[]
 store1.forEach((ele,index)=>{
   
   let div=document.createElement("div")

   let div1=document.createElement("div")
        div1.setAttribute("class","div1")  
       let img=document.createElement("img")
       img.src=ele.img;
       img.style.width="98%"


   let img1=document.createElement("img")
   img1.src="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-gray-cross-symbol-free-illustration-image_1280885.jpg" 
   img1.style.width="20%"
   img1.setAttribute("class","cross_img")
   img1.addEventListener("click",function(){
     rmv(ele,index)
   })

   function rmv(ele,index){
    event.target.parentNode.remove()
    store1.splice(index,1)
       localStorage.setItem("storeMen",JSON.stringify(store1))
    window.location.reload()
   }

   let h1=document.createElement("h4")
   h1.innerText=ele.name
 
   let h2=document.createElement("p")
   h2.innerText=ele.brand
   
   let h3=document.createElement("p")
   h3.innerText=`Rs ${ele.price} `

   let h4=document.createElement("h4")
   h4.innerText=` Rs ${ele.pstrike}`
   h4.setAttribute("class","pstrike")

   let btn=document.createElement("button")
  btn.innerText="MOVE TO BAG"
  btn.setAttribute("class","btn")
  btn.addEventListener("click",function(){
   arr1.push(ele)
   alert("item added to bag successfully!")
    localStorage.setItem("save-item",JSON.stringify(arr1))
     window.location.reload()
  })
  
   div1.append(img,img1)
  div.append(div1,h1,h2,h3,h4,btn)
  cont.append(div)

 
   
 //  let wish=document.getElementById("wishList")
 //  wish.innerText=`My WishList: ${data.length} item`
 })
}
   let wish=document.getElementById("WishList")
   if(store==null&&store1==null){
     wish.innerText= `My WishList: ${0} item`
   }
   else{
  let sum=store1.length+store.length;
  wish.innerText= `My WishList: ${sum} item`
 // console.log(sum)

   }