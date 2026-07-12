<!DOCTYPE html>
<html lang="uz">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BorMi? Dashboard</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header>
<h1>🛒 BorMi? - Do'kon paneli</h1>
</header>

<main class="login-box">

<h2>Mahsulot qo'shish</h2>

<input type="text" id="productName" placeholder="Mahsulot nomi">

<input type="number" id="productPrice" placeholder="Narxi">

<select id="productStatus">
<option value="Bor">🟢 Bor</option>
<option value="Yo'q">🔴 Yo'q</option>
</select>

<button id="saveProduct">Saqlash</button>

<h2>Mahsulotlar</h2>

<div id="productList"></div>

</main>

<script type="module" src="dashboard.js"></script>

</body>
</html>
