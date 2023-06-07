function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
      ['Year', 'FIPPA', 'MFIPPA', 'PHIPA', 'CYFSA'],
      ['2018',  761, 986, 869,  0],
      ['2019',  732, 1047, 1035, 0],
      ['2020',  923,  768, 926, 151],
      ['2021',  736, 1029, 993, 165],
      ['2022',  682, 916, 884,  92]
  ]);
  var data = new google.visualization.DataView(data);
  data.setColumns([0,
  1, {
    calc: function (dt, row) {
      return dt.getValue(row, 1);
    },
    type: "number",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2);
    },
    type: "number",
    role: "annotation"
  },
  3, {
    calc: function (dt, row) {
      return dt.getValue(row, 3);
    },
    type: "number",
    role: "annotation"
  },
  4, {
    calc: function (dt, row) {
      return dt.getValue(row, 4);
    },
    type: "number",
    role: "annotation"
  },
  {
    calc: function (dt, row) {
      return 0;
    },
    label: "Total",
    type: "number",
  },
  {
    calc: function (dt, row) {
      return dt.getValue(row, 1) + dt.getValue(row, 2) + dt.getValue(row, 3) + dt.getValue(row, 4);
    },
    type: "number",
    role: "annotation"
  }
]);

  var options = {
      title: 'Overall Opened Files 2018-2022', 
      isStacked: true,
      colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      hAxis: {title:'Years', titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#FFF'},
      legend: {
        position: 'right',
        textStyle: {
          fontSize: 10  // Adjust the font size of the legend
        }
      }
      
  };  
  //Instantiate and draw the chart.
  var chart = new google.visualization.BarChart(document.getElementById('overall-chart1'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);


function drawChart2() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
      ['Year', 'FIPPA', 'MFIPPA', 'PHIPA', 'CYFSA'],
      ['2018',  752, 939, 727,  0],
      ['2019',  743, 947, 1002, 0],
      ['2020',  771, 569, 624, 55],
      ['2021',  708, 1021, 1079, 168],
      ['2022',  731, 1066, 965,  95]
  ]);
  var data = new google.visualization.DataView(data);
  data.setColumns([0,
  1, {
    calc: function (dt, row) {
      return dt.getValue(row, 1);
    },
    type: "number",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2);
    },
    type: "number",
    role: "annotation"
  },
  3, {
    calc: function (dt, row) {
      return dt.getValue(row, 3);
    },
    type: "number",
    role: "annotation"
  },
  4, {
    calc: function (dt, row) {
      return dt.getValue(row, 4);
    },
    type: "number",
    role: "annotation"
  },
  {
    calc: function (dt, row) {
      return 0;
    },
    label: "Total",
    type: "number",
  },
  {
    calc: function (dt, row) {
      return dt.getValue(row, 1) + dt.getValue(row, 2) + dt.getValue(row, 3) + dt.getValue(row, 4);
    },
    type: "number",
    role: "annotation"
  }
]);

  var options = {
      title: 'Overall Opened Files 2018-2022', 
      isStacked: true,
      colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      hAxis: {title:'Years',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#FFF'},
      legend: {
        position: 'right',
        textStyle: {
          fontSize: 10  // Adjust the font size of the legend
        }
      },
      annotations: {
        annotationPosition: 'outside', 
        textStyle: {
          fontSize: 9
        }
      },
      chartArea: {
        height: '90%'
      }
  };  


  //Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('overall-chart2'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart2);


function drawChart3() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['PROVINCIAL',     567],
        ['MUNICIPAL',      697],
      ]);

      var options = {
        title: '1,258 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975']
      };

      var formatter = new google.visualization.NumberFormat({
        prefix: '$', negativeColor: 'red', negativeParens: true,
        decimalSymbol  : ',',
        groupingSymbol : '.'
    });
    formatter.format(data, 1); 
     

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart3'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart3);


