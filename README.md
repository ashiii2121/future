# 🏥 FutureLabs Diagnostics - Complete Healthcare Platform

A comprehensive full-stack healthcare diagnostics platform with advanced booking management, payment integration, and admin dashboard.

## 🚀 Features

### 🎯 Core Features
- ✅ **Diagnostic Test Booking** - Browse and book various health tests
- ✅ **Custom Package Creation** - Create personalized test packages
- ✅ **Smart Cart System** - Add tests and packages to cart
- ✅ **User Authentication** - OTP-based login system
- ✅ **Order Management** - Track and manage orders
- ✅ **Payment Integration** - HDFC SmartGateway payment system

### 📅 **Booking Distribution System** (NEW!)
- ✅ **Automatic Pincode Routing** - Bookings auto-assigned based on patient location
- ✅ **Collector Folder Management** - Organize phlebotomists by area
- ✅ **Time Slot Management** - Real-time availability tracking
- ✅ **Capacity Control** - Configurable max orders per hour
- ✅ **Smart Slot Finder** - Auto-suggests next available slot when full
- ✅ **Admin Dashboard** - Complete booking management interface

### 👨‍💼 Admin Dashboard
- ✅ **Test Management** - Add, edit, delete diagnostic tests
- ✅ **Category Management** - Organize tests by categories
- ✅ **Package Management** - Create and manage health packages
- ✅ **Order Management** - View and manage customer orders
- ✅ **User Management** - Manage customer accounts
- ✅ **Banner Management** - Update homepage banners
- ✅ **Location Management** - Manage serviceable pincodes
- ✅ **Booking Management** - Manage collector folders and time slots
- ✅ **Reports & Analytics** - View business insights

### 💳 Payment Features
- ✅ **HDFC SmartGateway Integration**
- ✅ **Secure Payment Processing**
- ✅ **Order Confirmation Emails**
- ✅ **Payment Callbacks**
- ✅ **Refund Management**

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT + OTP
- **Payment**: HDFC SmartGateway API
- **Email**: Nodemailer

### Frontend
- **Framework**: React.js
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS3, Bootstrap
- **Icons**: Font Awesome
- **Charts**: Recharts

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables in .env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/futurelabs
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=30d

# HDFC Payment Gateway (optional)
HDFC_API_KEY=your_api_key
HDFC_MERCHANT_ID=your_merchant_id
HDFC_CLIENT_ID=your_client_id
HDFC_BASE_URL=https://smartgatewayuat.hdfcbank.com
HDFC_RESPONSE_KEY=your_response_key

# Start backend server
npm run dev
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start frontend server
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **Admin Dashboard**: http://localhost:3000/admin/login

## 🔐 Admin Access

**Admin Login Credentials:**
- **Username**: `admin`
- **Password**: `admin123`

**Admin Dashboard URL**: http://localhost:3000/admin/login

## 📚 API Documentation

### Authentication
- `POST /api/v1/auth/send-otp` - Send OTP to phone
- `POST /api/v1/auth/otp/verify` - Verify OTP and login

### Tests
- `GET /api/v1/tests` - Get all tests
- `GET /api/v1/tests/:id` - Get single test
- `POST /api/v1/tests` - Create test (Admin)
- `PUT /api/v1/tests/:id` - Update test (Admin)
- `DELETE /api/v1/tests/:id` - Delete test (Admin)

### Cart
- `POST /api/v1/cart/add` - Add item to cart
- `DELETE /api/v1/cart/remove` - Remove item from cart
- `GET /api/v1/cart/:userId` - Get user's cart

### Orders
- `POST /api/v1/orders` - Create order
- `GET /api/v1/orders/:id` - Get order details
- `GET /api/v1/orders/user/:userId` - Get user orders

### Booking Management
- `GET /api/v1/bookings/available-slots` - Check available time slots
- `POST /api/v1/bookings/book-slot` - Book a time slot
- `GET /api/v1/bookings/next-available-slot` - Find next available slot
- `DELETE /api/v1/bookings/cancel/:orderId` - Cancel booking

### Collector Folders (Admin)
- `GET /api/v1/admin/collector-folders` - Get all folders
- `POST /api/v1/admin/collector-folders` - Create folder
- `PUT /api/v1/admin/collector-folders/:id` - Update folder
- `DELETE /api/v1/admin/collector-folders/:id` - Delete folder
- `GET /api/v1/admin/collector-folders/:id/stats` - Get folder statistics

