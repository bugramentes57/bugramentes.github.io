// Yıllık Satış Miktarı
var salesData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    datasets: [{
        label: "Yıllık Satış Miktarı",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 56, 55, 40, 75, 89, 120, 100, 85],
    }]
};

var salesContext = document.getElementById("salesChart").getContext("2d");
var salesChart = new Chart(salesContext, {
    type: 'bar',
    data: salesData
});

// Yıllık Tıklama Sayısı
var clickData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    datasets: [{
        label: "Yıllık Tıklama Sayısı",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        data: [45, 75, 60, 92, 50, 80, 30, 65, 100, 110, 75, 95],
    }]
};

var clickContext = document.getElementById("clickChart").getContext("2d");
var clickChart = new Chart(clickContext, {
    type: 'line',
    data: clickData
});

// Stok Bilgisi
var stockData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    datasets: [{
        label: "Stok Bilgisi",
        backgroundColor: "rgba(255,206,86,0.2)",
        borderColor: "rgba(255,206,86,1)",
        borderWidth: 1,
        data: [150, 120, 100, 80, 60, 50, 40, 30, 20, 15, 10, 5],
    }]
};

var stockContext = document.getElementById("stockChart").getContext("2d");
var stockChart = new Chart(stockContext, {
    type: 'bar',
    data: stockData
});

// Yıllık Yeni Kullanıcı Sayısı
var newUserData = {
    labels: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
    datasets: [{
        label: "Yıllık Yeni Kullanıcı Sayısı",
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#FF9800", "#9C27B0", "#607D8B", "#795548", "#3F51B5", "#E91E63", "#009688", "#FFC107"],
        data: [25, 30, 20, 35, 40, 50, 45, 60, 55, 70, 65, 80],
    }]
};

var newUserContext = document.getElementById("newUserChart").getContext("2d");
var newUserChart = new Chart(newUserContext, {
    type: 'pie',
    data: newUserData
});