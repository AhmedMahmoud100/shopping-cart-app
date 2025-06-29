# Theme System Documentation

This theme system provides a comprehensive design token configuration for the shopping cart application using Ant Design v5.

## Overview

The theme system consists of:
- **Global theme configuration** (`src/theme/index.ts`)
- **Custom CSS utilities** (`src/theme/theme.css`)

## Theme Configuration

### Primary Colors
- `colorPrimary`: #1890ff (Main brand color)
- `colorPrimaryHover`: #40a9ff (Hover state)
- `colorPrimaryActive`: #096dd9 (Active state)

### Border Radius System
- `borderRadiusXS`: 4px
- `borderRadiusSM`: 6px
- `borderRadius`: 8px (default)
- `borderRadiusLG`: 12px

### Font Size System
- `fontSizeSM`: 12px
- `fontSize`: 14px (default)
- `fontSizeLG`: 16px
- `fontSizeXL`: 20px
- `fontSizeHeading1`: 38px
- `fontSizeHeading2`: 30px
- `fontSizeHeading3`: 24px
- `fontSizeHeading4`: 20px
- `fontSizeHeading5`: 16px

### Spacing System
- `paddingXXS`: 4px
- `paddingXS`: 8px
- `paddingSM`: 12px
- `padding`: 16px (default)
- `paddingLG`: 24px

## Usage

### 1. Using Ant Design Components (Recommended)
**Always use Ant Design props for standard components** - they automatically use your theme:

```tsx
import { Button, Card, Input, Space } from 'antd';

function MyComponent() {
  return (
    <Space direction="vertical" size="large">
      {/* ✅ Use Ant Design props - they respect your theme */}
      <Button type="primary" size="large">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      
      <Card title="My Card" size="default">
        <Input placeholder="Enter text" />
      </Card>
    </Space>
  );
}
```

**Why this is better:**
- ✅ **Automatic theme compliance** - uses your custom colors, border radius, spacing
- ✅ **Consistent behavior** - hover, focus, disabled states handled automatically
- ✅ **Accessibility** - built-in ARIA attributes and keyboard navigation
- ✅ **Less code** - no custom CSS needed
- ✅ **Maintainable** - changes to theme automatically apply

### 2. Using Ant Design's Built-in useToken (Custom Styling)
For custom styling, use Ant Design's built-in hook:

```tsx
import { theme } from 'antd';

function CustomComponent() {
  const { token } = theme.useToken();
  
  return (
    <div style={{
      backgroundColor: token.colorPrimary,
      padding: token.padding,
      borderRadius: token.borderRadius,
      fontSize: token.fontSize,
      transition: `all ${token.motionDurationMid} ${token.motionEaseInOut}`,
    }}>
      Custom styled content
    </div>
  );
}
```

### 3. Using Custom CSS for Special Effects
Use custom CSS classes only for **special effects and layouts** that Ant Design doesn't support:

```tsx
import '../theme/theme.css';

function MyComponent() {
  return (
    <div>
      {/* ✅ Standard button with Ant Design props */}
      <Button type="primary" size="large">Standard Button</Button>
      
      {/* ✅ Custom button with special effects */}
      <Button type="primary" className="hover-lift gradient-primary">
        Special Button
      </Button>
      
      {/* ✅ Custom layout with utility classes */}
      <div className="custom-card flex-between">
        <h2 className="text-lg text-primary">Title</h2>
        <Button type="default" className="hover-scale">Action</Button>
      </div>
    </div>
  );
}
```

### 4. Using CSS Variables
Use CSS variables directly in your styles:

```css
.my-custom-component {
  background-color: var(--ant-color-primary);
  border-radius: var(--ant-border-radius-lg);
  padding: var(--ant-padding);
  font-size: var(--ant-font-size);
}
```

## When to Use Each Approach

| Use Case | Approach | Example |
|----------|----------|---------|
| Standard buttons, inputs, cards | **Ant Design props** | `<Button type="primary">` |
| Custom styling with theme tokens | **theme.useToken()** | `const { token } = theme.useToken()` |
| Special animations/effects | **Custom CSS classes** | `<Button className="hover-lift">` |
| Layout utilities | **CSS classes** | `<div className="flex-center">` |

## Available CSS Utilities

### Special Effects
- `.hover-lift` - Hover animation with lift effect
- `.hover-scale` - Hover animation with scale effect
- `.gradient-primary` - Gradient background using primary colors
- `.gradient-success` - Gradient background using success colors

### Layout Utilities
- `.flex-center` - Flexbox center alignment
- `.flex-between` - Flexbox space-between alignment
- `.gap-xs`, `.gap-sm`, `.gap-md`, `.gap-lg` - Gap spacing

### Spacing
- `.spacing-xs`, `.spacing-sm`, `.spacing-md`, `.spacing-lg`
- `.padding-xs`, `.padding-sm`, `.padding-md`, `.padding-lg`

### Typography
- `.text-xs`, `.text-sm`, `.text-md`, `.text-lg`
- `.text-primary`, `.text-success`, `.text-warning`, `.text-error`

### Border Radius
- `.rounded-xs`, `.rounded-sm`, `.rounded-md`, `.rounded-lg`

### Background Colors
- `.bg-primary`, `.bg-success`, `.bg-warning`, `.bg-error`

### Shadows
- `.shadow-sm`, `.shadow-md`, `.shadow-lg`

## Best Practices

1. **Use Ant Design props first** - Always try `type="primary"`, `size="large"`, etc. before custom styling
2. **Use theme.useToken() for custom styling** - When you need theme tokens for custom components
3. **Custom CSS for effects only** - Use custom classes for animations, gradients, or special layouts
4. **Maintain consistency** - Keep the design system cohesive across all components

## Theme Tokens Reference

See `src/theme/index.ts` for the complete list of available theme tokens and their values.

## Available Theme Tokens

When using `theme.useToken()`, you have access to all Ant Design theme tokens:

```tsx
const { token } = theme.useToken();

// Colors
token.colorPrimary          // Primary color
token.colorPrimaryHover     // Primary hover color
token.colorSuccess          // Success color
token.colorWarning          // Warning color
token.colorError            // Error color

// Spacing
token.padding               // Default padding
token.paddingLG             // Large padding
token.margin                // Default margin
token.marginLG              // Large margin

// Typography
token.fontSize              // Default font size
token.fontSizeLG            // Large font size
token.fontSizeSM            // Small font size

// Border Radius
token.borderRadius          // Default border radius
token.borderRadiusLG        // Large border radius
token.borderRadiusSM        // Small border radius

// Motion
token.motionDurationMid     // Transition duration
token.motionEaseInOut       // Transition easing
``` 