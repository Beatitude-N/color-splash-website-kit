
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: ThumbsUp, value: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose ProPaint Solutions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in the painting industry, ProPaint Solutions has built 
              a reputation for excellence, reliability, and outstanding customer service. We're not just 
              painters – we're craftsmen who take pride in transforming spaces.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Licensed & Insured</h4>
                  <p className="text-muted-foreground">Fully licensed and insured for your peace of mind.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Premium Materials</h4>
                  <p className="text-muted-foreground">We use only the highest quality paints and materials.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Satisfaction Guarantee</h4>
                  <p className="text-muted-foreground">Your satisfaction is our top priority. We guarantee our work.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-4">
                  <CardContent className="p-0">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=400&q=80"
                alt="Professional painter at work"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                alt="Beautiful painted interior"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
            
            {/* Floating testimonial */}
            <Card className="absolute -bottom-6 -left-6 max-w-xs bg-white shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  "Exceptional work! Professional, clean, and on time. Highly recommend!"
                </p>
                <p className="text-xs font-semibold">- Sarah Johnson</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
