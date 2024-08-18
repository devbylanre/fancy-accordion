import React, { useState } from 'react';
import './App.css';
import accordions from './data';
import Styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index: number) => {
    const isOpen = index + 1 === activeIndex;

    if (isOpen) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(index + 1);
  };

  return (
    <main className={Styles.main}>
      <h1 className={Styles.headline}>FAQs</h1>

      <div className={Styles.accordionsBox}>
        <p className={Styles.textTime}>Every day, 9:01 AM</p>

        <div className={Styles.accordions}>
          {accordions.map((accordion, index) => {
            const isOpen = index + 1 === activeIndex;

            return (
              <div
                key={index}
                className={Styles.accordion}
              >
                <button
                  className={`${Styles.accordionButton} ${
                    isOpen && Styles.accordionButtonActive
                  }`}
                  onClick={() => handleOpen(index)}
                >
                  <div className={Styles.accordionButtonWrapper}>
                    <p className={Styles.accordionTitle}>{accordion.title}</p>
                    {accordion.icon ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: accordion.icon }}
                      />
                    ) : null}
                  </div>
                  <div className={Styles.accordionButtonAction}>
                    {isOpen ? (
                      <svg
                        stroke='currentColor'
                        fill='none'
                        stroke-width='1.5'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M5 12h14'
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        stroke='currentColor'
                        fill='currentColor'
                        stroke-width='0'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                    )}
                  </div>
                </button>

                {/* content */}
                <motion.div
                  className={Styles.accordionContent}
                  initial={{ height: '0px' }}
                  animate={{ height: isOpen ? 'auto' : '0px' }}
                  transition={{ duration: 0.3 }}
                >
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.975 }}
                        transition={{
                          ease: [0.75, 0.5, 0, 0],
                          delay: 0.4,
                          duration: 0.2,
                        }}
                        className={Styles.accordionContentBox}
                      >
                        <p>{accordion.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default App;
