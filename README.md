# <p><b>Question:</b> Data Compression and Decompression<a href="Full-Stack-Case.pdf" target="_blank">(Open Case)</a></p>

# Project Overview

This project involves handling data sets within a case, restricting the front end to work with strings and only accept files in CSV format (more formats can be added and optimized in the future).

In the backend, there are two operational layers: one for string-based operations and the other for file-based operations.

## Tools and Technologies Used:

### Front End (TypeScript):
- **Vue 3:** A progressive JavaScript framework for building user interfaces. 
- **lz4:** A fast compression algorithm used for data compression and decompression.
- **Vuetify:** A Material Design component framework for Vue.js that enhances the visual experience.

### Back End (TypeScript):
- **NestJS:** A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **lz4:** The lz4 compression algorithm, utilized for efficient compression and decompression operations.

## Project Structure

In this setup, the front end is built using Vue 3, providing a user-friendly interface. The application restricts input to CSV-formatted files, but additional formats can be easily integrated and optimized for future use.

The backend is powered by NestJS, leveraging the lz4 compression algorithm for efficient data processing. Two distinct layers handle data operations: one focusing on string-based tasks and the other facilitating file-based operations.

Feel free to explore the codebase to understand how these technologies are implemented and integrated to create a seamless data handling experience within the defined constraints.


## Usage Requirements:

- **npm (version 8.8.0 or higher)**
- **Node.js (version 20.8.0 or higher)**
- *Nest CLI (optional, depending on your usage)*

## Installation:

### Front End:
To install the front end, use the following command:
```bash
npm install
```

### Back End:
To install the back end, use the following command:
```bash
npm install
```

## Running the Application(Development Mode):

### Front End:
To run the front end, use the following command:
```bash
npm dev
```

### Back End:
To run the back end, use the following command:
```bash
npm start:dev
```

## Running Tests:
To run end-to-end tests, use the following command:
```bash
npm run test:e2e
```

## Additional Notes:

### LZ4 Installation Issues:
If you encounter problems while installing LZ4, please ensure that you have **node-gyp** and **POSIX** installed in your environment.

### Adjusting Parser Limit:
The default parser limit is set to 50MB in NestJS. If you need to change this limit, you can modify it in the `main.ts` file.

If you have any questions or encounter issues during the installation or testing process, please feel free to reach out for assistance.

<br>
<br>
<br>

# Wire-Speed Compression: Why LZ4 Is Your Best Choice

## 1. Always Prefer LZ4 Compression Algorithm

LZ4 and Snappy are algorithms designed for high-speed data compression and decompression, typically used before writing data to disk or sending it over a network.

### Advantages of LZ4:
- **Speed and Power:** LZ4 is slightly faster and more powerful than Snappy, especially in decompression speed.
- **Tunable Compression:** LZ4 allows fine-tuning of compression levels from 1 to 16, enabling stronger compression if your system has spare CPU capacity.
- **Optimized Decompression:** LZ4's rapid decompression ensures efficient handling of data on the fly, making it ideal for scenarios like client-server applications and databases.

## 2. Why Speed Matters

### Real-World Applications:
- **Networking and Disk I/O Optimization:** Compression before data transfer significantly reduces I/O operations. LZ4's speed ensures compression and decompression don’t become bottlenecks.
- **Distributed Systems (e.g., Kafka):** LZ4's rapid decompression is crucial for systems dealing with multiple client streams, ensuring efficient handling of data on the fly.
- **Databases (e.g., ElasticSearch):** LZ4's speed becomes essential, especially when querying large datasets, dealing with terabytes of on-the-fly decompression.

### Why Choose LZ4?
- **On-the-Wire Compression:** LZ4 keeps up with high-speed devices like NVMe SSDs and local networks, ensuring seamless data transfer.
- **Widely Supported:** Mature and well-supported LZ4 libraries are available for all popular programming languages.

**Consideration for Third-Party Applications:** Ensure that the algorithms can be configured. While LZ4 is recommended for wire-speed compression, ZSTD can be explored if stronger compression (though slower) is needed.

Feel free to explore LZ4 for your high-speed compression needs. For stronger compression or Java-specific scenarios, consider ZSTD.

## <b>Sources:</b>

- [CERN](https://indico.cern.ch/event/631498/contributions/2553033/attachments/1443750/2223643/zlibvslz4presentation.pdf)
- [StackOverFlow](https://stackoverflow.com/questions/67537111/how-do-i-decide-between-lz4-and-snappy-compression)