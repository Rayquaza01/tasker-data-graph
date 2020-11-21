import * as chart from "chart.js";
import * as moment from "moment";

// variables from autotools
declare var dataInfo: string;
declare var chartType: "pie" | "doughnut";
declare var colors: string;

function main() {
    let data: string[] = dataInfo.split("\n");

    let endDate: moment.Moment = moment(data[0].match(/\d{2}\/\d{2}\/\d{2}/)[0], "MM/DD/YY", true);
    let daysLeft: number = moment.duration(endDate.diff(moment())).asDays();

    let [usedData, totalData] = data[1]
        .match(/[\d.,]+/g)
        .map(i => parseFloat(i.replace(",", "")));
    let availableData = totalData - usedData;

    let labels = [];
    let dataset = [];
    for (let i = 3; i < data.length; i++) {
    	if (data[i].match(/^\d{4}/)) {
            let [label, dataUsed] = data[i]
                .match(/(\d{4})(?:\[You])?: ([\d,.]+)/)
                .slice(1)
                .map(i => parseFloat(i.replace(",", "")))
            labels.push(label);
            dataset.push(dataUsed);
        } else {
        	break;
        }
    }

    labels.push("Available");
    dataset.push(availableData);

    var ctx: HTMLCanvasElement = document.querySelector("#datagraph");
    new chart.Chart(ctx, {
    	type: chartType,
    	data: {
        	labels: labels,
        	datasets: [{
            	data: dataset,
                backgroundColor: colors.split(",")
            }]
        }
    });

    document.getElementById("date").innerText = `${data[0]} (${daysLeft} days left)`;
}
document.addEventListener("DOMContentLoaded", main);
