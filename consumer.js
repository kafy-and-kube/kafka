const { Kafka } = require('kafkajs');

// const msg = process.argv[2];

run();
async function run() {
  try {
    const kafka = new Kafka({
      clientId: 'myapp',
      brokers: ['MATT-XPS:9092', 'MATT-XPS:9093', 'MATT-XPS:9094'],
    });

    const consumer = kafka.consumer({ groupId: 'group3' });
    await consumer.connect();
    console.log('connected');
    consumer.subscribe({
      topic: 'test-topic4',
      fromBeginning: true,
    });
    console.log('this is kafka', await kafka);

    await consumer.run({
      eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log(
          `message timestamp: ${message.timestamp}`,
          `message: ${JSON.stringify(message, null, 2)}`,
          `Recieved Msg ${message.value} on partition ${partition}`,
          `topic: ${topic}`
        );
        await heartbeat();
      },
    });
  } catch (err) {
    console.log('error', err);
  } finally {
    // process.exit(0);
  }
}
