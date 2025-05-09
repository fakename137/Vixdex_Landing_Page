'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const roadmapItems = [
    {
      date: 'Phase 1: Completed',
      title: 'Proof of Concept & Initial Development',
      description:
        'Goal: Build and finalize the core proof of concept for VixDex, demonstrating volatility trading on-chain.\n\nActions:\n- Complete the first version of VixDex with basic volatility trading functionality.\n- Integrate Uniswap V4 for liquidity management.\n- Build foundational smart contracts (Vix.sol, VolatilityERC20.sol).\n- Ensure the basic mechanics for trading implied volatility and minting tokens are working.',
    },
    {
      date: 'Phase 2: End of May 2025',
      title: 'Optimization & Dynamic Mechanisms',
      description:
        'Goal: Improve on-chain performance and introduce dynamic pricing and reserve mechanisms.\n\nActions:\n- Implement Huff programming for optimizing the bonding curve calculation.\n- Use Yul for efficient math operations like addition, subtraction, etc.\n- Introduce Solidity math libraries and bitwise operations to optimize transaction costs.\n- Implement a dynamic bonding curve to allow for flexible pricing based on real-time market conditions.\n- Upgrade the reserve swap mechanism to react dynamically to market volatility (IV).\n- Introduce dynamic reserve shift to enhance liquidity management.',
    },
    {
      date: 'Phase 3: End of May 2025',
      title: 'Frontend Development & IV Oracle Integration',
      description:
        'Goal: Build a user-friendly interface and integrate a decentralized implied volatility oracle.\n\nActions:\n- Develop a user-centric frontend with features like notifications and chats (similar to pump.fun).\n- Integrate IV Oracle using ICP for decentralized implied volatility data.\n- Expand token support (including USDC, USDT, and ETH) for greater compatibility.\n- Implement a universal volume tracking system for all pairs.',
    },
    {
      date: 'Phase 4: Early to Mid June 2025',
      title: 'Grant Application, Collaborations & Launch',
      description:
        "Goal: Submit VixDex for Unichain Developer Grant and explore potential partnerships or collaborations.\n\nActions:\n- Apply for the Unichain Developer Grant to gain support and funding.\n- Explore collaborations with other DeFi protocols and platforms, tokens, developers to expand VixDex's reach and usability.\n- Prepare documentation, technical write-ups, and necessary materials for grant submission.",
    },
  ];

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [itemInView, setItemInView] = useState<boolean[]>(
    new Array(roadmapItems.length).fill(false)
  );
  const [mobileItemInView, setMobileItemInView] = useState<boolean[]>(
    new Array(roadmapItems.length).fill(false)
  );

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, roadmapItems.length);
    mobileItemRefs.current = mobileItemRefs.current.slice(
      0,
      roadmapItems.length
    );
  }, [roadmapItems]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.target.classList.contains('desktop-item')) {
          setItemInView((prev) => {
            const newState = [...prev];
            newState[Number(entry.target.dataset.index)] = entry.isIntersecting;
            return newState;
          });
        } else if (entry.target.classList.contains('mobile-item')) {
          setMobileItemInView((prev) => {
            const newState = [...prev];
            newState[Number(entry.target.dataset.index)] = entry.isIntersecting;
            return newState;
          });
        }
      });
    }, observerOptions);

    itemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = String(index);
        ref.classList.add('desktop-item');
        observer.observe(ref);
      }
    });

    mobileItemRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = String(index);
        ref.classList.add('mobile-item');
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, [itemRefs, mobileItemRefs, roadmapItems.length]);

  return (
    <section id="roadmap" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="retro-text text-3xl md:text-4xl text-teal-400 mb-4">
            RoadMap
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our development timeline and future milestones
          </p>
        </motion.div>

        {/* Desktop timeline (hidden on mobile) */}
        <div className="relative max-w-3xl mx-auto hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-teal-900"></div>

          {roadmapItems.map((item, index) => {
            return (
              <motion.div
                key={`desktop-${index}`}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative z-10 mb-16 flex ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  itemInView[index]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                  }`}
                >
                  <p className="text-teal-400 text-sm mb-1">{item.date}</p>
                  <h3 className="retro-text text-2xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/4">
                  <motion.div
                    className="w-6 h-6 rounded-full bg-teal-400"
                    initial={{ scale: 0 }}
                    animate={itemInView[index] ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile timeline (single column, visible only on mobile) */}
        <div className="relative max-w-md mx-auto md:hidden">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-900"></div>

          {roadmapItems.map((item, index) => {
            return (
              <motion.div
                key={`mobile-${index}`}
                ref={(el) => (mobileItemRefs.current[index] = el)}
                className="relative z-10 mb-12 pl-12"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  mobileItemInView[index]
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 transform -translate-x-1/2">
                  <motion.div
                    className="w-5 h-5 rounded-full bg-teal-400"
                    initial={{ scale: 0 }}
                    animate={
                      mobileItemInView[index] ? { scale: 1 } : { scale: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>

                <p className="text-teal-400 text-sm mb-1">{item.date}</p>
                <h3 className="retro-text text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm whitespace-pre-line">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
