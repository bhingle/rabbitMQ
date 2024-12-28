const amqp = require('amqplib');

const msg = { number: process.argv[2] };

connect();

async function connect() {
    try {
        // Connect to RabbitMQ server
        const connection = await amqp.connect("amqp://localhost:5672");
        const channel = await connection.createChannel();

        // Create or ensure the queue exists
        const result = await channel.assertQueue("jobs");

        // Send message to the queue
        channel.sendToQueue("jobs", Buffer.from(JSON.stringify(msg)));
        console.log(`Job sent successfully: ${msg.number}`);

        // Close the connection after a short delay to allow the message to be sent
        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (ex) {
        console.error("Error:", ex);
    }
}
