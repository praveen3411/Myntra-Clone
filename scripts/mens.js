
let takone=["https://images.pexels.com/photos/1964073/pexels-photo-1964073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/3260957/pexels-photo-3260957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2890713/pexels-photo-2890713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","https://images.pexels.com/photos/2315342/pexels-photo-2315342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"];
    let i=0;
    let id;
    let make=document.querySelector("#laptop");
    id=setInterval(() => {
        if(i===takone.length){
            i=0;
        }
        else{
            make.innerHTML=null;
            let access=takone[i]
            let create=document.createElement("img");
            create.setAttribute("src",access);
            make.append(create);
            i++;
        }
    },3000);

    let towel=document.querySelector("#pra");
    let getit=[
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/88c205c0-2349-4669-9d5b-6405e992b06e1654411440468-image_jpeg8576396.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/19/ac58b269-49f0-4df6-8e6c-594ff77ee4fd1652964575134-Bed_Linen_and_Furnishing_Min_60_-Story-home_-_Cortina-.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/42f7a82e-e84a-4fb9-9cca-55264b28807c1654411495335-image_png_71119225.png"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/a92b7453-33c0-4647-acf1-b3f714f5b7a51654411511670-image_png_1947551086.png"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/db7f6d21-887c-4b73-951a-9c2c6e0f72361654411580266-image_png518016767.png"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/6cba5e10-9064-48a3-a7f3-44f868eb953b1654411595064-image_png1749342016.png"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/3293d206-5c8e-46fd-941c-645afabe0fa81654411618745-image_png_1639462581.png"},
        {img:"https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/49d6e51c-6bf7-4bb8-a7ef-86616f750b2d1654411638152-image_png_79518292.png"}
    ];
    let flowerone=(getit)=>{
        getit.forEach((ele) => {
            let oneone=document.createElement("div");
            oneone.addEventListener("click",function(){
                window.location.href="boysdata.html"
              })

            let makebro=document.createElement("img");
            makebro.setAttribute("src",ele.img);


            oneone.append(makebro);
            towel.append(oneone)
        });
    }
    flowerone(getit);

    let getone=document.querySelector("#onefour");
    let flowertwo=[
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/522b583f-9a4e-4a70-b690-f5ba2df48bb61653371609715-BudgetBuys_T-Shirts.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/b811602d-480c-457b-8fb4-3440e2a7629a1653371609442-BudgetBuys_Jeans.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/34dd4a4d-ddae-483d-baa8-cf67b2ee661e1653371609568-BudgetBuys_Shirts.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/c624fadc-bbcd-488d-a07d-2829f37e24e11653371609450-BudgetBuys_JeansWomens.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f29a9430-96b1-4af5-9831-d1a3ffc5c1dc1653371609609-BudgetBuys_SportsShoes.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/831c6127-5e4e-4f8d-a2a0-ee20029c034f1653371609653-BudgetBuys_Tops_Teeskids.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/fc738f8a-c8e9-43db-ad07-7cae03cb32c71653371609282-BudgetBuys_ActivewearMen.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/bb521f63-8314-4585-b02d-9d0aa5ec495c1653371609392-BudgetBuys_Footwear.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/c7606e59-4b4b-4082-a2a8-c82b68a12c691653371609361-BudgetBuys_Dresseskids.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/59ea5670-6090-4066-b2e3-2a5a6f58a21c1653371609339-BudgetBuys_CasualShoes.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/948ec926-6bcc-478d-8f7a-7929afc920b21653371609400-BudgetBuys_FormalShoes_.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/1df8d223-ae15-4e80-a02d-d97ea33ffb0b1653371609384-BudgetBuys_Flip-Flops.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b2a6d4e-3acf-4b83-b02a-7e36b880de331653371609674-BudgetBuys_TrackPantsMen.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/4d53ec50-e5a7-4cf1-9956-14482f352bd81653371609704-BudgetBuys_TrousersMEns.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/48737c0c-ded1-4601-9753-e0eed457a0511653371609619-BudgetBuys_Suits_Blazers.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/903a3032-186b-4b8c-9332-85db52ea0ec21653371609295-BudgetBuys_Backpacks.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/019082dd-64a0-4c1b-a442-a1e74667e0851653371609308-BudgetBuys_Bedsheets_BedCovers_.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/f54d3d79-4d55-4353-8dda-61be55def9371653371609475-BudgetBuys_Kurtas_Sets.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/8972e6d6-fa51-477c-9191-80bcb98abc571653371609423-BudgetBuys_Innerwear.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/3b2a6d4e-3acf-4b83-b02a-7e36b880de331653371609674-BudgetBuys_TrackPantsMen.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/24/48737c0c-ded1-4601-9753-e0eed457a0511653371609619-BudgetBuys_Suits_Blazers.jpg"},
    ];
    let chillbro=(flowertwo)=>{
        flowertwo.forEach((ele) => {
            
        let bakar=document.createElement("div");
        bakar.addEventListener("click",function(){
            window.location.href="boysdata.html"
          })

        let rolex=document.createElement("img");
        rolex.setAttribute("src",ele.img)

        bakar.append(rolex);
        
        getone.append(bakar)
    });
    }
    chillbro(flowertwo)

    let hereit=document.querySelector("#jonny");
    let arrobj=[
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/a78e46df-4c45-444b-8114-0c8f57ef6c0c1653558125724-ADIDAS.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/c13c0807-4455-4eb8-b875-982aef0458e91653558125967-U.S._Polo_Assn..jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/0cffb244-be07-45bf-8315-52a03aa7cb561654590572540-image_jpeg_249898260.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/b8404dc3-48a5-4fb4-bb32-5803f2549a291653558125881-Nike_1.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/ae122896-b817-4c6b-9ebf-da82530bee571654590572531-image_jpeg_1608302704.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/26/7a0f4236-d3ec-49a1-a3a5-d8a284f2d3b01653558125990-USPA_Footwear.jpg"}
    ];
    let makehere=(arrobj)=>{
        arrobj.forEach((ele) => {
            
        let dare=document.createElement("div");
        dare.addEventListener("click",function(){
            window.location.href="boysdata.html"
          })

        let deer=document.createElement("img");
        deer.setAttribute("src",ele.img);

        dare.append(deer);
        hereit.append(dare);
    });
    }
    makehere(arrobj);

    let catone=document.querySelector("#menone");
    let praveen=[
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/550287ef-8076-4cd8-a73a-516dd548911c1654175413754-tile.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/b6d26497-2402-4efe-a00f-18ea1b3353501654176560655-3.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/8/a08e5481-8f25-41b9-9295-b0b976b375391654674031707-image_jpeg_1634646832.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/83fd1fc2-bb9e-43d0-ab0c-1fbfa61496f51654265811389-image_jpeg789262003.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/8cf3d9aa-2253-48f6-b138-e5c3818591cd1654184450989-Allensolly.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/8/0dcb4d19-d5aa-4dd9-a4da-a7cef102a0c81654684617587-The-Man-Company-MP-Tile-EA-Revised.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/c38bc151-2d45-49a3-b736-ec1fa6dd518c1654403209149-10th-men-tile.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/5/95fcf152-fff5-4ea9-a01c-a8d8cd1e0ada1654448380481-crocs.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/4/f4381f5c-e224-4cb8-af05-53de243b04e71654339150066-image_jpeg188007996.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/5b6abd22-c04a-48a5-9891-37da3cf81b6b1654599562287-z-fire-tiles-men.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/2/e880d013-cc34-4c10-b267-1078217a54bb1654184450996-allensolly1.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/38f4797f-acb5-4c43-8f19-a3ce0df966981654257047766-image_jpeg_2100932141.jpeg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/7/09e40f47-acf6-4a4a-b693-f5f42ab044861654596189524-boult-audio-tiles.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/3/f50e9833-26c0-4779-8841-58ea7f8be0101654262384456-image_jpeg1455326867.jpg"},
        {img:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/6/e969df22-e1f5-4522-90ce-d5d1bb208e1b1654489829701-tiles-men.jpg"},
];
let bomma=(praveen)=>{
praveen.forEach((ele) => {
    let crebor=document.createElement("div");
    crebor.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })
    let twoone=document.createElement("img");
    twoone.setAttribute("src",ele.img);

    crebor.append(twoone);
    catone.append(crebor)
});
}
bomma(praveen);



