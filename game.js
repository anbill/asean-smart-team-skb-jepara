let soal = [
  {
    q: "Berapa jumlah negara ASEAN?",
    a: ["8","9","10","11"],
    benar: 2
  },
  {
    q: "Ibu kota Thailand?",
    a: ["Hanoi","Bangkok","Manila","Vientiane"],
    benar: 1
  }
];

let index = 0;
let skor = 0;

function startGame(){
  tampilSoal();
}

function tampilSoal(){
  let s = soal[index];
  let html = `<h3>${s.q}</h3>`;
  s.a.forEach((jawab,i)=>{
    html += `<button onclick="cek(${i})">${jawab}</button><br>`;
  });
  document.getElementById("game").innerHTML = html;
}

function cek(i){
  if(i === soal[index].benar){
    skor += 10;
    alert("Benar!");
  } else {
    alert("Salah!");
  }
  index++;
  if(index < soal.length){
    tampilSoal();
  } else {
    alert("Game selesai! Skor: " + skor);
  }
}
