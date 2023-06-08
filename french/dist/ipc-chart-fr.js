function drawChart() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
      ['Année', 'LAIPVP', 'LAIMPVP', 'LPRPS', 'LSEJF'],
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
      return dt.getValue(row, 1).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  3, {
    calc: function (dt, row) {
      return dt.getValue(row, 3).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  4, {
    calc: function (dt, row) {
      return dt.getValue(row, 4).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
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
    calc: function(dt, row) {
      var total =
        dt.getValue(row, 1) +
        dt.getValue(row, 2) +
        dt.getValue(row, 3) +
        dt.getValue(row, 4);
        return total === 0 ? '' : total.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    
    },
    type: "string",
    role: "annotation"
  }
]);

  var options = {
      title: 'Dossiers ouverts, 2018-2022', 
      isStacked: true,
      colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      hAxis: {title:'Année', titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#FFF'},
      legend: {
        position: 'right',
        textStyle: {
          fontSize: 10  // Adjust the font size of the legend
        }
      },
      annotations: {
        textStyle: {
          color: '#FFFFFF'  // last bar color
        }
      },
      series: {
        4: {
          annotations: {
            textStyle: {
              color: '#242D38' // Set the desired color for the 4th bar text
            }
          }
        }
      },
      // tooltip: {
      //   isHtml: true,
      //   textStyle: {
      //     color: '#f00',
      //     fontSize: 12
      //   },
      // }
  };  
  //Instantiate and draw the chart.
  var chart = new google.visualization.BarChart(document.getElementById('overall-chart1'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart);



function drawChart2() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
      ['Année', 'LAIPVP', 'LAIMPVP', 'LPRPS', 'LSEJF'],
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
      return dt.getValue(row, 1).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  2, {
    calc: function (dt, row) {
      return dt.getValue(row, 2).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  3, {
    calc: function (dt, row) {
      return dt.getValue(row, 3).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  },
  4, {
    calc: function (dt, row) {
      return dt.getValue(row, 4).toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
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
    calc: function(dt, row) {
      var total =
        dt.getValue(row, 1) +
        dt.getValue(row, 2) +
        dt.getValue(row, 3) +
        dt.getValue(row, 4);
        return total === 0 ? '' : total.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    },
    type: "string",
    role: "annotation"
  }
]);

  var options = {
      title: 'Dossiers fermés, 2018-2022', 
      isStacked: true,
      colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
      hAxis: {title:'Année',titleTextStyle: { color: '#FFFFFF'}, textStyle:{color: '#FFF'},gridlines: { count: 0 },baselineColor:'#FFF'},
      legend: {
        position: 'right',
        textStyle: {
          fontSize: 10  // Adjust the font size of the legend
        }
      },
      annotations: {
        annotationPosition: 'outside', 
        textStyle: {
          fontSize: 10,
          auraColor: 'transparent'
        }
      },
      // chartArea: {
      //   height: '80%'
      // },
      series: {
        3: {
          annotations: {
            textStyle: {
              color: 'transparent'
            }
          }
        },
        4: {
          annotations: {
            textStyle: {
              color: '#242D38'
            },
            stem: {
              length: 5  // Adjust the length of the stems
            }
          }
        }
      },
  };  


  //Instantiate and draw the chart.
  var chart = new google.visualization.ColumnChart(document.getElementById('overall-chart2'));
  chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart2);

function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['PROVINCIAL', 567],
    ['MUNICIPAL', 697],
  ]);

  var formatter = new google.visualization.NumberFormat({
    pattern: '#,##0,0 \'%\'',
  });
  formatter.format(data, 1);

  var options = {
    title: '1 258 Total',
    pieHole: 0.4,
    colors: ['#182853', '#357975'],
    pieSliceText: 'value',
    pieSliceTextStyle: {
      color: 'white', 
    },
  };

  var chart = new google.visualization.PieChart(document.getElementById('overall-chart3'));
  chart.draw(data, options);
}

google.charts.setOnLoadCallback(drawChart3);



function drawChart4() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Règlement anticipé',     227],
        ['Médiation',      794],
        ['Arbitrage',      326],
      ]);

      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '1 347 Total',
        pieHole: 0.4,
        colors: ['#00a49a', '#182853', '#357975', '#cadf81'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        },
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart4'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(drawChart4);


function drawChart5() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["Exceptions", 595, "#182853"],
    ["Caractère raisonnable desrecherches", 145, "#357975"],
    ["Avis réputé donné du refus", 143, "#00a49a"],
    ["Non-application de la loi", 117, "#a2bc5d"],
    ["Appels de tiers", 96, "#727372"],
    ["Autre", 162, "#9899a0"],
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
    title: '1 258 Total',
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
        ['Décision de l’institution confirmée',     170],
        ['Décision de l’institution partiellement confirmée',      52],
        ['Décision de l’institution infirmée',      35],
        ['Rejet après observations',      2],
        ['Pas d’enquête',      1],
        ['Autre',      2],
      ]);

      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '262 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart6'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart6);

function overallChart9() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Exclusion',     92],
        ['Règlement',      179],
        ['Retrait',      13],
        ['Abandon',      6],
        ['Production d’un rapport',      8],
      ]);

      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '298 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],              
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart9'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart9);

