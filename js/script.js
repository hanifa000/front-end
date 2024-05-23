// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar untuk menghilangkan nav
const humburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

function openTab(evt, tabName) {
  // Ambil semua elemen dengan class "tabcontent" dan sembunyikan mereka
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Ambil semua elemen dengan class "tablinks" dan hapus class "active" dari mereka
  var tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Tampilkan tab yang dipilih dan tandai tombol sebagai aktif
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Buka tab pertama secara default saat halaman dimuat
document.getElementById("defaultOpen").click();

