let arraytwo=JSON.parse(localStorage.getItem("storeW"))||[]
let array=[
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg",
    review:"4",

    brand:"Khushal K",
    name:"Women Kurta Set With Dupatta",
    price:" 1427",
    pstrike:" 5099",
    off:"(72% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
    review:"4",

    brand:"Anouk",
    name:"Printed Kurta with Palazzos",
    price:" 799",
    pstrike:" 1999",
    off:"(60% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/14709966/2021/7/10/d2407657-1f04-4d13-9f52-9e134050489b1625905793495-Nayo-Women-Red-Ethnic-Motifs-Printed-Empire-Pure-Cotton-Kurt-1.jpg",
    review:"4",

    brand:"Nayo",
    name:"Women Kurta With Trouser",
    price:" 1368",
    pstrike:" 3699",
    off:"(63% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18111724/2022/5/2/60f91da0-0770-4762-98e9-844ddc5b2de01651473553606IkDaiyaWomenPinkFloralYokeDesignEmpireKurtiwithPatialaWithDu1.jpg",
    review:"4",

    brand:"IkDaiya",
    name:"Women Yoke Design Kurta  ",
    price:" 1398",
    pstrike:" 5198",
    off:"(40% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11056154/2019/12/5/30b0017d-7e72-4d40-9633-ef78d01719741575541717470-AHIKA-Women-Black--Green-Printed-Straight-Kurta-990157554171-1.jpg",
    review:"4",

    brand:"AHIKA",
    name:"Printed Straight Kurta",
    price:" 513",
    pstrike:" 1350",
    off:"(62% OFF)"
   },{
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13764318/2021/4/7/c6a16eb7-833d-4df2-8e0e-cb694a8a83e51617792817180-Varanga-Peach-Bandhani-Printed-Embroidered-Kurta-69516177928-1.jpg",
    review:"4",

    brand:"Varanga",
    name:"Women Printed Cotton Kurta",
    price:" 755",
    pstrike:" 2799",
    off:"(73% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",
    review:"4",

    brand:"max",
    name:"Women Printed Kurti",
    price:" 799",
    pstrike:" 999",
    off:"(20% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/2322979/2018/2/13/11518506064968-Anouk-Women-Peach-Coloured-Printed-Straight-Kurta-6851518506064751-1.jpg",
    review:"3",

    brand:"Anouk",
    name:"Printed Straight Kurta",
    price:" 629",
    pstrike:" 1799",
    off:"(65% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15268846/2021/8/26/09f1795f-1da7-4e65-8711-9e0dcdf70d0d1629972004472VarangaBlueAndMaroonAbstractPrintedKurtaWithGotaWorkOnYokeAn1.jpg",
    review:"4",

    brand:"Varanga",
    name:"Women Ethic Motifs",
    price:" 659",
    pstrike:" 3299",
    off:"(80% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13902678/2021/4/6/a5dfcb9a-af2a-4ed8-98bf-e10a8b3b5a891617704827106-Anouk-Women-Kurta-Sets-911617704825967-1.jpg",
    review:"4",

    brand:"Anouk",
    name:"Yoke Design Kurta",
    price:" 979",
    pstrike:" 2799",
    off:"(65% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13962282/2021/7/5/26f8c8a9-e900-4510-9fb0-ac42f029442c1625483017312-Indo-Era-Beigh-Embroidered-Straight-Kurta-Palazzo-With-Dupat-1.jpg",
    review:"4",

    brand:"Indo Era",
    name:"Zari Embroidered Kurta",
    price:" 1539",
    pstrike:" 6999",
    off:"(78% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",
    review:"3",

    brand:"Varanga",
    name:"Chanderi Yoke Design Kurta ",
    price:" 1619",
    pstrike:" 5999",
    off:"(73% OFF)"
   },
   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791608/2022/2/14/09516263-6380-4df1-a7f6-647fc2ff1a511644842630055-Anouk-Women-Pink-Embroidered-Kurta-with-Palazzos-77516448426-1.jpg",
    review:"4",

    brand:"Anouk",
    name:" Embroidered Kurta with Palaza",
    price:" 999",
    pstrike:" 2499",
    off:"(60% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16331376/2021/12/2/b8c4f90f-683c-48d2-b8ac-19891a87c0651638428628378KurtaSets1.jpg",
    review:"2",

    brand:"Anabhutee",
    name:"Women Embroidered Kurta",
    price:" 1469",
    pstrike:" 4899",
    off:"(70% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048604/2022/2/4/11b842c5-d9d4-4fee-baa2-0972e3a673641643970773675KhushalKWomenGreenEthnicMotifsPrintedEmpireGottaPattiPureCot7.jpg",
    review:"3",

    brand:"Khushal K",
    name:" Women Pure Cotton Kurta",
    price:" 1483",
    pstrike:" 5299",
    off:"(72% OFF)"
   },
   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16836356/2022/3/24/f41645f5-e62e-452c-ade0-f132d5de30e51648119245986-KALINI-Women-Blue-Yoke-Design-Kurta-with-Palazzos--With-Dupa-1.jpg",
    review:"3",

    brand:"KALINI",
    name:"Women Yoke Design Kurta",
    price:" 887",
    pstrike:" 3699",
    off:"(76% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13791594/2022/2/14/5ea707f4-8491-4d1c-b520-86a1cff4c86e1644841891629-Anouk-Women-Yellow--White-Printed-Kurta-with-Palazzos-706164-1.jpg",
    review:"4",
    brand:"Fabindia",
    name:"Women Cotton Kurta Set",
    price:" 2849",
    pstrike:" 3799",
    off:"(25% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17048614/2022/2/4/b0eb9426-adf2-4802-a6b3-5dbacbc5f2511643971561167KhushalKWomenBlackEthnicMotifsAngrakhaBeadsandStonesKurtawit7.jpg", 
    review:"5",

    brand:"max",
    name:"Women Dot Kurti",
    price:" 2849",
    pstrike:" 3799",
    off:"(25% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/10942370/2022/4/19/ec7101dc-431b-47d2-9c86-d53fc4fda3681650365990558AnubhuteeWomenNavyBluePaisleyFloralEmbroideryKurtaSet1.jpg",
    review:"4",

    brand:"Anubhutee",
    name:"Ethnic Embroidered Kurta Set",
    price:" 869",
    pstrike:" 2989",
    off:"(70% OFF)"
   },

   { 
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/16589834/2022/2/10/fb73f692-7a4b-4641-8609-6bcc48ebdf891644495002266-Women-Peach-Printed-with-yoke-neck-Pleated-Kaftan-Kurta-with-1.jpg",
    review:"3",

    brand:"DIVYANK",
    name:"Pink Silk Blend Kaftan Kurta Set",
    price:" 1294",
    pstrike:" 3499",
    off:"(63% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18111726/2022/5/2/5a1c6f5d-8532-42e5-9f23-e5222fb095691651475693731IkDaiyaWomenTealEthnicMotifsYokeDesignEmpireKurtiwithPalazzo1.jpg",
    review:"2",

    brand:"IkDaiya",
    name:"Women Yoke Design Kurti",
    price:" 1398",
    pstrike:" 5198",
    off:"(38% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/15241816/2021/8/24/d57adb8b-e792-477a-8801-6ea570cd88ef1629800170287VarangaWomenYellowFloralPrintedKeyholeNeckThreadWorkKurta1.jpg",
    review:"3",

    brand:"Varanga",
    name:"Women Floral Printed Kurta",
    price:" 671",
    pstrike:" 2799",
    off:"(76% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18225648/2022/5/11/831a7a92-e564-435e-b80e-adc63a28f88a1652258930326maxWomenMulticolouredFloralAngrakhaPureCottonKurtiwithTrouse1.jpg",
    review:"4",

    brand:"max",
    name:"Women Kurti With Trouse",
    price:" 799",
    pstrike:" 999",
    off:"(20% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/18452064/2022/5/27/33403cbe-a388-4b51-a979-1c9a034a787d1653648871107SapGreenRayonEmbroideredStraightFitKurta1.jpg",
    review:"4",

    brand:"Soch",
    name:"Women Floral Embroidered Kurta",
    price:" 1348",
    pstrike:" 1789",
    off:"(25% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/6/13/1ce40c79-d376-44bf-bc6e-37fd418dc0d31560423441364-1.jpg",
    review:"3",

    brand:"Vishudh",
    name:"Women Printed Kurta",
    price:" 586",
    pstrike:" 2549",
    off:"(77% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17241820/2022/2/22/6826eb82-a889-4550-9729-7c638a6d82241645516346563KALINIWomenWhiteDyedFlaredSleevesQuirkyAnarkaliKurta1.jpg",
    review:"5",

    brand:"KALINI",
    name:"Women Dyed Anarkali Kurta",
    price:" 599",
    pstrike:" 1499",
    off:"(60% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/13169116/2021/9/1/f4743cd0-265e-4f57-8273-a5abb52501751630500433313-Libas-Women-Green-Pure-Cotton-Kurta-with-Palazzos--With-Dupa-1.jpg",
    review:"5",

    brand:"Libas",
    name:"Women Kurta With Plazo",
    price:" 1199",
    pstrike:" 2999",
    off:"(60% OFF)"
   },

   {
      img:"https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/17197472/2022/2/18/5934fceb-05cf-40c2-87e8-3fe9fd474c1e1645166780554heemaraWomenPurpleFloralEmbroideredThreadWorkSilkChiffonKurt1.jpg",
    review:"5",

    brand:"heemara",
    name:"Women Embroidered Kurta Sets",
    price:" 1055",
    pstrike:"Rs 6599",
    off:"(84% OFF)"
   },
  
  
]


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
      four.setAttribute("id","rain");
      four.innerText=`RS ${ele.price}`;

      let five=document.createElement("h3");
      five.setAttribute("id","rainone")
      five.innerText=`RS ${ele.pstrike}`;
      
      let six=document.createElement("h3");
      six.setAttribute("id","end");
      six.innerText=`${ele.review} ⭐`;

      let seven=document.createElement("button");
      seven.innerText="WISHLIST";
      seven.setAttribute("id","saree")
      seven.addEventListener("click",function(){
         myhellobro(ele);
      })

      creone.append(one,two,three,four,five,six,seven);

      shotone.append(creone);
   });
}
concentration(array);

let myhellobro=(ele)=>{
arraytwo.push(ele);
localStorage.setItem("storeW",JSON.stringify(arraytwo));
alert("added to wishlist")
  window.location.href="wishlist.html";
}

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
