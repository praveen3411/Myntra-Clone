let array = [
  "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1426191/pexels-photo-1426191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1778412/pexels-photo-1778412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3772506/pexels-photo-3772506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
let i = 0;
let some;
let womens = document.getElementById("women");
some = setInterval(() => {
  if (i === array.length) {
    i = 0;
  } else {
    womens.innerHTML = null;
    let take = array[i];
    let cloth = document.createElement("img");
    cloth.setAttribute("src", take);
    womens.append(cloth);
    i++;
  }
}, 3000);
let image2 = document.getElementById("image2");
let array2 = [
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/c7ffff7c-cef3-499a-9821-8d51723d35571654412064102-image_png1907501810.png",
  },
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/43262ac2-1974-4cfb-85d2-a86022dc0fb31652964575095-Backpacks_-_Trolleys.jpg",
  },
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/bca493f2-9832-42bb-82be-347f0523ca631654412097889-image_png_2006245873.png",
  },
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/b05d42e8-569e-4801-9881-b2c3e4c773b91652964577645-Your_Favourite_Brands.jpg",
  },
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/699b24b5-f8a9-405f-9048-2b84a44f1ba21654412115199-image_png27866226.png",
  },
  {
    varsha:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/29/143c300e-11ed-4582-a6b6-c844efde77821653838994798-image_jpeg1588575303.jpg",
  },
];

let alpha = (lady) => {
  lady.forEach((ele) => {
    let div = document.createElement("div");
    div.addEventListener("click",function(){
      window.location.href="womendata.html"
    })
    let one = document.createElement("img");
    one.setAttribute("src", ele.varsha);
    div.append(one);
    image2.append(div);
  });
};
alpha(array2);
let part2 = document.getElementById("part2");
let array3 = [
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/de38e78d-c748-4a0e-9762-1e5616767f931653371609376-BudgetBuys_Flats_Heels.jpg",
  },
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/1df8d223-ae15-4e80-a02d-d97ea33ffb0b1653371609384-BudgetBuys_Flip-Flops.jpg",
  },
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg",
  },
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/948ec926-6bcc-478d-8f7a-7929afc920b21653371609400-BudgetBuys_FormalShoes_.jpg",
  },
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/9d8c3449-a426-4e55-845e-8d4289cf66441653371609484-BudgetBuys_KurtaSets.jpg",
  },
  {
    varsha2:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/89e6a612-b66f-49c5-af03-5594dca816dc1653371609549-BudgetBuys_Sarees.jpg",
  },
];
let beta = (array3) => {
  array3.forEach((ele) => {
    let div = document.createElement("div");
    div.addEventListener("click",function(){
      window.location.href="womendata.html"
    })
    let one = document.createElement("img");
    one.setAttribute("src", ele.varsha2);
    div.append(one);
    part2.append(div);
  });
};
beta(array3);
let part3 = document.getElementById("part3");
let array4 = [
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c13c0807-4455-4eb8-b875-982aef0458e91653558125967-U.S._Polo_Assn..jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5e454140-a48b-4e3f-ac6f-1100814e47101654590572521-image_jpeg362347943.jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/ae122896-b817-4c6b-9ebf-da82530bee571654590572531-image_jpeg_1608302704.jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/b8404dc3-48a5-4fb4-bb32-5803f2549a291653558125881-Nike_1.jpg",
  },

  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/47d0705f-ed7e-4877-aa2e-db6d8f3262331653558125924-Puma.jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/a78e46df-4c45-444b-8114-0c8f57ef6c0c1653558125724-ADIDAS.jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/04a8b52d-5f80-430e-aefa-30062c64899b1653558125938-Reebok.jpg",
  },
  {
    varsha3:
      "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/0cffb244-be07-45bf-8315-52a03aa7cb561654590572540-image_jpeg_249898260.jpg",
  },
];
let gamma = (array4) => {
  array4.forEach((ele) => {
    let div = document.createElement("div");
    div.addEventListener("click",function(){
      window.location.href="womendata.html"
    })
    let one = document.createElement("img");
    one.setAttribute("src", ele.varsha3);
    div.append(one);
    part3.append(div);
  });
};
gamma(array4);

// part4

