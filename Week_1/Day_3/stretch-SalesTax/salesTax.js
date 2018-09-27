var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var sumofSales = function(obj){
  var sum = 0;
  for(var num of obj.sales){
    sum+=num;
  }
  return sum;
};
var sumofTax = function(obj,taxrates){
  var taxValue = taxrates[obj.province];
  var salesSum = sumofSales(obj);
  var taxtotal = salesSum * taxValue;
  return taxtotal;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var result = {};
  for(var obj of salesData){
    var sumsales = sumofSales(obj);
    var taxsum = sumofTax(obj,taxRates);
    if(obj.name in result){
      result[obj.name].totalSales += sumsales;
      result[obj.name].totalTaxes += taxsum;
    }
      else{

        result[obj.name] = {totalSales:sumsales, totalTaxes:taxsum};

      }
  }
  return result;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/