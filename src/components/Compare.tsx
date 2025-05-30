
import React from 'react';
import { Joystick, Eye, Sun, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Compare = () => {
  const compareData = [
    {
      name: "PulsyLite",
      price: "৳15,000 - ৳25,000",
      controls: ["Joystick", "Voice"],
      power: "Manual + Electric Assist",
      battery: "4-6 hours",
      weight: "18-22 kg",
      highlight: "Best Entry Point",
      color: "border-pulsy-blue"
    },
    {
      name: "PulsyGo",
      price: "৳45,000 - ৳65,000", 
      controls: ["Joystick", "Voice", "App"],
      power: "Full Electric + Solar",
      battery: "8-12 hours",
      weight: "25-30 kg",
      highlight: "Most Popular",
      color: "border-pulsy-green"
    },
    {
      name: "PulsyPro",
      price: "৳85,000 - ৳120,000",
      controls: ["Joystick", "Voice", "Eye", "Muscle", "App"],
      power: "Full Electric + Solar",
      battery: "10-15 hours",
      weight: "28-35 kg",
      highlight: "Most Advanced",
      color: "border-purple-400"
    },
    {
      name: "PulsyKit",
      price: "৳8,000 - ৳15,000",
      controls: ["Joystick", "Basic Voice"],
      power: "Retrofit Electric",
      battery: "4-8 hours",
      weight: "3-5 kg (kit only)",
      highlight: "DIY Solution",
      color: "border-orange-400"
    }
  ];

  const getControlIcons = (controls) => {
    const iconMap = {
      "Joystick": <Joystick className="w-5 h-5" />,
      "Voice": "🎤",
      "Basic Voice": "🎤",
      "App": <Smartphone className="w-5 h-5" />,
      "Eye": <Eye className="w-5 h-5" />,
      "Muscle": "💪"
    };

    return controls.map((control, index) => (
      <div key={index} className="flex items-center space-x-1">
        {typeof iconMap[control] === 'string' ? (
          <span>{iconMap[control]}</span>
        ) : (
          iconMap[control]
        )}
        <span className="text-sm">{control}</span>
      </div>
    ));
  };

  return (
    <section id="compare" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Our Models</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect wheelchair solution that fits your needs and budget
          </p>
        </div>

        {/* Mobile-first scrollable cards */}
        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 min-w-max lg:grid lg:grid-cols-4 lg:gap-6 lg:space-x-0">
            {compareData.map((product, index) => (
              <Card 
                key={product.name}
                className={`min-w-[280px] lg:min-w-0 border-2 ${product.color} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardHeader className="text-center">
                  <div className="bg-pulsy-blue text-white px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                    {product.highlight}
                  </div>
                  <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                  <div className="text-2xl font-bold text-pulsy-blue">{product.price}</div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Control Systems</h4>
                    <div className="space-y-1">
                      {getControlIcons(product.controls)}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Power Type</h4>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Sun className="w-4 h-4 mr-1 text-yellow-500" />
                      {product.power}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Battery Life</h4>
                    <p className="text-sm text-gray-600">🔋 {product.battery}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Weight</h4>
                    <p className="text-sm text-gray-600">⚖️ {product.weight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="lg:hidden text-center mt-4">
          <p className="text-sm text-gray-500">← Scroll to see all models →</p>
        </div>
      </div>
    </section>
  );
};

export default Compare;
