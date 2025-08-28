# FULL-STACK-HOTEL-AND-RESORT-EXPLORING-PLATFORM

![License](https://img.shields.io/badge/license-ISC-green)

## 📝 Description

Embark on a virtual journey with the FULL-STACK-HOTEL-AND-RESORT-EXPLORING-PLATFORM, a web application meticulously crafted with Express.js. This platform offers a seamless and intuitive way to discover and explore a diverse collection of hotels and resorts. While details are currently limited, expect core features centered around web-based browsing and exploration of potential vacation destinations. Imagine a user-friendly interface empowering you to effortlessly research accommodations and plan your next getaway. Stay tuned for future expansions, promising even more exciting functionalities!

# ✨ Features
## 🎯 Core Platform Functionality

- **Hotel & Resort Listings** – Browse and explore a wide variety of hotels and resorts with detailed descriptions.

- **Advanced Search & Filters** – Find the perfect stay using filters like location, price, rating, and amenities.

- **User Reviews & Ratings** – Share feedback and read reviews from other travelers.

- **Interactive Maps** – Locate hotels and resorts easily using Mapbox integration.

## 🤖 Advanced Features

- **Secure Authentication** – User login & signup with Passport.js and password hashing for safe access.

- **Cloud-Based Media Storage** – Store and manage hotel/resort images seamlessly with Cloudinary.

- **Role-Based Access** – Separate functionalities for admins (manage listings) and users (explore & create and list reviews).

## ⚙️ Technical Features

- **MVC Architectur**e – Clean and scalable backend structure with Express.js & Node.js.

- **Responsive UI** – Mobile-first, modern design built with HTML, CSS, and Bootstrap.

- **RESTful APIs** – Well-structured APIs for authentication, listings, reviews , Create listing , Edit listing , Delete listing.

- **Database Integration** – MongoDB Atlas for secure, scalable data storage.

- **Map Integration** – Mapbox API for real-time location & geospatial features.

- **Cloud Storage** – Cloudinary for optimized image upload, storage, and delivery.

- **Production Ready** – Docker  support with deployment on Render.

---
# 🏗 Architecture
```
The platform follows a client-server model with an MVC architecture on the backend:

                   ┌────────────────────────┐
                   │        Frontend         │
                   │     HTML  +  CSS        │
                   │ Axios + CSS/Bootstrap   │
                   │BootStrap (Responsive UI)│
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │        Backend          │
                   │ Node.js + Express.js    │
                   │Passprt.js Authentication│
                   │     MVC Pattern         │
                   └───────────┬────────────┘
                               │
                               ▼
                   ┌────────────────────────┐
                   │       Database          │
                   │ MongoDB Atlas           │
                   │ Mongoose ODM            │
                   └───────────┬────────────┘
                               │
                 ┌─────────────┴──────────────┐
                 ▼                            ▼
   ┌────────────────────────┐     ┌────────────────────────┐
   │    Cloud Storage        │     │     Maps & Location     │
   │  Cloudinary (Images)    │     │ Mapbox API (Geo Data)   │
   └────────────────────────┘     └────────────────────────┘
```
---

# 🛠 Tech Stack
## 🎨 Frontend Technologies

- **HTML** – Semantic markup for structure and accessibility

- **Passport.js Authentication** – Secure login/register & protected routes

- **Bootstrap** – Responsive styling with modern design system

- **CSS3** – Advanced layouts with Flexbox & Grid

## ⚙️ Backend Technologies

- **Node.js 18+** – JavaScript runtime environment

- **Express.js** – Fast, minimal, and flexible backend framework

- **MongoDB Atlas** – NoSQL document database for hotels, users, reviews & bookings

- **Mongoose** – Elegant MongoDB object modeling for Node.js

- **Passport.js** – Secure authentication & authorization

- **MVC Architecture** – Scalable, modular backend structure

## 🗺️ Maps & Location Services

- **Mapbox API** – Interactive maps, hotel locations & geo-search features

## ☁️ Cloud Services

- **Cloudinary** – Cloud-based image storage, optimization, and delivery

- **Render** – Deployment platform with Web services

- **Docker** – Containerization using a single Dockerfile for isolated builds

- **dotenv** – Environment variable management

## 🛠 Development Tools

- **ESLint** – Code linting & style enforcement

- **Nodemon** – Automatic server restarts during development

- **CORS** – Secure cross-origin communication between frontend & backend

- **Git & GitHub** – Version control & collaboration
---

## 📦 Key Dependencies

```
@mapbox/mapbox-sdk: ^0.16.1
cloudinary: ^2.5.0
connect-flash: ^0.1.1
connect-mongo: ^5.1.0
dotenv: ^16.4.5
ejs: ^3.1.10
ejs-mate: ^4.0.0
express: ^4.19.2
express-session: ^1.18.0
joi: ^17.13.3
method-override: ^3.0.0
mongoose: ^8.3.3
multer: ^1.4.5-lts.1
multer-storage-cloudinary: ^4.0.0
passport: ^0.7.0
```
---

## 📁 Project Structure

```
.
├── CloudConfig.js
├── Dockerfile
├── app.js
├── controllers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── init
│   ├── data.js
│   └── index.js
├── middleware.js
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── package.json
├── public
│   ├── css
│   │   ├── rating.css
│   │   └── style.css
│   ├── images
│   │   ├── image1.jpg
│   │   └── image2.jpg
│   └── js
│       ├── craousel.js
│       ├── map.js
│       └── script.js
├── routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── schema.js
├── utils
│   ├── ExpressError.js
│   └── wrapAsync.js
└── views
    ├── error.ejs
    ├── includes
    │   ├── flash.ejs
    │   ├── footer.ejs
    │   └── navbar.ejs
    ├── layouts
    │   └── boilerplate.ejs
    ├── listings
    │   ├── edit.ejs
    │   ├── index.ejs
    │   ├── new.ejs
    │   └── show.ejs
    └── user
        ├── logIn.ejs
        └── signUp.ejs
```
---

## ⚙️ Local Setup Instructions  

### 🔑 Prerequisites  
- **Node.js 18+**  
- **Docker** (recommended)  
- **MongoDB** (local installation or Atlas account)
- **Mapbox API Key** (for maps & location services)
- **Cloudinary Account** (for image upload & storage)

---

### 🐳1st Way: Docker Development (Recommended)  

1️⃣ Clone the repository  
```bash
git clone <your-repo-url>
cd FULL-HOTEL-AND-RESORT-EXPLORING-PLATFORM
```
2️⃣ Set up environment variables
```bash
Create .env file in root file:

CLOUD_NAME=<your cloud name>
CLOUD_API_KEY=<your cloud api key>
CLOUD_API_SECRET=<your cloud api secert>
MAP_TOKEN=<your MAP_TOKEN>
ATLASDB_URL=<your MongoDB_url>
SECRET=<your sceret for sessiom=n management>
```

3️⃣ Run with Docker
```bash
#Build the docker image
1. docker build -t <image name> .

#Run the docker image
2. docker run -p 8080:8080 <image name>
```

4️⃣ Access the application
```bash

website at: http://localhost:8080
```
---

### 🐳2nd Way: Run the app manually
Install dependencies
```bash
# App dependencies
npm install
```
Set up environment variables (same as Docker option)

Start services manually

### Terminal :
```bash
node app.js
```

### Access Your Application
```bash
Access the application
Website : http://localhost:8080
```
---
### Required Service Setup

- **Mapbox API Key** (for maps & location services)
- **Cloudinary Account** (for image upload & storage)

### Database Setup

- **MongoDB Atlas** : Create a database and get connection string

---

## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/ADARSHDUBEY200/FULL-STACK-HOTEL-AND-RESORT-EXPLORING-PLATFORM.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

## 📜 License

This project is licensed under the ISC License.

---
*This README was generated with ❤️ by ReadmeBuddy*
