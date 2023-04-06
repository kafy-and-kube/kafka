docker run --name zookeeper -p 2181:2181 zookeeper


docker run -p 9092:9092 --name kafka  -e KAFKA_ZOOKEEPER_CONNECT=husseinmac:2181 -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://husseinmac:9092 -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 -d confluentinc/cp-kafka 