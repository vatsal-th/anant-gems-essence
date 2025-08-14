import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHeader from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Award, Users, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "1985",
      title: "Foundation",
      description: "Anant Gems was founded with a vision to create timeless jewelry that celebrates life's precious moments."
    },
    {
      year: "1992",
      title: "Master Craftsmen",
      description: "We assembled a team of world-class artisans, each bringing decades of traditional jewelry-making expertise."
    },
    {
      year: "2005",
      title: "Ethical Sourcing",
      description: "Pioneered ethical sourcing practices, ensuring all our diamonds and gems are conflict-free and responsibly obtained."
    },
    {
      year: "2015",
      title: "Digital Innovation",
      description: "Launched our digital platform, making our exquisite collections accessible to customers worldwide."
    },
    {
      year: "2023",
      title: "Sustainability",
      description: "Introduced our comprehensive sustainability program, committing to carbon-neutral operations."
    }
  ];

  const values = [
    {
      icon: Sparkles,
      title: "Exceptional Craftsmanship",
      description: "Every piece is meticulously handcrafted by master artisans who have perfected their skills over generations."
    },
    {
      icon: Heart,
      title: "Ethical Excellence",
      description: "We are committed to responsible sourcing and ethical business practices in every aspect of our operations."
    },
    {
      icon: Award,
      title: "Uncompromising Quality",
      description: "We use only the finest materials and maintain the highest standards throughout our creation process."
    },
    {
      icon: Users,
      title: "Personal Service",
      description: "Our dedicated team provides personalized service to help you find or create the perfect piece for your story."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeader
              subtitle="About Anant Gems"
              title="Infinite Elegance, Timeless Craftsmanship"
              description="For nearly four decades, we have been dedicated to creating exceptional jewelry that celebrates life's most precious moments. Our story is one of passion, artistry, and an unwavering commitment to excellence."
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-spacing bg-background-subtle">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Anant Gems was born from a simple belief: that jewelry should be more than beautiful—it should be meaningful. Founded in 1985 by master jeweler Rajesh Anant, our atelier began as a small workshop dedicated to preserving traditional craftsmanship while embracing innovative design.
                </p>
                <p>
                  Today, we continue that legacy, combining time-honored techniques with contemporary artistry. Each piece we create tells a story, whether it's celebrating an engagement, marking an anniversary, or simply expressing personal style.
                </p>
                <p>
                  Our commitment extends beyond beauty to responsibility. We believe that true luxury lies not just in exceptional craftsmanship, but in ethical practices that respect both people and planet.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-primary-50 rounded-lg flex items-center justify-center">
                <Sparkles className="h-24 w-24 text-primary-300" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-lg shadow-luxury flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl font-light text-primary">38+</div>
                  <div className="text-xs text-muted-foreground tracking-wide">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-spacing">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Journey"
            title="Milestones of Excellence"
            description="Key moments that have shaped our commitment to exceptional jewelry and ethical practices."
            className="mb-16"
          />
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Content */}
                    <div className="flex-1 lg:max-w-md">
                      <Card className="border-0 shadow-subtle">
                        <CardContent className="p-8">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                              <span className="text-primary-foreground font-medium text-sm">
                                {milestone.year.slice(-2)}
                              </span>
                            </div>
                            <div>
                              <div className="text-primary font-medium text-sm tracking-wide">
                                {milestone.year}
                              </div>
                              <h3 className="font-serif text-xl font-medium">
                                {milestone.title}
                              </h3>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-md" />
                    
                    {/* Spacer */}
                    <div className="flex-1 lg:max-w-md" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-primary text-primary-foreground">
        <div className="container-luxury">
          <SectionHeader
            subtitle="Our Values"
            title="What Drives Us"
            description="The principles that guide every decision and inspire every creation at Anant Gems."
            className="mb-16 text-center [&>*]:text-primary-foreground [&_.tagline]:text-primary-100"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="bg-white/10 border-0 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-3 text-primary-foreground">
                        {value.title}
                      </h3>
                      <p className="text-primary-foreground/80 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;