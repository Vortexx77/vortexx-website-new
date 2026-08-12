# Icons Reference Guide 🎨

This document shows all the professional Lucide React icons used throughout the VORTEXX website.

## 📍 Icon Locations

### 1. **Hero Section**
```tsx
<ArrowRight size={20} />
```
- **Location**: All CTA buttons in hero slides
- **Color**: Inherits button color (gray-900 on blue-400 bg)
- **Animation**: Translates right on hover
- **Purpose**: Visual indicator for CTAs

---

### 2. **Tech Craftsmanship Section**
```tsx
<ArrowRight size={16} />
```
- **Location**: "Explore Capabilities" link
- **Color**: Blue-400
- **Container**: 40px circular border with hover fill
- **Animation**: Rotates/scales on hover

---

### 3. **Engineered Collaboration Section**
```tsx
<ArrowRight size={20} />
```
- **Location**: "Meet The Team" button
- **Color**: Gray-900 (on blue-400 bg)
- **Animation**: Translates right on hover

---

### 4. **Impact/Metrics Section** ⭐ PRIMARY ICON SHOWCASE

#### Happy Clients Card
```tsx
<Users className="text-blue-400/60 group-hover:text-blue-400" size={24} />
```
- **Metric**: 50+
- **Position**: Top-right corner of card
- **Color**: Blue-400 at 60% opacity, 100% on hover
- **Icon**: Users/People icon

#### Projects Delivered Card
```tsx
<Target className="text-blue-400/60 group-hover:text-blue-400" size={24} />
```
- **Metric**: 100+
- **Position**: Top-right corner of card
- **Color**: Blue-400 at 60% opacity, 100% on hover
- **Icon**: Target/Bullseye icon

#### Years Experience Card
```tsx
<Award className="text-blue-400/60 group-hover:text-blue-400" size={24} />
```
- **Metric**: 2yrs
- **Position**: Top-right corner of card
- **Color**: Blue-400 at 60% opacity, 100% on hover
- **Icon**: Award/Trophy icon

#### Satisfaction Rate Card
```tsx
<TrendingUp className="text-blue-400/60 group-hover:text-blue-400" size={24} />
```
- **Metric**: 98%
- **Position**: Top-right corner of card
- **Color**: Blue-400 at 60% opacity, 100% on hover
- **Icon**: Trending Up/Growth icon

---

### 5. **Testimonial Section**

#### Star Rating
```tsx
<Star className="w-6 h-6 fill-current" />
```
- **Count**: 5 stars
- **Color**: Blue-600
- **Style**: Filled stars
- **Purpose**: 5-star rating display

#### Navigation Buttons
```tsx
<ChevronLeft className="group-hover:-translate-x-1" size={20} />
<ChevronRight className="group-hover:translate-x-1" size={20} />
```
- **Location**: Previous/Next testimonial buttons
- **Colors**: 
  - Left: Border button (gray-300 border, hover blue-600)
  - Right: Filled button (gray-900 bg, hover blue-600)
- **Animation**: Translates left/right on hover

---

### 6. **CTA Section**

#### Schedule Consultation Button
```tsx
<Calendar size={20} />
```
- **Color**: Gray-900 (on blue-400 bg)
- **Purpose**: Visual for scheduling action
- **Animation**: Follows button hover states

#### Explore Services Button
```tsx
<ArrowRight className="text-sm group-hover/btn:translate-x-1" size={16} />
```
- **Location**: Inside circular container
- **Color**: White (glass panel button)
- **Container**: 32px circle with border
- **Animation**: Translates right + container fills white on hover

---

## 🎨 Icon Design System

### Sizes
- **Small**: 16px (nested in containers)
- **Medium**: 20px (buttons and CTAs)
- **Large**: 24px (metric cards)

### Colors
- **Primary Blue**: `text-blue-400` or `text-blue-600`
- **Faded Blue**: `text-blue-400/60` (60% opacity)
- **White**: `text-white` (on dark backgrounds)
- **Gray**: `text-gray-900` (on light backgrounds)

### Hover Effects
- **Translation**: Icons move in direction of action
- **Color Change**: Opacity increases or color shifts
- **Container Fill**: Background fills on hover
- **Scale**: Subtle scale-up (1.05-1.1x)

---

## 📦 Icon Library

All icons are from **Lucide React** (v0.344.0):

```tsx
import { 
  ArrowRight,      // CTAs and navigation
  Users,           // Clients/People metric
  Target,          // Goals/Projects metric
  Award,           // Achievement/Experience metric
  TrendingUp,      // Growth/Success metric
  ChevronLeft,     // Previous navigation
  ChevronRight,    // Next navigation
  Star,            // Rating display
  Calendar         // Scheduling/Events
} from 'lucide-react';
```

---

## ✨ Animation Classes

Icons utilize these Tailwind classes for smooth animations:

```css
/* Translation */
.group-hover:translate-x-1   /* Slide right 4px */
.group-hover:-translate-x-1  /* Slide left 4px */
.group-hover:translate-x-2   /* Slide right 8px */

/* Color Transitions */
.transition-colors duration-300
.group-hover:text-blue-400

/* Transform Transitions */
.transition-transform duration-300
.group-hover:scale-110
```

---

## 🎯 Icon vs Emoji Replacements

| Old Emoji | New Icon | Component | Location |
|-----------|----------|-----------|----------|
| 😊 | `<Users />` | Happy Clients | Metrics Card |
| 📦 | `<Target />` | Projects | Metrics Card |
| ⏱️ | `<Award />` | Experience | Metrics Card |
| 📈 | `<TrendingUp />` | Satisfaction | Metrics Card |
| ⭐ | `<Star />` | Rating | Testimonial |
| 📅 | `<Calendar />` | Schedule | CTA Button |
| ➡️ | `<ArrowRight />` | Navigation | All CTAs |
| ⬅️ | `<ChevronLeft />` | Previous | Testimonial Nav |
| ➡️ | `<ChevronRight />` | Next | Testimonial Nav |

---

## 🚀 Usage Guidelines

### Do's ✅
- Use consistent sizes within sections
- Apply hover states for interactivity
- Use semantic icons that match content
- Maintain accessibility with aria-labels
- Use Lucide React for all new icons

### Don'ts ❌
- Don't mix icon libraries
- Don't use inline SVGs for Lucide icons
- Don't forget hover states
- Don't use oversized icons (>32px)
- Don't use emojis in production UI

---

**Last Updated**: Implementation Complete
**Icon Library**: Lucide React v0.344.0
**Total Unique Icons**: 9
