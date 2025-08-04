'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  dict: {
    mission: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      description: string;
    };
    team: {
      title: string;
      description: string;
    };
  };
};

export default function MisionValoresEquipo({ dict }: Props) {
  const items = [
    {
      title: dict.mission.title,
      description: dict.mission.description,
      image: '/img/valores1.jpg',
    },
    {
      title: dict.values.title,
      description: dict.values.description,
      image: '/img/valores2.jpg',
    },
    {
      title: dict.team.title,
      description: dict.team.description,
      image: '/img/valores3.jpg',
    },
  ];

  return (
    <section className="bg-blue-200 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-md shadow-sm overflow-hidden"
          >
            <div className="w-full h-[200px] relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#3a4b66] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
