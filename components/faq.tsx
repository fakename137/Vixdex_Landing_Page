'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Faq() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question:
        'How is VixDex a better alternative to traditional options trading?',
      answer:
        'VixDex is the ideal alternative to options trading. In traditional options, the price of the premium is determined by implied volatility (IV), right? Similarly, in VixDex, the prices of High IV Tokens and Low IV Tokens are also determined by real-time implied volatility (IV). This means users can directly trade on volatility, just like trading options premiums, but without the complexity of strike prices, expiry dates, and other options-related intricacies. VixDex simplifies volatility trading, making it accessible and straightforward.',
    },
    {
      question: 'How does the VixDex AMM (Automated Market Maker) work?',
      answer:
        'VixDex employs a unique bonding curve to determine the price of tokens, adjusting in real-time based on implied volatility (IV). The formula used is:\n\nPrice = (Slope × ContractHolding) + BasePrice\n\nContractHolding is a virtual representation of circulation and changes dynamically with volatility.\n\nSlope controls how the price changes in response to shifts in volatility.\n\nBasePrice ensures a minimum value for the token.\n\nThis allows for more responsive price adjustments, aligning token values directly with market volatility rather than simple supply-demand mechanics. The reserve shift formula then rebalances liquidity between tokens in the pair, ensuring that the protocol reacts to volatility shifts without requiring users to burn or move their tokens.',
    },
    {
      question: "Is VixDex secure for users' assets?",
      answer:
        'Yes, VixDex is secure. All user-deposited assets, such as ETH, are stored in the Uniswap V4 PoolManager, which is highly secure and audited by trusted entities and experienced developers and bug hunters. This ensures that user funds are safely handled within a decentralized and transparent environment.',
    },
    {
      question:
        'How does VixDex improve user experience compared to traditional volatility trading?',
      answer:
        'VixDex offers a seamless, decentralized experience for volatility trading. Unlike traditional options markets, which are often complex and rely on intermediaries, VixDex simplifies the process by allowing users to directly trade on volatility with the help of Volatility Pair Tokens (VPTs). The dynamic AMM adjusts prices based on market conditions, making the process more intuitive. Furthermore, the protocol offers real-time IV calculations, ensuring that users can engage in volatility trading without requiring deep knowledge of traditional options or market complexities. By using blockchain, users enjoy enhanced transparency, security, and autonomy over their trades.',
    },
    {
      question:
        'How is VixDex a game-changer for Web3 developers, founders, and tokens?',
      answer:
        'VixDex is revolutionizing the way Web3 projects can offer volatility trading. Traditionally, centralized exchanges (CEXs) and decentralized exchanges (DEXs) decide which tokens are eligible for options trading based on liquidity concerns. VixDex removes this barrier. Now, any token with a strong community and listed on Uniswap can easily enable simple and accessible options trading through VixDex. This opens up opportunities for projects to offer volatility trading on their tokens, empowering developers and founders to provide new financial products to their communities.',
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="retro-text text-3xl md:text-4xl text-teal-400 mb-4">
            FAQ
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Frequently asked questions about VixDex
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <button
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="retro-text text-xl text-white">
                  {faq.question}
                </h3>
                <div className="text-teal-500">
                  {activeIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-500">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
