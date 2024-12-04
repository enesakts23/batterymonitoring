document.addEventListener("DOMContentLoaded", function () {
    var batteryCount = 16;
    var operationalBatteryCount = 15;
    var faultyBatteryCount = 1;

    document.getElementById("battery-count").textContent = batteryCount;
    document.getElementById("operational-battery-count").textContent = operationalBatteryCount;
    document.getElementById("faulty-battery-count").textContent = faultyBatteryCount;

    var batteryHealthPercentage = (operationalBatteryCount / batteryCount) * 100;

    var options = {
        chart: {
            type: 'pie'
        },
        series: [batteryHealthPercentage, 100 - batteryHealthPercentage],
        labels: ['Operational', 'Faulty'],
        colors: ['#00E396', '#FF4560'] // Operational (green) and Faulty (red)
    };

    var chart = new ApexCharts(document.querySelector("#battery-health-chart"), options);
    chart.render();

    function updateNotifications() {
        var notificationList = document.getElementById("notification-list");
        notificationList.innerHTML = '';

        var notifications = [
            { message: 'Aküler normal', type: 'normal' },
            { message: 'Aküler normal', type: 'normal' },
            { message: 'Aküler normal', type: 'normal' }
        ];

        if (Math.random() < 0.3) {
            var faultyIndex = Math.floor(Math.random() * notifications.length);
            var faultyBatteryId = Math.floor(Math.random() * batteryCount) + 1;
            notifications[faultyIndex] = { message: `Sorun: Akü ${faultyBatteryId} voltaj değeri yüksek`, type: 'fault' };
        }

        var now = new Date();
        var timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

        notifications.forEach(function (notification) {
            var li = document.createElement("li");
            li.className = notification.type === 'fault' ? 'fault' : 'normal';

            var messageSpan = document.createElement("span");
            messageSpan.textContent = notification.message;

            var timestampSpan = document.createElement("span");
            timestampSpan.className = 'timestamp';
            timestampSpan.textContent = timestamp;

            li.appendChild(messageSpan);
            li.appendChild(timestampSpan);

            notificationList.appendChild(li);
        });
    }

    updateNotifications();

    document.getElementById("notification-list").innerHTML = '';

    setInterval(updateNotifications, 60000);
});
