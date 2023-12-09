// announcements dizisini oluştur
const announcement1 = {
    title: "yarrak", imageSrc:"C:/Users/bugra/OneDrive/Masaüstü/biolife-organic-bootstrap-html-template/assets/images/slide1.jpg"
}
const announcement2 = {
    title: "yarrak1", imageSrc:"C:/Users/bugra/OneDrive/Masaüstü/biolife-organic-bootstrap-html-template/assets/images/slide2.jpg"
}
var announcements =[];
announcements.push(announcement1);
announcements.push(announcement2);

  // Duyuru tıklandığında içeriği yükle ve modalı göster
  $('.menu-name[data-title="Blog"]').on('click', function () {
    console.log(announcements, "annaouncement arrayi");
    // İçeriği temizle
    $('#announcement-details-container').empty();
  
    // Modalı aç
  function openModal(announcement) {
    console.log(announcement);
    var modal = document.getElementById('customModal');
    var modalImage = document.getElementById('modalImage');
  
    // Modal içeriğini güncelle
    modalImage.src = announcement.imageSrc;
  
    // Modalı göster
    modal.style.display = 'block';
  }
  
  // Modalı kapat
  function closeModal() {
    var modal = document.getElementById('customModal');
    modal.style.display = 'none';
  }
    // Her bir duyuru için bir link oluştur
    announcements.forEach(function (announcement) {
      console.log(announcement.imageSrc);
      // announcement değişkeninin tipini Object olarak ayarlayın
      var announcement = announcement;
      var link = $('<a>', {
        href: 'javascript:void(0)',
        text: announcement.title,
        //'data-popup-content': announcement.imageSrc,
        click: function (event) {
          event.preventDefault(); // Sayfa yenilenmesini engelle
          openModal(announcement);
        }
      });
  
      // Linki içeriğe ekle
      $('#announcement-details-container').append(link).append('<br>');
    });
  });
  
  