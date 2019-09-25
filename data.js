function main() {
    var data = dataInfo.split("\n");
    var endDate = data[0].match(/\d{2}\/\d{2}\/\d{2}/g)[0]
    var daysLeftMS = new Date(endDate) - new Date();
    var daysLeft = new Date(daysLeftMS).getDate();
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
    new Chart(ctx, {
    	type: chartType,
    	data: {
        	labels: labels,
        	datasets: [{
            	data: dataset,
                backgroundColor: colors.split(",")
            }]
        }
    });
    document.getElementById("date").innerText = data[0] + " (" + daysLeft + " days left)";
}
document.addEventListener("DOMContentLoaded", main);
