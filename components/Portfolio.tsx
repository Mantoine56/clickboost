'use client';

import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Mariouomo.com - Ottawa Web Design',
    description: "Elegant men's clothing store with a sophisticated online shopping experience. Custom web development and local SEO for Ottawa retail.",
    image: '/uomo.jpg',
    link: 'https://mariouomo.com',
  },
  {
    title: 'Highties.ca - Ottawa E-commerce Development',
    description: 'Modern cannabis dispensary platform offering a wide range of products and educational resources. Full-service web development and SEO for Ottawa-based e-commerce.',
    image: '/HT.webp',
    link: 'https://highties.ca',
  },
  {
    title: 'Elysian Wellness - Ottawa Healthcare Web Design',
    description: 'Comprehensive physiotherapy and wellness clinic website showcasing various health services. Custom web application development for Ottawa healthcare providers.',
    image: '/elysian.png',
    link: 'https://www.elysianwellnesscentre.com/'
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
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
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
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}