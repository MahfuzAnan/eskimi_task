# Eskimi Backend Engineer Task

This backend application implements the **Eskimi Backend Engineer technical task** using **Express.js with TypeScript**. Each problem is exposed through a **RESTful API**, follows **JSON-only input/output**, includes **unit tests**, and is fully **Dockerized**.

---

## 🚀 Features

- REST APIs for all 3 required tasks
- TypeScript-based Express.js backend
- Clean layered architecture (routes, controllers, utils)
- Manual date calculation (no date libraries)
- Number-to-words conversion with strict formatting
- Weather data integration using Open-Meteo API

---

## ✅ Prerequisites

Before running this project, ensure the following tools are installed on your system:

- **Node.js** (version 18 or higher recommended)
- **npm** (comes bundled with Node.js)
- **Docker** (optional, required only for containerized execution)
- **Git**

You can verify installations using:
```bash
node -v
npm -v
docker -v
git --version

```

## 🛠️ Installation

Follow the steps below to clone and set up the project locally.

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/MahfuzAnan/eskimi_task.git
cd eskimi_task
```
#### 2️⃣ Install Dependencies
```bash
npm install
```
#### 3️⃣ Run in Development Mode
```bash
npm run dev
```
##### The server will start at:
```bash
http://localhost:3000
```
#### 4️⃣ Build the Project
```bash
npm run build
```
#### 5️⃣ Run the Production Build
```bash
npm start
```

## 🐳 Running the Project with Docker

#### 1️⃣ Build the Docker Image
```bash
docker build -t eskimi-task .
```
#### 2️⃣ Run the Docker Container
```bash
docker run -p 3000:3000 eskimi-task
```
##### The API will be available at:
```bash
http://localhost:3000
```
#### 🧪 Running Tests
```bash
npm test
```

## 📁 Project Structure
```
.
├── dist/
├── node_modules/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── utils/
│   ├── tests/
│   ├── app.ts
│   └── server.ts
├── Dockerfile
├── .dockerignore
├── jest.config.js
├── tsconfig.json
├── package.json
└── README.md

```
### Folder Overview

- **src/controllers/**  
  Handles HTTP request–response logic. Each controller invokes the appropriate functions and returns JSON responses.

- **src/routes/**  
  Defines REST API routes and maps them to their corresponding controllers.

- **src/utils/**  
  Contains core reusable logic such as date calculation, number-to-words conversion, temperature processing, and weather data handling.

- **src/tests/**  
  Includes unit tests and API tests to ensure correctness and reliability of the application.

- **dist/**  
  Generated JavaScript output after compiling the TypeScript source code.

## 📌 API Endpoints

| Endpoint                          | Method | Description                                      |
|-----------------------------------|--------|--------------------------------------------------|
| `/api/days-between`               | POST   | Calculate number of days between two dates        |
| `/api/number-to-words`            | POST   | Convert a number into English words               |
| `/api/dhaka-temperature-stats`    | POST   | Get min, max, and average temperature for Dhaka   |

## 📄 Example Requests & Responses

### 1️⃣ Number of Days Between Two Dates

**Endpoint:** `/api/days-between`  
**Method:** `POST`

#### Request
```json
{
  "startDate": "2024-12-01",
  "endDate": "2026-01-05"
}
```
#### Response
```json
{
  "days": 735
}
```
### 2️⃣ Number to Words

**Endpoint:** `/api/number-to-words`  
**Method:** `POST`

#### Request
```json
{
  "number": 969.36
}
```
#### Response
```json
{
  "text": "nine hundred sixty nine point three six"
}
```
### 3️⃣ Dhaka Temperature Statistics

**Endpoint:** `/api/dhaka-temperature-stats`  
**Method:** `POST`

#### Request
```json
{
  "startDate": "2024-01-01",
  "endDate": "2026-01-05"
}
```
#### Response
```json
{
    "min": 8.9,
    "max": 40.85,
    "average": 26.54,
    "minText": "positive eight point nine zero",
    "maxText": "positive forty point eight five",
    "averageText": "positive twenty six point five four"
}
```
