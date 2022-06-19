let arrayone=JSON.parse(localStorage.getItem("storMen"))||[]
let array=[
   {
    img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2275365/2019/9/10/4f24f563-c764-4f27-9fc5-9ad3dcf167621568108715062-Roadster-Men-White-Solid-Round-Neck-T-shirt-1641568108713591-1.jpg",
    review:"4",

    brand:"Roadster",
    name:"Pure Cotton T-shirts",
    price:" 249",
    pstrike:" 499",
    off:"(50% OFF)"
   },
   {
    img:"https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12816878/2020/12/8/992feaf9-6ccf-4880-8076-100237f3c1c91607426778122-HERENOW-Men-Tshirts-2751607426776423-1.jpg",
    review:"3",

    brand:"HERE&NOW",
    name:" Men Pure Cotton T-shirts",
    price:" 277",
    pstrike:" 599",
    off:"(62% OFF)"
   },{
    img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16405434/2022/4/12/079a24ac-9e86-4fed-91c9-3052b379f5491649745610717TshirtsCalvinKleinJeansMenTshirtsCalvinKleinJeansMenTshirtsC1.jpg",
    review:"4",

    brand:"Max",
    name:" Cotton T-shirts",
    price:" 299",
    pstrike:" 499",
    off:"(52% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10410532/2019/10/10/7f5870e5-a2ae-4e17-9348-c6f87d45c7cb1570689789508-na-5971570689787908-1.jpg",
    review:"4",

    brand:"WROGN",
    name:"Printed Polo Collar Pure Cotton ",
    price:" 674",
    pstrike:" 1499",
    off:"(55% OFF)"
   },{
    img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10384501/2020/11/6/f8a9d333-d5fb-45e6-8d4e-b426a65615131604640103374-Roadster-Men-Charcoal-Solid-Round-Neck-T-shirt-3841604640101-1.jpg",
    review:"4",

    brand:"Roadster",
    name:"Solid Round Neck T-shirts",
    price:" 239",
    pstrike:" 599",
    off:"(60% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16407468/2021/12/28/fce7ca1e-01ec-4c12-a90f-c7b75abda0e01640669480687-Difference-of-Opinion-Men-Tshirts-4021640669480120-1.jpg",
    review:"4",

    brand:"Difference of Opinion",
    name:"Men Solid Oveized Cotton",
    price:" 480",
    pstrike:" 1299",
    off:"(63% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705UrbanoFashionPrintedMenRoundNeckDarkGreenT-Shirt1.jpg",
    review:"4",

    brand:"Urbano Fashion",
    name:"Slim Tropical Printed Pure Cotton",
    price:" 461",
    pstrike:" 1099",
    off:"(58% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2314451/2018/5/24/7e14d698-6a1d-41ab-a348-9af9a87e8f2e1527137304977-HRX-by-Hrithik-Roshan-Men-Black-Solid-High-Neck-T-shirt-8511527137303720-1.jpg",
    review:"4",

    brand:"HRX",
    name:"High Neck T-shirts",
    price:" 599",
    pstrike:" 1499",
    off:"(60% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12318240/2021/2/27/b7f27330-eb9b-4cd8-9d2d-64239c4a5adb1614428943368-Calvin-Klein-Jeans-Men-Tshirts-2101614428942578-1.jpg",
    review:"4",

    brand:"Calvin Klein Jeans",
    name:"Solid Round Neck Pure Cotton",
    price:" 1379",
    pstrike:" 2299",
    off:"(40% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17743840/2022/4/14/22f56f9e-72f0-408f-8de1-668923e4b8421649918786494-AS-M-NSW-TEE-DNA-FUTURA-FS-7021649918786000-3.jpg",
    review:"4",

    brand:"Nike",
    name:"Pure Cotton Printed T-shirts",
    price:" 957",
    pstrike:" 1595",
    off:"(40% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/9793511/2022/4/18/4c5b3317-e20f-4697-b9f0-0c236049e3021650284939109RoadsterMenBlackPureCottonT-shirt1.jpg",
    review:"4",

    brand:"Roadster",
    name:"Pure Cotton T-shirts",
    price:" 239",
    pstrike:" 599",
    off:"(60% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1824340/2017/8/3/11501764560457-Roadster-Men-Grey-Melange-Solid-Round-Neck-T-shirt-3291501764560241-1.jpg",
    review:"4",

    brand:"Roadster",
    name:"Long Line T-shirts ",
    price:" 319",
    pstrike:" 799",
    off:"(60% OFF)"
   },
   { img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18302404/2022/5/17/91d64d82-320a-4040-aacf-1a84c9ab6e371652776736496SlimFitPatternedpoloshirt1.jpg", 
    review:"4",

    brand:"H&M",
    name:"Men Patterened Slim Polo shirts",
    price:" 749",
    pstrike:" 999",
    off:"(25% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487346/2020/6/17/5a651b7c-92ce-46a2-929b-2c0d153477341592396358330-Nautica-Men-Tshirts-6301592396355301-1.jpg",
    review:"4",

    brand:"Nautica",
    name:"Men Coloured Polo T-shirt",
    price:" 1319",
    pstrike:" 3299",
    off:"(60% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1996801/2018/8/3/15c9e328-62bd-49ea-8cbd-7bc2047ba02f1533279315890-Roadster-Men-Black-Solid-Polo-Collar-T-shirt-836153327931345-1.jpg",
    review:"4",

    brand:"Roadster",
    name:" Polo Collar Pure Cotton T-shirts",
    price:" 404",
    pstrike:" 899",
    off:"(55% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1174116/2016/2/10/11455100882246-Roadster-Grey-Melange-Printed-T-shirt-181455100881746-1.jpg",
    review:"4",

    brand:"Roadster",
    name:"T-shirts with Elbow Patch",
    price:" 479",
    pstrike:" 1199",
    off:"(60% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1915280/2022/3/4/f32024b5-508f-4d79-bfa3-a10d41eb1edd1646390379781-HRX-by-Hrithik-Roshan-Men-Navy-Blue-Abstract-Printed-Active--1.jpg",
    review:"4",

    brand:"HRX",
    name:"Abstract Active T-shirts",
    price:" 494",
    pstrike:" 1099",
    off:"(55% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17595622/2022/4/13/e883672b-bd03-4ae0-af18-b17f0580ef1d1649847146673ASMNKDFTEE61GFXFS1.jpg",
    review:"4",

    brand:"Nike",
    name:"Men Brand Logo Printed T-shirts",
    price:" 957",
    pstrike:" 1595",
    off:"(40% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2471500/2018/2/9/11518159758071-FIDO-DIDO-Men-Tshirts-9591518159757862-1.jpg",
    review:"4",

    brand:"FIDO DIDO",
    name:"Polo Collar T-shirts",
    price:" 599",
    pstrike:" 1499",
    off:"(60% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/2/6/1a340c1e-d6e0-4430-8b35-717ba5426f511580945402271-1.jpg",
    review:"3",

    brand:"Austin wood",
    name:"Striped Polo Collar T-shirts",
    price:" 509",
    pstrike:" 1499",
    off:"(66% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16405166/2021/12/28/96c5b9c6-6953-4be2-862f-f167f01829071640692454191-Calvin-Klein-Jeans-Men-Tshirts-9581640692453744-1.jpg", 
    review:"2",

    brand:"Calvin Klein Jeans",
    name:"Men Brand Logo Printed Slim T-shirts",
    price:" 1559",
    pstrike:" 2599",
    off:"(40% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/8938197/2019/4/23/b3ea3fc3-8b56-49c9-a007-768f73ac95b91555999726007-Roadster-Men-Black-Printed-Round-Neck-T-shirt-61215559997244-1.jpg",
    review:"3",

    brand:"Roadster",
    name:"All Over Print Pure Cotton T-shirts",
    price:" 3599",
    pstrike:" 899",
    off:"(60% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17418288/2022/4/20/a1c71068-1dca-4cff-8fff-27549340bc171650448740426-Tommy-Hilfiger-Men-Tshirts-8151650448739966-1.jpg",
    review:"4",

    brand:"Tommy Hilfiger",
    name:" Men Pure Cotton T-shirts",
    price:" 1619",
    pstrike:" 2699",
    off:"(40% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/4277979/2018/3/16/11521191786459-Nautica-Men-Blue-Printed-Round-Neck-T-shirt-2471521191786287-1.jpg",
    review:"4",

    brand:"Nautica",
    name:"Design Cotton T-shirts",
    price:" 249",
    pstrike:" 499",
    off:"(50% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17868156/2022/4/12/4084bedc-aa91-40c8-bed9-e8e74bbdd5f31649779743002VEIRDOMenWhiteCamouflagePrintedMonochromeLooseT-shirt1.jpg",
    review:"3",

    brand:"VEIRDO",
    name:"Loose Cotton T-shirts",
    price:" 599",
    pstrike:" 1199",
    off:"(56% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11487342/2020/6/17/e3958d19-7c4b-49ce-8a5c-e82ed6e6ef321592396334332-Nautica-Men-Tshirts-721592396332125-1.jpg",
    review:"4",

    brand:"Roadster",
    name:"Pure Cotton T-shirts",
    price:" 300",
    pstrike:" 600",
    off:"(50% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10106295/2020/6/9/588a37df-5674-49f5-8c02-8f6fa3a021d61591680988077-HRX-by-Hrithik-Roshan-Men-Orange-Printed-Regular-Fit-Running-1.jpg",
    review:"3",

    brand:"HRX",
    name:"Dry Running T-shirts",
    price:" 494",
    pstrike:" 1099",
    off:"(55% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17369138/2022/5/26/9d7a4603-a919-4198-aea9-e99b2dca663d1653542095060-Liverpool-FC-202223-Stadium-Home-Mens-Nike-Dri-FIT-Soccer-Je-1.jpg",
    review:"4",

    brand:"Nike",
    name:"Men Printed T-shirts",
    price:" 500",
    pstrike:" 1001",
    off:"(50% OFF)"
   },
];
let shotone=document.querySelector("#mainbox");
let concentration=(array)=>{
   shotone.innerHTML=null;
   array.forEach((ele) => {
      let creone=document.createElement("div");

      let one=document.createElement("img");
      one.src=ele.img;

      let two=document.createElement("h3");
      two.innerText=ele.name;

      let three=document.createElement("h3");
      three.innerText=ele.brand;

      let four=document.createElement("h3");
      four.setAttribute("id","rain")
      four.innerText=`Rs ${ele.price} `;

      let five=document.createElement("h3");
      five.setAttribute("id","rainone")
      five.innerText=`Rs ${ele.pstrike}`;
      
      let six=document.createElement("h3");
      six.setAttribute("id","end")
      six.innerText=`${ele.review} ⭐`;

      let seven=document.createElement("button");
      seven.innerText="💖 WISHLIST";
      seven.setAttribute("id","saree")
      seven.addEventListener("click",function(){
        againonewar(ele);
      })

      creone.append(one,two,three,four,five,six,seven);

      shotone.append(creone);
   });
}
concentration(array);

let bollo=()=>{
   let take=document.querySelector("#boom").value;
   if(take=="assen"){
      array.sort(function(a,b){
         return a.price-b.price;
      })
      concentration(array);
   }
   if(take=="desen"){
      array.sort(function(a,b){
         return b.price-a.price;
      })
      concentration(array)
   }
}


let dollo=()=>{
   let take=document.querySelector("#boom1").value;
   if(take=="assen"){
      array.sort(function(a,b){
         return a.review-b.review;
      })

      concentration(array);
   }
   if(take=="desen"){
      array.sort(function(a,b){
         return b.review-a.review;
      })
      concentration(array)
   }
}

function danny(){
    var cell=document.querySelector("#d").value;
    var fil=array.filter(function(ele){
        return ele.brand==cell;
    })
    concentration(fil)
}

let  againonewar=(ele)=>{
  arrayone.push(ele);
  localStorage.setItem("storeMen",JSON.stringify(arrayone));
  alert("added to wishlist")
  window.location.href="wishlist.html";
}
