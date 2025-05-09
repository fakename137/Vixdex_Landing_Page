'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function WhatIs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="what-is" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="retro-text text-4xl md:text-5xl text-white mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            What is VixDex?
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            VixDex is a decentralized protocol that allows users to trade
            implied volatility of any ERC-20 token directly on-chain, without
            using traditional options contracts. Instead of buying or selling
            options, users on VixDex can trade two tokens:
            <br />
            <br />
            <strong>High-IV Token</strong> – Gains value when a token’s
            volatility increases.
            <br />
            <strong>Low-IV Token</strong> – Gains value when volatility
            decreases.
            <br />
            <br />
            Built on Uniswap V4’s Hook architecture, VixDex introduces a novel
            way to speculate or hedge on market uncertainty using a custom
            bonding curve — all without relying on centralized oracles or option
            greeks.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
