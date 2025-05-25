# Online Food Ordering Website

An intuitive online platform for browsing menus, placing food orders, and tracking delivery in real-time. The system supports secure user authentication, role-based access control, payment integration, and real-time order tracking.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Architecture](#architecture)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Database Design](#database-design)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features

- **User Management**: Users can sign up, log in, and securely manage their profiles using JWT authentication.  
- **Role-Based Access Control**: Different access levels for Restaurant Owners and Customers to personalize experiences and improve security.  
- **Restaurant & Menu Browsing**: Browse restaurants and dynamically view their menus and food item details.  
- **Cart & Order Placement**: Add items to cart, update quantities, and place orders with instant confirmation.  
- **Payment Integration**: Secure payments handled through Stripe API.  
- **Order Tracking**: Real-time status updates for orders post-placement.  
- **Admin/Owner Dashboard**: Restaurant owners can manage menus, view orders, and monitor customer interactions.  
- **State Management**: Redux ensures consistent application state across components.  
- **Responsive UI**: Built with React.js and Material UI to deliver smooth, user-friendly experiences on all devices.

---

## Tech Stack

- **Frontend**: React.js, Material UI, Redux, React Router  
- **Backend**: Spring Boot (RESTful APIs)  
- **Database**: MySQL  
- **Authentication**: JWT (Role-based)  
- **Payments**: Stripe API  
- **State Management**: Redux  
- **Build & Deployment**: Docker

---

## Architecture

The system follows a layered architecture to ensure scalability, maintainability, and security:

- **Frontend**: React.js app uses Material UI components and Redux for state management. Communicates with backend REST APIs for all data.  
- **Backend**: Spring Boot REST API handles authentication, authorization, order processing, menu management, and payment integration.  
- **Authentication**: JWT tokens are used for stateless, secure user sessions with role-based access controls (Customer, Owner).  
- **Database**: MySQL stores persistent data, including users, orders, menus, payments, and more.  
- **Payment Processing**: Stripe API integration facilitates secure, real-time payment transactions.  
- **Deployment**: Docker containers used for consistent environment setup and deployment.

---

## Installation

### Prerequisites

- Java Development Kit (JDK 11 or later)  
- MySQL Server (version 8 recommended)  
- Node.js and npm (for frontend)  
- Docker (optional, for containerized deployment)

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/your_username/food-website.git
cd food-website
```
  
  2. Navigate to the backend directory and build the Spring Boot application:
```bash
  cd backend
  ./mvnw clean install
```
  
  3. Start the backend server:
  ```bash   
  ./mvnw spring-boot:run
  ```

## Database Configuration

Update the `application.properties` file in the backend:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/food_app
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```


## Usage
- Use an API testing tool like Postman to interact with the backend services.
- Register a new user account or log in with existing credentials via the API.
- Use API endpoints to manage accounts, perform transactions, and view transaction history.

<!--
![DB Image](https://res.cloudinary.com/dxfn9epwh/image/upload/v1725342370/v/cip7wwfsdvati6gvdgrz.png)
-->


## The MySQL database consists of the following tables:
- users: Stores customer and restaurant owner details like username, password, contact info, roles, etc.

- address: Contains delivery or billing addresses linked to users.

- cart: Represents a user's cart session, tracking items before order placement.

- cart_item: Line items within the cart, with quantity and linked food IDs.

- category: Defines different categories for food items (e.g., Pizza, Drinks).

- event: Stores promotional or seasonal events (e.g., discounts, offers).

- food: Contains food item details such as name, price, description, and category.

- food_images: Stores image metadata or URLs for food items.

- food_ingredients: Links food items with their ingredients (many-to-many relationship).

- ingredients: List of all ingredients used in recipes.

- ingredients_category: Categorizes ingredients (e.g., Veg, Non-Veg, Dairy).

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: git checkout -b feature-name.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Submit a pull request.
