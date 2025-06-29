# 🛒 Shopping Cart App

A modern, responsive shopping cart application built with React, TypeScript, and Ant Design. Features infinite scrolling product grid, cart management, and a clean modular architecture.

## ✨ Features

- **🛍️ Product Catalog**: Infinite scrolling grid with 10,000+ products
- **🛒 Shopping Cart**: Add, remove, and update quantities
- **📱 Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **🎨 Modern UI**: Built with Ant Design components and custom theming
- **⚡ Performance**: Virtual scrolling for large product lists
- **🔧 TypeScript**: Full type safety throughout the application
- **📦 Modular Architecture**: Clean separation of concerns

## 🏗️ Project Structure

```
src/
├── app/                          # Main application
│   ├── components/               # App-level components
│   │   ├── Header/              # Navigation header with cart badge
│   │   └── Footer/              # Application footer
│   ├── routes.tsx               # Route definitions
│   └── index.tsx                # Main app component
├── modules/                      # Feature modules
│   ├── cart/                    # Shopping cart functionality
│   │   ├── components/          # Cart-specific components
│   │   │   ├── CartProductCard/ # Individual cart item display
│   │   │   ├── EmptyCart/       # Empty cart state
│   │   │   ├── OrderActions/    # Cart action buttons
│   │   │   └── OrderSummary/    # Cart totals and summary
│   │   └── pages/               # Cart pages
│   │       └── Cart.tsx         # Main cart page
│   └── product/                 # Product functionality
│       ├── components/          # Product-specific components
│       │   ├── GridLoader/      # Loading state for grid
│       │   ├── ProductCard/     # Individual product display
│       │   ├── ProductGridCell/ # Grid cell wrapper
│       │   └── ProductNotFound/ # 404 state for products
│       ├── helpers/             # Product utilities
│       │   ├── productsGenerator.ts # Mock data generation
│       │   └── productsService.ts   # Product data service
│       ├── hooks/               # Custom hooks
│       │   ├── useInfiniteProducts.ts # Infinite scroll logic
│       │   └── useResponsiveColumns.ts # Responsive grid
│       └── pages/               # Product pages
│           ├── ProductList/     # Product catalog page
│           └── ProductDetails/  # Individual product page
├── store/                       # State management
│   ├── cartStore.ts            # Zustand cart store
│   └── index.ts                # Store exports
├── theme/                       # Design system
│   ├── index.ts                # Ant Design theme configuration
│   └── useTheme.ts             # Theme hook
└── types/                       # TypeScript definitions
    ├── index.ts                # Type exports
    └── product.ts              # Product-related types
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/shopping-cart-app.git
   cd shopping-cart-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Key Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Ant Design** - UI component library
- **Zustand** - State management
- **React Router** - Client-side routing
- **React Window** - Virtual scrolling
- **Faker.js** - Mock data generation

## 📱 Features in Detail

### Product Catalog
- Infinite scrolling with virtual rendering
- Responsive grid (1-4 columns based on screen size)
- Product cards with images, descriptions, and pricing
- Quick add to cart functionality

### Shopping Cart
- Persistent cart state with Zustand
- Quantity adjustment controls
- Remove items functionality
- Order summary with tax calculation
- Clear cart option

### Responsive Design
- Mobile-first approach
- Adaptive grid columns
- Touch-friendly interactions
- Optimized for all screen sizes

## ⚡ Performance Optimizations

### Infinite Scrolling with React Window
The app implements virtual scrolling using `react-window` and `react-window-infinite-loader` to handle large datasets efficiently:

- **Virtual Rendering**: Only renders visible items in the viewport
- **Memory Efficiency**: Reduces DOM nodes from 10,000+ to ~20-30 visible items
- **Smooth Scrolling**: Maintains 60fps performance regardless of dataset size
- **Progressive Loading**: Loads products in batches of 50 items
- **Responsive Grid**: Adapts column count based on screen size (1-4 columns)

### Technical Implementation
```typescript
// Custom hook for infinite products
const useInfiniteProducts = () => {
  // Manages product batches and loading states
  // Integrates with react-window for virtual rendering
  // Handles responsive column calculations
}

// Responsive grid hook
const useResponsiveColumns = () => {
  // Dynamically adjusts grid columns based on viewport
  // Mobile: 1 column, Tablet: 2 columns, Desktop: 3-4 columns
}
```

### Performance Benefits
- **Initial Load**: Only loads first batch of products
- **Memory Usage**: Constant memory footprint regardless of total items
- **Scroll Performance**: Smooth scrolling with large datasets
- **Network Efficiency**: Loads data on-demand as user scrolls

## 🎨 Design System

The app uses a custom Ant Design theme with:
- Consistent color palette
- Typography scale
- Spacing system
- Border radius standards
- Component-specific styling

## 🔧 Development

### Code Organization
- **Feature-based modules**: Each feature has its own directory
- **Component folders**: Each component has its own folder with index.tsx and CSS module
- **Custom hooks**: Reusable logic extracted into hooks
- **Type safety**: Comprehensive TypeScript definitions

### Module File Structure Pattern

The app follows a consistent module file structure pattern where each component is organized in its own folder:

```
ComponentName/
├── index.tsx              # Main component file
├── ComponentName.module.css # CSS module for styling
└── (optional) README.md   # Component documentation
```

**Example:**
```
src/modules/cart/components/CartProductCard/
├── index.tsx              # CartProductCard component
└── CartProductCard.module.css # Component-specific styles
```

**Benefits of this structure:**
- **Modularity**: Each component is self-contained
- **Scalability**: Easy to add more files to a component folder
- **Organization**: Clear separation of concerns
- **Maintainability**: Easy to find and update component files
- **Consistency**: Uniform structure across all components
---

Built with ❤️ using React, TypeScript, and Ant Design
