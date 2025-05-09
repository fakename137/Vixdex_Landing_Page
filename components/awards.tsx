'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Uniswap from '../public/vixdex/images/pink_uniswap.png';
import Atrium from '../public/vixdex/images/Atrium.png';
import Image from 'next/image';

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-16 bg-gradient-to-b from-black">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="md:w-1/6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5 }}
            >
              <div className="w-48 h-auto">
                <Image src={Uniswap} alt="Uniswap Logo" layout="responsive" />
              </div>

              {/* <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0ZM50 15C55.5 15 60 19.5 60 25C60 30.5 55.5 35 50 35C44.5 35 40 30.5 40 25C40 19.5 44.5 15 50 15ZM70 80H30V70H40V45H35V35H55V70H65V80H70Z"
                    fill="#EC4899"
                  />
                </svg> */}
            </motion.div>

            <div className="md:w-5/6">
              <motion.h2
                className="retro-text text-3xl text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Award-Winning Innovation
              </motion.h2>

              <motion.p
                className="text-gray-400 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                We're proud to announce that VixDex won a uniswap prize from the
                Uniswap Hook Incubator, known as Atrium Academy. This
                recognition affirms our mission: to democratize volatility
                trading and bring the next wave of derivatives to DeFi users
                worldwide.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex justify-end "
              >
                <Image src={Atrium} alt="Atrium logo" width="80" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
