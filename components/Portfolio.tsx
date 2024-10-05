'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const projects = [
  {
    title: 'Mariouomo.com - Ottawa Web Design',
    description: "Elegant men's clothing store with a sophisticated online shopping experience. Custom web development and local SEO for Ottawa retail.",
    image: 'https://mariouomo.com/cdn/shop/files/MARIO-UOMO-LOGO-BLACK_410x.png?v=1614092314',
  },
  {
    title: 'Highties.ca - Ottawa E-commerce Development',
    description: 'Modern cannabis dispensary platform offering a wide range of products and educational resources. Full-service web development and SEO for Ottawa-based e-commerce.',
    image: 'https://highties.ca/cdn/shop/files/highties-logo_200x.png?v=1673987609',
  },
  {
    title: 'Elysian Wellness - Ottawa Healthcare Web Design',
    description: 'Comprehensive physiotherapy and wellness clinic website showcasing various health services. Custom web application development for Ottawa healthcare providers.',
    image: 'https://static.wixstatic.com/media/72c0b2_bff2605f6788440786dd8d93e0cd9d5e~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Elysian%20Wellness%20Logo.png',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ottawa Web Development & SEO Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-4"
                  />
                </AspectRatio>
                <CardHeader>
                  <CardTitle className="text-accent">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}