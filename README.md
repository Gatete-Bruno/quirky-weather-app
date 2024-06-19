# Overview
The Quirky Weather App is a React-based web application that allows users to check the current weather and weekly forecast for different locations. It utilizes the OpenWeatherMap API for fetching weather data and provides a user-friendly interface for viewing weather details.

## Technologies Used

Frontend
React: JavaScript library for building user interfaces.
Material-UI: React UI framework for designing responsive and accessible applications.
Axios: Promise-based HTTP client for making API requests.
React Router: Declarative routing for React applications.

Backend
Node.js: JavaScript runtime environment for building scalable server-side applications.
Express: Web application framework for Node.js to handle server-side logic.
MongoDB: NoSQL database used for storing user preferences and data.

Deployment & Containerization
Docker: Containerization platform used to package the application and its dependencies.
AWS: Cloud platform for deployment and hosting of the application.
Kubernetes (K8s): Container orchestration tool for automating deployment, scaling, and management of containerized applications.

Project Structure
The project is organized into three main directories:

quirky-weather-app: Contains the frontend React application.
quirky-weather-backend: Contains the backend Node.js application.
k8s-manifests: Kubernetes manifest files for deploying the application on Kubernetes clusters.

https://gatete.hashnode.dev/deploying-quirky-weather-app-on-aws
![Screenshot 2024-06-17 at 12 38 14](https://github.com/Gatete-Bruno/quirky-weather-app/assets/64279605/73a3f3ee-b599-471e-a20f-1370e3f3d3d1)
=======


Getting Started

git clone https://github.com/Gatete-Bruno/quirky-weather-app

cd quirky-weather-app

Option 1 (Run the Wearher App Locally using Docker )

 docker pull bruno74t/quirky-weather-frontend:v3
 docker pull bruno74t/quirky-weather-backend:v3

Run the Backend Container
Run the backend container on port 5000:

 docker run -d -p 5000:5000 --name quirky-weather-backend bruno74t/quirky-weather-backend:v3


Run the Frontend Container
Run the frontend container on port 3000:

 docker run -d -p 3000:3000 --name quirky-weather-frontend bruno74t/quirky-weather-frontend:v3

Access the APP locally via  

http://localhost:3000/

Option 2: Deploy the Application on AWS via Elastic Kubernetes Service (EKS)

Follow this detailed Blog on how to !

https://gatete.hashnode.dev/deploying-quirky-weather-app-on-aws


