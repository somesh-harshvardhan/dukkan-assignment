import React from 'react';
import styled from 'styled-components';
import HowTo from './HowTo';
import TryOthers from './TryOthers';

const HeroContainer = styled.section`


`

const Hero = () => {
  return (
    <HeroContainer>
     <HowTo/>
     <TryOthers/>
    </HeroContainer>
  )
}

export default Hero