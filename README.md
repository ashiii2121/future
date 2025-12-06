# 🏥 FutureLabs Healthcare Platform

<div align="center">

![FutureLabs Banner](https://img.shields.io/badge/FutureLabs-Healthcare%20Platform-00d4ff?style=for-the-badge&logo=medical-cross&logoColor=white)

### 🚀 Complete Healthcare Lab Testing Platform with Payment Gateway

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![HDFC](https://img.shields.io/badge/HDFC-SmartGateway-FF6B00?style=flat-square&logo=bank&logoColor=white)](https://www.hdfcbank.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

**[🌐 Live Demo](#) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [💳 Payment](#-payment-gateway)**

---

### ✨ A comprehensive MERN stack platform for booking lab tests with integrated payment gateway

**Latest Update:** HDFC SmartGateway Payment Integration ✅

</div>

---

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [💳 Payment Gateway](#-payment-gateway)
- [📧 Email Service](#-email-service)
- [👨‍💼 Admin Dashboard](#-admin-dashboard)
- [📁 Project Structure](#-project-structure)
- [🔧 Configuration](#-configuration)
- [🔌 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🚢 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Features

<table>
<tr>
<td width="50%">

### 👥 User Features
- 🔐 **Secure Authentication** - JWT + OTP verification
- 🧪 **Browse Tests** - Extensive test catalog
- 📦 **Health Packages** - Curated test packages
- 🛒 **Shopping Cart** - Easy booking process
- 💳 **HDFC Payment** - Secure payment gateway
- 📱 **OTP Verification** - SMS-based verification
- 🏠 **Home Sample Collection** - Convenient service
- 📊 **Order Tracking** - Real-time status updates
- 📧 **Email Notifications** - Order confirmations
- 🔍 **Advanced Search** - Find tests quickly

</td>
<td width="50%">

### 👨‍💼 Admin Features
- 📊 **Dashboard Analytics** - Business insights with charts
- 👥 **User Management** - Complete CRUD operations
- 🧪 **Test Management** - Full test catalog control
- 📦 **Package Management** - Create & manage packages
- 🏷️ **Category Management** - Organize tests
- 🛒 **Order Management** - Track & update orders
- 🖼️ **Banner Management** - Promotional banners
- 📍 **Location Management** - Lab locations
- 📈 **Reports & Analytics** - Export data to CSV
- 💰 **Payment Tracking** - Monitor transactions

</td>
</tr>
</table>

---

## 💳 Payment Gateway

### HDFC SmartGateway Integration ✅

**Fully Integrated Payment System:**
- ✅ Secure payment processing
- ✅ Multiple payment methods (Cards, UPI, Net Banking)
- ✅ SHA256 hash verification
- ✅ Automatic order status updates
- ✅ Email confirmations
- ✅ Refund support
- ✅ Webhook handling
- ✅ UAT & Production ready

**Payment Flow:**
```
User → Add to Cart → Checkout → HDFC Payment Page → 
Payment Success → Order Confirmed → Email Sent
```

---

## 📧 Email Service

### Automated Email Notifications ✅

**Email Features:**
- ✅ Order confirmation emails (HTML templates)
- ✅ OTP verification emails
- ✅ Welcome emails for new users
- ✅ Professional HTML templates
- ✅ Gmail SMTP integration
- ✅ Error handling & logging

---

## 🏗️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)

### Payment & Services
![HDFC](https://img.shields.io/badge/HDFC_SmartGateway-FF6B00?style=for-the-badge&logo=bank&logoColor=white)
![Nodemailer](https://img.shields.io/badge/Nodemailer-0078D4?style=for-the-badge&logo=gmail&logoColor=white)

</div>

---

## 🚀 Quick Start

### 📋 Prerequisites

```bash
✅ Node.js (v14 or higher)
✅ MongoDB (v4.4 or higher) or MongoDB Atlas
✅ npm or yarn
✅ Git
```

### ⚡ Installation

#### 1️⃣ Clone the Repository

```bash
git clone https://github.com/ashiii2121/future.git
cd future
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

Create `.env` file in the `backend` directory:

```bash
cd backend
cp .env.example .env
```

Update `.env` with your credentials:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_super_secret_key
JWT_EXPIRE=7d

# Email (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

# HDFC Payment Gateway
HDFC_API_KEY=your_hdfc_api_key
HDFC_MERCHANT_ID=your_merchant_id
HDFC_CLIENT_ID=your_client_id
HDFC_BASE_URL=https://smartgatewayuat.hdfcbank.com
HDFC_RESPONSE_KEY=your_response_key

# URLs
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000
```

#### 5️⃣ Start MongoDB (if using local)

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

## 👨‍💼 Admin Dashboard

### Complete Admin Panel with 9 Modules

<table>
<tr>
<td width="33%">

#### 📈 Dashboard
- Total statistics
- Orders overview chart
- Category distribution
- Revenue trends
- Recent activity

</td>
<td width="33%">

#### 🧪 Test Management
- Create/Edit/Delete tests
- Manage test details
- Set pricing & discounts
- Toggle active status
- Bulk operations

</td>
<td width="33%">

#### 📦 Package Management
- Create health packages
- Add tests to packages
- Set package pricing
- Manage descriptions
- Package categories

</td>
</tr>
<tr>
<td width="33%">

#### 👥 User Management
- View all users
- Change user roles
- Verify users
- Delete users
- User statistics

</td>
<td width="33%">

#### 🛒 Order Management
- View all orders
- Update order status
- Track deliveries
- Filter orders
- Payment tracking

</td>
<td width="33%">

#### 🖼️ Banner Management
- Create banners
- Upload images
- Set display order
- Toggle visibility
- Banner types

</td>
</tr>
<tr>
<td width="33%">

#### 📍 Location Management
- Add lab locations
- Update addresses
- Manage contact info
- Toggle availability
- Location mapping

</td>
<td width="33%">

#### 📊 Reports & Analytics
- Business insights
- Export to CSV
- Date filtering
- Visual charts
- Revenue reports

</td>
<td width="33%">

#### 🏷️ Category Management
- Organize tests
- Create categories
- Set descriptions
- Manage icons
- Category hierarchy

</td>
</tr>
</table>

---

## 📁 Project Structure

```
futurelab-main/
│
├── 📂 backend/                    # Backend (Node.js + Express)
│   ├── 📂 controllers/            # Business logic
│   │   ├── 📄 auth.js            # Authentication
│   │   ├── 📄 payment.js         # HDFC Payment ✨
│   │   ├── 📄 users.js           # User management
│   │   ├── 📄 tests.js           # Test management
│   │   ├── 📄 packages.js        # Package management
│   │   ├── 📄 orders.js          # Order management
│   │   ├── 📄 banners.js         # Banner management
│   │   ├── 📄 categories.js      # Category management
│   │   └── 📄 locations.js       # Location management
│   │
│   ├── 📂 models/                 # Database schemas
│   │   ├── 📄 User.js
│   │   ├── 📄 Test.js
│   │   ├── 📄 Package.js
│   │   ├── 📄 Order.js
│   │   ├── 📄 Category.js
│   │   ├── 📄 Banner.js
│   │   ├── 📄 Cart.js
│   │   └── 📄 Location.js
│   │
│   ├── 📂 routes/                 # API routes
│   │   ├── 📄 payment.js         # Payment routes ✨
│   │   └── ... (all other routes)
│   │
│   ├── 📂 middleware/             # Custom middleware
│   │   ├── 📄 auth.js            # JWT authentication
│   │   ├── 📄 error.js           # Error handling
│   │   └── 📄 advancedResults.js # Pagination
│   │
│   ├── 📂 utils/                  # Utility functions
│   │   ├── 📄 sendEmail.js       # Email service ✨
│   │   └── 📄 sendSMS.js         # SMS service
│   │
│   ├── 📄 server.js               # Main server file
│   ├── 📄 .env.example            # Environment template
│   └── 📄 package.json            # Dependencies
│
├── 📂 frontend/                   # Frontend (React)
│   ├── 📂 src/
│   │   ├── 📂 admin/              # Admin dashboard
│   │   │   ├── 📄 AdminDashboard.jsx
│   │   │   ├── 📄 UserManager.jsx      # ✨
│   │   │   ├── 📄 BannerManager.jsx    # ✨
│   │   │   ├── 📄 LocationManager.jsx  # ✨
│   │   │   ├── 📄 ReportsManager.jsx   # ✨
│   │   │   └── ... (other managers)
│   │   │
│   │   ├── 📂 components/         # Reusable components
│   │   │   ├── 📄 HDFCPayment.jsx      # ✨
│   │   │   └── ... (other components)
│   │   │
│   │   ├── 📂 pages/              # User-facing pages
│   │   │   ├── 📄 PaymentCallback.jsx  # ✨
│   │   │   └── ... (other pages)
│   │   │
│   │   ├── 📄 App.js              # Main app component
│   │   └── 📄 index.js            # Entry point
│   │
│   └── 📄 package.json            # Dependencies
│
├── 📄 README.md                   # This file
├── 📄 .gitignore                  # Git ignore rules
└── 📂 Documentation/              # Complete guides
    ├── 📄 HDFC_PAYMENT_COMPLETE.md
    ├── 📄 EMAIL_SERVICE_COMPLETE.md
    ├── 📄 ENV_FILE_CONFIGURATION.md
    └── ... (10+ documentation files)
```

---

## 🔧 Configuration

### Environment Variables

Create `.env` file in `backend` directory:

| Variable | Description | Required |
|----------|-------------|----------|
| `NODE_ENV` | Environment (development/production) | ✅ |
| `PORT` | Server port | ✅ |
| `MONGODB_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | Secret key for JWT | ✅ |
| `EMAIL_USER` | Gmail address | ✅ |
| `EMAIL_PASS` | Gmail app password | ✅ |
| `HDFC_API_KEY` | HDFC API key | ✅ |
| `HDFC_MERCHANT_ID` | HDFC merchant ID | ✅ |
| `HDFC_RESPONSE_KEY` | HDFC response key | ✅ |

**See `.env.example` for complete list**

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

### 💳 Payment (HDFC SmartGateway)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/api/v1/payment/hdfc/create-order` | Create payment | ✅ |
| `POST` | `/api/v1/payment/hdfc/callback` | Handle callback | Public |
| `POST` | `/api/v1/payment/hdfc/webhook` | Process webhook | Public |
| `GET` | `/api/v1/payment/hdfc/verify/:id` | Verify payment | ✅ |
| `POST` | `/api/v1/payment/hdfc/refund` | Initiate refund | 👨‍💼 |

### 🧪 Tests

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/tests` | Get all tests | ❌ |
| `GET` | `/api/v1/tests/:id` | Get single test | ❌ |
| `POST` | `/api/v1/tests` | Create test | 👨‍💼 |
| `PUT` | `/api/v1/tests/:id` | Update test | 👨‍💼 |
| `DELETE` | `/api/v1/tests/:id` | Delete test | 👨‍💼 |

### 👥 Users (Admin Only)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/api/v1/users` | Get all users | 👨‍💼 |
| `GET` | `/api/v1/users/stats` | Get user stats | 👨‍💼 |
| `GET` | `/api/v1/users/:id` | Get single user | 👨‍💼 |
| `PUT` | `/api/v1/users/:id` | Update user | 👨‍💼 |
| `DELETE` | `/api/v1/users/:id` | Delete user | 👨‍💼 |
| `PATCH` | `/api/v1/users/:id/role` | Update role | 👨‍💼 |

**See full API documentation in `/docs` folder**

---

## 🧪 Testing

### Test Payment (UAT Mode)

**Test Card (Success):**
```
Card Number: 4111 1111 1111 1111
CVV: 123
Expiry: 12/25
Name: Test User
```

**Test Card (Failure):**
```
Card Number: 4000 0000 0000 0002
CVV: 123
Expiry: 12/25
```

### Run Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
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

### Production Checklist

- [ ] Update `NODE_ENV=production`
- [ ] Use production MongoDB cluster
- [ ] Update HDFC to production URL
- [ ] Set `HDFC_ENABLE_LOGGING=false`
- [ ] Use production HDFC credentials
- [ ] Configure CORS for production domain
- [ ] Set up SSL/HTTPS
- [ ] Configure environment variables on hosting platform

---

## 📚 Documentation

### Complete Guides Available

- 📄 **HDFC_PAYMENT_COMPLETE.md** - Payment integration guide
- 📄 **EMAIL_SERVICE_COMPLETE.md** - Email setup guide
- 📄 **ENV_FILE_CONFIGURATION.md** - Environment variables
- 📄 **MONGODB_SETUP_GUIDE.md** - Database setup
- 📄 **ADMIN_MODULES_IMPLEMENTATION.md** - Admin features
- 📄 **PROJECT_COMPLETENESS_ANALYSIS.md** - Project status
- 📄 **QUICK_REFERENCE.md** - Quick commands

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

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Features Highlight

### ✅ Complete & Production Ready

- ✅ **MERN Stack** - Modern tech stack
- ✅ **HDFC Payment** - Secure payment gateway
- ✅ **Email Service** - Automated notifications
- ✅ **Admin Dashboard** - 9 complete modules
- ✅ **User Authentication** - JWT + OTP
- ✅ **Order Management** - Complete workflow
- ✅ **Reports & Analytics** - Business insights
- ✅ **Responsive Design** - Mobile friendly
- ✅ **API Documentation** - Complete docs
- ✅ **Security** - Best practices implemented

---

## 📊 Project Stats

<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/ashiii2121/future?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/ashiii2121/future?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/ashiii2121/future?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/ashiii2121/future?style=flat-square)

</div>

---

## 📞 Support

<div align="center">

### Need Help? We're Here! 💬

[![Email](https://img.shields.io/badge/Email-support%40futurelabs.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:support@futurelabs.com)
[![GitHub Issues](https://img.shields.io/badge/GitHub-Issues-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashiii2121/future/issues)

</div>

### 🐛 Found a Bug?

Please [open an issue](https://github.com/ashiii2121/future/issues/new) with:
- 📝 Detailed description
- 🔄 Steps to reproduce
- 💻 Expected vs actual behavior
- 📸 Screenshots (if applicable)

---

## 🎉 Acknowledgments

Special thanks to:

- 🎨 **Design Inspiration** - Modern healthcare platforms
- 📚 **Libraries & Frameworks** - React, Express, MongoDB teams
- 💳 **HDFC Bank** - SmartGateway payment system
- 👥 **Contributors** - Everyone who has contributed
- ☕ **Coffee** - For keeping us awake during development

---

<div align="center">

## 🚀 Ready to Launch!

### Made with ❤️ by the FutureLabs Team

**[⬆ Back to Top](#-futurelabs-healthcare-platform)**

---

**© 2025 FutureLabs Healthcare Platform. All rights reserved.**

[![GitHub](https://img.shields.io/badge/GitHub-ashiii2121-181717?style=for-the-badge&logo=github)](https://github.com/ashiii2121)

</div>