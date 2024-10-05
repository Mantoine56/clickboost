'use client';

import { motion } from 'framer-motion';
import { Code, Search, Smartphone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: <Code className="h-12 w-12 mb-4 text-primary" />,
    title: 'Custom Web Development Ottawa',
    description: 'Tailored websites built with cutting-edge technologies for optimal performance and user experience. Serving Ottawa businesses with affordable web development solutions.',
  },
  {
    icon: <Search className="h-12 w-12 mb-4 text-primary" />,
    title: 'SEO Services Ottawa',
    description: 'Boost your online visibility and drive organic traffic with our expert SEO strategies. Local SEO services to help Ottawa businesses rank higher in search results.',
  },
  {
    icon: <Smartphone className="h-12 w-12 mb-4 text-primary" />,
    title: 'Ottawa App Development',
    description: 'Innovative mobile and web applications tailored to your business needs. Ottawa\'s top-rated app developers creating custom solutions for local companies.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ottawa's Full-Service Web Development & SEO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="text-accent">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}