function overallChart10() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Règlement',     150],
        ['Exclusion',      1],
        ['Retrait',      1],

      ]);

      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '152 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        }
      };

      var chart = new google.visualization.PieChart(document.getElementById('overall-chart10'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(overallChart10);


function phipaChart1() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["Renseignements personnels mal dirigés ou perdus", 163, "#182853"],
    ["Consultations sans autorisation", 143, "#357975"],
    ["Collectes, utilisations ou divulgations non autorisées", 122, "#00a49a"],
    ["Renseignements personnels volés", 33, "#a2bc5d"],
    ["Cyberattaques*", 29, "#727372"],
    ["Dossiers non sécurisés", 3, "#9899a0"],
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
        ['Atteintes à la vie privée',     492],
        ['Plaintes relatives à l’accès ou à la rectification',  180],
        ['Plaintes relatives à la collecte, à l’utilisation ou à la divulgation',      163],
        ['Dossiers de plainte concernant la collecte, l’utilisation ou la divulgation ouverts par le CIPVP',      29],
        ['Plainte déposée par la commissaire',      1]
      ]);
      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '865 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70', '#727372'],
        legend: {
          position: 'right',
        },     
        sliceVisibilityThreshold: 0,  
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        },
      };

      





      var chart = new google.visualization.PieChart(document.getElementById('phipa-chart2'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(phipaChart2);


function phipaChart3() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Règlement',     745],
        ['Exclusion / Rejet',      75],
        ['Retrait',      67],
        ['Abandon',      58],
        ['Ordonnance/décision rendue',      20],
      ]);
      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);
    
      var options = {
        title: '965 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        },
      };

      var chart = new google.visualization.PieChart(document.getElementById('phipa-chart3'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(phipaChart3);


function cyfsaChart1() {
  // Define the chart data.
  var data = google.visualization.arrayToDataTable([
    ["Année", "FIPPA", { role: "style" } ],
    ["Collectes, utilisations ou divulgations non autorisées", 16, "#182853"],
    ["Renseignements personnels mal dirigés ou perdus", 16, "#357975"],
    ["Consultations sans autorisation", 8, "#00a49a"],
    ["Renseignements personnels volés", 3, "#a2bc5d"],
    ["Cyberattaques", 3, "#727372"],
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
        ['Atteintes à la vie privée',     27],
        ['Plaintes relatives à l’accès ou à la rectification',  17],
        ['Plaintes relatives à la collecte, à l’utilisation ou à la divulgation',      2],
        ['Dossiers de plainte concernant la collecte, l’utilisation ou la divulgation ouverts par le CIPVP',      46],
      ]);

      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);
      
      var options = {
        title: '92 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        },
      };

      var chart = new google.visualization.PieChart(document.getElementById('cyfsa-chart2'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(cyfsaChart2);



function cyfsaChart3() {
  // Define the chart to be drawn.
  var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Règlement',     69],
        ['Exclusion',      12],
        ['Retrait',      5],
        ['Abandon',      5],
        ['Ordonnance/décision rendue',      4],
      ]);
      var formatter = new google.visualization.NumberFormat({
        pattern: '#,##0,0 \'%\'',
      });
      formatter.format(data, 1);

      var options = {
        title: '95 Total',
        pieHole: 0.4,
        colors: ['#182853', '#357975', '#00a49a', '#c3db70'],
        pieSliceText: 'value',
        pieSliceTextStyle: {
          color: 'white', 
        },      
      };

      var chart = new google.visualization.PieChart(document.getElementById('cyfsa-chart3'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(cyfsaChart3);



function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ['Année', 'Access Appeals', 'Privacy Files'],
    [2018,  9.4, 4.3],
    [2019,  9.2, 4.6],
    [2020,  10.9, 7.8],
    [2021,  12.0, 7.3],
    [2022,  12.5, 8.1],
  ]);

  var dataView = new google.visualization.DataView(data);
  dataView.setColumns([
    0,
    1,
    {
      calc: function (dt, row) {
        return dt.getValue(row, 1).toString().replace('.', ',');
      },
      type: "string",
      role: "annotation"
    },
    2,
    {
      calc: function (dt, row) {
        return dt.getValue(row, 2).toString().replace('.', ',');
      },
      type: "string",
      role: "annotation"
    }
  ]);



  var options = {
    type: 'line',
    displayAnnotations: true,
    sliceVisibilityThreshold: 0,
    title: '',
    hAxis: {
      title: 'Année',
      format: '',
      gridlines: { count: 0 },
      baselineColor: '#CCC'
    },
    vAxis: {
      title: 'Months',
      format: '',
      titleTextStyle: { color: '#FFFFFF' },
      textStyle: { color: '#FFF' },
      gridlines: { count: 0 },
      baselineColor: '#000'
    },
    legend: 'bottom',
    pointSize: 0,
    colors: ['#c3db70', '#337975'],

  };

  var chart = new google.visualization.LineChart(document.getElementById('line-chart1'));
  chart.draw(dataView, options);
}

google.charts.setOnLoadCallback(drawChart1);




google.charts.setOnLoadCallback(lineChart2);
function lineChart2() {
var data = google.visualization.arrayToDataTable([
        ['Année', 'Dossiers ouverts', 'Dossiers fermés'],
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
hAxis: {title:'Année',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
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
    ['Année', 'Dossiers ouverts', 'Dossiers fermés'],
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
    hAxis: {title:'Année',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
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
                ['Année', 'Dossiers ouverts', 'Dossiers fermés'],
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
        hAxis: {title:'Année',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
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
                  ['Année', 'Dossiers ouverts', 'Dossiers fermés'],
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
            hAxis: {title:'Année',format: '',gridlines: { count: 0 },baselineColor:'#CCC'},
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
        ['Traitements et salaires',     14900500],
        ['Avantages sociaux',      3980400],
        ['Transport et communications',      122000],
        ['Services',      3492400],
        ['Fournitures et matériel',      137000]
      ]);

      var options = {
        title: '22 632 300 $',
        pieHole: 0.4,
        colors: ['#242D38', '#337975', '#00A19C', '#C3E86C', '#727372'],
      };

      var chart = new google.visualization.PieChart(document.getElementById('financial-2022-chart'));

      chart.draw(data, options);
}
google.charts.setOnLoadCallback(financialchart);