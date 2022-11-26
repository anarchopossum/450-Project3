const radar2 = document.getElementById("age");
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
            backgroundColor: 'rgba(142,144,140,0.1)',
            //boarderColor: '#8e908c',
            boarderWidth: 3,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // Person Type
            label: '18-29',
            // color and width of radar
            backgroundColor: 'rgba(154, 3, 30,0.1)',
            boarderColor: '#9A031E',
            pointStyle: 'cross',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [8,5,5,4,23,20,12,11,11,1]
            },
            {
            // Person Type
            label: '30-44',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.1)',
            boarderColor: '#e36414',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [6,6,4,3,19,29,17,5,8,3]
        },
        {
            // Person Type
            label: '30-44',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.1)',
            boarderColor: '#718C00',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [13,7,2,4,15,33,10,4,8,4]
        },
        {
            // Person Type
            label: '45-60',
            // color and width of radar
            backgroundColor:'rgba(15, 76, 92,0.1)',
            boarderColor: '#0f4c5c',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [13,7,2,4,15,33,10,4,8,4]
        },{
            // Person Type
            label: '60+',
            // color and width of radar
            backgroundColor:'rgba(137, 89, 168,0.1)',
            boarderColor: '#5f0f40',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [17,9,0,2,13,23,13,3,13,7]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Age'
            }
        }
    }
});