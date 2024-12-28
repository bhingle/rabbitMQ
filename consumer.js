const amqp = require('amqplib');
const msg = { number: 19 };

connect();

async function connect() {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();

        // Create or ensure the queue exists
        const result = await channel.assertQueue("jobs");

        channel.consume("jobs",message => {
            const input = JSON.parse(message.content.toString());
            console.log(message.content.toString());
            if(input.number == 8){
                channel.ack(message);
            }
        })
        console.log("waiting for messages")
    } catch (ex) {
        console.error("Error:", ex);
    }
}
