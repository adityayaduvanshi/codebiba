'use client';
import React, { useRef, useState } from 'react';
import { AnimatePresence, useInView } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  Answer,
  Inner,
  Question,
  Wrapper,
} from './styles';
import Image from 'next/image';
import MaskText from '@/components/Common/MaskText/mask-text';
import {
  animate,
  desktopHeaderPhrase,
  faqData,
  mobileHeaderPhrase,
} from './constants';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const accordionRef = useRef(null);
  const isInView = useInView(accordionRef, {
    once: true,
    margin: '-10%',
    amount: 0.4,
  });

  return (
    <Wrapper>
      <Inner>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        <Accordion ref={accordionRef}>
          {faqData.map((item, index) => (
            <AccordionItem
              variants={animate}
              initial="initial"
              animate={isInView ? 'open' : ''}
              custom={index}
              key={index}
            >
              <Question onClick={() => toggleItem(index)}>
                {item.question}
                
              </Question>
              <AnimatePresence>
                {openItem === index && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {item.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </Inner>
    </Wrapper>
  );
};

export default FAQ;