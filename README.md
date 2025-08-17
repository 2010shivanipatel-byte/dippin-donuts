# Dippin' Donuts Mobile Website

A mobile-first Express.js website for a donut shop featuring 10 pages designed specifically for mobile devices, matching the provided Figma design specifications.

## 📱 Mobile-First Design Features

- **375px Mobile Container**: Optimized for mobile viewing
- **Single Column Layout**: Clean, simple mobile interface
- **Touch-Friendly Buttons**: Large, easy-to-tap interactive elements
- **Gradient Design**: Pink and purple gradient theme
- **Vector Donut Icons**: Animated donut graphics
- **Smooth Animations**: Touch feedback and transitions

## 🍩 10 Mobile Pages

### 1. **Home Page** (`/`)
- 5 navigation buttons (Home, About, Menu, Contact, FAQ)
- "Dippin' Donuts" heading
- Animated vector donut image
- "Start Dippin'" button

### 2. **About Page** (`/about`)
- "Dippin' Donuts" heading (top left)
- About content description
- "Explore Menu" button (center bottom)

### 3. **Menu Page** (`/menu`)
- Same heading layout
- Vector donut image
- "Shop Menu" button (center bottom)

### 4. **Menu Detail Page** (`/menu-detail`)
- Heading (top left) + "Menu" subheading
- First donut image
- "Shop Classic Donut" text
- Second donut image
- "Customised Donuts" button

### 5. **Product Page** (`/product`)
- Large product image
- Product details and pricing
- "Add to Cart" button

### 6. **Offers Page** (`/offers`)
- Heading (left) + "Buy One Get Free" subheading
- Offer image
- "Select One" button

### 7. **Order Page** (`/order`)
- "1 2 3" heading with numbers
- 3 product images in column
- Order summary
- "Confirm Order" button (bottom center)

### 8. **Contact Page** (`/contact`)
- Heading (top left)
- 4 form fields: Name, Email, Contact, Address
- "Submit" button

### 9. **Info Page** (`/info`)
- Heading + confirmation subheading
- Success image
- Order confirmation details

### 10. **FAQ/Signup Page** (`/faq`)
- Top heading "Dippin' Donuts"
- Newsletter signup content
- 2 buttons: "Email Newsletter" and "Sign Up Now"
- Bottom "Dippin' Donuts" branding

## 🚀 Quick Start

1. **Extract the ZIP file**
2. **Navigate to project directory:**
   ```bash
   cd dippin-donuts-mobile
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
   ```bash
   npm start
   ```
5. **Open in browser:** `http://localhost:3000`

## 📱 Best Viewing Experience

- **Recommended**: View in mobile device or browser developer tools
- **Optimal Width**: 375px (iPhone X/11/12 size)
- **Mobile Browser**: Chrome Mobile, Safari Mobile, Firefox Mobile

## 🎨 Design Specifications

### Color Scheme
- **Primary Pink**: #ec4899
- **Secondary Purple**: #a855f7
- **Background Gradient**: Pink to Purple
- **Text Colors**: #475569 (body), #ec4899 (headings)

### Layout
- **Container Width**: 375px max-width
- **Padding**: 20px consistent spacing
- **Button Style**: Rounded (25px border-radius)
- **Typography**: System fonts (-apple-system, BlinkMacSystemFont)

### Interactive Elements
- **Touch Feedback**: Scale animation on tap
- **Hover Effects**: Smooth transitions
- **Form Validation**: Real-time input feedback
- **Loading States**: Visual feedback for actions

## 🛠 Technical Stack

- **Backend**: Express.js 5.1.0
- **Templating**: EJS 3.1.10
- **Styling**: Custom CSS with mobile-first approach
- **JavaScript**: Vanilla JS with mobile optimizations
- **Icons**: Font Awesome 6.0.0