### Payment
- `POST /api/v1/payment/hdfc/create-order` - Create payment order
- `POST /api/v1/payment/hdfc/callback` - Handle payment callback
- `GET /api/v1/payment/hdfc/verify/:orderId` - Verify payment

## 🎯 Booking Distribution System

### How It Works

1. **Admin Setup**:
   - Create collector folders for different areas
   - Assign pincodes to each folder
   - Set capacity (max orders per hour)
   - Define working hours

2. **Patient Booking**:
   - Patient enters pincode during checkout
   - System finds assigned collector folder
   - Shows available time slots
   - Patient selects preferred slot
   - If full → system suggests next available slot
   - Booking confirmed → order updated

3. **Automatic Distribution**:
   - Bookings auto-routed to correct phlebotomist
   - No manual assignment needed
   - Prevents overbooking
   - Real-time capacity tracking

### Example Usage

```javascript
// Check available slots for a pincode
GET /api/v1/bookings/available-slots?pincode=560001&date=2025-12-18

// Book a time slot
POST /api/v1/bookings/book-slot
{
  "orderId": "order_id",
  "pincode": "560001",
  "date": "2025-12-18",
  "hour": 8
}
```

## 📁 Project Structure

```
futurelab-main/
├── backend/
│   ├── controllers/       # Business logic
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Auth & validation
│   ├── utils/            # Helper functions
│   └── server.js         # Entry point
├── frontend/
│   ├── public/           # Static files
│   └── src/
│       ├── admin/        # Admin dashboard
│       ├── components/   # Reusable components
│       ├── pages/        # Page components
│       ├── utils/        # API service & config
│       └── App.js        # Main app component
└── README.md
```

## 🗄️ Database Models

### User
- name, phone, email, role, addresses

### Test
- name, description, price, category, parameters

### Order
- user, orderItems, shippingAddress, paymentMethod, totalPrice, orderStatus, bookingDetails

### CollectorFolder
- name, phlebotomistId, pincodes, maxOrdersPerHour, workingHours

### TimeSlot
- collectorFolderId, date, hour, currentBookings, maxBookings, bookings[]

### Package
- name, description, tests[], price, discount

## 🔧 Configuration

### Environment Variables

**Backend (.env)**:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/futurelabs
JWT_SECRET=your_secret_key
JWT_EXPIRE=30d

# HDFC Payment Gateway
HDFC_API_KEY=your_api_key
HDFC_MERCHANT_ID=your_merchant_id
HDFC_CLIENT_ID=your_client_id
HDFC_BASE_URL=https://smartgatewayuat.hdfcbank.com
HDFC_RESPONSE_KEY=your_response_key
HDFC_ENABLE_LOGGING=true

# URLs
FRONTEND_URL=http://localhost:3000
BACKEND_URL=http://localhost:5000

# Email (optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_EMAIL=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

## 🧪 Testing

### Test Admin Features
1. Login to admin dashboard
2. Navigate to each management section
3. Test CRUD operations
4. Verify data persistence

### Test Booking System
1. Create collector folders
2. Check available slots via API
3. Book a time slot
4. Verify booking in database
5. Test slot full scenario

### Test Payment Flow
1. Add items to cart
2. Proceed to checkout
3. Complete payment
4. Verify order creation
5. Check payment callback

## 📝 Documentation

- **Complete Guide**: `BOOKING_SYSTEM_COMPLETE_GUIDE.md`
- **API Documentation**: `API_DOCUMENTATION.md`
- **Booking System**: `BOOKING_DISTRIBUTION_SYSTEM.md`
- **Payment Integration**: `HDFC_CONFIG_GUIDE.md`
- **Project Status**: `PROJECT_STATUS_SUMMARY.md`

## 🚀 Deployment

### Backend Deployment (Render/Heroku)
```bash
# Build command
npm install

# Start command
npm start

# Environment variables
Set all .env variables in platform dashboard
```

### Frontend Deployment (Vercel/Netlify)
```bash
# Build command
npm run build

# Output directory
build/

# Environment variables
REACT_APP_API_URL=your_backend_url
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **FutureLabs Team** - Healthcare Diagnostics Platform

## 🙏 Acknowledgments

- HDFC Bank for payment gateway
- MongoDB for database
- React team for frontend framework
- Express.js for backend framework

## 📞 Support

For support, email support@futurelabs.com or create an issue in the repository.

---

**Built with ❤️ for FutureLabs Diagnostics**

**Version**: 2.0.0  
**Last Updated**: December 2025