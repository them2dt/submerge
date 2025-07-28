# Votables Application Style Guide

This document outlines the visual design system, including typography, color palette, iconography, and component styling for the Votables web application. The goal is to maintain a clean, modern, and cohesive user experience.

### 1. Overall Aesthetic

The application's aesthetic is **light, spacious, and user-friendly**. It combines a soft, professional color palette with clean typography and subtle interactive elements. The design prioritizes readability and clarity, using generous white space, rounded corners, and soft shadows to create a friendly and approachable interface.

### 2. Color Palette

The color scheme is built around a primary gradient, supported by a set of neutral tones and functional accent colors.

*   **Primary Gradient (Hero Section)**: A soft, vertical gradient that creates a welcoming and airy feel.
    *   **From**: Sky Blue - `#B8E5FF`
    *   **Via**: Pale Cyan - `#C5F5FA`
    *   **To**: Soft Teal - `#97D7DD`

*   **Accent Colors**: Used for icons, status indicators, and interactive elements.
    *   **Blue**: `#3B82F6` (Primary actions, links)
    *   **Green**: `#16A34A` (Success states, "Yes" votes)
    *   **Purple**: `#9333EA` (Feature highlights)
    *   **Yellow**: `#FBBF24` (Attention-grabbing icons)
    *   **Teal**: `#14B8A6` (Secondary accents)

*   **Neutral Colors (Tailwind CSS `gray` scale)**: Used for text, backgrounds, and borders to ensure a clean and readable layout.
    *   **Text**: `gray-900` (Headings), `gray-800` (Sub-headings), `gray-600` (Body text), `gray-500` (Subtle text, metadata)
    *   **Backgrounds**: `white`, `gray-50` (Slightly off-white sections), `gray-900` (Dark-themed components)
    *   **Borders**: `gray-200`

### 3. Typography

The typography is based on a modern, geometric sans-serif font, which provides excellent readability and a contemporary feel.

*   **Primary Font Family**: **Clash Grotesk**. This is a variable font, allowing for a wide range of weights and styles without loading multiple font files.
    *   **File**: `ClashGrotesk-Variable.ttf`
*   **Font Weights**:
    *   **Medium (`font-medium`)**: Used for primary text and body content.
    *   **Semibold (`font-semibold`)**: Used for section headers and card titles.
    *   **Bold (`font-bold`)**: Used for the primary logo/wordmark.
*   **Font Sizing**: We use Tailwind's typographic scale to maintain consistency.
    *   **Headings**: `text-5xl`, `text-4xl`, `text-3xl`
    *   **Sub-headings**: `text-2xl`, `text-xl`
    *   **Body**: `text-lg`, `text-base`
    *   **Subtle/Metadata**: `text-sm`, `text-xs`

### 4. Iconography

Icons are used to provide clear visual cues and improve usability without cluttering the interface.

*   **Icon Library**: **Lucide React** (`lucide-react`).
*   **Style**: The icons are chosen for their clean, outline-based style, which complements the overall aesthetic. They are consistently sized and colored according to their context.
    *   **Size**: `w-6 h-6` for primary icons, `w-5 h-5` or `w-4 h-4` for secondary/inline icons.
    *   **Color**: The icon color typically matches the accent color of its parent feature (e.g., a blue icon in a blue-themed container).

### 5. Core UI Components & Patterns

*   **Containers & Cards**:
    *   Cards use large corner radii (`rounded-xl` or `rounded-2xl`) and soft, pronounced shadows (`shadow-xl` or `shadow-2xl`) to lift them off the background.
    *   Padding is generous (`p-6` or `p-8`) to ensure content has ample breathing room.
*   **Buttons**:
    *   **Primary CTA**: Black background, white text, fully rounded (`rounded-full` or `rounded-lg`), with a subtle transition on hover.
    *   **Secondary/Interactive Elements**: Typically use a light gray background (`bg-gray-100`) that darkens on hover (`hover:bg-gray-200`).
*   **Layout**:
    *   The layout is built on **CSS Grid** and **Flexbox** for responsive and consistent alignment.
    *   Sections are separated by significant vertical space (`py-20` or `pt-32`) to clearly delineate content areas.

### 6. Animation & Interactivity

Subtle animations are used to enhance the user experience by providing feedback and guiding focus.

*   **Animation Library**: **Framer Motion** (`framer-motion`).
*   **Usage**:
    *   **State Transitions**: Used in the `Proposal` component to smoothly animate between the voting and results states.
    *   **Reveals**: Elements like the "Voted" badge and percentage results fade in (`opacity`, `scale`) to draw attention without being jarring.
    *   **Layout Animations**: The `layout` prop is used to smoothly animate changes in component size and position. 