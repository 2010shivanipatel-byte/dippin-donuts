const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Mobile-specific data
const mobileData = {
    donuts: [
        { id: 1, name: 'Classic Chocolate', price: 2.50, icon: 'fas fa-circle' },
        { id: 2, name: 'Chocolate Heart', price: 2.75, icon: 'fas fa-heart' },
        { id: 3, name: 'Star Sstrawberry', price: 3.00, icon: 'fas fa-star' }
    ],
    offers: [
        { title: 'Buy One Get Free', description: 'Buy any premium donut and get a classic chocolate donut absolutely free!' }
    ]
};

// Routes for 10 mobile pages

// 1. Home Page - Navigation + Heading + Donut Image + Start Button
app.get("/", (req, res) => {
    res.render("layout", {
        title: "Home",
        body: res.render("pages/home", {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 2. About Page - Heading (top left) + About content + Center button
app.get('/about', (req, res) => {
    res.render('layout', {
        title: 'About',
        body: res.render('pages/about', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 3. Menu Page - Heading + Vector image + Shop Menu button
app.get('/menu', (req, res) => {
    res.render('layout', {
        title: 'Menu',
        body: res.render('pages/menu', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 4. Menu Detail Page - Heading + Menu subheading + 2 images + Customised button
app.get('/menu-detail', (req, res) => {
    res.render('layout', {
        title: 'Menu Detail',
        body: res.render('pages/menu-detail', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 5. Product Page - Image + Add to Cart button
app.get('/product', (req, res) => {
    res.render('layout', {
        title: 'Product',
        body: res.render('pages/product', {
            donut: mobileData.donuts[0]
        }, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 6. Offers Page - Heading + Buy One Get Free + Image + Select button
app.get('/offers', (req, res) => {
    res.render('layout', {
        title: 'BOGO Offers',
        body: res.render('pages/offers', {
            offer: mobileData.offers[0]
        }, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 7. Order Page - 1 2 3 heading + 3 images + Confirm Order button
app.get('/order', (req, res) => {
    res.render('layout', {
        title: 'Order',
        body: res.render('pages/order', {
            donuts: mobileData.donuts
        }, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 8. Contact Page - Heading + 4 form fields (Name, Email, Contact, Address)
app.get('/contact', (req, res) => {
    res.render('layout', {
        title: 'Contact',
        body: res.render('pages/contact', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 9. Info Page - Heading + Subheading + Image
app.get('/info', (req, res) => {
    res.render('layout', {
        title: 'Order Info',
        body: res.render('pages/info', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// 10. FAQ/Signup Page - Heading + 2 buttons (Email, Sign Up) + Bottom heading
app.get('/faq', (req, res) => {
    res.render('layout', {
        title: 'FAQ & Signup',
        body: res.render('pages/faq', {}, (err, html) => {
            if (err) throw err;
            return html;
        })
    });
});

// API Routes for mobile interactions

// Contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, contact, address } = req.body;
    
    console.log('Mobile Contact Form Submission:', {
        name,
        email,
        contact,
        address,
        timestamp: new Date(),
        userAgent: req.get('User-Agent')
    });
    
    res.json({ 
        success: true, 
        message: 'Thank you! We\'ll contact you soon.',
        orderId: Date.now()
    });
});

// Add to cart
app.post('/api/cart/add', (req, res) => {
    const { donutId, quantity = 1 } = req.body;
    
    const donut = mobileData.donuts.find(d => d.id == donutId);
    if (!donut) {
        return res.status(404).json({ success: false, message: 'Donut not found' });
    }
    
    console.log('Item added to cart:', {
        donut: donut.name,
        quantity,
        timestamp: new Date()
    });
    
    res.json({ 
        success: true, 
        message: 'Added to cart!',
        item: donut,
        quantity
    });
});

// Order submission
app.post('/api/order', (req, res) => {
    const { items, customerInfo } = req.body;
    
    console.log('Mobile Order Submission:', {
        items,
        customerInfo,
        timestamp: new Date(),
        orderId: Date.now()
    });
    
    res.json({ 
        success: true, 
        message: 'Order confirmed!',
        orderId: Date.now(),
        estimatedTime: '15-20 minutes'
    });
});

// Newsletter signup
app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    
    console.log('Newsletter signup:', {
        email,
        timestamp: new Date(),
        source: 'mobile'
    });
    
    res.json({ 
        success: true, 
        message: 'Successfully subscribed to newsletter!'
    });
});

// Health check for mobile
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy',
        timestamp: new Date(),
        version: '1.0.0',
        platform: 'mobile'
    });
});

// 404 handler for mobile
app.use((req, res) => {
    res.status(404).render('layout', {
        title: '404 - Page Not Found',
        body: `
            <div class="mobile-content">
                <div>
                    <h1 style="font-size: 48px; color: #ec4899; margin: 40px 0;">404</h1>
                    <p style="font-size: 18px; color: #475569; margin: 20px 0;">
                        Oops! This page doesn't exist.
                    </p>
                </div>
                <div style="margin-bottom: 40px;">
                    <a href="/" class="mobile-button">Go Home</a>
                </div>
            </div>
        `
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Mobile app error:', err.stack);
    res.status(500).render('layout', {
        title: '500 - Server Error',
        body: `
            <div class="mobile-content">
                <div>
                    <h1 style="font-size: 48px; color: #ef4444; margin: 40px 0;">500</h1>
                    <p style="font-size: 18px; color: #475569; margin: 20px 0;">
                        Something went wrong. Please try again.
                    </p>
                </div>
                <div style="margin-bottom: 40px;">
                    <a href="/" class="mobile-button">Go Home</a>
                </div>
            </div>
        `
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`🍩 Dippin' Donuts Mobile App is running on http://localhost:${PORT}`);
    console.log(`📱 Mobile-optimized routes:`);
    console.log(`   • Home: http://localhost:${PORT}/`);
    console.log(`   • About: http://localhost:${PORT}/about`);
    console.log(`   • Menu: http://localhost:${PORT}/menu`);
    console.log(`   • Menu Detail: http://localhost:${PORT}/menu-detail`);
    console.log(`   • Product: http://localhost:${PORT}/product`);
    console.log(`   • Offers: http://localhost:${PORT}/offers`);
    console.log(`   • Order: http://localhost:${PORT}/order`);
    console.log(`   • Contact: http://localhost:${PORT}/contact`);
    console.log(`   • Info: http://localhost:${PORT}/info`);
    console.log(`   • FAQ: http://localhost:${PORT}/faq`);
    console.log(`📱 Best viewed on mobile devices (375px width)`);
});

module.exports = app;

