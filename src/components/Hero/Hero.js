import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi <br />
          I am Mostakim
        </SectionTitle>
        <SectionText>
          I am fresher of computer science major building simple websites for fun.
        </SectionText>
        <Button><a href="https://drive.google.com/file/d/1UmHyhzxuSJoT8kMzsw_0tqsMkWiyyKut/view?usp=sharing" className="text-dark" target="_blank">My Resume</a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;