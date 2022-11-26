const radar5 = document.getElementById("politics");
console.log(radar5);

let chart5 = new Chart(radar5, {
    type: 'radar',
    data: { 
        // Issues that are being voted on importance
        labels: ["Economy","Coronavirus","Foreign policy","National security",
                    "Healthcare","Racial / gender equality","Climate Change","Immigration",
                    "Supreme Court","Education"],
        // Where the data actually resides
        datasets: [
            {
            // Total Party Type
            label: 'Total',
            // color and width of radar
            backgroundColor: 'rgba(142,144,140,0.1)',
            //boarderColor: '#8e908c',
            boarderWidth: 3,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // First Party Type
            label: 'Repulican',
            // color and width of radar
            backgroundColor:'rgba(154, 3, 30,0.1)',
            boarderColor: '#9A031E',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [37,9,5,25,6,1,2,12,2,2]
        },
        {
            // Secomd Party Type
            label: 'Democrat',
            // color and width of radar
            backgroundColor:'rgba(251, 139, 36,0.1)',
            boarderColor: '#e36414',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [20,22,2,4,18,8,15,3,5,2]
        },
        {
            // Last Party Type(s)
            label: 'Independent/Other',
            // color and width of radar
            backgroundColor:'rgba(113, 140, 0,0.1)',
            boarderColor: '#718C00',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Party Identification'
            }
        }
    }
});
