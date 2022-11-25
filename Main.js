const radar1 = document.getElementById("chart1");
// const radar2 = document.getElementById("chart2");

console.log(radar1);
// console.log(radar2);

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
            backgroundColor: 'rgba(15,76,92,0.1)',
            //boarderColor: '#0f4c5c',
            boarderWidth: 3,
            // Number Values Corresponding to issue (See labels)
            data: [27,17,3,11,13,6,10,7,4,3]
            },
            {
            // Person Type
            label: 'Male',
            // color and width of radar
            backgroundColor: 'rgba(225,0,20,0.1)',
            boarderColor: '#e36414',
            pointStyle: 'cross',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [28,16,4,12,11,4,11,7,4,3]
            },
            {
            // Person Type
            label: 'Female',
            // color and width of radar
            backgroundColor:'rgba(154,3,255,0.1)',
            boarderColor: '#9A031E',
            boarderwidth: 2,
            // Number Values Corresponding to issue (See labels)
            data: [26,18,2,10,14,7,9,7,4,3]
        }]
    }
});