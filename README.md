# 🚀 Submerge - Subscription Calculator

A modern, responsive subscription calculator that helps users track and visualize their subscription spending across multiple services and currencies.

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-FF0055?style=flat-square&logo=framer)

## ✨ Features

### 🎯 Core Functionality
- **Multi-tier Subscription Support**: Choose from different plans (Basic, Standard, Premium) for each service
- **International Pricing**: Support for 6 currencies (USD, EUR, GBP, CHF, JPY, AUD)
- **Billing Flexibility**: Switch between monthly and yearly billing for each subscription
- **Real-time Calculations**: Instant cost updates as you add/remove subscriptions

### 📊 Data Visualization
- **Interactive Donut Chart**: Visual breakdown of spending by category
- **Spending Analytics**: Category-wise cost analysis
- **Active Subscriptions List**: Detailed view of all selected services

### 🎨 User Experience
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Professional animations powered by Framer Motion
- **Expandable Categories**: Collapsible sections for better organization
- **Professional UI**: Clean, modern interface with no visual clutter

### 📱 Responsive Features
- **Mobile-first Design**: Fully functional on all screen sizes
- **Adaptive Layouts**: Grid layouts that adjust to screen size
- **Touch-friendly**: Optimized for mobile interactions
- **No Horizontal Overflow**: Perfectly contained on all devices

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 15.4.4](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) for utility-first styling
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for professional animations
- **Charts**: [Recharts](https://recharts.org/) for data visualization
- **Icons**: [Lucide React](https://lucide.dev/) for consistent iconography
- **Fonts**: Satoshi Variable Font for modern typography

## 🏗️ Project Structure

```
submerge/
├── app/
│   ├── components/ui/          # Reusable UI components
│   ├── style/fonts/           # Custom font files
│   ├── globals.css            # Global styles and Tailwind imports
│   ├── layout.tsx             # Root layout with font configuration
│   └── page.tsx               # Main subscription calculator page
├── lib/
│   └── subscriptions.ts       # Subscription data and utility functions
├── public/                    # Static assets
├── STYLE_GUIDE.md            # Design system guidelines
├── TAILWIND_SETUP_GUIDE.md   # Tailwind v4 setup instructions
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/submerge.git
   cd submerge
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
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 📋 Subscription Data

### Supported Services

**Streaming Services:**
- Netflix (Basic, Standard, Premium)
- Disney+ (Standard)
- Prime Video (Standard)

**Music Services:**
- Spotify (Individual, Family)
- Apple Music (Individual, Family)

**Productivity Tools:**
- GitHub Copilot (Individual, Business)

### Supported Countries & Currencies

| Country | Currency | Symbol |
|---------|----------|---------|
| United States | USD | $ |
| Germany | EUR | € |
| United Kingdom | GBP | £ |
| Switzerland | CHF | CHF |
| Japan | JPY | ¥ |
| Australia | AUD | A$ |

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6)
- **Secondary**: Gray (#6B7280)
- **Accent**: Green (#10B981)
- **Category Colors**: Purple, Cyan, Blue, Green, Amber, Red

### Typography
- **Font Family**: Satoshi Variable
- **Weights**: 300-900
- **Responsive Scaling**: Mobile-first approach

### Animation Principles
- **Duration**: 0.2-0.5s for optimal feel
- **Easing**: Smooth transitions with `ease-in-out`
- **Staggered Loading**: Sequential reveals for better UX
- **Hover States**: Subtle feedback on all interactive elements

## 🔧 Configuration

### Adding New Subscriptions

1. **Open** `lib/subscriptions.ts`
2. **Add service** to the `subscriptions` array:

```typescript
{
  id: 'service-name',
  name: 'Service Name',
  logo: '',
  category: 'streaming', // or 'music', 'productivity', etc.
  plans: [
    {
      id: 'service-plan-id',
      name: 'Plan Name',
      pricing: {
        US: { monthly: 9.99, yearly: 99.99, currency: 'USD' },
        // Add other countries...
      },
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    }
  ],
}
```

### Adding New Countries

1. **Add country** to the `countries` array
2. **Update pricing** for all subscriptions to include the new country

## 📱 Usage Examples

### Basic Usage
1. **Select Country**: Choose your country from the dropdown
2. **Browse Categories**: Expand categories to see available services
3. **Choose Plans**: Click on subscription plans to add them
4. **View Summary**: Check your total monthly/yearly costs
5. **Analyze Spending**: View the breakdown chart and active subscriptions

### Advanced Features
- **Switch Billing**: Toggle between monthly/yearly for each subscription
- **Category Management**: Collapse/expand categories for better organization
- **Multi-plan Selection**: Choose different tiers from the same service

## 🔍 Development

### Key Components

- **`page.tsx`**: Main calculator interface with state management
- **`subscriptions.ts`**: Data layer with pricing and service information
- **`globals.css`**: Styling configuration and custom properties

### State Management
- **React Hooks**: `useState` for component state
- **useMemo**: Optimized calculations for performance
- **Local State**: No external state management needed

### Performance Optimizations
- **Memoized Calculations**: Efficient total and chart data computation
- **Optimized Animations**: Smooth 60fps animations
- **Responsive Images**: Proper sizing for all screen sizes

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain responsive design principles
- Add proper animations for new components
- Update subscription data with accurate pricing
- Test on multiple screen sizes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Maruthan**
- Website: [maruthan.com](https://maruthan.com)
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Recharts** for beautiful chart components
- **Lucide** for the icon library

---

<div align="center">
  <strong>Built with ❤️ using Next.js, TypeScript, and Tailwind CSS</strong>
</div>
