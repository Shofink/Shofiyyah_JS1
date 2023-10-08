//if else 
let x = 22;
let y = 28;

if (x > 20) {
  if (y > 10) {
    console.log("x lebih besar dari 20 dan y lebih besar dari 10");
  } else {
    console.log("x lebih besar dari 20 dan y kurang dari atau sama dengan 10");
  }
} else {
  console.log("x kurang dari atau sama dengan 20");
}


// Switch Case
var hari = prompt("Silahkan Mausukkan Nama Hari");
hari = hari.toLowerCase();

switch (hari) {
  case "senin":
    console.log("Semoga hari ku tidak senin terus");
    break;
  case "selasa":
  case "rabu":
  case "kamis":
  case "jumat":
    console.log("Selamat bekerja");
    break;
  case "sabtu":
  case "minggu":
    console.log("Waktunya libur akhir pekan YEAYY!!.");
    break;
  default:
    console.log("Hari yang Anda masukkan tidak valid.");
    break;
}

// For Statement
for (var i = 5; i <= 10; i++) {
    console.log(i);
  }
  
// While, do while
var i = 1;

while (i <= 3) {
  console.log(i);
  i++; 
}

//Function
function hitungLuasSegitiga(alas, tinggi) {
    var luas = (alas * tinggi) / 2;
    return luas;
  }
  
  var alasSegitiga = 10;
  var tinggiSegitiga = 15;
  var hasilLuas = hitungLuasSegitiga(alasSegitiga, tinggiSegitiga);
  
  console.log("Luas segitiga dengan alas " + alasSegitiga + " dan tinggi " + tinggiSegitiga + " adalah: " + hasilLuas);
  
