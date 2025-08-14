import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Eye, Filter, Grid, List } from 'lucide-react';

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filters = [
    { id: 'all', name: 'All Collections', count: 24 },
    { id: 'rings', name: 'Rings', count: 8 },
    { id: 'necklaces', name: 'Necklaces', count: 6 },
    { id: 'bracelets', name: 'Bracelets', count: 4 },
    { id: 'earrings', name: 'Earrings', count: 6 },
  ];

  const products = [
    {
      id: 1,
      name: "Eternal Diamond Ring",
      category: "rings",
      price: "From $2,850",
      image: "/api/placeholder/400/400",
      description: "A timeless solitaire with exceptional brilliance",
      featured: true,
    },
    {
      id: 2,
      name: "Celestial Necklace",
      category: "necklaces",
      price: "From $1,650",
      image: "/api/placeholder/400/400",
      description: "Delicate stars dancing on precious metal",
      featured: false,
    },
    {
      id: 3,
      name: "Grace Tennis Bracelet",
      category: "bracelets",
      price: "From $3,200",
      image: "/api/placeholder/400/400",
      description: "Continuous sparkle in perfect harmony",
      featured: true,
    },
    {
      id: 4,
      name: "Whisper Drop Earrings",
      category: "earrings",
      price: "From $980",
      image: "/api/placeholder/400/400",
      description: "Elegant movement with every turn",
      featured: false,
    },
    {
      id: 5,
      name: "Infinity Band",
      category: "rings",
      price: "From $1,450",
      image: "/api/placeholder/400/400",
      description: "Symbol of endless love and commitment",
      featured: false,
    },
    {
      id: 6,
      name: "Aurora Pearl Strand",
      category: "necklaces",
      price: "From $2,100",
      image: "/api/placeholder/400/400",
      description: "Lustrous pearls in perfect graduation",
      featured: true,
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background-subtle">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Collections"
            title="Timeless Elegance"
            description="Discover our carefully curated collections, each piece crafted with exceptional attention to detail and designed to celebrate life's most precious moments."
          />
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="border-b border-border-subtle">
        <div className="container-luxury py-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                  className="h-10"
                >
                  {filter.name}
                  <Badge 
                    variant="secondary" 
                    className="ml-2 text-xs bg-primary-50 text-primary-700"
                  >
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-border rounded-md">
                <Button
                  variant={viewMode === 'grid' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="h-10 rounded-r-none border-0"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="h-10 rounded-l-none border-0"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="h-10">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-spacing">
        <div className="container-luxury">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="group border-0 shadow-subtle hover:shadow-luxury transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="relative">
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-primary-50">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-primary-300 text-6xl">💎</div>
                    </div>
                  </div>
                  
                  {/* Featured Badge */}
                  {product.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  )}
                  
                  {/* Hover Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  {/* Quick View Button */}
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Button variant="secondary" size="sm" className="w-full">
                      Quick View
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-medium group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                    <div className="pt-2">
                      <span className="font-medium text-lg text-primary">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="px-8">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;