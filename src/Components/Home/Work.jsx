import React from 'react';
import {
  TrendingUp,
  PieChart,
  Briefcase,
  Users,
  Search,
  Award
} from 'lucide-react';

const MetricCard = ({ icon: Icon, title, value, gradient }) => (
  <div className={`relative overflow-hidden rounded-lg shadow-lg p-6 transition-all hover:scale-105 ${gradient}`}>
    <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-gray-900 to-gray-600"></div>
    <div className="relative flex items-start gap-4">
      <div className="p-3 rounded-lg bg-white/20 backdrop-blur-sm">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-white/80">{title}</p>
        <p className="mt-2 text-xl font-semibold text-white">{value}</p>
      </div>
    </div>
  </div>
);

const HowWeWork = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "Total Profit Generated",
      value: "$100,800+ in < 1 year",
      gradient: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      icon: PieChart,
      title: "Profit Margins",
      value: "50-70% average",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      icon: Briefcase,
      title: "Investment in Startups",
      value: "₹1 crore in 5+ startups",
      gradient: "bg-gradient-to-br from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "Influencer Network",
      value: "500+ USA-based influencers",
      gradient: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      icon: Search,
      title: "Amazon Visibility",
      value: "First page within 1 month",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Expert Team",
      value: "25+ field specialists",
      gradient: "bg-gradient-to-br from-red-500 to-amber-600"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How We Help Indian Brands Grow in the USA
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ABES E-COM LLP has built a strong foundation in helping Indian brands scale and succeed 
          in the USA market through strategic partnerships, aggressive marketing, and 
          performance-driven investment models.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            icon={metric.icon}
            title={metric.title}
            value={metric.value}
            gradient={metric.gradient}
          />
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
