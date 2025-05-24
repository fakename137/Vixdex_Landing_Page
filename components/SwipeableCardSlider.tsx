'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const sections = [
  {
    id: 1,
    highlight: 'one click',
    icon: (
      <svg
        width="100"
        height="70"
        viewBox="0 0 85 138"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_422_1685"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="85"
          height="138"
        >
          <path d="M0 0H85V138H0V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_422_1685)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.8156 28.2044H2.81304C-0.662939 28.2044 -0.662939 33.1617 2.81304 33.1617H13.8156C15.2677 33.1617 16.4525 32.0553 16.4525 30.6836C16.4491 29.3109 15.2665 28.2044 13.8156 28.2044ZM30.1795 2.44821V12.8013C30.1795 14.1677 31.3587 15.2826 32.8165 15.2826C34.2742 15.2826 35.4534 14.1698 35.4534 12.8013V2.44821C35.45 -0.817374 30.1795 -0.817374 30.1795 2.44821ZM52.1721 8.96213L44.3876 16.2819C41.9327 18.592 45.6691 22.0941 48.1218 19.7905L55.9008 12.4707C58.3546 10.1681 54.6329 6.64894 52.1721 8.96213ZM62.8257 28.2012H51.8176C50.3655 28.2012 49.1841 29.3076 49.1841 30.6793C49.1841 32.051 50.3666 33.1605 51.8176 33.1605H62.8257C66.2949 33.1616 66.2984 28.2012 62.8257 28.2012ZM9.73268 12.4726L17.5116 19.7924C19.9314 22.0992 23.7178 18.6111 21.2403 16.2838L13.4613 8.96405C11.0143 6.65398 7.27786 10.1592 9.73268 12.4726ZM55.5948 58.7639C55.5948 54.7921 52.1369 51.549 47.9309 51.549C43.719 51.549 40.2669 54.8113 40.2669 58.7639V29.9921C40.2669 26.0258 36.809 22.7805 32.6029 22.7805C28.3878 22.7805 24.9331 26.0343 24.9331 29.9921V91.1212C24.9331 89.5504 23.6187 86.8711 23.0467 85.5648C21.6355 82.3913 19.1862 80.0063 16.6755 78.5384C14.499 77.2748 11.1059 75.8667 8.97044 77.9232C6.39491 80.4013 7.78219 86.2945 8.95907 89.0104C11.2583 94.3237 12.3853 103.6 14.6843 110.143C19.1803 122.906 21.873 121.161 29.7759 138H74.3602C75.5427 130.719 80.605 121.813 83.2683 113.329C85.1956 107.185 84.6908 101.536 84.709 95.2068L84.7943 72.0313C84.7943 68.2533 81.5034 65.1643 77.4942 65.1643C73.5143 65.1643 70.2496 68.2083 70.194 71.9319V65.3911C70.194 61.6098 66.9055 58.522 62.8963 58.522C58.9243 58.522 55.6631 61.5607 55.5962 65.2756L55.5939 58.7638L55.5948 58.7639Z"
            fill="#3EAFA4"
          />
        </g>
      </svg>
    ),
    content: {
      title:
        'Launch volatility derivatives for any ERC-20 token instantly—no code, no hassle',
      description:
        'Create and deploy sophisticated financial instruments with just one click.',
    },
  },
  {
    id: 2,
    highlight: 'start with $1',
    icon: <div className="text-6xl font-bold text-teal-400 font-mono">$1</div>,
    content: {
      title:
        'Trade with as little as $1. No margin, no liquidations—just pure volatility exposure.',
      description:
        'Access advanced trading strategies without the complexity or high capital requirements.',
    },
  },
  {
    id: 3,
    highlight: 'Earn Revenue',
    icon: (
      <svg
        width="120"
        height="80"
        viewBox="0 0 132 119"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_422_1712)">
          <path
            d="M10.4837 108.515H34.0805C37.6558 108.515 40.5657 105.765 40.5657 102.384V102.349L63.1466 109.42C66.5168 110.477 69.9906 111 73.4559 111C78.282 111 83.0891 109.983 87.5671 107.964L122.882 91.6308C125.07 90.6187 126.711 88.8602 127.502 86.6804C128.293 84.5006 128.138 82.1604 127.065 80.0897C124.857 75.8273 119.388 74.0545 114.877 76.1322L94.7029 85.4389C93.7074 81.5442 89.9996 78.637 85.5783 78.637L71.463 78.638L66.4756 76.1219C61.7433 73.7351 56.4067 72.4747 51.0452 72.4747H40.5661V72.3262C40.5661 68.9445 37.6572 66.194 34.0809 66.194H10.4852C6.90773 66.194 4 68.9445 4 72.3262V102.383C4 105.765 6.90773 108.514 10.4852 108.514L10.4837 108.515ZM51.0437 77.6874C55.5044 77.6874 59.9441 78.7378 63.8814 80.7215L69.4819 83.5457C69.5118 83.5608 69.5439 83.5649 69.5738 83.58C69.703 83.6396 69.8387 83.6871 69.9787 83.7275C70.0438 83.7457 70.1079 83.7709 70.1731 83.7851C70.3258 83.8174 70.4839 83.8315 70.6442 83.8386C70.6869 83.8396 70.7307 83.8528 70.7734 83.8528C70.7798 83.8528 70.7873 83.8497 70.7937 83.8497L85.5735 83.8487C87.7164 83.8487 89.4586 85.4982 89.4586 87.5314C89.4586 89.5576 87.7153 91.205 85.5735 91.205H64.9058C63.3847 91.205 62.1498 92.3726 62.1498 93.811C62.1498 95.2493 63.3847 96.4169 64.9058 96.4169L85.5735 96.4159C89.2024 96.4159 92.3524 94.4564 93.9174 91.5978L117.291 80.8164C119.073 79.9922 121.239 80.6942 122.114 82.382C122.538 83.2012 122.6 84.1274 122.286 84.99C121.972 85.8526 121.325 86.5486 120.457 86.9496L85.1698 103.271C78.7926 106.149 71.5863 106.574 64.8791 104.475L40.5644 96.8604V77.6873L51.0437 77.6874ZM9.51019 72.326C9.51019 71.8179 9.9471 71.4048 10.4844 71.4048H34.0812C34.6185 71.4048 35.0554 71.8179 35.0554 72.326V102.383C35.0554 102.891 34.6185 103.303 34.0812 103.303H10.4844C9.9471 103.303 9.51019 102.892 9.51019 102.384V72.326Z"
            fill="#3EAFA4"
          />
          <path
            d="M80.5205 49.063C82.409 49.063 84.0027 50.1276 84.0027 51.3872C84.0027 52.6478 82.4068 53.7124 80.5205 53.7124C78.7707 53.7124 77.5006 52.8296 77.1492 51.9559C76.6066 50.6115 75.0149 49.9357 73.5931 50.4488C72.1713 50.962 71.4577 52.467 71.9993 53.8114C72.9265 56.1133 75.0993 57.8447 77.7656 58.5607V60.4162C77.7656 61.8546 78.9983 63.0222 80.5215 63.0222C82.0427 63.0222 83.2775 61.8545 83.2775 60.4162V58.5577C86.8924 57.581 89.5157 54.7367 89.5157 51.3863C89.5157 47.232 85.48 43.851 80.5213 43.851C78.6327 43.851 77.039 42.7864 77.039 41.5259C77.039 40.2653 78.6349 39.2007 80.5213 39.2007C82.4088 39.2007 83.697 40.1976 83.9513 41.134C84.3305 42.5268 85.8324 43.3642 87.3067 43.0076C88.7808 42.6511 89.6685 41.2289 89.2893 39.8349C88.5661 37.1744 86.2415 35.1502 83.2775 34.3592V32.4936C83.2775 31.0553 82.0426 29.8877 80.5215 29.8877C78.9993 29.8877 77.7656 31.0553 77.7656 32.4936V34.3522C74.1507 35.3289 71.5273 38.1732 71.5273 41.5236C71.5273 45.682 75.5609 49.0627 80.5207 49.0627L80.5205 49.063Z"
            fill="#3EAFA4"
          />
          <path
            d="M53.7588 46.4589C53.7588 60.411 65.7643 71.7631 80.5207 71.7631C95.2781 71.7631 107.283 60.411 107.283 46.4589C107.283 32.5047 95.277 21.1537 80.5207 21.1537C65.7643 21.1527 53.7588 32.5047 53.7588 46.4589ZM80.5207 26.3635C92.238 26.3635 101.772 35.3783 101.772 46.4579C101.772 57.5374 92.2391 66.5512 80.5207 66.5512C68.8014 66.5512 59.2696 57.5374 59.2696 46.4579C59.2696 35.3783 68.8033 26.3635 80.5207 26.3635Z"
            fill="#3EAFA4"
          />
          <path
            d="M83.2766 15.3753V2.60595C83.2766 1.16761 82.0417 0 80.5206 0C78.9984 0 77.7646 1.16764 77.7646 2.60595V15.3753C77.7646 16.8137 78.9974 17.9813 80.5206 17.9813C82.0417 17.9803 83.2766 16.8146 83.2766 15.3753Z"
            fill="#3EAFA4"
          />
          <path
            d="M70.9377 18.0877V6.14654C70.9377 4.70819 69.7028 3.54059 68.1817 3.54059C66.6606 3.54059 65.4258 4.70822 65.4258 6.14654V18.0877C65.4258 19.526 66.6606 20.6936 68.1817 20.6936C69.7028 20.6936 70.9377 19.528 70.9377 18.0877Z"
            fill="#3EAFA4"
          />
          <path
            d="M95.6838 18.0877V6.14654C95.6838 4.70819 94.4489 3.54059 92.9278 3.54059C91.4067 3.54059 90.1719 4.70822 90.1719 6.14654V18.0877C90.1719 19.526 91.4067 20.6936 92.9278 20.6936C94.45 20.6936 95.6838 19.528 95.6838 18.0877Z"
            fill="#3EAFA4"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_422_1712"
            x="0"
            y="0"
            width="132"
            height="119"
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
              result="effect1_dropShadow_422_1712"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_422_1712"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
    content: {
      title:
        "List your token's derivatives and earn 50% of the protocol's trading fees.",
      description:
        'Monetize your token by creating derivative markets and earning passive income from trading activity.',
    },
  },
];

export default function SwipeableCardSlider() {
  const isMobile = useIsMobile();
  const [[current, direction], setCurrent] = useState([0, 0]);
  const constraintsRef = useRef(null);

  const swipeConfidenceThreshold = 10000;

  const paginate = (newDirection: number) => {
    const newIndex = current + newDirection;
    if (newIndex >= 0 && newIndex < sections.length) {
      setCurrent([newIndex, newDirection]);
    }
  };

  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const swipe = Math.abs(offset) * velocity;

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  if (!isMobile) return null;

  return (
    <div className="w-full pt-20 px-4 overflow-hidden">
      <div className="max-w-sm mx-auto">
        <div ref={constraintsRef} className="relative h-72">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={sections[current].id}
              className="absolute w-full h-full"
              drag="x"
              dragConstraints={constraintsRef}
              dragElastic={0.8}
              onDragEnd={handleDragEnd}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 p-8 text-center h-full">
                <div className="mb-6 flex justify-center">
                  {sections[current].icon}
                </div>
                <p className="text-teal-400 text-xl font-bold font-mono mb-2">
                  {sections[current].highlight}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {sections[current].content.title}
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {sections.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? 'bg-teal-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
