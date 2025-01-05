# RabbitMQ Documentation

## Overview

**RabbitMQ** is a widely-used, open-source message broker that facilitates communication between applications by sending and receiving messages. It supports multiple messaging protocols, has a lightweight design, and provides features for reliability, scalability, and high availability.
---

## Features

- **Flexible Messaging:** Supports multiple messaging protocols, including AMQP.
- **High Availability:** Clustering and mirroring for fault tolerance.
- **Plugins:** Extend functionality with plugins like monitoring, authentication, and protocol support.
- **Management Interface:** Web-based UI for monitoring and managing queues.
- **Client Libraries:** Supports multiple programming languages.

---
## Common Commands

| Command                                | Description                          |
|----------------------------------------|--------------------------------------|
| `rabbitmqctl status`                   | Check the status of RabbitMQ         |
| `rabbitmqctl list_queues`              | List all queues                      |
| `rabbitmqctl add_user username pass`   | Add a new user                       |
| `rabbitmqctl set_user_tags user admin` | Assign admin role to a user          |
| `rabbitmqctl stop`                     | Stop the RabbitMQ server             |
