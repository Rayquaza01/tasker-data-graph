function main() {
    var data = dataInfo.split("\n");
    if (type) {
        var chartType = "pie";
    } else {
        var chartType = "doughnut"
    }
    var chartColors = colors.split(",")
    var endDate = data[0].match(/\d{2}\/\d{2}\/\d{2}/g)[0]
    var daysLeft = new Date(endDate).getDate() - new Date().getDate();
    var usedData = parseFloat(data[1].match(/[\d.,]+/g)[0].replace(",", ""));
    var totalData = parseFloat(data[1].match(/[\d.,]+/g)[1].replace(",", ""));
    var availableData = totalData - usedData;
    var labels = [];
    var dataset = [];
    for (var i = 3; i < data.length; i++) {
    	if (data[i].match(/^\d{4}/)) {
            labels.push(data[i].match(/^\d{4}/g)[0]);
            dataset.push(parseFloat(data[i].match(/[\d.,]+/g)[1].replace(",", "")));
        } else {
        	break;
        }
    }
    labels.push("Available");
    dataset.push(availableData);
    var ctx = document.getElementById("datagraph");
    var myChart = new Chart(ctx, {
    	type: chartType,
    	data: {
        	labels: labels,
        	datasets: [{
            	data: dataset,
                backgroundColor: chartColors
            }]
        }
    });
    var date = document.createElement("span");
    date.innerText = data[0] + " (" + daysLeft + " days left)";
    document.getElementById("data").append(date);
}
document.addEventListener("DOMContentLoaded", main);
