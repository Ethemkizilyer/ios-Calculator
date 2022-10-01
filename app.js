const üst = document.querySelector(".üst");
const alt = document.querySelector(".alt");
const tuslar = document.querySelector(".tuslar");
const sayılar = document.querySelectorAll(".sayı");
const fonk = document.querySelectorAll(".fonk");
const işlem = document.querySelectorAll(".islem");
let liste = [];
let total = 0;
let topla = [];
let sayı;

tuslar.addEventListener("click", (event) => {
  let key = event.target;

  if (key.classList.contains("sayı")) {
    alt.value += key.innerText;
  } else if (key.classList.contains("islem")) {
    liste.push(alt.value);

    alt.setAttribute("placeHolder", alt.value);
    if (liste.includes("-")) {
      sayı = -Number(liste.replace("-", "").join(""));
      liste = [];
    } else {
      sayı = Number(liste.join(""));
      liste = [];
    }
    topla.push(sayı);

    liste.push(sayı);

    if (key.innerText == "+") {
      üst.value += alt.value + "+";
      alt.value = "";
    } else if (key.innerText == "-") {
      üst.value += alt.value + "-";
      alt.value = "";
    } else if (key.innerText == "×") {
      üst.value += alt.value + "×";
      alt.value = "";
    } else if (key.innerText == "÷") {
      üst.value += alt.value + "/";
      alt.value = "";
    }

    if (key.innerText == "=") {

      if (üst.value == topla[0] + "+") {
        alt.value = topla[0] + topla[1];
        console.log(typeof alt.value);
        if([...(alt.value)].includes(".")){
          alt.value = Number(alt.value).toFixed(2);
        }
        
        üst.value = topla[0] + "+" + topla[1] + "=";
      }

      else if (üst.value == topla[0] + "-") {
        alt.value = topla[0] - topla[1];
         if ([...alt.value].includes(".")) {
           alt.value = Number(alt.value).toFixed(2);
         }
        üst.value = topla[0] + "-" + topla[1] + "=";
      }

      else if (üst.value == topla[0] + "×") {
        alt.value = topla[0] * topla[1];
        if ([...alt.value].includes(".")) {
          alt.value = Number(alt.value).toFixed(2);
        }
        üst.value = topla[0] + "x" + topla[1] + "=";
      } else if (üst.value == topla[0] + "/") {
        alt.value = topla[0] / topla[1];
        console.log(typeof alt.value);
        if ([...alt.value].includes(".")) {
          alt.value = Number(alt.value).toFixed(2);
        }
        üst.value = topla[0] + "÷" + topla[1] + "=";
      } 
      // else{
           
      // }
üst.value =""
      liste = [];
      liste.push(alt.value);
    }
    if (topla.length =2) {
      topla = [];

      topla.push(sayı);
    }

    liste = [];
  } else if (key.classList.contains("fonk")) {
    if (key.innerText == "±") {
      alt.value = -alt.value;
    }

    if (key.innerText == "%") {
      alt.value = Number(alt.value) * 0.01;
      console.log("1");
    }
    if (key.innerText == ",") {
      alt.value = Number(alt.value)+ ".";
      console.log(alt.value);
    }
    if (key.innerText == "AC") {
      liste = [];
      alt.value = "";
      üst.value = "";
      alt.setAttribute("placeHolder", 0);
    }
  }
});

// **************************************************
// const tuslar = document.querySelector(".tuslar")
// const alt = document.querySelector(".alt")
// const üst = document.querySelector(".üst")
// let sayiEkle = false;
// let esitFlag = false;
// let sayi1 = 0;
// let sayi2 = 0;
// let islem = "";
// let sayi ="";

// tuslar.addEventListener("click",(e) => {
//   if (e.target.classList.contains("sayı")){
//     if(alt.value == "0" || sayiEkle == true || esitFlag == true){
//       alt.value = e.target.innerText;
//     } else{
//       alt.value += e.target.innerText;
//     }
//     sayiEkle = false;
//     esitFlag = false;
//     sayi += e.target.innerText
//   } else if (e.target.classList.contains("islem")){
//     console.log(sayi1,sayi2,islem);
//     üst.value = e.target.innerText;
//     esitFlag && (sayi1 = alt.value);
//     console.log("sayı1:",sayi1);
//     sayi1 ? (sayi2 = sayi) : (sayi1= sayi);
//     sayi = "";
//     if(sayi1 && sayi2){
//       console.log(sayi1,sayi2,islem);
//       alt.valur = hesapla(sayi1,sayi2,islem);
//       sayi1="";
//       sayi2="";
//       islem="";
//     }
//     islem = e.target.innerText;
//     sayiEkle = true;
//   } else if ( e.target.classList.contains("opposite")){
//     üst.value = e.target.innerText;
//     sayi2= sayi;
//     if( sayi1 && sayi2){
//       alt.value = hesapla(sayi1,sayi2,islem);
//       sayi1="";
//       sayi2="";
//     islem="";
//   console.log(sayi1,sayi2,islem);    
// }
// // sayi1="";
// sayi= "";
// esitFlag=true;
//   } else if (e.target.classList.contains("btnAc")){
//     sayi1="";
//     sayi2="";
//     islem="";
//     alt.value="";
//     üst.value="";
//   }
// })

// function hesapla(sayi1,sayi2,islem){
//   console.log(sayi1,sayi2,islem);
//   switch (islem) {
//     case "+":
//       return Number(sayi1) + Number(sayi2);
//     case "-":
//       return Number(sayi1) - Number(sayi2);
//     case "×":
//       return Number(sayi1) * Number(sayi2);
//     case "÷":
//       return Number(sayi1) / Number(sayi2);
//     case "%":
//       return (Number(sayi1) * Number(sayi2)) / 100;
//   }
// }
