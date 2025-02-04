import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Layers,
} from "lucide-react";

interface IStats {
  value: string;
  label: string;
}

interface IFeatures {
  icon: React.ReactElement;
  title: string;
  description: string;
}

interface ITestimonials {
  name: string;
  role: string;
  image: string;
  quote: string;
}
// Stats Data
export const statsData: IStats[] = [
  {
    value: "75K+",
    label: "Active Users",
  },
  {
    value: "$3.5B+",
    label: "Transactions Tracked",
  },
  {
    value: "99.99%",
    label: "System Uptime",
  },
  {
    value: "4.8/5",
    label: "User Satisfaction",
  },
];

// Features Data
export const featuresData: IFeatures[] = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "AI-Powered Insights",
    description:
      "Gain deep insights into your financial health with smart analytics.",
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Automated Expense Tracking",
    description:
      "Let AI categorize and analyze your expenses effortlessly in real-time.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Intelligent Budgeting",
    description: "Get AI-driven budget recommendations tailored to your goals.",
  },
  {
    icon: <Layers className="h-8 w-8 text-blue-600" />,
    title: "Manage Multiple Categories",
    description:
      "Organize your expenses and income across different categories.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Global Currency Support",
    description: "Track and convert multiple currencies with real-time rates.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Smart Alerts & Predictions",
    description: "Stay ahead with personalized financial alerts and forecasts.",
  },
];

// How It Works Data
export const howItWorksData: IFeatures[] = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Sign Up Instantly",
    description:
      "Create your account in minutes with a fast and secure onboarding process.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time.",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Personalized Insights",
    description:
      "Receive AI-powered suggestions and reports to optimize your financial habits.",
  },
];

// Testimonials Data
export const testimonialsData: ITestimonials[] = [
  {
    name: "David Williams",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    quote:
      "ZenWealth has completely changed how I handle my business and personal finances. The insights are invaluable!",
  },
  {
    name: "Jessica Lee",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    quote:
      "With automated tracking and smart budgeting, I no longer stress about managing my income and expenses.",
  },
  {
    name: "Daniel Martinez",
    role: "Investment Consultant",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    quote:
      "The AI-driven financial reports are a game-changer. I recommend ZenWealth to anyone serious about their finances.",
  },
];
