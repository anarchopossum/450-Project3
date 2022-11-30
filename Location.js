const radar4 = document.getElementById("location");
console.log(radar4);

let chart4 = new Chart(radar4, {
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
            borderWidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // location Type
            label: 'Northeast',
            // color and width of radar
            backgroundColor:'rgba(154, 3, 30,0.2)',
            borderColor: '#9A031E',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#9A031E',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [28,18,2,11,12,5,11,8,3,3]
        },
        {
            // location Type
            label: 'Midwest',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.2)',
            borderColor: '#e36414',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#e36414',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [29,14,3,11,15,6,10,7,3,3]
        },
        {
            // location Type
            label: 'South',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.2)',
            borderColor: '#718C00',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#718C00',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [28,16,4,13,11,6,9,7,4,2]
        },{
            // location Type
            label: 'Mountain',
            // color and width of radar
            backgroundColor:'rgba(15, 76, 92,0.2)',
            borderColor: '#0f4c5c',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#0f4c5c',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [26,8,5,14,11,4,10,8,8,5]
        },{
            // location Type
            label: 'Pacific',
            // color and width of radar
            backgroundColor: 'rgba(137, 89, 168,0.2)',
            borderColor: '#5f0f40',
            pointHoverBackgroundColor: '#fff',
            pointBorderColor: '#fff',
            pointHoverBorderColor: '#5f0f40',
            borderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [22,27,2,7,14,6,11,6,3,2]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Location',

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