function drawChart4() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Early resolution',     227],
        ['Mediation',      794],
        ['Adjudication',      326],
      ]);

      var options = {
        title: '1 347 Total',
        pieHole: 0.4,
        colors: ['#00a49a', '#182853', '#357975', '#cadf81'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart4'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart4);




function drawChart5() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["Exemptions", 595, "#182853"],
    ["Reasonable Search", 145, "#357975"],
    ["Deemed Refusal", 143, "#00a49a"],
    ["Act Does Not Apply", 117, "#a2bc5d"],
    ["Third Party Appeals", 96, "#727372"],
    ["Other", 162, "#9899a0"],
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
  { 
    calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation" },
  2]);
  var options = {
    title: '1, 258 Total',
    isStacked: true,
    hAxis: { title: 'Année', titleTextStyle: { color: '#FFFFFF' }, textStyle: { color: '#FFF' }, gridlines: { count: 0 }, baselineColor: '#FFF' },
    legend: { position: "none" },
    chartArea: { left: 180, },
    textStyle: {
      color: '#FFFFFF' // Set the text color here
    }
  };
  // Instantiate and draw the chart.
  var chart = new google.visualization.BarChart(document.getElementById('overall-chart5'));
  chart.draw(view, options);
}
google.charts.setOnLoadCallback(drawChart5);




function overallChart6() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Institutions decision upheld',     170],
        ['Institutions decision partially upheld',      52],
        ['Institutions decision not upheld',      35],
        ['Dismissal after representations',      2],
        ['No inquiry',      1],
        ['Other',      2],
      ]);

      var options = {
        title: '262 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart6'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart6);

function overallChart9() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Resolved',     92],
        ['Screened Out',      179],
        ['Withdrawn',      13],
        ['Abandoned',      6],
        ['Report',      8],
      ]);

      var options = {
        title: '298 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart9'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart9);

function overallChart10() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Resolved',     150],
        ['Screened Out',      1],
        ['Withdrawn',      1],

      ]);

      var options = {
        title: '152 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart10'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart10);


function phipaChart1() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["Misdirected or Lost Personal Information", 163, "#182853"],
    ["Snooping", 143, "#357975"],
    ["General Unauthorized Collection/Use/Disclosure", 122, "#00a49a"],
    ["Stolen Personal Information", 33, "#a2bc5d"],
    ["Cyberattack*", 29, "#727372"],
    ["Unsecured Records", 3, "#9899a0"],
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
  { 
    calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation" },
  2]);
  var options = {
    title: '493 Total',
    isStacked: true,
    hAxis: { title: 'Année', titleTextStyle: { color: '#FFFFFF' }, textStyle: { color: '#FFF' }, gridlines: { count: 0 }, baselineColor: '#FFF' },
    legend: { position: "none" },
    chartArea: { left: 180, },
    textStyle: {
      color: '#FFFFFF' // Set the text color here
    }
  };
  // Instantiate and draw the chart.
  var chart = new google.visualization.BarChart(document.getElementById('phipa-chart1'));
  chart.draw(view, options);
}
google.charts.setOnLoadCallback(phipaChart1);

function phipaChart2() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Access/Correction Complaint',     180],
        ['Collection/Use/Disclosure Complaint',  163],
        ['Commissioner Initiated',      1],
        ['IPC-Initiated Collection/Use/Disclosure Complaint',      29],
        ['Reported Breach',      492],
      ]);

      var options = {
        title: '865 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70', '#727372'],
        pieSliceTextStyle: {
            fontSize: 10
        },
        legend: {
          position: 'right',
        },       
        sliceVisibilityThreshold: 0,
        pieStartAngle: 95,
      };



      var chart = new google.visualization.PieChart(document.getElementById('phipa-chart2'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(phipaChart2);






function phipaChart3() {
  // Define the chart data.
    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Resolved', 745],
      ['Screened Out / Dismissed', 75],
      ['Withdrawn', 67],
      ['Abandoned', 58],
      ['Order/Decision Issued*', 20]
    ]);

  var options = {
    title: '965 Total',
    pieHole: 0.4,
    colors: ['#182853', '#357975', '#00a49a', '#c3db70', '#727372'],
    pieSliceText: 'percentage',
    pieSliceTextStyle: {
        fontSize: 6
    },
    sliceVisibilityThreshold: 0,
    pieStartAngle: 90,
  };

  var chart = new google.visualization.PieChart(document.getElementById('phipa-chart3'));

  chart.draw(data, options);
}

