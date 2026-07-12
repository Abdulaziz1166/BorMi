import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productStatus = document.getElementById("productStatus");
const saveButton = document.getElementById("saveProduct");
const productList = document.getElementById("productList");

saveButton.addEventListener("click", async () => {

    if(productName.value === "" || productPrice.value === ""){
        alert("Barcha maydonlarni to'ldiring!");
        return;
    }

    try{

        await addDoc(collection(db,"products"),{

            name: productName.value,
            price: Number(productPrice.value),
            status: productStatus.value

        });

        alert("✅ Mahsulot qo'shildi!");

        productName.value="";
        productPrice.value="";
        productStatus.value="Bor";

        loadProducts();

    }catch(error){

        alert(error.message);

    }

});

async function loadProducts(){

    productList.innerHTML="";

    const querySnapshot = await getDocs(collection(db,"products"));

    querySnapshot.forEach((doc)=>{

        const product = doc.data();

        productList.innerHTML += `
        <div class="card">
            <h3>${product.name}</h3>
            <p>Narxi: ${product.price} so'm</p>
            <p>Holati: ${product.status}</p>
        </div>
        `;

    });

}

loadProducts();
