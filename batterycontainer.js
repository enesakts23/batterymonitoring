document.addEventListener("DOMContentLoaded", function () {
    const batteryContainer = document.getElementById("battery-container");

    const batteryData = [
        { number: 1, temperature: "22°C", voltage: "3.7V" },
        { number: 2, temperature: "23°C", voltage: "3.8V" },
        { number: 3, temperature: "21°C", voltage: "3.6V" },
        { number: 4, temperature: "20°C", voltage: "3.9V" },
        { number: 5, temperature: "24°C", voltage: "3.8V" },
        { number: 6, temperature: "25°C", voltage: "3.7V" },
        { number: 7, temperature: "23°C", voltage: "3.6V" },
        { number: 8, temperature: "22°C", voltage: "3.9V" },
        { number: 9, temperature: "21°C", voltage: "3.8V" },
        { number: 10, temperature: "20°C", voltage: "3.7V" },
        { number: 11, temperature: "24°C", voltage: "4.0V" },
        { number: 12, temperature: "25°C", voltage: "4.1V" },
        { number: 13, temperature: "26°C", voltage: "4.2V" },
        { number: 14, temperature: "27°C", voltage: "4.3V" },
        { number: 15, temperature: "28°C", voltage: "4.4V" },
        { number: 16, temperature: "29°C", voltage: "4.5V" }
    ];

    batteryData.forEach(data => {
        const batteryWrapper = document.createElement("div");
        batteryWrapper.className = "battery-wrapper";

        const batteryNumber = document.createElement("div");
        batteryNumber.className = "battery-number";
        batteryNumber.textContent = data.number;

        const battery = document.createElement("div");
        battery.className = "battery";

        const temperature = document.createElement("p");
        temperature.className = "battery-info";
        temperature.innerHTML = `<i class="fas fa-thermometer-half"></i> T: ${data.temperature}`;

        const voltage = document.createElement("p");
        voltage.className = "battery-info";
        voltage.innerHTML = `<i class="fas fa-bolt"></i> V: ${data.voltage}`;

        battery.appendChild(temperature);
        battery.appendChild(voltage);
        batteryWrapper.appendChild(batteryNumber);
        batteryWrapper.appendChild(battery);
        batteryContainer.appendChild(batteryWrapper);

        battery.addEventListener("click", function () {
            this.classList.toggle("clicked");
            alert(`Battery ${data.number} clicked!\nTemperature: ${data.temperature}\nVoltage: ${data.voltage}`);
        });
    });
});
