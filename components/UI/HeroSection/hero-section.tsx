"use client";
import Image from "next/image";
import { Wrapper, Inner, Pill, HeroTextContainer } from "./styles";
// import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import MaskText from "@/components/Common/MaskText/mask-text";
import {
  mobileParagraphPhrases,
  mobilePhrases,
  paragraphPhrases,
  phrases,
} from "./constants";
import { Cover } from "./cover";

const HeroSection = () => {
  return (
    <Wrapper>
      <Inner>
        <Pill>
          <span>Introducing CodeBiba</span>
          {/* <Image src={ic_chevron_right} alt="chevron-right" /> */}
        </Pill>
        <HeroTextContainer>
          {/* <MaskText phrases={phrases} tag="h1" /> */}
          <div>
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
              Build amazing websites <br /> at <Cover> warp speed</Cover>
            </h1>
          </div>
          <MaskText phrases={paragraphPhrases} tag="p" />
        </HeroTextContainer>
      </Inner>
    </Wrapper>
  );
};

export default HeroSection;
