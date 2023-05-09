import {
  AboutUs,
  Button,
  Container,
  FAQ,
  Footer,
  Hero,
  Navbar,
  Sponsor,
  Team,
} from '@/components';
import React from 'react';
import { Reveal } from 'react-awesome-reveal';
import { fadeInDownShorter } from '@/keyframes';
import Leaderboard from '@/components/Leaderboard';
const Home = () => {
  return (
    <div className='h-full main_bg text-white overflow-hidden' id='top'>
      <Navbar />
      <Hero />
      <Leaderboard/>
      <Sponsor />
      <AboutUs />
      <Team />
      <FAQ />
      <Container>
        <div
          className={
            'bg-gradient-to-b from-[#B75CFF] to-[#671AE4] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44'
          }
        >
          <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl mb-5 w-full leading-snug text-center'>
            Get started with your first contributions
          </h2>
          <Reveal delay={200} duration={1000} keyframes={fadeInDownShorter} style={{ marginTop: '20px' }}>
            <Button isTarget isLink href={'https://github.com/orgs/DCRUSTODC/repositories'}>
              Browse repositories
            </Button>
          </Reveal>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
