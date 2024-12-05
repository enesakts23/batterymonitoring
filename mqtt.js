const BROKER = "81.214.12.250";
const PORT = 9001;
const TOPIC = "gas";

const client = mqtt.connect(`ws://${BROKER}:${PORT}`);

client.on("connect", () => {
    console.log("MQTT'ye bağlandı!");
    client.subscribe(TOPIC, (err) => {
        if (!err) {
            console.log(`"${TOPIC}" konusuna abone olundu.`);
        } else {
            console.error("Abone olunurken bir hata oluştu:", err);
        }
    });
});

client.on("message", (topic, message) => {
    const rawMessage = message.toString(); 

    try {
        const parsedMessage = convertToJSON(rawMessage);

        console.log("Gelen JSON Mesaj:", parsedMessage);
    } catch (error) {
        console.warn("Bozuk veri tespit edildi, atlanıyor:", rawMessage);
    }
});

function convertToJSON(data) {
    const pairs = data.split(","); 
    const jsonObject = {};

    pairs.forEach((pair) => {
        const [key, value] = pair.split(":"); 
        if (key && value) {
            jsonObject[key.trim()] = isNaN(value) ? value.trim() : parseFloat(value.trim());
        } else {
            throw new Error("Bozuk veri formatı"); 
        }
    });

    return jsonObject;
}

client.on("error", (error) => {
    console.error("Bağlantı hatası:", error);
});

client.on("close", () => {
    console.log("MQTT bağlantısı kesildi.");
});
