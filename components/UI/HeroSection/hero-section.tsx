'use client';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
// import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import MaskText from '@/components/Common/MaskText/mask-text';
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from './constants';

const HeroSection = () => {
 
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing CodeBiba</span>
          {/* <Image src={ic_chevron_right} alt="chevron-right" /> */}
        </Pill>
        <HeroTextContainer>
          
              <MaskText phrases={phrases} tag="h1" />
              <MaskText phrases={paragraphPhrases} tag="p" />

        </HeroTextContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;