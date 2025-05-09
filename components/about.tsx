'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="about-us" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2
              className="retro-text text-3xl md:text-4xl text-teal-400 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              VixDex - Implied Volatility Trading Protocol - Simpler Than
              Options
            </motion.h2>
            <motion.p
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              VixDex lets you trade volatility directly, without the
              complexities of strike prices, expiries, or options greeks. Built
              on Uniswap V4, it introduces High-IV and Low-IV tokens that
              reflect the market's real-time implied volatility for any ERC-20
              asset. Instead of betting on price direction, VixDex lets you
              speculate on how volatile the market will be, using a fully
              on-chain, It’s everything options try to do but{' '}
              <strong>
                simpler, more transparent, and fully decentralized.
              </strong>
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
                Learn More
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 relative hidden md:flex"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <svg
              width="100%"
              height="300"
              viewBox="0 0 500 300"
              className="text-teal-500"
            >
              {/* Candlestick chart */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                {/* Candlestick 1 */}
                <motion.rect
                  x="50"
                  y="50"
                  width="30"
                  height="150"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 150, y: 50 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 0.6, duration: 0.8 }}
                />

                {/* Candlestick 2 */}
                <motion.rect
                  x="120"
                  y="100"
                  width="30"
                  height="100"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 100, y: 100 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 0.7, duration: 0.8 }}
                />

                {/* Candlestick 3 */}
                <motion.rect
                  x="190"
                  y="80"
                  width="30"
                  height="120"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 120, y: 80 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 0.8, duration: 0.8 }}
                />

                {/* Candlestick 4 */}
                <motion.rect
                  x="260"
                  y="120"
                  width="30"
                  height="80"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 80, y: 120 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 0.9, duration: 0.8 }}
                />

                {/* Candlestick 5 */}
                <motion.rect
                  x="330"
                  y="60"
                  width="30"
                  height="140"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 140, y: 60 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 1.0, duration: 0.8 }}
                />

                {/* Candlestick 6 */}
                <motion.rect
                  x="400"
                  y="90"
                  width="30"
                  height="110"
                  fill="#2dd4bf"
                  initial={{ height: 0, y: 200 }}
                  animate={
                    isInView ? { height: 110, y: 90 } : { height: 0, y: 200 }
                  }
                  transition={{ delay: 1.1, duration: 0.8 }}
                />

                {/* Wicks */}
                <motion.line
                  x1="65"
                  y1="20"
                  x2="65"
                  y2="50"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />
                <motion.line
                  x1="65"
                  y1="200"
                  x2="65"
                  y2="230"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                />

                <motion.line
                  x1="135"
                  y1="70"
                  x2="135"
                  y2="100"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                />
                <motion.line
                  x1="135"
                  y1="200"
                  x2="135"
                  y2="240"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                />

                <motion.line
                  x1="205"
                  y1="40"
                  x2="205"
                  y2="80"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                />
                <motion.line
                  x1="205"
                  y1="200"
                  x2="205"
                  y2="250"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                />

                <motion.line
                  x1="275"
                  y1="90"
                  x2="275"
                  y2="120"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />
                <motion.line
                  x1="275"
                  y1="200"
                  x2="275"
                  y2="220"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                />

                <motion.line
                  x1="345"
                  y1="30"
                  x2="345"
                  y2="60"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                />
                <motion.line
                  x1="345"
                  y1="200"
                  x2="345"
                  y2="260"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                />

                <motion.line
                  x1="415"
                  y1="60"
                  x2="415"
                  y2="90"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                />
                <motion.line
                  x1="415"
                  y1="200"
                  x2="415"
                  y2="230"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 1.7, duration: 0.5 }}
                />
              </motion.g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
