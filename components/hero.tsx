'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bgGrid from '../public/vixdex/grid_box/grid.gif';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Animation for the wave
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up the starting position
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    // Animate the path
    const animation = path.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      {
        duration: 2000,
        fill: 'forwards',
        easing: 'ease-out',
      }
    );

    return () => {
      animation.cancel();
    };
  }, []);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen grid-pattern  flex items-center overflow-hidden "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          style={{ y, opacity }}
        >
          <motion.p
            className="text-teal-400 mb-2 retro-text text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            vixdex
          </motion.p>
          <motion.h1
            className="retro-text text-4xl md:text-6xl lg:text-7xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Re-Innovating options with on-chain IV
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Vixdex is dex that helps to trade implied volatility for any token
            listed on uniswap
          </motion.p>
          <motion.p
            className="text-md text-white "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Built on
            <span className="text-[#FF007A]"> Uniswap V4</span>
          </motion.p>
        </motion.div>
      </div>

      {/* Animated wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 w-full h-40 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 320 150" // (we'll explain this below)
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(2)', transformOrigin: 'center' }}
        >
          <path
            d="M5 125.849V142.611C9.16 128.739 22.42 70.3607 31 63.4246C39.58 56.4886 48.42 89.4349 57 89.4349C65.58 89.4349 74.42 56.4886 83 53.0205C91.58 49.5525 100.42 56.4886 109 73.8287C117.58 91.1689 129.873 115.445 138.453 125.849C147.033 136.253 155.873 169.2 164.453 134.519C173.033 99.839 178.42 1 187 1C195.58 1 204.42 49.5525 213 53.0205C221.58 56.4886 230.42 14.8721 239 11.4041C247.58 7.93607 256.42 56.4886 265 77.2968C273.58 98.105 282.42 91.1689 291 73.8287C299.58 56.4886 308.42 28.7443 312.58 14.8721L317 1"
            stroke="#3EAFA4"
            fill="none"
            strokeWidth="0.5"
          />
        </svg>

        {/* <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(2)', transformOrigin: 'center' }}
        >
          <g filter="url(#filter0_d_221_128)">
            <path
              d="M5 125.849V142.611C9.16 128.739 22.42 70.3607 31 63.4246C39.58 56.4886 48.42 89.4349 57 89.4349C65.58 89.4349 74.42 56.4886 83 53.0205C91.58 49.5525 100.42 56.4886 109 73.8287C117.58 91.1689 129.873 115.445 138.453 125.849C147.033 136.253 155.873 169.2 164.453 134.519C173.033 99.839 178.42 1 187 1C195.58 1 204.42 49.5525 213 53.0205C221.58 56.4886 230.42 14.8721 239 11.4041C247.58 7.93607 256.42 56.4886 265 77.2968C273.58 98.105 282.42 91.1689 291 73.8287C299.58 56.4886 308.42 28.7443 312.58 14.8721L317 1"
              stroke="#3EAFA4"
              stroke-width="2"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_221_128"
              x="0"
              y="0"
              width="321.953"
              height="159"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_221_128"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_221_128"
                result="shape"
              />
            </filter>
          </defs>
        </svg> */}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black opacity-70 z-0"></div>
    </motion.section>
  );
}
