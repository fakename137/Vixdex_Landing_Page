'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Anchor, LineChart, Infinity, BarChart4, Droplets } from 'lucide-react';

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const useCases = [
    {
      title: 'Alternative to Options',
      description:
        'Trade implied volatility directly, without the complexity of strike prices, expiries, or margin. A simpler, no-jargon, beginner-friendly on-chain alternative to traditional options.',
      icon: <LineChart className="w-8 h-8 text-teal-500" />,
    },
    {
      title: 'Speculation on Market Movement',
      description:
        'Bet on whether implied volatility will rise or fall—without predicting price direction. Perfect for traders seeking directional-neutral strategies.',
      icon: <BarChart4 className="w-8 h-8 text-teal-500" />,
    },
    {
      title: 'Hedge Against Volatility',
      description:
        'Protect your portfolio during uncertain market conditions by holding High-IV or Low-IV tokens based on volatility outlook.',
      icon: <Anchor className="w-8 h-8 text-teal-500" />,
    },
    {
      title: 'No Limitations',
      description:
        'No off-chain dependencies, and no KYC. Permissionless access to volatility markets for any ERC-20 token listed on Uniswap.',
      icon: <Infinity className="w-8 h-8 text-teal-500" />,
    },
    {
      title: 'No Liquidity Fragmentation',
      description:
        'VixDex uses Uniswap V4 pools—no need for separate markets for each expiry or strike. All liquidity is unified, making markets deeper and more efficient with the help of our own bonding curve or pricing curve.',
      icon: <Droplets className="w-8 h-8 text-teal-500" />,
    },
    {
      title: 'Market Volatility Indicator',
      description:
        'Token prices on VixDex reflect real-time implied volatility, turning the protocol into a living indicator of market sentiment.',
      icon: <BarChart4 className="w-8 h-8 text-teal-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="use-cases" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="retro-text text-3xl md:text-4xl text-teal-400 mb-4">
            Use cases
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the various ways VixDex can revolutionize your trading
            strategy
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="border border-teal-900/50 rounded-lg p-6 bg-black hover:border-teal-500 transition-colors"
              variants={itemVariants}
              whileHover={{
                y: -5,
                boxShadow: '0 10px 30px -15px rgba(45, 212, 191, 0.3)',
                borderColor: 'rgba(45, 212, 191, 0.5)',
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="retro-text text-xl text-white">
                  {useCase.title}
                </h3>
                <div className="text-teal-500">{useCase.icon}</div>
              </div>
              <p className="text-gray-500 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
