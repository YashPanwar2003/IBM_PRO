import { quotes } from "./quotes.js";
const button = document.querySelector("#button");
window.onload = function () {
  const i = Math.floor(Math.random() * quotes.length);
  const obj = quotes[i];
  document.querySelector("#quote").innerHTML = obj["quote"];
  document.querySelector("#author").innerHTML = "- " + obj["author"];
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
  const houseresult = document.querySelector("#houseresult");
  const vehicleresult = document.querySelector("#vehicleresult");
  const wasteresult = document.querySelector("#wasteresult");
  const outcome = document.querySelector("#outcome");
  const desc = document.querySelector("#desc");
  const avgemission = 1333333.33;
  alert1.style.display="none"
  alert2.style.display="none"
  if (
    !(recyclepaperno.checked || recyclepaperyes.checked) ||
    !(recycletinno.checked || recycletinyes.checked)
  ) {
    if (!(recyclepaperno.checked || recyclepaperyes.checked)) {
      alert1.style.display = "block";
    }
    if (!(recycletinno.checked || recycletinyes.checked)) {
      alert2.style.display = "block";
    }

    return;
  }

  vehicle.defaultValue = 0;
  flights.defaultValue = 0;
  electricity.defaultValue = 0;
  gas.defaultValue = 0;
  fuel.defaultValue = 0;
  var electricScore = "";
  var gasScore = "";
  var oilScore = "";
  var carScore = "";
  var flightsScore = "";

  var newspaperScore = "";
  var alumTinScore = "";
  var totalScore = "";
  if (recyclepaperyes.checked) {
    newspaperScore = 0;
  } else {
    newspaperScore = 184;
  }
  if (recycletinyes.checked) {
    alumTinScore = 0;
  } else {
    alumTinScore = 166;
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
  let percentage = (Math.abs(totalScore - avgemission) / avgemission) * 100;
  percentage = Number.parseInt(percentage);
  houseresult.innerHTML = `House & Domestic uses :<span> ${energyScore}</span> g/month`;
  vehicleresult.innerHTML = `Travel & Vehicle uses : <span> ${travelScore}</span> g/month`;
  wasteresult.innerHTML = `Recycling the Waste : <span>${wasteScore}</span> g/month`;
  outcome.innerHTML = `Overall carbon Footprint : <span> ${totalScore}</span> g/month`;
  desc.innerHTML = `Your Calculated Footprint is ${percentage}% ${
    totalScore > avgemission ? "higher" : "leseser"
  } than avg. Indian Footrprint`;
  calculator.classList.remove("fade-in");
  result.classList.remove("fade-out");
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
  const result = document.querySelector(".result");
  const calculator = document.querySelector(".calculator");
  result.classList.remove("fade-in");
  calculator.classList.remove("fade-out");
  result.classList.add("fade-out");
  calculator.classList.add("fade-in");
  setTimeout(() => {
    result.style.display = "none";
    calculator.style.display = "flex";
  }, 600);
  document.querySelector("#form").reset();
});
