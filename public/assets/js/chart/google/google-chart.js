google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.load('current', {'packages':['line']});
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawBasic);
function drawBasic() {
  if ($("#column-chart1").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["سال", "فروش", "مخارج", "سود"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "عملکرد شرکت",
          subtitle: "فروش، هزینه ها و سود: 2014-2017"
        },
        bars: "vertical",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
          colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636"]


      },
    c = new google.charts.Bar(document.getElementById("column-chart1"));
    c.draw(a, google.charts.Bar.convertOptions(b))
  }
  if ($("#column-chart2").length > 0) {
      var a = google.visualization.arrayToDataTable([
        ["سال", "فروش", "مخارج", "سود"],
        ["2014", 1e3, 400, 250],
        ["2015", 1170, 460, 300],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 450]
      ]),
      b = {
        chart: {
          title: "عملکرد شرکت",
          subtitle: "فروش، هزینه ها و سود: 2014-2017"
        },
        bars: "horizontal",
        vAxis: {
          format: "decimal"
        },
        height: 400,
        width:'100%',
        colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636"]
      },
      c = new google.charts.Bar(document.getElementById("column-chart2"));
      c.draw(a, google.charts.Bar.convertOptions(b))
  }
  if ($("#pie-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['وظیفه', 'ساعت در روز'],
        ['کار',     5],
        ['غذا',      10],
        ['گردش',  15],
        ['تلویزیون', 20],
        ['خواب',    25]
      ]);
      var options = {
        title: 'فعالیت های روزانه من',
        width:'100%',
        height: 300,
       colors: [vihoAdminConfig.primary, vihoAdminConfig.primary, "#e2c636", "#222222", "#717171"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart1'));
      chart.draw(data, options);
  }
  if ($("#pie-chart2").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['وظیفه', 'ساعت در روز'],
        ['کار', 5],
        ['غذا',  10],
        ['گردش',  15],
        ['تلویزیون', 20],
        ['خواب',    25]
      ]);
      var options = {
        title: 'فعالیت های روزانه من',
        is3D: true,
        width:'100%',
        height: 300,
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#e2c636", "#222222", "#717171"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart2'));
      chart.draw(data, options);
  }
  if ($("#pie-chart3").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['وظیفه', 'ساعت در روز'],
        ['کار',     2],
        ['غذا',      2],
        ['گردش',  11],
        ['تلویزیون', 2],
        ['خواب',    7]
      ]);
      var options = {
        title: 'فعالیت های روزانه من',
        pieHole: 0.4,
        width:'100%',
        height: 300,
        colors: [vihoAdminConfig.secondary, vihoAdminConfig.primary, "#222222", "#717171", "#e2c636"]
      };
      var chart = new google.visualization.PieChart(document.getElementById('pie-chart3'));
      chart.draw(data, options);
  }
  if ($("#pie-chart4").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Language', 'Speakers (in millions)'],
        ['آسامی', 13],
        ['بنگالی', 83],
        ['بودو', 1.4],
        ['دوگری', 2.3],
        ['گجراتی', 46],
        ['هندی', 300],
        ['کانادا', 38],
        ['کشمیری', 5.5],
        ['کنکانی', 5],
        ['مایتیلی', 20],
        ['مالایایی', 33],
        ['مانیپوری', 1.5],
        ['مراتی', 72],
        ['نپالی', 2.9],
        ['اوریا', 33],
        ['پنجابی', 29],
        ['سانسکریت', 0.01],
        ['سانتالی', 6.5],
        ['سندی', 2.5],
        ['تامیل', 61],
        ['تلوگو', 74],
        ['اردو', 52]
      ]);
      var options = {
        title: 'انتخاب زبان هندی',
        legend: 'none',
        width:'100%',
        height: 400,
        pieSliceText: 'label',
        slices: {  4: {offset: 0.2},
          12: {offset: 0.3},
          14: {offset: 0.4},
          15: {offset: 0.5},
        },
          // colors: ["#ab8ce4", "#26c6da"]
          colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636", "#d22d3d","#e6edef", vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636","#d22d3d", vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171", "#e2c636", "#d22d3d", vihoAdminConfig.primary,vihoAdminConfig.secondary, "#222222"]
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie-chart4'));
        chart.draw(data, options);
  }
  if ($("#line-chart").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'ماه');
      data.addColumn('number', 'نگهبانان کهکشان');
      data.addColumn('number', 'انتقام جویان');
      data.addColumn('number', 'ترانسفورماتورها: عصر انقراض');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
      ]);
      var options = {
        chart: {
          title: 'درآمد باکس آفیس در دو هفته اول افتتاحیه',
          subtitle: 'به میلیون دلار (USD)'
        },
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222"],
        height: 500,
        width:'100%',
      };
      var chart = new google.charts.Line(document.getElementById('line-chart'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
  if ($("#combo-chart").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['Month', 'بولیوی', 'اکوادور', 'ماداگاسکار', 'پاپوآ', 'رواندا', 'میانگین'],
        ['2004/05',  165,      938,         522,             998,           450,      614.6],
        ['2005/06',  135,      1120,        599,             1268,          288,      682],
        ['2006/07',  157,      1167,        587,             807,           397,      623],
        ['2007/08',  139,      1110,        615,             968,           215,      609.4],
        ['2008/09',  136,      691,         629,             1026,          366,      569.6]
      ]);
      var options = {
        title : 'تولید ماهانه قهوه به تفکیک کشور',
        vAxis: {title: 'فنجان ها'},
        hAxis: {title: 'ماه'},
        seriesType: 'bars',
        series: {5: {type: 'line'}},
        height: 500,
        width:'100%',
        colors: [vihoAdminConfig.secondary, vihoAdminConfig.primary, "#222222", "#717171", "#e2c636"]
    };
    var chart = new google.visualization.ComboChart(document.getElementById('combo-chart'));
    chart.draw(data, options);
  }
  if ($("#area-chart1").length > 0) {
      var data = google.visualization.arrayToDataTable([
        ['سال', 'فروش', 'مخارج'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ]);
      var options = {
        title: 'عملکرد شرکت',
        hAxis: {title: 'سال',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        width:'100%',
        height: 400,
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary]
      };
      var chart = new google.visualization.AreaChart(document.getElementById('area-chart1'));
      chart.draw(data, options);
  }
  if ($("#area-chart2").length > 0) {
    var data = google.visualization.arrayToDataTable([
      ['سال', 'Cars', 'Trucks' , 'Drones' , 'Segways'],
      ['2013',  100, 400, 2000, 400],
      ['2014',  500, 700, 530, 800],
      ['2015',  2000, 1000, 620, 120],
      ['2016',  120, 201, 2501, 540]
    ]);
    var options = {
      title: 'عملکرد شرکت',
      hAxis: {title: 'سال',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0},
      width:'100%',
      height: 400,
      colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary, "#222222", "#717171"]
    };
    var chart = new google.visualization.AreaChart(document.getElementById('area-chart2'));
    chart.draw(data, options);
  }
  if ($("#area-chart-dashboard-default").length > 0) {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Day');
      data.addColumn('number', 'Guardians of the Galaxy');
      data.addColumn('number', 'The Avengers');
      data.addColumn('number', 'Transformers: Extinction');
      data.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 10.5, 32.4],
        [3,  40.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  20, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  7.9,  4.7],
        [12,  6.6,  8.4,  5.2],
        [13,  4.8,  6.3,  3.6],
        [14,  4.2,  6.2,  3.4]
      ]);
      var options = {
        chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },
        colors: [vihoAdminConfig.primary, vihoAdminConfig.secondary , "#222222"],
        width:'100%',
        legend: {position: 'top'},
      };
      var chart = new google.charts.Line(document.getElementById('area-chart-dashboard-default'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }
    if ($("#bar-chart2").length > 0) {
        var a = google.visualization.arrayToDataTable([
                ["عنصر", "تراکم", {
                    role: "style"
                }],
                ["مس", 10, vihoAdminConfig.primary],
                ["نقره", 12, vihoAdminConfig.secondary],
                ["طلا", 14, "#222222"],
                ["پلاتین", 16, "color: #717171"]
            ]),
            d = new google.visualization.DataView(a);
        d.setColumns([0, 1, {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        }, 2]);
        var b = {
                title: "چگالی فلزات گرانبها، بر حسب گرم بر سانتی متر^3",
                width:'100%',
                height: 400,
                bar: {
                    groupWidth: "95%"
                },
                legend: {
                    position: "none"
                }
            },
            c = new google.visualization.BarChart(document.getElementById("bar-chart2"));
        c.draw(d, b)
    }
}
// Gantt chart
google.charts.load('current', {'packages':['gantt']});
google.charts.setOnLoadCallback(drawChart);

