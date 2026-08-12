---
name: Vortex Digital
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e484f'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7980'
  outline-variant: '#bdc8d1'
  surface-tint: '#00668a'
  primary: '#00668a'
  on-primary: '#ffffff'
  primary-container: '#3abef9'
  on-primary-container: '#004a66'
  inverse-primary: '#7cd0ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#855300'
  on-tertiary: '#ffffff'
  tertiary-container: '#f2a12c'
  on-tertiary-container: '#623c00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7cd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
  surface-white: '#FFFFFF'
  text-main: '#1E293B'
  text-muted: '#64748B'
  border-subtle: '#E2E8F0'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-x: 32px
  section-padding: 120px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system is rooted in a **Corporate / Modern** aesthetic with a focus on high-fidelity execution and technical precision. It aims to evoke feelings of reliability, innovation, and clarity. By utilizing a "light mode" first approach, the system maximizes legibility and creates an open, welcoming environment for enterprise and startup clients alike. 

The visual narrative is driven by generous whitespace, sharp grid alignment, and subtle depth through tonal layering. It avoids the clutter of traditional tech sites in favor of a refined, editorial-influenced layout that highlights the "Vortex" mission of transforming ideas into digital reality.

## Colors
This design system utilizes a high-contrast light palette. The **Primary Blue** (#3ABEF9) is the core brand identifier, used for calls to action, active states, and key iconography. 

The **Secondary Navy** (#0F172A) provides grounding for headers, heavy typography, and dark-themed section breaks. The background is strictly **White** (#FFFFFF), supported by a very light **Neutral Slate** (#F8FAFC) for container backgrounds to create subtle distinction without breaking the clean aesthetic. Success, warning, and error states should be derived from standard semantic tokens but leaned toward the primary blue's saturation level for consistency.

## Typography
We use **Inter** exclusively to ensure a systematic and utilitarian feel that remains modern and approachable. 

- **Display & Headlines:** Use tight letter-spacing and heavy weights (700-800) to create a strong visual hierarchy. Large display type should be used sparingly for hero sections.
- **Body Text:** Optimized for readability with a generous line height (1.5 - 1.6). 
- **Labels:** Used for overlines and small UI elements, always in semi-bold with increased letter-spacing to ensure legibility at small sizes.

## Layout & Spacing
The design system follows a **Fixed Grid** model for desktop, centered within the viewport with a maximum width of 1280px. 

- **Desktop (1280px+):** 12-column grid, 24px gutters.
- **Tablet (768px - 1024px):** 8-column grid, 16px gutters, 32px side margins.
- **Mobile (Under 768px):** 4-column grid, 16px gutters, 20px side margins.

Vertical rhythm is maintained through "section-padding" blocks (120px) to give the content room to breathe, emphasizing the "clean" and "professional" aesthetic.

## Elevation & Depth
Depth is achieved through **Ambient Shadows** and **Tonal Layers**. We avoid heavy black shadows in favor of soft, diffused blurs tinted with the secondary navy color at very low opacities (5-10%).

- **Level 1 (Base):** Flat white surface with a 1px subtle border (#E2E8F0).
- **Level 2 (Cards/Inputs):** Soft shadow (Y: 4px, Blur: 20px) to indicate interactivity.
- **Level 3 (Modals/Dropdowns):** Pronounced shadow (Y: 10px, Blur: 40px) to separate the element from the main layout.
- **Glassmorphism:** Use sparingly for navigation bars or overlay tags, employing a `backdrop-filter: blur(12px)` and a semi-transparent white background (80% opacity).

## Shapes
This design system uses a **Rounded** (Level 2) shape language. Standard components like buttons and input fields utilize a 0.5rem (8px) corner radius. Larger containers, such as feature cards or testimonial blocks, use the `rounded-lg` (16px) or `rounded-xl` (24px) tokens to soften the technical precision of the grid.

## Components
- **Buttons:** Primary buttons feature a solid primary-blue fill with white text. Secondary buttons use a white fill with a subtle border and navy text. Use "Uppercase" label styling for high-priority CTAs.
- **Cards:** Feature cards should have a white background, Level 1 or 2 elevation, and 16px internal padding. Icons within cards should be housed in a soft-blue circular container.
- **Input Fields:** Use a 1px slate border that transitions to the primary blue on focus. Include clear placeholder text in `text-muted`.
- **Chips/Badges:** Small, pill-shaped tags used for categories. Use a light tint of the primary color (10% opacity) for the background with a high-contrast text color.
- **Lists:** Clean, icon-led lists with 12px vertical spacing between items. Use the primary blue for checkmarks or bullet points to maintain brand alignment.
- **Navigation:** A sticky top bar using glassmorphism (white 80% + blur) to maintain context as the user scrolls through long-form technical content.