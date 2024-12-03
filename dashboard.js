document.addEventListener("DOMContentLoaded", function () {
    // Toplam akü sayısı, çalışan akü sayısı ve bozuk akü sayısı belirleme
    var batteryCount = 16;
    var operationalBatteryCount = 15;
    var faultyBatteryCount = 1;

    // Akü sayılarını HTML'e ekleme
    document.getElementById("battery-count").textContent = batteryCount;
    document.getElementById("operational-battery-count").textContent = operationalBatteryCount;
    document.getElementById("faulty-battery-count").textContent = faultyBatteryCount;

    // Genel akü sağlığı yüzdesi
    var batteryHealthPercentage = (operationalBatteryCount / batteryCount) * 100;

    var options = {
        chart: {
            type: 'pie'
        },
        series: [batteryHealthPercentage, 100 - batteryHealthPercentage],
        labels: ['Operational', 'Faulty']
    };

    var chart = new ApexCharts(document.querySelector("#battery-health-chart"), options);
    chart.render();

    // Bildirim verilerini güncelleme fonksiyonu
    function updateNotifications() {
        var notificationList = document.getElementById("notification-list");
        notificationList.innerHTML = ''; // Mevcut bildirimleri temizle

        // Simüle edilmiş bildirim verileri
        var notifications = [
            { message: 'Aküler normal', type: 'normal' },
            { message: 'Aküler normal', type: 'normal' },
            { message: 'Aküler normal', type: 'normal' }
        ];

        // Rastgele bir hata simülasyonu
        if (Math.random() < 0.3) { // %30 hata olasılığı
            var faultyIndex = Math.floor(Math.random() * notifications.length);
            var faultyBatteryId = Math.floor(Math.random() * batteryCount) + 1; // 1 ile batteryCount arasında rastgele bir akü seç
            notifications[faultyIndex] = { message: `Sorun: Akü ${faultyBatteryId} voltaj değeri yüksek`, type: 'fault' };
        }

        // Zaman damgası ekleme
        var now = new Date();
        var timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

        // Bildirimleri listeye ekleme
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

    // İlk çalıştırıldığında bildirimleri boş bırak
    document.getElementById("notification-list").innerHTML = '';

    // Her 60 saniyede bir bildirim verilerini güncelle
    setInterval(updateNotifications, 60000);
});
