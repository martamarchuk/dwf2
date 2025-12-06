# Digital Workforce - Comprehensive Design Guide

> **Version:** 1.0
> **Last Updated:** November 26, 2025
> **Project:** digitalworkforce.one

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [UI Patterns](#ui-patterns)
7. [Responsive Design](#responsive-design)
8. [Animations & Interactions](#animations--interactions)
9. [Icons](#icons)
10. [Best Practices](#best-practices)

---

## Brand Identity

### Logo

**Primary Logo:**
- File: `/logo 4_transparent_bg copy.png`
- Dimensions: Height 40px (h-10)
- Usage: Header, branding elements
- Always pair with "Digital Workforce" wordmark

**Logo Usage:**
```jsx
<img src="/logo 4_transparent_bg copy.png" alt="Digital Workforce Logo" className="h-10 w-auto" />
```

### Brand Voice

**Tone:** Professional, confident, innovative, approachable
**Style:** Direct, clear, benefit-focused
**Key Messages:**
- AI automation for business efficiency
- Custom-tailored solutions
- Quick integration (1-4 weeks)
- Team empowerment through AI

---

## Color System

### Primary Colors

#### Orange (Primary Brand Color)
```
orange-50:  #FFF7ED  // Lightest backgrounds
orange-100: #FFEDD5  // Light accents
orange-200: #FED7AA  // Subtle highlights
orange-300: #FDBA74  // Medium tones
orange-400: #FB923C  // Interactive states
orange-500: #FF9B5A  // PRIMARY - Main brand color
orange-600: #EA580C  // Hover states
orange-700: #C2410C  // Active states
orange-800: #9A3412  // Dark accents
orange-900: #7C2D12  // Darkest
```

**Usage:**
- Primary CTAs and buttons
- Links and interactive elements
- Highlights and accents
- Success indicators
- Brand elements

#### Slate (Neutral Colors)
```
slate-50:  #F8FAFC  // Page backgrounds
slate-100: #F1F5F9  // Section backgrounds
slate-200: #E2E8F0  // Borders, dividers
slate-300: #CBD5E1  // Secondary borders
slate-400: #94A3B8  // Placeholder text
slate-500: #64748B  // Secondary text
slate-600: #475569  // Body text
slate-700: #334155  // Emphasized text
slate-800: #1E293B  // Dark backgrounds
slate-900: #1A1F3B  // Primary text, dark mode
```

**Usage:**
- Text hierarchy
- Backgrounds
- Borders and dividers
- Shadows
- Footer and dark sections

### Semantic Colors

#### Success
```
green-50:  #F0FDF4  // Success backgrounds
green-500: #10B981  // Success icons
green-600: #059669  // Success text
green-800: #065F46  // Dark success text
```

#### Error
```
red-50:  #FEF2F2  // Error backgrounds
red-600: #DC2626  // Error text
red-700: #B91C1C  // Error emphasis
```

#### Info
```
blue-50:  #EFF6FF  // Info backgrounds
blue-500: #3B82F6  // Info icons
blue-600: #2563EB  // Info text
```

### Gradients

#### Slate Gradient (Dark Sections)
```css
background: linear-gradient(to bottom right, #1A1F3B, #1E293B, #1A1F3B);
/* Tailwind: bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 */
```

#### Light Gradient (Hero Section)
```css
background: linear-gradient(to bottom right, #F8FAFC, #EFF6FF);
/* Tailwind: bg-gradient-to-br from-slate-50 to-blue-50 */
```

#### Glow Effects
```css
/* Orange glow for buttons */
box-shadow: 0 10px 40px -10px rgba(255, 155, 90, 0.3);
/* Tailwind: shadow-lg shadow-orange-500/30 */
```

---

## Typography

### Font Family

**Primary Font:** Inter
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

**Import:**
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

### Type Scale

#### Headings

**H1 - Hero Heading**
```jsx
className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
// 48px / 60px (mobile / desktop)
// Font weight: 700 (Bold)
// Line height: 1.2
```

**H2 - Section Heading**
```jsx
className="text-4xl lg:text-5xl font-bold text-white leading-tight"
// 36px / 48px
// Font weight: 700 (Bold)
```

**H3 - Subsection Heading**
```jsx
className="text-2xl font-bold text-slate-900 mb-2"
// 24px
// Font weight: 700 (Bold)
```

**H4 - Card/Component Heading**
```jsx
className="text-xl font-bold mb-6"
// 20px
// Font weight: 700 (Bold)
```

#### Body Text

**Large Body**
```jsx
className="text-xl text-slate-300 leading-relaxed"
// 20px
// Line height: 1.75
```

**Regular Body**
```jsx
className="text-lg text-slate-600 leading-relaxed"
// 18px
// Line height: 1.75
```

**Small Body**
```jsx
className="text-sm"
// 14px
```

**Extra Small**
```jsx
className="text-xs text-slate-500"
// 12px
```

#### Labels & UI Text

**Uppercase Label**
```jsx
className="text-sm font-semibold text-orange-500 uppercase tracking-wider"
// 14px, 600 weight, letter-spacing: 0.05em
```

**Form Label**
```jsx
className="block text-sm font-medium text-slate-900 mb-2"
// 14px, 500 weight
```

### Font Weights

```
font-normal:    400 (Regular)
font-medium:    500 (Medium) - Labels, navigation
font-semibold:  600 (Semibold) - Buttons, emphasis
font-bold:      700 (Bold) - Headings
font-extrabold: 800 (Extra Bold) - Special emphasis
```

---

## Spacing & Layout

### Spacing System

**Base Unit:** 4px (0.25rem)

**Scale:**
```
0:    0px
1:    4px     (0.25rem)
2:    8px     (0.5rem)
3:    12px    (0.75rem)
4:    16px    (1rem)
5:    20px    (1.25rem)
6:    24px    (1.5rem)
8:    32px    (2rem)
10:   40px    (2.5rem)
12:   48px    (3rem)
16:   64px    (4rem)
18:   72px    (4.5rem) - Custom spacing for header
20:   80px    (5rem)
24:   96px    (6rem)
32:   128px   (8rem)
```

### Layout Container

**Max Width Container:**
```jsx
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
```
- Max width: 1280px (7xl)
- Side padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Centered with `mx-auto`

### Section Spacing

**Standard Section:**
```jsx
className="py-24 lg:py-32"
// Vertical padding: 96px mobile, 128px desktop
```

**Hero Section:**
```jsx
className="pt-20 pb-32 lg:pt-32 lg:pb-40"
// Top: 80px/128px, Bottom: 128px/160px
```

**Footer:**
```jsx
className="pt-16 pb-8"
// Top: 64px, Bottom: 32px
```

### Grid Systems

**Two Column (Desktop):**
```jsx
className="grid lg:grid-cols-2 gap-12 lg:gap-16"
// Gap: 48px mobile, 64px desktop
```

**Four Column Footer:**
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
```

**Responsive Breakpoints:**
```
sm:  640px  - Mobile landscape
md:  768px  - Tablet
lg:  1024px - Desktop
xl:  1280px - Large desktop
```

---

## Components

### Buttons

#### Primary Button
```jsx
<button className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl shadow-orange-500/30">
  Button Text
</button>
```

**Specs:**
- Padding: 32px horizontal, 16px vertical
- Font: 600 weight (Semibold)
- Border radius: Full (pill shape)
- Hover: Darker background + lift effect (-2px)
- Shadow: Large with orange tint
- Transition: All properties, 200ms

#### Secondary Button
```jsx
<button className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200">
  Button Text
</button>
```

**Specs:**
- Same padding as primary
- 2px border
- Hover: Inverted colors
- No shadow

#### Disabled State
```jsx
className="disabled:bg-slate-400 disabled:cursor-not-allowed"
```

### Forms

#### Text Input
```jsx
<input
  type="text"
  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 outline-none"
  placeholder="Placeholder text"
/>
```

**Specs:**
- Padding: 16px horizontal, 12px vertical
- Border: 1px solid slate-300
- Border radius: 8px (rounded-lg)
- Focus: 2px orange ring
- Transitions: All, 200ms

#### Input with Icon
```jsx
<div className="relative">
  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
  <input
    type="email"
    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 outline-none"
  />
</div>
```

**Icon positioning:**
- Left: 12px
- Vertical: Centered
- Input padding-left: 44px (to accommodate icon)

#### Textarea
```jsx
<textarea
  rows={4}
  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 outline-none resize-none"
/>
```

#### Form Labels
```jsx
<label className="block text-sm font-medium text-slate-900 mb-2">
  Label Text *
</label>
```

### Cards

#### White Card
```jsx
<div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
  Card Content
</div>
```

**Specs:**
- Background: White
- Border radius: 16px (rounded-2xl)
- Shadow: Extra large (2xl)
- Padding: 32px mobile, 40px desktop

#### Chat Bubble (Incoming)
```jsx
<div className="max-w-xs px-4 py-3 rounded-2xl bg-slate-100 text-slate-900 rounded-tl-sm">
  Message text
</div>
```

#### Chat Bubble (Outgoing)
```jsx
<div className="max-w-xs px-4 py-3 rounded-2xl bg-orange-500 text-white rounded-tr-sm">
  Message text
</div>
```

**Specs:**
- Max width: 320px
- Padding: 16px horizontal, 12px vertical
- Border radius: 16px with one sharp corner
- Text size: 14px (text-sm)

### Navigation

#### Header
```jsx
<header className="sticky top-0 z-50 bg-white shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-18">
      {/* Content */}
    </div>
  </div>
</header>
```

**Specs:**
- Position: Sticky
- Height: 72px (h-18)
- Z-index: 50
- Shadow: Small

#### Navigation Link
```jsx
<a href="#section" className="text-slate-900 font-medium hover:text-orange-500 transition-colors duration-200">
  Link Text
</a>
```

**Specs:**
- Font weight: 500 (Medium)
- Hover: Orange color
- Transition: 200ms

#### Mobile Menu
```jsx
<div className="md:hidden bg-white border-t">
  <div className="px-4 py-4 space-y-3">
    {/* Menu items */}
  </div>
</div>
```

### Badges & Labels

#### Success Badge
```jsx
<div className="flex items-center gap-2 px-4 py-3 bg-green-50 rounded-xl border border-green-200">
  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
  <span className="text-sm font-medium text-green-800">Success message</span>
</div>
```

#### Uppercase Label
```jsx
<p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
  Label Text
</p>
```

### Lists

#### Feature List
```jsx
<div className="flex items-start gap-3">
  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
  <div>
    <p className="text-white font-semibold">Feature Title</p>
    <p className="text-slate-400">Feature description</p>
  </div>
</div>
```

**Icon positioning:**
- Size: 24px (w-6 h-6)
- Top margin: 4px (mt-1) for alignment
- Flex-shrink: 0 (prevents squishing)

---

## UI Patterns

### Hero Section Pattern

```jsx
<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="space-y-8">
        {/* Left column: Text content */}
      </div>
      <div className="relative hidden lg:block">
        {/* Right column: Visual element */}
      </div>
    </div>
  </div>
</section>
```

**Key Features:**
- Light gradient background
- Two-column layout
- Visual hidden on mobile
- Generous spacing

### Dark Section Pattern (CTA)

```jsx
<section className="py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Content */}
  </div>
</section>
```

**Key Features:**
- Dark gradient background
- Grid pattern overlay
- Relative positioning for layering

### Grid Pattern (CSS)

```css
.bg-grid-pattern {
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

### Blur Orbs (Decorative)

```jsx
<div className="absolute -top-8 -right-8 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
<div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
```

**Specs:**
- Size: 288px (w-72 h-72)
- Position: Absolute, positioned outside container
- Blur: Extra large (blur-3xl)
- Opacity: 30%

---

## Responsive Design

### Mobile-First Approach

All designs start mobile and scale up:
```jsx
// Mobile default
className="text-4xl"

// Tablet and up
className="text-4xl md:text-5xl"

// Desktop
className="text-4xl lg:text-6xl"
```

### Common Responsive Patterns

#### Hide on Mobile
```jsx
className="hidden lg:block"
```

#### Show on Mobile Only
```jsx
className="md:hidden"
```

#### Responsive Grid
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
```

#### Responsive Flex
```jsx
className="flex flex-col sm:flex-row"
```

#### Responsive Spacing
```jsx
className="space-y-8 lg:space-y-12"  // Vertical spacing
className="gap-4 lg:gap-8"           // Grid/flex gap
```

### Breakpoint Guidelines

**Mobile (< 640px):**
- Single column layouts
- Stacked navigation
- Full-width buttons
- Larger touch targets (44px minimum)
- Reduced padding

**Tablet (640px - 1024px):**
- Two-column layouts where appropriate
- Horizontal navigation appears
- Side-by-side CTAs
- Balanced spacing

**Desktop (1024px+):**
- Multi-column layouts
- Complex grid systems
- Hover effects enabled
- Maximum content width: 1280px

---

## Animations & Interactions

### Transition System

**Standard Transition:**
```jsx
className="transition-all duration-200"
```
- Properties: All
- Duration: 200ms
- Easing: Default (ease)

**Color Transition:**
```jsx
className="transition-colors duration-200"
```
- Properties: Color properties only
- Duration: 200ms

### Hover Effects

#### Button Lift
```jsx
className="transform hover:-translate-y-0.5 transition-all duration-200"
```
- Movement: -2px vertical
- Combined with shadow increase

#### Shadow Expansion
```jsx
className="shadow-lg hover:shadow-xl"
```
- Base: Large shadow
- Hover: Extra large shadow

#### Color Change
```jsx
className="hover:bg-orange-600"
className="hover:text-orange-500"
```

#### Opacity Change
```jsx
className="hover:opacity-80"
```

### Focus States

**Standard Focus Ring:**
```jsx
className="focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
```
- Ring width: 2px
- Ring color: orange-500
- Border color: orange-500
- Remove default outline

### Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}
```

### Disabled States

```jsx
className="disabled:bg-slate-400 disabled:cursor-not-allowed disabled:opacity-50"
```

---

## Icons

### Icon Library

**Primary:** Lucide React
```bash
npm install lucide-react
```

### Icon Sizes

```jsx
// Small
<Icon className="w-4 h-4" />  // 16px

// Medium (Default)
<Icon className="w-5 h-5" />  // 20px

// Large
<Icon className="w-6 h-6" />  // 24px

// Extra Large
<Icon className="w-8 h-8" />  // 32px
```

### Commonly Used Icons

```jsx
import {
  Menu,           // Mobile menu
  X,              // Close menu
  Mail,           // Email
  MessageSquare,  // Chat
  Building2,      // Company
  CheckCircle,    // Success/Features
  Send,           // Submit
  Globe,          // Website
  Linkedin,       // Social
  Twitter         // Social
} from 'lucide-react';
```

### Icon Positioning

**Left Icon in Input:**
```jsx
<Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
```

**Icon with Text:**
```jsx
<div className="flex items-center gap-2">
  <Icon className="w-5 h-5" />
  <span>Text</span>
</div>
```

**Icon Button:**
```jsx
<button className="w-10 h-10 rounded-full flex items-center justify-center">
  <Icon className="w-5 h-5" />
</button>
```

---

## Best Practices

### Accessibility

1. **Semantic HTML**
   - Use proper heading hierarchy (h1, h2, h3)
   - Use `<nav>`, `<main>`, `<footer>` landmarks
   - Use `<button>` for interactions, `<a>` for navigation

2. **ARIA Labels**
   ```jsx
   <button aria-label="Toggle menu">
     <Menu />
   </button>
   ```

3. **Focus Management**
   - All interactive elements must be keyboard accessible
   - Visible focus indicators (focus rings)
   - Logical tab order

4. **Color Contrast**
   - Text on light background: slate-900 (AAA rating)
   - Text on dark background: white (AAA rating)
   - Minimum contrast ratio: 4.5:1 for normal text

5. **Alt Text**
   ```jsx
   <img src="/logo.png" alt="Digital Workforce Logo" />
   ```

### Performance

1. **Image Optimization**
   - Use appropriate formats (WebP when possible)
   - Lazy loading for below-fold images
   - Responsive images with srcset

2. **CSS**
   - Use Tailwind's purge to remove unused CSS
   - Minimize custom CSS
   - Use CSS transitions over JavaScript

3. **Fonts**
   - Use `font-display: swap` for web fonts
   - Preconnect to Google Fonts
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   ```

### Code Organization

1. **Component Structure**
   ```jsx
   // Imports
   import { Icon } from 'lucide-react';

   // Component
   export default function Component() {
     // State and hooks
     const [state, setState] = useState();

     // Event handlers
     const handleClick = () => {};

     // Render
     return (
       <div className="...">
         {/* JSX */}
       </div>
     );
   }

   // Sub-components (if simple and related)
   function SubComponent() {}
   ```

2. **Tailwind Classes Order**
   ```jsx
   // Layout > Spacing > Sizing > Colors > Typography > Effects > Interactions
   className="flex items-center gap-4 px-8 py-4 w-full bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-all"
   ```

3. **Responsive Classes**
   ```jsx
   // Mobile first, then breakpoints
   className="text-4xl md:text-5xl lg:text-6xl"
   ```

### Consistency

1. **Spacing**
   - Use the 8px grid system
   - Consistent section padding
   - Consistent component gaps

2. **Colors**
   - Stick to defined palette
   - Use semantic colors (orange for primary, green for success)
   - Maintain contrast ratios

3. **Typography**
   - Use defined type scale
   - Consistent line heights
   - Consistent font weights for similar elements

4. **Border Radius**
   - Buttons: `rounded-full` (pills)
   - Cards: `rounded-2xl` (16px)
   - Inputs: `rounded-lg` (8px)
   - Small elements: `rounded-xl` (12px)

### Error Handling

1. **Form Validation**
   ```jsx
   {error && (
     <div className="p-4 bg-red-50 text-red-700 rounded-xl text-center text-sm font-medium">
       {error}
     </div>
   )}
   ```

2. **Loading States**
   ```jsx
   <button disabled={isLoading}>
     {isLoading ? 'Loading...' : 'Submit'}
   </button>
   ```

3. **Success Messages**
   ```jsx
   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
     <CheckCircle className="w-8 h-8 text-green-600" />
   </div>
   ```

---

## Design Checklist

### Before Launching a New Component

- [ ] Follows spacing system (8px grid)
- [ ] Uses defined color palette
- [ ] Responsive on all breakpoints (mobile, tablet, desktop)
- [ ] Includes hover/focus states
- [ ] Includes disabled states (if applicable)
- [ ] Has proper accessibility attributes
- [ ] Uses semantic HTML
- [ ] Follows typography scale
- [ ] Has appropriate transitions
- [ ] Tested on different screen sizes
- [ ] Color contrast is accessible (4.5:1 minimum)
- [ ] Interactive elements have min 44px touch target
- [ ] Works with keyboard navigation
- [ ] Loading/error states implemented (if applicable)

### Before Launching a New Page

- [ ] Consistent header and footer
- [ ] Proper SEO meta tags (title, description, OG tags)
- [ ] Smooth scroll behavior
- [ ] Logical heading hierarchy (h1 → h2 → h3)
- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] CTAs are clear and prominent
- [ ] Mobile navigation works properly
- [ ] Page loads in under 3 seconds
- [ ] No console errors
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices

---

## Version History

### Version 1.0 (November 26, 2025)
- Initial design guide creation
- Comprehensive component documentation
- Color system definition
- Typography scale
- Responsive patterns
- Animation guidelines

---

## Resources

### Tools
- **Design:** Figma
- **Icons:** Lucide React (https://lucide.dev)
- **Fonts:** Google Fonts - Inter
- **CSS Framework:** Tailwind CSS v3.4
- **Component Library:** React 18

### External Links
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Contact

For questions about this design guide or to suggest improvements, contact the Digital Workforce development team.

**Website:** https://digitalworkforce.one

---

**© 2025 Digital Workforce. All rights reserved.**