let breakone=document.querySelector("#mentwo");
let creobject=[
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/91fd1b52-88dd-4569-9e31-5710bd255d7b1653643909628-QL_Bath_BodyCare.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/30f377e9-eb8a-44c3-8dbd-295b077642bf1653643909673-QL_GroomingMust-Haves.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/30b10d70-f8f4-41ba-a51a-a3da2fb690921653643909666-QL_Fragrances_Deodorants.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/0589367a-23f3-4f10-94b7-b7ec3c757ee01653643909801-QL_T-Shirts.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/be2c3846-b98a-4b37-b12b-60a0ddf5551b1653643909738-QL_Shirts.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/e1bef9bd-12d8-45a8-8880-d3ac59e317401653643909614-QL_-Innerwear.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/020297da-a13c-4262-b71d-addd60ef2bfc1653643909704-QL_Loungewear.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/9755584f-52cb-49f8-8910-3225459ad79b1653643909793-QL_TrousersMENs.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/e6ca1a65-1edf-410d-9fb8-5b582b1f9e9c1653643909697-QL_Kurtas_Sets.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7fe15202-bc12-4c0f-aec0-54de3f50197f1653643909724-QL_PlusSizeStyles.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/553c298c-d770-4cf4-af86-9e5319fe045b1653643909691-QL_JeansMens.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/21f624ef-63d8-45a2-acb1-774bb90363bd1653643909710-QL_NehruJackets_Sherwanis.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2c0f7d6d-e346-43ef-a048-35854bf6c4211653643909764-QL_Suits_blazers_.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/3f6815ba-d56a-4ff8-b075-734e8ded21a31653643909653-QL_Flip-Flops.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2c0f7d6d-e346-43ef-a048-35854bf6c4211653643909764-QL_Suits_blazers_.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/34a4b31d-65a2-4983-b664-6fcfcb258f461653643909758-QL_SportsShoes.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/25d91f26-c15a-4dfc-8f4c-147ab16729f51653643909647-QL_CasualShoes.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/d8d72379-2e75-46fc-89a7-650207320de21653643909731-QL_Sandals.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/2611e43c-d52d-4379-9c32-dde81894a6ff1653643909751-QL_Smartwatches.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/1f3a89f0-b2c6-4745-8ae6-59fbaf9d47261653643909641-QL_Belts_Wallets_.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7d55f616-71ae-4842-94ca-06cf32b70c001653643909785-QL_TrolleyBags.jpg"}, 
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/e6ca1a65-1edf-410d-9fb8-5b582b1f9e9c1653643909697-QL_Kurtas_Sets.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/7fe15202-bc12-4c0f-aec0-54de3f50197f1653643909724-QL_PlusSizeStyles.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/27/553c298c-d770-4cf4-af86-9e5319fe045b1653643909691-QL_JeansMens.jpg"},
];
let bommaone=(creobject)=>{
creobject.forEach((ele) => {
    let crebor=document.createElement("div");
    crebor.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

    let twoone=document.createElement("img");
    twoone.setAttribute("src",ele.img);

    crebor.append(twoone);
    breakone.append(crebor)
});
}
bommaone(creobject);
let second=document.querySelector("#valid");
let evaluation=[
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/58d6879e-57b1-40ed-bb9a-629ef06b1ff71654766718546-Shop-By-Category_MP_02.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/1f0578d8-55fc-47b2-ac49-018c6c6965911654766718556-Shop-By-Category_MP_03.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/ab7c0349-1ed1-429f-96a5-45d92c3b2ddd1654766718563-Shop-By-Category_MP_04.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2a8732c5-f81d-493b-a54b-02414ec8d9da1654766718570-Shop-By-Category_MP_05.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/e422074f-4635-4cbb-8069-8226e943aae21654766718577-Shop-By-Category_MP_06.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/267ec86b-9eee-450d-9432-afea001a72c11654766718585-Shop-By-Category_MP_07.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f1dd97ac-902c-46e2-b5e9-11e3fcfa24cf1654766718591-Shop-By-Category_MP_08.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/f1dd97ac-902c-46e2-b5e9-11e3fcfa24cf1654766718591-Shop-By-Category_MP_08.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/2246ff84-a6aa-4c63-90c6-0bc867f4588c1654766718606-Shop-By-Category_MP_10.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/048493fa-10e3-4aa6-9fa0-63a55432fcf11654766718613-Shop-By-Category_MP_11.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/048493fa-10e3-4aa6-9fa0-63a55432fcf11654766718613-Shop-By-Category_MP_11.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/dc4438c6-cd4d-4465-aad1-e38b464bc19b1654766718627-Shop-By-Category_MP_13.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/c143b127-0c6b-42fc-b3a3-fec67b9ed4b81654766718634-Shop-By-Category_MP_14.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/c143b127-0c6b-42fc-b3a3-fec67b9ed4b81654766718634-Shop-By-Category_MP_14.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/43d01768-21be-4217-af8b-f9e7fd09a1131654766718649-Shop-By-Category_MP_16.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/6f8695b0-1a9d-4f84-b828-7c971e53a6a71654766718657-Shop-By-Category_MP_17.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/15d054f7-34fe-41a6-95c8-87c9a13a412b1654766718665-Shop-By-Category_MP_18.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/47cf3b3a-0064-47ef-a5b0-2315b5eca39b1654766718673-Shop-By-Category_MP_19.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/84e696c9-7ac1-4508-944a-ec929332d46f1654766718682-Shop-By-Category_MP_20.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/e2d14842-c857-40b2-9704-30d47257dae91654766718694-Shop-By-Category_MP_21.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/b9be8245-88b1-4b3a-bd17-4969e299e22c1654766718702-Shop-By-Category_MP_22.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/120305d1-a79b-4bd7-a6ed-0a535540411d1654766718711-Shop-By-Category_MP_23.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/14af7953-41d5-4850-86d1-e3e77ba0693d1654766718719-Shop-By-Category_MP_24.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/9/c3d91aca-0c50-4945-bbac-8d365e34a45c1654766718728-Shop-By-Category_MP_25.jpg"},
];
let inschool=(evaluation)=>{
evaluation.forEach((ele) => {
    let power=document.createElement("div");
    power.addEventListener("click",function(){
        window.location.href="boysdata.html"
      })

    let toff=document.createElement("img");
    toff.setAttribute("src",ele.img);

    power.append(toff);
    second.append(power);
});
}
inschool(evaluation);