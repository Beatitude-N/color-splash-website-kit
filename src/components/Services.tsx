
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Building2, Palette, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Painting",
      description: "Transform your home with our expert interior and exterior painting services. From single rooms to entire houses.",
      features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Surface Preparation"]
    },
    {
      icon: Building2,
      title: "Commercial Painting",
      description: "Professional painting solutions for offices, retail spaces, and commercial buildings. Minimal disruption to your business.",
      features: ["Office Buildings", "Retail Spaces", "Warehouses", "Scheduled Services"]
    },
    {
      icon: Palette,
      title: "Specialty Finishes",
      description: "Unique decorative techniques and specialty coatings that add character and protection to your surfaces.",
      features: ["Decorative Finishes", "Texture Coating", "Stain & Sealers", "Custom Colors"]
    },
    {
      icon: Shield,
      title: "Protective Coatings",
      description: "Durable protective solutions for high-traffic areas and harsh environments. Long-lasting protection guaranteed.",
      features: ["Epoxy Flooring", "Anti-Corrosion", "Waterproofing", "Industrial Coatings"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From residential homes to commercial buildings, we provide comprehensive painting solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="font-playfair text-2xl md:text-3xl font-bold text-center mb-12">
            Our Proven Process
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Free in-home consultation and detailed estimate" },
              { step: "02", title: "Preparation", desc: "Thorough surface preparation and protection" },
              { step: "03", title: "Painting", desc: "Professional application with premium materials" },
              { step: "04", title: "Completion", desc: "Final inspection and cleanup to your satisfaction" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
