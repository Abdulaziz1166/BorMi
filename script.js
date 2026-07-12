const shops = [
{
name:"Baraka Market",
product:"Non",
price:"4000 so'm",
status:"🟢 Bor"
},
{
name:"Havas",
product:"Sut",
price:"12000 so'm",
status:"🟢 Bor"
},
{
name:"Anor Market",
product:"Shakar",
price:"18000 so'm",
status:"🟢 Bor"
}
];

const button = document.querySelector("button");
const input = document.querySelector("input");
const result = document.getElementById("result");

button.onclick = function(){

const search = input.value.toLowerCase();

result.innerHTML="";

shops.forEach(shop=>{

if(shop.product.toLowerCase().includes(search)){

result.innerHTML += `
<div class="card">
<h3>${shop.name}</h3>
<p><b>Mahsulot:</b> ${shop.product}</p>
<p><b>Narxi:</b> ${shop.price}</p>
<p>${shop.status}</p>
</div>
`;

}

});

if(result.innerHTML==""){
result.innerHTML="<h2>Mahsulot topilmadi 😔</h2>";
}

}
