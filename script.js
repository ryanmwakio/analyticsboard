// var data = [22006299, 15834918, 14919501, 14797756, 14433147, 13524139, 11877109, 11862073, 11779606, 10452000]; // Add data values to array
// var labels = ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo", "New York", "Karachi","Buenos Aires", "Delhi","Moscow"];

// let myChart1=document.getElementById('myChart').getContext('2d')

// var chart = new Chart(myChart1, {
//      type: 'bar', 
//      data: { 
//          labels: labels,
//           datasets: [{
//                label: 'Population',
//                data: data,
//                backgroundColor: [  
//                             'rgba(255, 99, 132, 0.2)',
//                             'rgba(54, 162, 235, 0.2)',
//                             'rgba(255, 206, 86, 0.2)',
//                             'rgba(75, 192, 192, 0.2)', 
//                             'rgba(153, 102, 255, 0.2)',
//                             'rgba(255, 159, 64, 0.2)'
//                         ], 
//                 borderColor: [ 
//                             'rgba(255,99,132,1)',
//                             'rgba(54, 162, 235, 1)', 
//                             'rgba(255, 206, 86, 1)',
//                             'rgba(75, 192, 192, 1)', 
//                             'rgba(153, 102, 255, 1)',
//                             'rgba(255, 159, 64, 1)'
//                    ],
//                 borderWidth: 1 
//          }] 
//         }, 
//      options: { 
//          display:true,
//          responsive: true,  
//          maintainAspectRatio: false, 
// } });



//Line Chart
let myLineChart=document.getElementById('lineChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=16;
Chart.defaults.global.defaultFontColor='#777';

let lineChart=new Chart(myLineChart,{
    type: 'line' ,//bar, horizontalBar, pie, line, doughnut, polarArea, radar
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Revenue',
            data: [3000000, 2000000, 2000000, 3500000, 3000000, 5000000],
            // backgroundColor: 'green',
            backgroundColor: [
                                'rgba(255,99,132,0.7)',
                                'rgba(54, 162, 235, 0.7)', 
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)', 
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Revenue Analytics',
            fontSize: 25,
        },
        legend: {
            // display: false,
            position: 'top',
            labels: {
                fontColor: '#fff',
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 30,
                top: 10,
                bottom: 10,
            }
        },
        tooltips: {
            //enabled: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 1000000,
                    max: 6000000,
                },
                // gridLines: {
                //     color: '#fff'
                // }
            }],
        }

    },

});




//Radar Chart
let myRadarChart=document.getElementById('radarChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=16;
Chart.defaults.global.defaultFontColor='#777';

let radarChart=new Chart(myRadarChart,{
    type: 'radar' ,//bar, horizontalBar, pie, line, doughnut, polarArea, radar
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Revenue',
            data: [3000000, 2000000, 2000000, 3500000, 3000000, 5000000],
            // backgroundColor: 'green',
            backgroundColor: [
                                'rgba(255,99,132,0.7)',
                                'rgba(54, 162, 235, 0.7)', 
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)', 
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 1,
            hoverBorderColor: '#777',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Revenue Analytics',
            fontSize: 25,
        },
        legend: {
            // display: false,
            position: 'right',
            labels: {
                fontColor: '#fff',
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 30,
                top: 10,
                bottom: 10,
            }
        },
        tooltips: {
            //enabled: false,
        }
    },

});




//Doughnut Chart
let myDoughnutChart=document.getElementById('doughnutChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=16;
Chart.defaults.global.defaultFontColor='#777';

let doughnutChart=new Chart(myDoughnutChart,{
    type: 'doughnut' ,//bar, horizontalBar, pie, line, doughnut, polarArea, radar
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Revenue',
            data: [3000000, 2000000, 2000000, 3500000, 3000000, 5000000],
            // backgroundColor: 'green',
            backgroundColor: [
                                'rgba(255,99,132,0.7)',
                                'rgba(54, 162, 235, 0.7)', 
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)', 
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Revenue Analytics',
            fontSize: 25,
        },
        legend: {
            // display: false,
            position: 'right',
            labels: {
                fontColor: '#fff',
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 30,
                top: 10,
                bottom: 10,
            }
        },
        tooltips: {
            //enabled: false,
        }
    },

});



//Polar Chart
let myPolarChart=document.getElementById('polarChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=16;
Chart.defaults.global.defaultFontColor='#777';

let polarChart=new Chart(myPolarChart,{
    type: 'polarArea' ,//bar, horizontalBar, pie, line, doughnut, polarArea, radar
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Revenue',
            data: [3000000, 2000000, 2000000, 3500000, 3000000, 5000000],
            // backgroundColor: 'green',
            backgroundColor: [
                                'rgba(255,99,132,0.7)',
                                'rgba(54, 162, 235, 0.7)', 
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)', 
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Revenue Analytics',
            fontSize: 25,
        },
        legend: {
            // display: false,
            position: 'right',
            labels: {
                fontColor: '#fff',
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 30,
                top: 10,
                bottom: 10,
            }
        },
        tooltips: {
            //enabled: false,
        }
    },

});

//Bar Chart
let myBarChart=document.getElementById('barChart').getContext('2d');

//Global options
Chart.defaults.global.defaultFontFamily='Lato';
Chart.defaults.global.defaultFontSize=16;
Chart.defaults.global.defaultFontColor='#777';

let barChart=new Chart(myBarChart,{
    type: 'bar' ,//bar, horizontalBar, pie, line, doughnut, polarArea, radar
    data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Revenue',
            data: [3000000, 2000000, 2000000, 3500000, 3000000, 5000000],
            // backgroundColor: 'green',
            backgroundColor: [
                                'rgba(255,99,132,0.7)',
                                'rgba(54, 162, 235, 0.7)', 
                                'rgba(255, 206, 86, 0.7)',
                                'rgba(75, 192, 192, 0.7)', 
                                'rgba(153, 102, 255, 0.7)',
                                'rgba(255, 159, 64, 0.7)'
                            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 2,
            hoverBorderColor: '#000',
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Revenue Analytics',
            fontSize: 25,
        },
        legend: {
            // display: false,
            position: 'right',
            labels: {
                fontColor: '#fff',
            }
        },
        layout: {
            padding: {
                left: 50,
                right: 30,
                top: 10,
                bottom: 10,
            }
        },
        tooltips: {
            //enabled: false,
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 1000000,
                    max: 6000000,
                },
                // gridLines: {
                //     color: '#fff'
                // }
            }],
        }
    },

});