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
   * Chart Type: Whether to use a doughnut or pie chart. Defaults to doughnut
   * Chart Colors: A comma separated list of colors to use in the chart. Can be HEX codes or HTML color names.
 * Test it out!
   * Dial \*3282# to request data info. A text will arrive shortly which should trigger the profile.

This project uses [Chart.js](https://chartjs.org)
