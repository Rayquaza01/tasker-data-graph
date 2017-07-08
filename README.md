#tasker-data-graph
An AutoTools Web Screen that graphs data usage (AT&T Only)

Requirements:
 * Tasker
 * AutoTools
 * AT&T

How to use:
 * Create a Profile in Tasker:
   * Event > Phone > Recived Text
   * Type: Any
   * Sender: 104
   * Content: Next Bill Cycle\*
 * Assign a Task to the Profile:
   * Plugin > AutoTools > Web Screen
   * Source: https://Rayquaza01.github.io/tasker-data-graph
   * Data Info: Defaults to %SMSRB, the text recived in the profile
   * Use Pie: Set to true if you want a pie chart, otherwise it will be a doughnut chart.
   * Colors: A comma separated list of colors to use in the chart.
 * Test it out!
   * Dial \*3282# to request data info. A text will arrive shortly which should trigger the profile.

This project uses [Chart.js](https://chartjs.org)
