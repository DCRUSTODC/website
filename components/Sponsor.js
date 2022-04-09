import React from 'react';
import { Container } from '.';
import { Reveal } from 'react-awesome-reveal';
import { fadeInUp } from '@/keyframes';
import Image from 'next/image';
import redhat from '../assets/redhat.svg'
import digital from '../assets/digital.svg'
import async from '../assets/async.svg'
const Sponsor = () => {
  return (
    <div>
      <div className="sponsortext">
        <h2 className="text-2xl font-bold text-center mb-5">
          Active contributions
        </h2>
      </div>
      <Container className={'grid grid-cols-3 gap-6 mb-32 items-center'}>
        <Reveal keyframes={fadeInUp} duration={800} delay={200}>
          <div className='flex items-center justify-center relative h-[120px]'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src={redhat}
              alt='redhat'
            />
          </div>
        </Reveal>
        <Reveal keyframes={fadeInUp} duration={800} delay={400}>
          <div className='flex items-center justify-center relative w-full h-[100px]'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src={digital}
              alt='digitalocean'
            />
          </div>
        </Reveal>
        <Reveal keyframes={fadeInUp} duration={800} delay={600}>
          <div className='flex items-center justify-center relative w-full h-[120px]'>
            <Image
              layout='fill'
              objectFit='contain'
              objectPosition={'center'}
              src={async}
              alt='async'
            />
          </div>
        </Reveal>
      </Container>
    </div >
  );
};

export default Sponsor;