let part4 = document.getElementById("part4");
let array5 = [
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/f456a053-a1ab-4fa3-9205-5cc85e17bece1653643972003-QL_KurtaSets.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/b486d907-2449-47e3-a17e-0b1ec4199df71653643972076-QL_WatchesW.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/fa430943-92b8-4c50-9684-a3a884f1f82f1653643972036-QL_Sarees.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/86537a02-d573-4dfd-acbd-bebdc33a39031653643971883-QL_ActivewearW.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/b3c19c24-9298-42f0-a159-3e2f61b8eb071653643971895-QL_Bras_Briefs.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7ccbe07a-23df-4621-bb89-ac739ffb72a71653643972030-QL_NightSuits.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9738a8c8-9ddb-46f5-9fb7-6ca6bef364b81653643971913-QL_Dresses.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a321a94c-12c9-4f6c-aa3c-5b9e1ad734dc1653643971968-QL_JeansW.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/6c18ae37-68f7-455b-9f13-19adaa7ce8611653643972063-QL_Tops_Tees.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/a0032064-2a34-4876-ba3b-16cfd27a6f4a1653643971889-QL_Bedsheets.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/78f45c27-f1d2-4de3-a0b8-fd82b30e8f2a1653643971870-QL_-Jewellery.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/f0471c89-1a8f-4bf5-a573-d74acadcf6d21653643971925-QL_Flip-Flops.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/eb71b7cf-a820-4cd8-8d1f-9e5684802e701653643971955-QL_Heels.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9ebe3bf9-9bb7-4c73-b026-6754652ae4511653643971919-QL_Flats.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d65019ab-4566-4e18-8b03-598d96bd0df21653643971901-QL_CasualShoes_.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d5943c16-ec7c-499a-bce9-947f03cb61ce1653643971943-QL_Handbags.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/58983331-a3eb-4944-8796-16f7a56f986e1653643971907-QL_Clutches.jpg",
  },
  {
    varsha4:
      "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/c2484606-cb68-45cb-85f8-dc29cc6bc41c1653643971961-QL_HomeDecor.jpg",
  },
];
let nina = (array5) => {
  array5.forEach((ele) => {
    let div = document.createElement("div");
    div.addEventListener("click",function(){
      window.location.href="womendata.html"
    })
    let one = document.createElement("img");
    one.setAttribute("src", ele.varsha4);
    div.append(one);
    part4.append(div);
  });
};
nina(array5);

// part5

let realone = document.querySelector("#part5");
let real = [
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/06d44453-7735-4ea2-a146-1fbd8a5bc48e1654766637157-Shop-By-Category_HP_02.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1de91390-00d9-4de3-8640-a47686a60d9c1654766637166-Shop-By-Category_HP_03.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/8f307ca0-ae6b-4bc9-944e-c8447ab871f81654766637174-Shop-By-Category_HP_04.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cbca4163-4855-485a-93be-3cbb8d62f5821654766637181-Shop-By-Category_HP_05.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/cbca4163-4855-485a-93be-3cbb8d62f5821654766637181-Shop-By-Category_HP_05.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6b5c6054-aadb-4ac8-8bb5-5f7e54bc6ca51654766637195-Shop-By-Category_HP_07.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/64bd7936-8f81-416f-9f60-5ba6a749671f1654766637202-Shop-By-Category_HP_08.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2a5ae5ad-12bb-4c79-823f-0ce08fffb14d1654766637209-Shop-By-Category_HP_09.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f2af2965-6263-4c30-a5db-ec743fc82edd1654766637216-Shop-By-Category_HP_10.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b279d44f-46d5-486f-9d22-c4f8d1122da61654766637223-Shop-By-Category_HP_11.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f70c9363-588f-4682-b5e9-3676e433ce391654766637232-Shop-By-Category_HP_12.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/233ad199-63f5-4862-8c1a-8b203b4c8ebb1654766637239-Shop-By-Category_HP_13.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6da88c6c-a7ce-4143-9304-a9ee122fafcb1654766637290-Shop-By-Category_HP_20.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/d59e40c7-a8a4-4746-90c1-35545b37433e1654766637253-Shop-By-Category_HP_15.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1e94196a-3a49-404f-9dbe-0f7b1d5566a21654766637259-Shop-By-Category_HP_16.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/57b3a627-7fa8-4093-91dd-7ed0e45256401654766637267-Shop-By-Category_HP_17.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/fdcc31ee-4b24-411a-84b5-d4f0c4a5c0e51654766637274-Shop-By-Category_HP_18.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0e54ce81-5cfd-4ba0-a0ac-a230effd47211654766637282-Shop-By-Category_HP_19.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6da88c6c-a7ce-4143-9304-a9ee122fafcb1654766637290-Shop-By-Category_HP_20.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/0630521f-d004-4e7b-97ee-d0f11f48c1451654766637301-Shop-By-Category_HP_21.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6dfd6306-9021-4932-ba20-6a6380014c631654766637311-Shop-By-Category_HP_22.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/e0821297-389f-4bdc-a63a-cfaca163c0841654766637319-Shop-By-Category_HP_23.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/5c13a7f7-a78c-4edd-be35-6bd8265857901654766637330-Shop-By-Category_HP_24.jpg",
  },
  {
    img: "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ea30b785-5f7e-4f39-9f7d-62377e6736e71654766637339-Shop-By-Category_HP_25.jpg",
  },
];
let prepare = (real) => {
  real.forEach((ele) => {
    let boomream = document.createElement("div");
    boomream.addEventListener("click",function(){
      window.location.href="womendata.html"
    })
    let bread = document.createElement("img");
    bread.setAttribute("src", ele.img);

    boomream.append(bread);

    realone.append(boomream);
  });
};
prepare(real);
