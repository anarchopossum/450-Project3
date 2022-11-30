const radar2 = document.getElementById("oldness");
console.log(radar2);

let chart2 = new Chart(radar2, {
    type: 'radar',
    data: { 
        // Issues that are being voted on importance
        labels: ["Economy","Coronavirus","Foreign policy","National security",
                    "Healthcare","Racial / gender equality","Climate Change","Immigration",
                    "Supreme Court","Education"],
        // Where the data actually resides
        datasets: [
            {
            // Person Type
            label: 'Total',
            // color and width of radar
            backgroundColor: 'rgba(142,144,140,0.2)',
            borderColor: '#8e908c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#8e908c',
            borderWidth: 1,
            // Number Values Corresponding to issue (See labels)
            data: [20,17,3,11,13,6,10,7,4,3]
            },
            {
            // Person Type
            label: '18-29',
            // color and width of radar
            backgroundColor:'rgba(154, 3, 30,0.2)',
            borderColor: '#9A031E',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#9A031E',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [20,23,4,8,12,11,11,11,5,1,5]
            },
            {
            // Person Type
            label: '30-44',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.2)',
            borderColor: '#e36414',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#e36414',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [29,19,3,6,17,5,8,6,3,4]
        },
        {
            // Person Type
            label: '45-60',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.2)',
            borderColor: '#718C00',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#718C00',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [33,15,4,13,10,4,8,7,4,2]
        },
        {
            // Person Type
            label: '60+',
            // color and width of radar
            backgroundColor:'rgba(15, 76, 92,0.2)',
            borderColor: '#0f4c5c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#0f4c5c',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [23,13,2,17,13,3,13,9,7,0]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Age',

            },
            tooltip: {
                callbacks: {
                    label: (item) =>
                        `${item.dataset.label}: ${item.formattedValue} %`,
                },
            }
        }
        
    }
});