google.charts.setOnLoadCallback(phipaChart3);



function cyfsaChart1() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["General Unauthorized Collection/Use/Disclosure", 16, "#182853"],
    ["Misdirected or Lost Personal Information", 16, "#357975"],
    ["Snooping", 8, "#00a49a"],
    ["Stolen Personal Information", 3, "#a2bc5d"],
    ["Cyberattack*", 3, "#727372"],
  ]);
  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
  { 
    calc: "stringify",
    sourceColumn: 1,
    type: "string",
    role: "annotation" },
  2]);
  var options = {
    title: '46 Total',
    isStacked: true,
    hAxis: { title: 'Année', titleTextStyle: { color: '#FFFFFF' }, textStyle: { color: '#FFF' }, gridlines: { count: 0 }, baselineColor: '#FFF' },
    legend: { position: "none" },
    chartArea: { left: 180, },
    textStyle: {
      color: '#FFFFFF' // Set the text color here
    }
  };
  // Instantiate and draw the chart.
  var chart = new google.visualization.BarChart(document.getElementById('cyfsa-chart1'));
  chart.draw(view, options);
}
google.charts.setOnLoadCallback(cyfsaChart1);





function cyfsaChart2() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Access/Correction Complaint',     27],
        ['Collection/Use/Disclosure Complaint',  17],
        ['IPC Initiated Collection/Use/Disclosure Complaint',      2],
        ['Reported Breach',      46],
      ]);

      var options = {
        title: '92 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('cyfsa-chart2'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(cyfsaChart2);



function cyfsaChart3() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Resolved',     69],
        ['Screened Out',      12],
        ['Withdrawn',      5],
        ['Abandoned',      5],
        ['Order/Decision Issued*',      4],
      ]);

      var options = {
        title: '95 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('cyfsa-chart3'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(cyfsaChart3);






google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
var data = google.visualization.arrayToDataTable([
        ['Year', 'Access Appeals', 'Privacy Files'],
        [2018,  9.4, 4.3],
      [2019,  9.2, 4.6],
      [2020,  10.9, 7.8],
      [2021,  12.0,  7.3],
      [2022,  12.5,  8.1],
      ]);

      var data = new google.visualization.DataView(data);
      data.setColumns([0,
  1, {
    calc: function (dt, row) {
      return dt.getValue(row, 1);
    },
    type: "number",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2);
    },
    type: "number",
    role: "annotation"
  },
  
]);

// Set Options
var options = {
  displayAnnotations: true,

title: '',
hAxis: {title:'Years',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
vAxis: {title: 'Months',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#000'},
legend: 'bottom',
pointSize: 5,
tooltip: {isHtml: true},
colors: ['#c3db70', '#337975'],

};
// Draw
var chart = new google.visualization.LineChart(document.getElementById('line-chart1'));
chart.draw(data, options);
}





google.charts.setOnLoadCallback(lineChart2);
function lineChart2() {
var data = google.visualization.arrayToDataTable([
        ['Year', 'Opened', 'Closed'],
        [2018, 561, 575],
      [2019,  615, 579],
      [2020,  815, 691],
      [2021,  569,  580],
      [2022,  628,  641],
      ]);

      var data = new google.visualization.DataView(data);
      data.setColumns([0,
  1, {
    calc: function (dt, row) {
      return dt.getValue(row, 1);
    },
    type: "number",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2);
    },
    type: "number",
    role: "annotation"
  },
  
]);

