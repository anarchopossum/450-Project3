const radar1 = document.getElementById("sex");
console.log(radar1);

let chart1 = new Chart(radar1, {
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
            pointBackgroundColor: '#8e908c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#8e908c',
            borderWidth: 1,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // Person Type
            label: 'Male',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.2)',
            borderColor: '#718C00',
            pointBackgroundColor: '#718C00',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#718C00',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [28,16,4,12,11,4,11,7,4,3]
            },
            {
            // Person Type
            label: 'Female',
            // color and width of radar
            backgroundColor: 'rgba(137, 89, 168,0.2)',
            borderColor: '#5f0f40',
            pointBackgroundColor: '#5f0f40',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#5f0f40',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [26,18,2,10,14,7,9,7,4,3]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Gender',

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