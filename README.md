# Webshop with AWS

**Author:** *Stephen Bouchardon*

This directory is structured into two main directories : client and server.

## Client :
The front-end of this web application is developed with **Node.js**, **React.js**, **Vite.js**. 
Within the Client directory, you can find:

- src/ : Contains the source code in **.jsx** component files and their **.css** stylesheet.
- public/ : The custom designs and logos, created with **Canva**.
- The other documents and dependencies are automatically generated during the initialisation of the web app or installation of packages.

The frontend is hosted using **AWS Amplify** and updated on **GitHub**.

## Server :
This directory contains the back-end logic used by **AWS Lambda functions** in a recent version of **Node.js**. 
These RESTful working functions have the purpose to do the communication between the client side and the **RDS PostgreSQL** database.

- searchProductsFunction/ : With a GET request, fetch all the products from the database to the front-end (in App.jsx).
- updateProductsFunction/ : With a PUSH request, decrement one stock value after submission of the Page2.jsx form. Additionally, you can find the attempt to send an email using **Amazon SES**.
