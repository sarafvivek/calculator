var expectedMileage = 0;

$(document).ready(function () {
  $(".js-example-basic-single").select2();
});

function calculateMileage() {
  var distance = parseFloat(document.getElementById("distance").value);
  var totalAmount = parseFloat(document.getElementById("totalAmount").value);
  var todayPrice = parseFloat(document.getElementById("todayPrice").value);
  var vehicle = document.getElementById("vehicle").value;

  if (isNaN(distance) || isNaN(totalAmount) || isNaN(todayPrice)) {
    document.getElementById("rHead").innerHTML =
      "<h2>Please enter valid Distance, Amount and Price.</h2>";
    document.getElementById("rMessage").innerHTML = "";
    return;
  }

  var liters = totalAmount / todayPrice;
  var fuelConsumption = distance / liters;

  checkTruck(vehicle);

  var mileageDifference = fuelConsumption - expectedMileage;

  var vehicleMesage = `<span style="color: black;"><b>${vehicle}</span>`;

  var resultHead = "";
  var resultMessage = "";
  if (mileageDifference === 0) {
    resultHead = `The calculated mileage of ${vehicleMesage} is equal to the expected mileage.`;
    document.getElementById("rHead").style.color = "green";
  } else if (mileageDifference > 0) {
    resultHead = `The calculated mileage of ${vehicleMesage} is greater than the expected mileage.`;
    document.getElementById("rHead").style.color = "green";
  } else {
    resultHead = `The calculated mileage of ${vehicleMesage} is less than the expected mileage.`;
    document.getElementById("rHead").style.color = "red";
  }
  resultMessage += `<p><b>Total Liters Consumed:</b> ${liters.toFixed(2)}</p>`;
  resultMessage += `<p><b>Expected Mileage:</b> ${expectedMileage} km/liter <p>`;
  resultMessage += `<p><b>Calculated Mileage:</b> ${fuelConsumption.toFixed(
    2
  )} km/liter</p>`;

  if (mileageDifference < 0) {
    resultMessage += `<p style="color: red;"><b>Mileage Difference:<b> ${Math.abs(
      mileageDifference
    ).toFixed(2)} km/liter</p>`;
  }

  document.getElementById("rHead").innerHTML = resultHead;
  document.getElementById("rMessage").innerHTML = resultMessage;
}

function checkTruck(vehicle) {
  switch (vehicle) {
    case "BRO1GA9117":
      expectedMileage = 5.5;
      break;
    case "BRO1GA9217":
      expectedMileage = 5.5;
      break;
    case "BR01GA9517":
      expectedMileage = 5.5;
      break;
    case "BR01GA9617":
      expectedMileage = 5.5;
      break;
    case "BRO1GA9717":
      expectedMileage = 5.5;
      break;
    case "WB29A9222":
      expectedMileage = 5.5;
      break;
    case "WB23D4630":
      expectedMileage = 5.5;
      break;
    case "NL02Q3966":
      expectedMileage = 5.5;
      break;
    case "MP20HB4617":
      expectedMileage = 4;
      break;
    case "MP20HB5217":
      expectedMileage = 4;
      break;
    case "WB23C8182":
      expectedMileage = 5.5;
      break;
    case "JH01AY1617":
      expectedMileage = 5.5;
      break;
    case "JH01AY2917":
      expectedMileage = 5.5;
      break;
    case "WB51A7505":
      expectedMileage = 5.5;
      break;
    case "JH01AY1217":
      expectedMileage = 5.5;
      break;
    case "WB41C6377":
      expectedMileage = 7;
      break;
    case "UP93AT1285":
      expectedMileage = 4;
      break;
    case "UP93AT1287":
      expectedMileage = 4;
      break;
    case "UP93AT1288":
      expectedMileage = 4;
      break;
    case "UP93AT1289":
      expectedMileage = 4;
      break;
    case "WB25B1517":
      expectedMileage = 4;
      break;
    case "WB23B9771":
      expectedMileage = 3.5;
      break;
    case "WB15C5160":
      expectedMileage = 5.5;
      break;
    case "BR01GG4262":
      expectedMileage = 6;
      break;
    case "BR01GL2314":
      expectedMileage = 7;
      break;
    case "MP49H0717":
      expectedMileage = 4;
      break;
    case "MP49H0917":
      expectedMileage = 4;
      break;
    case "MP49H1417":
      expectedMileage = 4;
      break;
    case "UP78CN6293":
      expectedMileage = 4;
      break;
    case "UP78CN6294":
      expectedMileage = 4;
      break;
    case "UP78CN6295":
      expectedMileage = 4;
      break;
    case "UP78CN6291":
      expectedMileage = 4;
      break;
    case "UP93AT1481":
      expectedMileage = 4;
      break;
    case "MP49H1517":
      expectedMileage = 4;
      break;
    case "UP78CN6287":
      expectedMileage = 4;
      break;
    case "UP78CN6288":
      expectedMileage = 4;
      break;
    case "UP78CN6289":
      expectedMileage = 4;
      break;
    case "UP78CN6290":
      expectedMileage = 4;
      break;
    case "BR01GL1068":
      expectedMileage = 4;
      break;
    case "UP93AT1483":
      expectedMileage = 4;
      break;
    case "BR01GL1069":
      expectedMileage = 4;
      break;
    case "NL01L0655":
      expectedMileage = 4;
      break;
    case "WB25J4273":
      expectedMileage = 5.5;
      break;
    case "WB25J6229":
      expectedMileage = 5.5;
      break;
    case "BR01GL6978":
      expectedMileage = 7;
      break;
    case "BR01GL6979":
      expectedMileage = 7;
      break;
    case "BR01GL0816":
      expectedMileage = 5.5;
      break;
    case "WB37D1259":
      expectedMileage = 4;
      break;
    case "WB37D1261":
      expectedMileage = 4;
      break;
    case "WB37D1262":
      expectedMileage = 4;
      break;
    case "WB37D1306":
      expectedMileage = 4;
      break;
    case "WB15D4978":
      expectedMileage = 5.5;
      break;
    case "BR01GL8087":
      expectedMileage = 7;
      break;
    case "JH01AY4907":
      expectedMileage = 5.5;
      break;
    case "JH02W9015":
      expectedMileage = 5.5;
      break;
    default:
      expectedMileage = 0;
  }
}
