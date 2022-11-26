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
            // Person Type
            label: 'Total',
            // color and width of radar
            backgroundColor: 'rgba(142,144,140,0.1)',
            //boarderColor: '#8e908c',
            boarderWidth: 3,
            // Number Values Corresponding to issue (See labels)
            data: []
            },
            {
            // Person Type
            label: 'b',
            // color and width of radar
            backgroundColor:'rgba(154, 3, 30,0.1)',
            boarderColor: '#9A031E',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: []
        },
        {
            // Person Type
            label: 'c',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.1)',
            boarderColor: '#e36414',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: []
        },
        {
            // Person Type
            label: 'd',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.1)',
            boarderColor: '#718C00',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: []
        },{
            // Person Type
            label: 'e',
            // color and width of radar
            backgroundColor:'rgba(15, 76, 92,0.1)',
            boarderColor: '#0f4c5c',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: []
        },{
            // Person Type
            label: 'a',
            // color and width of radar
            backgroundColor: 'rgba(137, 89, 168,0.1)',
            boarderColor: '#5f0f40',
            pointStyle: 'cross',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: []
        }]
    }
});