// Set Options
var options = {
  displayAnnotations: true,

title: '',
hAxis: {title:'Years',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
vAxis: {title: 'Months',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#000'},
legend: 'bottom',
pointSize: 5,
tooltip: {isHtml: true},
colors: ['#c3db70', '#337975'],

};
// Draw
var chart = new google.visualization.LineChart(document.getElementById('line-chart2'));
chart.draw(data, options);
}




google.charts.setOnLoadCallback(lineChart3);
function lineChart3() {
  var data = google.visualization.arrayToDataTable([
            ['Year', 'Opened', 'Closed'],
            [2018,  697, 772],
          [2019,  791, 777],
          [2020,  579, 445],
          [2021,  853,  762],
          [2022,  814,  790],
          ]);
  
          var data = new google.visualization.DataView(data);
          data.setColumns([0,
      1, {
        calc: function (dt, row) {
          return dt.getValue(row, 1);
        },
        type: "number",
        role: "annotation"
      },
      2, {
        calc: function (dt, row) {
          return dt.getValue(row, 2);
        },
        type: "number",
        role: "annotation"
      },
      
    ]);
  
  // Set Options
  var options = {
      displayAnnotations: true,
  
    title: '',
    hAxis: {title:'Years',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
    vAxis: {title: 'Months',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#000'},
    legend: 'bottom',
    pointSize: 5,
    tooltip: {isHtml: true},
    colors: ['#c3db70', '#337975'],
  
  };
  // Draw
  var chart = new google.visualization.LineChart(document.getElementById('line-chart3'));
  chart.draw(data, options);
  }




  google.charts.setOnLoadCallback(lineChart4);
  function lineChart4() {
      var data = google.visualization.arrayToDataTable([
                ['Year', 'Opened', 'Closed'],
                [2018,  121, 156],
              [2019,  121, 129],
              [2020,  113, 80],
              [2021,  164,  162],
              [2022,  134,  109],
              ]);
      
              var data = new google.visualization.DataView(data);
              data.setColumns([0,
          1, {
            calc: function (dt, row) {
              return dt.getValue(row, 1);
            },
            type: "number",
            role: "annotation"
          },
          2, {
            calc: function (dt, row) {
              return dt.getValue(row, 2);
            },
            type: "number",
            role: "annotation"
          },
          
        ]);
      
      // Set Options
      var options = {
          displayAnnotations: true,
      
        title: '',
        hAxis: {title:'Years',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
        vAxis: {title: 'Months',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#000'},
        legend: 'bottom',
        pointSize: 5,
        tooltip: {isHtml: true},
        colors: ['#c3db70', '#337975'],
      
      };
      // Draw
      var chart = new google.visualization.LineChart(document.getElementById('line-chart4'));
      chart.draw(data, options);
      }
  




      google.charts.setOnLoadCallback(lineChart5);
      function lineChart5() {
          var data = google.visualization.arrayToDataTable([
                    ['Year', 'Opened', 'Closed'],
                    [2018,  219, 294],
                  [2019,  238, 244],
                  [2020,  195, 124],
                  [2021,  196,  186],
                  [2022,  172,  148],
                  ]);
          
                  var data = new google.visualization.DataView(data);
                  data.setColumns([0,
              1, {
                calc: function (dt, row) {
                  return dt.getValue(row, 1);
                },
                type: "number",
                role: "annotation"
              },
              2, {
                calc: function (dt, row) {
                  return dt.getValue(row, 2);
                },
                type: "number",
                role: "annotation"
              },
              
            ]);
          
          // Set Options
          var options = {
              displayAnnotations: true,
          
            title: '',
            hAxis: {title:'Years',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
            vAxis: {title: 'Months',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#000'},
            legend: 'bottom',
            pointSize: 5,
            tooltip: {isHtml: true},
            colors: ['#c3db70', '#337975'],
          
          };
          // Draw
          var chart = new google.visualization.LineChart(document.getElementById('line-chart5'));
          chart.draw(data, options);
          }
            
    
    
function financialchart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Salaries and Wages',     14900500],
        ['Employee Benefits',      3980400],
        ['Transportation and Communications',      122000],
        ['Services',      3492400],
        ['Supplies and Equipment',      137000]
      ]);

      var options = {
        title: '$22,632,300',
        pieHole: 0.4,
        colors: ['#242D38', '#337975', '#00A19C', '#C3E86C', '#727372'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('financial-2022-chart'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(financialchart);
