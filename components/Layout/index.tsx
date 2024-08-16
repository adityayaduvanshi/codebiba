'use client';
import styled from 'styled-components';
import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import Header from '../UI/Header/header';
import Preloader from '../UI/Preloader/preloader';
import { useState } from 'react';

const CornerGradient = styled.div`
  position: fixed;
  top: 50px;
  right: 0;
  width: 400px;
  height: 587px;
  background-image: url('svg/Vector.svg');
  background-repeat: no-repeat;
  background-position: top right;
  pointer-events: none;
  z-index: 0;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [complete, setComplete] = useState(false);
  return (
    <StyledComponentsRegistry>
      <ReactLenis
        root
        options={{
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        }}
      >
        <GlobalStyles />
        <Preloader setComplete={setComplete} />
        <CornerGradient />
        <div className={complete ? 'complete' : 'not_complete'}>
          <Header />
          {children}
          
        </div>
      </ReactLenis>
    </StyledComponentsRegistry>
  );
};

export default Layout;