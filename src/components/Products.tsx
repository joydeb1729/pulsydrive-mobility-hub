
import React from 'react';
import { Joystick, Eye, Sun, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Products = () => {
  const products = [
    {
      name: "PulsyLite",
      description: "Manual wheelchair upgraded with smart joystick or voice control",
      features: ["Joystick Control", "Voice Control", "Lightweight Design", "Easy Installation"],
      icons: [Joystick, "🎤"],
      price: "৳15,000 - ৳25,000",
      highlight: "Best Entry Point",
      color: "bg-blue-50 border-pulsy-blue-light"
    },
    {
      name: "PulsyGo", 
      description: "Fully motorized smart wheelchair with multi-control systems",
      features: ["Joystick Control", "Voice Control", "Mobile App", "Solar Charging"],
      icons: [Joystick, "🎤", Smartphone, Sun],
      price: "৳45,000 - ৳65,000",
      highlight: "Most Popular",
      color: "bg-green-50 border-pulsy-green"
    },
    {
      name: "PulsyPro",
      description: "Full-featured wheelchair with advanced control systems",
      features: ["Joystick Control", "Voice Control", "Eye Control", "Muscle Signal", "Mobile App"],
      icons: [Joystick, "🎤", Eye, "💪", Smartphone],
      price: "৳85,000 - ৳120,000",
      highlight: "Most Advanced",
      color: "bg-purple-50 border-purple-400"
    },
    {
      name: "PulsyKit",
      description: "DIY upgrade kit to convert any manual wheelchair to smart",
      features: ["Universal Compatibility", "Easy Installation", "Basic Controls", "Affordable"],
      icons: ["🔧", Joystick, "⚡"],
      price: "৳8,000 - ৳15,000",
      highlight: "DIY Solution",
      color: "bg-orange-50 border-orange-400"
    }
  ];

  const renderIcon = (icon, index) => {
    if (typeof icon === 'string') {
      return <span key={index} className="text-2xl">{icon}</span>;
    }
    const IconComponent = icon;
    return <IconComponent key={index} className="w-6 h-6 text-pulsy-blue" />;
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Smart Wheelchair Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of affordable, innovative wheelchairs designed for independence and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.name} 
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${product.color}`}
            >
              {/* Highlight Badge */}
              <div className="absolute top-4 right-4 bg-pulsy-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                {product.highlight}
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {product.name}
                </CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Feature Icons */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {product.icons.map((icon, iconIndex) => renderIcon(icon, iconIndex))}
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-pulsy-green rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-pulsy-blue mb-4">
                    {product.price}
                  </div>
                  <Button className="w-full bg-pulsy-blue hover:bg-pulsy-blue-light text-white">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
