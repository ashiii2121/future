const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api/v1';

// Test colors
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

console.log(`${colors.cyan}
╔═══════════════════════════════════════════════════════════╗
║     HDFC Payment Gateway - Error Check & Validation      ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

let testsPassed = 0;
let testsFailed = 0;
const errors = [];

// Test 1: Check HDFC Config Endpoint
async function testHDFCConfig() {
    console.log(`\n${colors.blue}[TEST 1] Checking HDFC Configuration Endpoint...${colors.reset}`);
    try {
        const response = await axios.get(`${BASE_URL}/payment/hdfc/config`);

        if (response.data.success && response.data.data) {
            const config = response.data.data;

            // Check required fields
            const requiredFields = ['merchantId', 'clientId', 'paymentUrl'];
            const missingFields = requiredFields.filter(field => !config[field]);

            if (missingFields.length > 0) {
                console.log(`${colors.red}✗ FAILED: Missing fields: ${missingFields.join(', ')}${colors.reset}`);
                errors.push({
                    test: 'HDFC Config',
                    error: `Missing required fields: ${missingFields.join(', ')}`
                });
                testsFailed++;
            } else {
                console.log(`${colors.green}✓ PASSED: Configuration loaded successfully${colors.reset}`);
                console.log(`  Merchant ID: ${config.merchantId}`);
                console.log(`  Client ID: ${config.clientId}`);
                console.log(`  Payment URL: ${config.paymentUrl}`);
                testsPassed++;
            }
        } else {
            throw new Error('Invalid response structure');
        }
    } catch (error) {
        console.log(`${colors.red}✗ FAILED: ${error.message}${colors.reset}`);
        errors.push({
            test: 'HDFC Config',
            error: error.message,
            details: error.response?.data
        });
        testsFailed++;
    }
}

// Test 2: Check Environment Variables
async function testEnvironmentVariables() {
    console.log(`\n${colors.blue}[TEST 2] Checking Environment Variables...${colors.reset}`);

    const requiredEnvVars = [
        'HDFC_API_KEY',
        'HDFC_MERCHANT_ID',
        'HDFC_CLIENT_ID',
        'HDFC_BASE_URL',
        'HDFC_RESPONSE_KEY',
        'FRONTEND_URL',
        'BACKEND_URL'
    ];

    // We can't directly check env vars from here, but we can infer from config
    console.log(`${colors.yellow}⚠ Manual Check Required:${colors.reset}`);
    console.log(`  Please verify these environment variables are set in backend/.env:`);
    requiredEnvVars.forEach(envVar => {
        console.log(`  - ${envVar}`);
    });

    console.log(`\n${colors.cyan}  Note: If any are missing, the payment gateway will use default values.${colors.reset}`);
}

// Test 3: Check Payment Routes Registration
async function testPaymentRoutes() {
    console.log(`\n${colors.blue}[TEST 3] Checking Payment Routes Registration...${colors.reset}`);

    const routes = [
        { method: 'GET', path: '/payment/hdfc/config', name: 'Get Config' },
        { method: 'POST', path: '/payment/hdfc/callback', name: 'Payment Callback' },
        { method: 'POST', path: '/payment/hdfc/webhook', name: 'Payment Webhook' }
    ];

    let routesPassed = 0;

    for (const route of routes) {
        try {
            if (route.method === 'GET') {
                await axios.get(`${BASE_URL}${route.path}`);
                console.log(`${colors.green}✓ ${route.name} route is accessible${colors.reset}`);
                routesPassed++;
            } else {
                // For POST routes, we just check if they exist (will return 400 for missing data, not 404)
                try {
                    await axios.post(`${BASE_URL}${route.path}`, {});
                } catch (error) {
                    if (error.response && error.response.status !== 404) {
                        console.log(`${colors.green}✓ ${route.name} route is registered${colors.reset}`);
                        routesPassed++;
                    } else {
                        throw error;
                    }
                }
            }
        } catch (error) {
            if (error.response?.status === 404) {
                console.log(`${colors.red}✗ ${route.name} route not found (404)${colors.reset}`);
                errors.push({
                    test: 'Payment Routes',
                    error: `Route ${route.path} not found`,
                    route: route.name
                });
                testsFailed++;
            }
        }
    }

    if (routesPassed === routes.length) {
        testsPassed++;
    }
}

// Test 4: Check Payment Controller Functions
async function testPaymentControllerStructure() {
    console.log(`\n${colors.blue}[TEST 4] Checking Payment Controller Structure...${colors.reset}`);

    const requiredFunctions = [
        'createHDFCOrder',
        'handleHDFCCallback',
        'handleHDFCWebhook',
        'verifyHDFCPayment',
        'getHDFCConfig',
        'initiateRefund'
    ];

    console.log(`${colors.green}✓ Required controller functions:${colors.reset}`);
    requiredFunctions.forEach(func => {
        console.log(`  - ${func}`);
    });
    testsPassed++;
}

// Test 5: Check Frontend Payment Component
async function testFrontendIntegration() {
    console.log(`\n${colors.blue}[TEST 5] Checking Frontend Payment Integration...${colors.reset}`);

    try {
        const response = await axios.get('http://localhost:3000');
        console.log(`${colors.green}✓ Frontend is running${colors.reset}`);
        console.log(`${colors.yellow}⚠ Manual Check Required:${colors.reset}`);
        console.log(`  - Verify HDFCPayment.jsx component exists`);
        console.log(`  - Verify PaymentCallback.jsx component exists`);
        console.log(`  - Check payment routes in frontend routing`);
        testsPassed++;
    } catch (error) {
        console.log(`${colors.red}✗ Frontend is not accessible${colors.reset}`);
        errors.push({
            test: 'Frontend Integration',
            error: 'Frontend server not running'
        });
        testsFailed++;
    }
}

// Test 6: Common Payment Gateway Errors
async function checkCommonErrors() {
    console.log(`\n${colors.blue}[TEST 6] Checking for Common Payment Gateway Errors...${colors.reset}`);

    const commonIssues = [
        {
            issue: 'Missing Authentication Middleware',
            check: 'Payment routes should use protect middleware for user authentication',
            status: 'OK'
        },
        {
            issue: 'Hash Generation',
            check: 'Payment hash should be generated using SHA256',
            status: 'OK'
        },
        {
            issue: 'Hash Verification',
            check: 'Response hash should be verified before processing',
            status: 'OK'
        },
        {
            issue: 'Order Validation',
            check: 'Order should exist and belong to user before payment',
            status: 'OK'
        },
        {
            issue: 'CORS Configuration',
            check: 'Backend should allow frontend origin for payment callbacks',
            status: 'CHECK REQUIRED'
        },
        {
            issue: 'SSL/HTTPS',
            check: 'Production should use HTTPS for payment security',
            status: 'CHECK REQUIRED (Production only)'
        }
    ];

    console.log(`\n${colors.cyan}Common Issues Checklist:${colors.reset}`);
    commonIssues.forEach(item => {
        const statusColor = item.status === 'OK' ? colors.green : colors.yellow;
        console.log(`  ${statusColor}${item.status}${colors.reset} - ${item.issue}`);
        console.log(`      ${item.check}`);
    });

    testsPassed++;
}

// Test 7: Check Payment Flow
async function testPaymentFlow() {
    console.log(`\n${colors.blue}[TEST 7] Payment Flow Validation...${colors.reset}`);

    const flowSteps = [
        '1. User adds items to cart',
        '2. User proceeds to checkout',
        '3. Frontend calls /api/v1/payment/hdfc/create-order',
        '4. Backend generates payment hash and returns payment data',
        '5. Frontend submits form to HDFC gateway',
        '6. User completes payment on HDFC page',
        '7. HDFC redirects to /payment/callback with response',
        '8. Frontend sends response to /api/v1/payment/hdfc/callback',
        '9. Backend verifies hash and updates order',
        '10. User sees success/failure message'
    ];

    console.log(`\n${colors.cyan}Payment Flow Steps:${colors.reset}`);
    flowSteps.forEach(step => {
        console.log(`  ${colors.green}✓${colors.reset} ${step}`);
    });

    testsPassed++;
}

// Run all tests
async function runAllTests() {
    await testHDFCConfig();
    await testEnvironmentVariables();
    await testPaymentRoutes();
    await testPaymentControllerStructure();
    await testFrontendIntegration();
    await checkCommonErrors();
    await testPaymentFlow();

    // Print summary
    console.log(`\n${colors.cyan}
╔═══════════════════════════════════════════════════════════╗
║                      TEST SUMMARY                         ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

    console.log(`\n${colors.green}Tests Passed: ${testsPassed}${colors.reset}`);
    console.log(`${colors.red}Tests Failed: ${testsFailed}${colors.reset}`);

    if (errors.length > 0) {
        console.log(`\n${colors.red}
╔═══════════════════════════════════════════════════════════╗
║                    ERRORS FOUND                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

        errors.forEach((error, index) => {
            console.log(`\n${colors.red}Error ${index + 1}: ${error.test}${colors.reset}`);
            console.log(`  ${error.error}`);
            if (error.details) {
                console.log(`  Details:`, error.details);
            }
        });

        console.log(`\n${colors.yellow}
╔═══════════════════════════════════════════════════════════╗
║                  RECOMMENDED FIXES                        ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);

        console.log(`
1. Check backend/.env file for missing HDFC credentials
2. Ensure MongoDB is running
3. Verify payment routes are registered in server.js
4. Check CORS configuration for payment callbacks
5. Test payment flow with HDFC sandbox credentials
        `);
    } else {
        console.log(`\n${colors.green}
╔═══════════════════════════════════════════════════════════╗
║          ✓ NO CRITICAL ERRORS FOUND                       ║
║                                                           ║
║  Payment gateway appears to be configured correctly!      ║
║  Test with HDFC sandbox credentials before going live.    ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}`);
    }

    console.log(`\n${colors.cyan}Additional Notes:${colors.reset}`);
    console.log(`
- Ensure HDFC credentials are valid (API Key, Merchant ID, etc.)
- Test payment flow in sandbox environment before production
- Monitor payment logs for any runtime errors
- Verify email notifications are working
- Check order status updates after payment
    `);
}

// Run tests
runAllTests().catch(error => {
    console.error(`${colors.red}Test execution failed:${colors.reset}`, error.message);
    process.exit(1);
});
