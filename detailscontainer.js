document.addEventListener("DOMContentLoaded", function () {
    var batteryName = "Battery Name:";
    document.getElementById("battery-name").textContent = batteryName;

    var temperatureOptions = {
        chart: {
            type: 'area',
            height: 200
        },
        series: [{
            name: 'Sıcaklık Ortalaması',
            data: [23, 25, 20, 22, 24, 26, 28] // Günlük sıcaklık verileri
        }],
        xaxis: {
            categories: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
        },
        colors: ['#007bff'] // Mavi renk
    };

    var temperatureChart = new ApexCharts(document.querySelector("#temperature-chart"), temperatureOptions);
    temperatureChart.render();

    var voltageOptions = {
        chart: {
            type: 'area',
            height: 200
        },
        series: [{
            name: 'Günlük Voltaj',
            data: [12, 14, 13, 15, 14, 16, 17] // Günlük voltaj verileri
        }],
        xaxis: {
            categories: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
        },
        colors: ['#28a745'] // Yeşil renk
    };

    var voltageChart = new ApexCharts(document.querySelector("#voltage-chart"), voltageOptions);
    voltageChart.render();
});

function closeContainer() {
    document.querySelector('.details').style.display = 'none';
}
