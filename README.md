# 🏥 FutureLabs Healthcare Platform

<div align="center">

![FutureLabs Banner](https://img.shields.io/badge/FutureLabs-Healthcare%20Platform-00d4ff?style=for-the-badge&logo=medical-cross&logoColor=white)

### 🚀 Modern Healthcare Lab Testing Platform

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**[🌐 Live Demo](#) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)**

---

### ✨ A comprehensive platform for booking lab tests and managing healthcare services

</div>

---

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [📱 Screenshots](#-screenshots)
- [🔌 API Documentation](#-api-documentation)
- [👨‍💼 Admin Dashboard](#-admin-dashboard)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Support](#-support)

---

## 🎯 Features

<table>
<tr>
<td width="50%">

### 👥 User Features
- 🔐 **Secure Authentication** - JWT-based login/signup
- 🧪 **Browse Tests** - Extensive test catalog
- 📦 **Health Packages** - Curated test packages
- 🛒 **Shopping Cart** - Easy booking process
- 📱 **OTP Verification** - SMS-based verification
- 🏠 **Home Sample Collection** - Convenient service
- 📊 **Order Tracking** - Real-time status updates
- 💳 **Secure Payments** - Multiple payment options
- 📧 **Email Notifications** - Booking confirmations
- 🔍 **Advanced Search** - Find tests quickly

</td>
<td width="50%">

### 👨‍💼 Admin Features
- 📊 **Dashboard Analytics** - Business insights
- 👥 **User Management** - Manage all users
- 🧪 **Test Management** - CRUD operations
- 📦 **Package Management** - Create packages
- 🏷️ **Category Management** - Organize tests
- 🛒 **Order Management** - Track orders
- 🖼️ **Banner Management** - Promotional banners
- 📍 **Location Management** - Lab locations
- 📈 **Reports & Analytics** - Export data
- 🔒 **Role-based Access** - Secure admin panel

</td>
</tr>
</table>

---

## 🏗️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

### Tools & Services
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

```bash
✅ Node.js (v14 or higher)
✅ MongoDB (v4.4 or higher)
✅ npm or yarn
✅ Git
```

### ⚡ Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/futurelab.git
cd futurelab
```

#### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

#### 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

#### 4️⃣ Environment Setup

Create a `.env` file in the `backend` directory:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://127.0.0.1:27017/futurelabs

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
JWT_COOKIE_EXPIRE=7

# SMS Configuration (Optional)
SMS_API_USER=your_sms_api_user
SMS_API_PASS=your_sms_api_password
SMS_SENDER_ID=FULABS
```

#### 5️⃣ Start MongoDB

```bash
# Windows
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### 6️⃣ Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

#### 7️⃣ Access the Application

- 🌐 **Frontend:** http://localhost:3000
- 🔧 **Backend API:** http://localhost:5000/api/v1
- 👨‍💼 **Admin Panel:** http://localhost:3000/admin/login

---

## 📁 Project Structure

```
futurelab-main/
│
├── 📂 backend/                    # Backend (Node.js + Express)
│   ├── 📂 controllers/            # Business logic
│   │   ├── 📄 auth.js            # Authentication
│   │   ├── 📄 tests.js           # Test management
│   │   ├── 📄 packages.js        # Package management
│   │   ├── 📄 orders.js          # Order management
│   │   ├── 📄 users.js           # User management
│   │   ├── 📄 banners.js         # Banner management
│   │   ├── 📄 categories.js      # Category management
│   │   └── 📄 locations.js       # Location management
│   │
│   ├── 📂 models/                 # Database schemas
│   │   ├── 📄 User.js            # User model
│   │   ├── 📄 Test.js            # Test model
│   │   ├── 📄 Package.js         # Package model
│   │   ├── 📄 Order.js           # Order model
│   │   ├── 📄 Category.js        # Category model
│   │   ├── 📄 Banner.js          # Banner model
│   │   ├── 📄 Cart.js            # Cart model
│   │   └── 📄 Location.js        # Location model
│   │
│   ├── 📂 routes/                 # API routes
│   │   ├── 📄 auth.js            # Auth routes
│   │   ├── 📄 tests.js           # Test routes
│   │   ├── 📄 packages.js        # Package routes
│   │   ├── 📄 orders.js          # Order routes
│   │   ├── 📄 users.js           # User routes
│   │   ├── 📄 banners.js         # Banner routes
│   │   ├── 📄 categories.js      # Category routes
│   │   ├── 📄 cart.js            # Cart routes
│   │   └── 📄 locations.js       # Location routes
│   │
│   ├── 📂 middleware/             # Custom middleware
│   │   ├── 📄 auth.js            # JWT authentication
│   │   ├── 📄 error.js           # Error handling
│   │   ├── 📄 advancedResults.js # Pagination/filtering
│   │   └── 📄 async.js           # Async handler
│   │
│   ├── 📂 utils/                  # Utility functions
│   │   ├── 📄 sendSMS.js         # SMS service
│   │   └── 📄 sendEmail.js       # Email service
│   │
│   ├── 📄 server.js               # Main server file
│   └── 📄 package.json            # Dependencies
│
├── 📂 frontend/                   # Frontend (React)
│   ├── 📂 src/
│   │   ├── 📂 admin/              # Admin dashboard
│   │   │   ├── 📄 AdminDashboard.jsx
│   │   │   ├── 📄 UserManager.jsx
│   │   │   ├── 📄 TestManager.jsx
│   │   │   ├── 📄 PackageManager.jsx
│   │   │   ├── 📄 CategoryManager.jsx
│   │   │   ├── 📄 OrderManager.jsx
│   │   │   ├── 📄 BannerManager.jsx
│   │   │   ├── 📄 LocationManager.jsx
│   │   │   ├── 📄 ReportsManager.jsx
│   │   │   └── 📄 AdminLogin.jsx
│   │   │
│   │   ├── 📂 pages/              # User-facing pages
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 Cart.jsx
│   │   │   ├── 📄 Checkups.jsx
│   │   │   ├── 📄 Package.jsx
│   │   │   ├── 📄 SingleTest.jsx
│   │   │   └── ...
│   │   │
│   │   ├── 📂 components/         # Reusable components
│   │   │   ├── 📄 Header.jsx
│   │   │   ├── 📄 Footer.jsx
│   │   │   └── 📄 ScrollToTop.jsx
│   │   │
│   │   ├── 📄 App.js              # Main app component
│   │   └── 📄 index.js            # Entry point
│   │
│   └── 📄 package.json            # Dependencies
│
├── 📄 README.md                   # This file
├── 📄 LICENSE                     # MIT License
└── 📄 .gitignore                  # Git ignore rules
```

---

## 🔧 Configuration

### Backend Configuration

The backend uses environment variables for configuration. Create a `.env` file:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment (development/production) | development |
| `PORT` | Server port | 5000 |
| `MONGODB_URI` | MongoDB connection string | mongodb://127.0.0.1:27017/futurelabs |
| `JWT_SECRET` | Secret key for JWT | - |
| `JWT_EXPIRE` | JWT expiration time | 7d |
| `SMS_API_USER` | SMS API username | - |
| `SMS_API_PASS` | SMS API password | - |

### Frontend Configuration

The frontend connects to the backend API. Update the API URL in your code if needed:

```javascript
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';
```

---

## 📱 Screenshots

<div align="center">

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x400/667eea/ffffff?text=FutureLabs+Homepage)

### 🧪 Test Catalog
![Test Catalog](https://via.placeholder.com/800x400/764ba2/ffffff?text=Test+Catalog)

### 🛒 Shopping Cart
![Shopping Cart](https://via.placeholder.com/800x400/f093fb/ffffff?text=Shopping+Cart)

### 👨‍💼 Admin Dashboard
![Admin Dashboard](https://via.placeholder.com/800x400/4facfe/ffffff?text=Admin+Dashboard)

</div>

---

## 🔌 API Documentation

### 🔐 Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/v1/auth/register` | Register new user | ❌ |
| `POST` | `/api/v1/auth/login` | User login | ❌ |
| `POST` | `/api/v1/auth/otp/generate` | Generate OTP | ❌ |
| `POST` | `/api/v1/auth/otp/verify` | Verify OTP | ❌ |
| `GET` | `/api/v1/auth/me` | Get current user | ✅ |

### 🧪 Tests

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/tests` | Get all tests | ❌ |
| `GET` | `/api/v1/tests/:id` | Get single test | ❌ |
| `POST` | `/api/v1/tests` | Create test | 👨‍💼 Admin |
| `PUT` | `/api/v1/tests/:id` | Update test | 👨‍💼 Admin |
| `DELETE` | `/api/v1/tests/:id` | Delete test | 👨‍💼 Admin |

### 📦 Packages

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/packages` | Get all packages | ❌ |
| `GET` | `/api/v1/packages/:id` | Get single package | ❌ |
| `POST` | `/api/v1/packages` | Create package | 👨‍💼 Admin |
| `PUT` | `/api/v1/packages/:id` | Update package | 👨‍💼 Admin |
| `DELETE` | `/api/v1/packages/:id` | Delete package | 👨‍💼 Admin |

### 🛒 Orders

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/orders` | Get all orders | 👨‍💼 Admin |
| `GET` | `/api/v1/orders/myorders` | Get user orders | ✅ |
| `GET` | `/api/v1/orders/stats` | Get statistics | 👨‍💼 Admin |
| `POST` | `/api/v1/orders` | Create order | ✅ |
| `PUT` | `/api/v1/orders/:id/status` | Update status | 👨‍💼 Admin |

### 👥 Users

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/users` | Get all users | 👨‍💼 Admin |
| `GET` | `/api/v1/users/stats` | Get user stats | 👨‍💼 Admin |
| `GET` | `/api/v1/users/:id` | Get single user | 👨‍💼 Admin |
| `PUT` | `/api/v1/users/:id` | Update user | 👨‍💼 Admin |
| `DELETE` | `/api/v1/users/:id` | Delete user | 👨‍💼 Admin |
| `PATCH` | `/api/v1/users/:id/role` | Update role | 👨‍💼 Admin |

### 🖼️ Banners

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/banners` | Get all banners | ❌ |
| `POST` | `/api/v1/banners` | Create banner | 👨‍💼 Admin |
| `PUT` | `/api/v1/banners/:id` | Update banner | 👨‍💼 Admin |
| `DELETE` | `/api/v1/banners/:id` | Delete banner | 👨‍💼 Admin |

### 📍 Locations

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/locations` | Get all locations | ❌ |
| `POST` | `/api/v1/locations` | Create location | 👨‍💼 Admin |
| `PUT` | `/api/v1/locations/:id` | Update location | 👨‍💼 Admin |
| `DELETE` | `/api/v1/locations/:id` | Delete location | 👨‍💼 Admin |

---

## 👨‍💼 Admin Dashboard

### 🔑 Access

Navigate to: `http://localhost:3000/admin/login`

### 📊 Features

<table>
<tr>
<td width="33%">

#### 📈 Dashboard
- Total statistics
- Orders overview
- Category distribution
- Recent activity

</td>
<td width="33%">

#### 🧪 Test Management
- Create/Edit/Delete tests
- Manage test details
- Set pricing
- Toggle active status

</td>
<td width="33%">

#### 📦 Package Management
- Create health packages
- Add tests to packages
- Set package pricing
- Manage descriptions

</td>
</tr>
<tr>
<td width="33%">

#### 👥 User Management
- View all users
- Change user roles
- Verify users
- Delete users

</td>
<td width="33%">

#### 🛒 Order Management
- View all orders
- Update order status
- Track deliveries
- Filter orders

</td>
<td width="33%">

#### 🖼️ Banner Management
- Create banners
- Upload images
- Set display order
- Toggle visibility

</td>
</tr>
<tr>
<td width="33%">

#### 📍 Location Management
- Add lab locations
- Update addresses
- Manage contact info
- Toggle availability

</td>
<td width="33%">

#### 📊 Reports & Analytics
- Business insights
- Export to CSV
- Date filtering
- Visual charts

</td>
<td width="33%">

#### 🏷️ Category Management
- Organize tests
- Create categories
- Set descriptions
- Manage icons

</td>
</tr>
</table>

---

## 🧪 Testing

### Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

### Test Coverage

```bash
# Generate coverage report
npm run test:coverage
```

---

## 🚢 Deployment

### 📦 Build for Production

#### Frontend

```bash
cd frontend
npm run build
```

#### Backend

```bash
cd backend
# Set NODE_ENV=production in .env
npm start
```

### ☁️ Deployment Options

<div align="center">

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://netlify.com)
[![Heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://heroku.com)
[![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://railway.app)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)

</div>

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🔧 Development Process

1. **🍴 Fork** the repository
2. **🌿 Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **💻 Commit** your changes
   ```bash
   git commit -m "✨ Add amazing feature"
   ```
4. **📤 Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **🔄 Open** a Pull Request

### 📝 Commit Message Guidelines

Use emoji prefixes for commit messages:

- ✨ `:sparkles:` - New feature
- 🐛 `:bug:` - Bug fix
- 📝 `:memo:` - Documentation
- 🎨 `:art:` - UI/UX improvements
- ♻️ `:recycle:` - Code refactoring
- ⚡ `:zap:` - Performance improvements
- 🔒 `:lock:` - Security fixes
- 🧪 `:test_tube:` - Tests

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 FutureLabs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📞 Support

<div align="center">

### Need Help? We're Here! 💬

[![Email](https://img.shields.io/badge/Email-support%40futurelabs.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:support@futurelabs.com)
[![Discord](https://img.shields.io/badge/Discord-Join_Community-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/futurelabs)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/futurelab/issues)
[![Documentation](https://img.shields.io/badge/Docs-Read_More-blue?style=for-the-badge&logo=read-the-docs&logoColor=white)](https://docs.futurelabs.com)

</div>

### 🐛 Found a Bug?

Please [open an issue](https://github.com/yourusername/futurelab/issues/new) with:
- 📝 Detailed description
- 🔄 Steps to reproduce
- 💻 Expected vs actual behavior
- 📸 Screenshots (if applicable)

### 💡 Have a Feature Request?

We'd love to hear your ideas! [Submit a feature request](https://github.com/yourusername/futurelab/issues/new?labels=enhancement)

---

## 🌟 Acknowledgments

Special thanks to:

- 🎨 **Design Inspiration** - Modern healthcare platforms
- 📚 **Libraries & Frameworks** - React, Express, MongoDB teams
- 👥 **Contributors** - Everyone who has contributed to this project
- ☕ **Coffee** - For keeping us awake during late-night coding sessions

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/yourusername/futurelab?style=flat-square)
![GitHub code size](https://img.shields.io/github/languages/code-size/yourusername/futurelab?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/yourusername/futurelab?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/yourusername/futurelab?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/futurelab?style=flat-square)

</div>

---

## 🗺️ Roadmap

### ✅ Completed
- [x] User authentication & authorization
- [x] Test catalog & packages
- [x] Shopping cart & checkout
- [x] Admin dashboard
- [x] Order management
- [x] User management
- [x] Banner management
- [x] Location management
- [x] Reports & analytics

### 🚧 In Progress
- [ ] Payment gateway integration
- [ ] Email notification system
- [ ] Advanced search filters

### 📅 Planned
- [ ] Mobile app (React Native)
- [ ] Real-time chat support
- [ ] AI-powered test recommendations
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Progressive Web App (PWA)

---

<div align="center">

## 🎉 Thank You for Using FutureLabs!

### Made with ❤️ by the FutureLabs Team

[![GitHub followers](https://img.shields.io/github/followers/yourusername?style=social)](https://github.com/yourusername)
[![Twitter Follow](https://img.shields.io/twitter/follow/futurelabs?style=social)](https://twitter.com/futurelabs)

### ⭐ Star this repo if you found it helpful!

**[⬆ Back to Top](#-futurelabs-healthcare-platform)**

---

**© 2025 FutureLabs. All rights reserved.**

</div>