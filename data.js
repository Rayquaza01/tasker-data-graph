/* globals dataInfo, chartType, colors, Chart */

function main() {
    // split data by newline
    let data = dataInfo.split("\n");

    // get end date from first line. (3 two digit numbers separated by /)
    let endDate = data[0].match(/(?:\d{2}\/?){3}/g)[0];
    // calculate days left by subtracting the current date from the end date.
    let daysLeft = new Date(new Date(endDate) - Date.now()).getDate();

    // get used and total data from second line
    // first element is used data, second element is total data
    let usage = [...data[1].match(/[\d.,]+/g)].map(item =>
        parseFloat(item.replace(",", ""))
    );
    let availableData = usage[1] - usage[0];

    // display items on webpage
    document.getElementById("date").innerText = data[0] + " (" + daysLeft + " days left)";
    document.getElementById("overage").innerText = data[8];
    document.getElementById("usage").innerText =
        usage[0] +
        "MB used of " +
        usage[1] +
        "MB (" +
        (usage[0] / usage[1] * 100).toPrecision(3) +
        "%)";

    // get data usage for each device
    data = data.slice(3).filter(item => item.match(/^\d{4}/));
    let dataset = data.map(item =>
        parseFloat(item.match(/[\d.,]+/g)[1].replace(",", ""))
    );
    let labels = data.map(item => item.match(/^\d{4}/g)[0]);

    // add available data to dataset
    labels.push("Available");
    dataset.push(availableData);

    // create graph
    let ctx = document.getElementById("datagraph");
    new Chart(ctx, {
        type: chartType,
        data: {
            labels: labels,
            datasets: [
                {
                    data: dataset,
                    backgroundColor: colors.split(",")
                }
            ]
        }
    });
}

document.addEventListener("DOMContentLoaded", main);
