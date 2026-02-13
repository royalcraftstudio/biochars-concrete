import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Section = ({ id, title, children, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen flex items-center justify-center py-24 px-6 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
};

export default Section;