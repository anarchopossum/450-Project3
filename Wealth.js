const radar3 = document.getElementById("wealth");
console.log(radar3);

let chart3 = new Chart(radar3, {
    type: 'radar',
    data: { 
        // Issues that are being voted on importance
        labels: ["Economy","Coronavirus","Foreign policy","National security",
                    "Healthcare","Racial / gender equality","Climate Change","Immigration",
                    "Supreme Court","Education"],
        // Where the data actually resides
        datasets: [
            {
            label: 'Total',
            // color and width of radar
            backgroundColor: 'rgba(142,144,140,0.2)',
            borderColor: '#8e908c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#8e908c',
            borderWidth: 1,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // wealth Type
            label: '$0-$49,9999',
            // color and width of radar
            backgroundColor:'rgba(154, 3, 30,0.2)',
            borderColor: '#9A031E',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#9A031E',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [25,19,2,11,15,6,10,7,3,2]
        },
        {
            // wealth Type
            label: '$50,000-$99,999',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.2)',
            borderColor: '#e36414',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#e36414',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [30,14,4,11,13,5,8,8,4,3]
        },
        {
            // wealth Type
            label: '$100,000-$149,999',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.2)',
            borderColor: '#718C00',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#718C00',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [30,17,4,11,11,5,11,5,5,3]
        },{
            // wealth Type
            label: '$150,000-$199,999',
            // color and width of radar
            backgroundColor:'rgba(15, 76, 92,0.2)',
            borderColor: '#0f4c5c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#0f4c5c',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [27,24,2,7,8,2,10,14,3,3]
        },{
            // wealth Type
            label: '$200,000+',
            // color and width of radar
            backgroundColor: 'rgba(137, 89, 168,0.2)',
            borderColor: '#5f0f40',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#5f0f40',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [18,12,2,18,12,8,15,6,6,3]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Household Income',

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