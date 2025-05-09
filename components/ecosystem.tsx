'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Uniswap from '../public/vixdex/images/whiteclr_uniswap.png';

export default function Ecosystem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-2/3"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="retro-text text-3xl text-teal-400 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Built for the Uniswap Ecosystem
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              VixDex seamlessly integrates with the Uniswap V4 infrastructure
              while offering a custom pricing mechanism that sets it apart.
              While we leverage the robust foundation of Uniswap's liquidity
              pools, VixDex introduces its own volatility-driven bonding curve
              to determine token prices. This enables:
              <ul className="list-disc ml-6 mt-4">
                <li>
                  <strong>No Liquidity Fragmentation:</strong> VixDex maintains
                  a unified experience, eliminating any liquidity fragmentation
                  by using its custom pricing logic for all trades.
                </li>
                <li>
                  <strong>Independent Pricing:</strong> Unlike traditional AMMs,
                  prices are driven by volatility and token supply, ensuring
                  more accurate reflections of market sentiment.
                </li>
                <li>
                  <strong>Composability with Uniswap V4:</strong> Built using
                  Uniswap V4’s No-Op Hooks, VixDex ensures compatibility and
                  smooth interaction with the wider Uniswap ecosystem, offering
                  liquidity providers and traders an innovative yet familiar
                  experience.
                </li>
              </ul>
              By combining the security and decentralization of Uniswap with a
              unique volatility pricing model, VixDex opens the door to trading
              on implied volatility, creating a brand new class of tokenized
              assets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href="#learn-more"
                className="inline-block bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black px-6 py-3 rounded-md transition-colors"
              >
                Explore Ecosystem
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/3 md:flex justify-center hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 rounded-full bg-teal-900/20 flex items-center justify-center">
              <motion.div
                className="absolute w-full h-full rounded-full border-2 border-teal-500/30"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                }}
              />
              <Image src={Uniswap} alt="Uniswap logo" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
