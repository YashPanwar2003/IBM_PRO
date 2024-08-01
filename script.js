import { quotes } from "./quotes.js";
const button = document.querySelector("#button");
document.onload = function () {
  const i = Math.floor(Math.random() * quotes.length);
  const obj = quotes[i];
};
button.addEventListener("click", function () {
  const electricity = document.querySelector("#electricbill");
  const gas = document.querySelector("#gasbill");
  const fuel = document.querySelector("#fuelbill");
  const vehicle = document.querySelector("#vehicle");
  const flights = document.querySelector("#flights");
  const recyclepaperyes = document.querySelector("#paperyes");
  const recyclepaperno = document.querySelector("#paperno");
  const recycletinyes = document.querySelector("#tinyes");
  const recycletinno = document.querySelector("#tinno");
  const alert1 = document.querySelector("#alert1");
  const alert2 = document.querySelector("#alert2");
  const calculator = document.querySelector(".calculator");
  const result = document.querySelector(".result");
  const houseresult=document.querySelector("#houseresult")
  const vehicleresult=document.querySelector("#vehicleresult")
  const wasteresult=document.querySelector("#wasteresult")
  const outcome=document.querySelector("#outcome")
  const desc=document.querySelector("#desc")
  const avgemission=1333333.33;
  vehicle.defaultValue = 0;
  flights.defaultValue = 0;
  electricity.defaultValue = 0;
  gas.defaultValue = 0;
  fuel.defaultValue = 0;

  if (
    !(recyclepaperno.checked || recyclepaperyes.checked) ||
    !(recycletinno.checked || recycletinyes.checked)
  ) {
    if (!(recyclepaperno.checked || recyclepaperyes.checked)) {
      alert1.style.display = "block";
    }
    if (!(recycletinno.checked || recyclepaperyes.checked)) {
      alert2.style.display = "block";
    }

    return;
  }
  var electricScore = "";
  var gasScore = "";
  var oilScore = "";
  var carScore = "";
  var flightsScore = "";

  var newspaperScore = "";
  var alumTinScore = "";
  var totalScore = "";
  if (recyclepaperyes) {
    newspaperScore = 184;
  } else {
    newspaperScore = 0;
  }
  if (recycletinyes) {
    alumTinScore = 166;
  } else {
    alumTinScore = 0;
  }
  electricScore = electricity.value * 105;
  gasScore = gas.value * 105;
  oilScore = fuel.value * 113;
  carScore = vehicle.value * 0.79;
  flightsScore = flights.value * 2750;
  var energyScore = electricScore + gasScore + oilScore;
  var travelScore = carScore + flightsScore;
  var wasteScore = newspaperScore + alumTinScore;
  totalScore = energyScore + travelScore + wasteScore;
  let percentage=(Math.abs(totalScore-avgemission)/avgemission)*100;
  percentage=Number.parseInt(percentage);
  houseresult.innerHTML=`House & Domestic uses :<span> ${energyScore}</span> `
  vehicleresult.innerHTML=`Travel & Vehicle uses : <span> ${travelScore}</span>`
  wasteresult.innerHTML=`Recycling the Waste : <span>${wasteScore}</span>`
  outcome.innerHTML=`Overall carbon Footprint : <span> ${totalScore}</span>`
  desc.innerHTML=`Your Calculated Footprint is ${percentage}% ${"higher"?outcome>avgemission:"leseser"} than avg. Indian Footrprint`;

  calculator.classList.add("fade-out");
  result.classList.add("fade-in");
  setTimeout(() => {
    calculator.style.display = "none";
    result.style.display = "block";
  }, 600);
});
const button2 = document.querySelector(".bi-info-circle-fill");
button2.addEventListener("click", () => {
  document.querySelector("#fact").classList.toggle("hide");
});
const button3 = document.querySelector("#recalculate");
button3.addEventListener("click", () => {
   

});