function daysToMilliseconds(days) {
    return days * 24 * 60 * 60 * 1000;
}

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['Research', 'جستجوی منبع', null,
            new Date(2015, 0, 1), new Date(2015, 0, 5), null,  100,  null],
        ['Write', 'کاغذ بنویس', 'write',
            null, new Date(2015, 0, 9), daysToMilliseconds(3), 25, 'Research,Outline'],
        ['Cite', 'ایجاد کتابشناسی', 'write',
            null, new Date(2015, 0, 7), daysToMilliseconds(1), 20, 'Research'],
        ['Complete', 'دست در کاغذ', 'complete',
            null, new Date(2015, 0, 10), daysToMilliseconds(1), 0, 'Cite,Write'],
        ['Outline', 'بیرون کاغذ', 'write',
            null, new Date(2015, 0, 6), daysToMilliseconds(1), 100, 'Research']
    ]);

    var options = {
        height: 275,
        gantt: {
            criticalPathEnabled: false, // Critical path arrows will be the same as other arrows.
            arrow: {
                angle: 100,
                width: 5,
                color: vihoAdminConfig.secondary,
                radius: 0
            },

                palette: [
                    {
                        "color": vihoAdminConfig.primary,
                        "dark": vihoAdminConfig.primary,
                        "light": "#222222"
                    }
                ]

        }
    };
    var chart = new google.visualization.Gantt(document.getElementById('gantt_chart'));

    chart.draw(data, options);
}
// word tree
google.charts.load('current1', {packages:['wordtree']});
google.charts.setOnLoadCallback(drawChart1);

function drawChart1() {
    var data = google.visualization.arrayToDataTable(
        [ ['Phrases'],
            ['گربه ها بهتر از سگ ها هستند'],
            ['گربه ها کیبل می خورند'],
            ['گربه ها بهتر از همسترها هستند'],
            ['گربه ها عالی هستند'],
            ['گربه ها هم مردم هستند'],
            ['گربه ها موش می خورند'],
            ['میو گربه ها'],
            ['گربه ها در گهواره'],
            ['گربه ها موش می خورند'],
            ['متن آهنگ گربه ها در گهواره'],
            ['گربه ها کیبل می خورند'],
            ['گربه برای فرزندخواندگی'],
            ['گربه ها خانواده هستند'],
            ['گربه ها موش می خورند'],
            ['گربه ها بهتر از بچه گربه ها هستند'],
            ['گربه ها شیطان هستند'],
            ['گربه ها عجیب هستند'],
            ['گربه ها موش می خورند']
        ]
    );

    var options = {
        wordtree: {
            format: 'implicit',
            word: 'گربه'
        }

    };
    var chart = new google.visualization.WordTree(document.getElementById('wordtree_basic'));
    chart.draw(data, options);
}

