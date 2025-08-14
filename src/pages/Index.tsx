import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSlider from '@/components/home/HeroSlider';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Shield, Heart, Star } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Exceptional Craftsmanship",
      description: "Each piece is meticulously handcrafted by master artisans with decades of experience."
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "We stand behind our quality with comprehensive warranty coverage for all our jewelry."
    },
    {
      icon: Heart,
      title: "Ethical Sourcing",
      description: "All our diamonds and precious stones are ethically sourced and conflict-free."
    },
    {
      icon: Star,
      title: "Custom Design",
      description: "Work with our designers to create a unique piece that tells your personal story."
    }
  ];

  const collections = [
    {
      name: "Engagement Rings",
      description: "Timeless symbols of eternal love",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Necklaces",
      description: "Elegant pieces for every occasion",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Earrings",
      description: "Sophisticated details that shine",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Bracelets",
      description: "Delicate beauty for your wrist",
      image: "/api/placeholder/400/500"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <section className="section-spacing bg-background-subtle">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Why Choose Anant Gems"
            title="Infinite Elegance in Every Detail"
            description="Discover what makes our jewelry exceptional through our commitment to quality, craftsmanship, and ethical practices."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="border-0 shadow-subtle bg-background hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-full mb-6">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="section-spacing">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Collections"
            title="Curated for Timeless Beauty"
            description="Explore our carefully crafted collections, each piece designed to celebrate life's most precious moments."
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <div key={collection.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/5]">
                  <div className="absolute inset-0 bg-primary-100 flex items-center justify-center">
                    <Sparkles className="h-12 w-12 text-primary-300" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="secondary" size="sm" className="w-full">
                      View Collection
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-xl font-medium mb-2">{collection.name}</h3>
                  <p className="text-muted-foreground">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-luxury text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
              Begin Your Journey with Anant Gems
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Schedule a private consultation with our jewelry experts to discover the perfect piece for your special moment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-primary-50"
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                View Collections
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
