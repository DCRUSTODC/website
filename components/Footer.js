import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Logo } from '.';

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const ig = () => {
    window.location.href = 'https://instagram.com/xambhav';
  }
  const discord = () => {
    window.location.href = 'https://discord.gg/ttYFsAwKhY';
  }
  const yt = () => {
    window.location.href = 'https://www.youtube.com/channel/UC_5qIzICE0wt5ZsSdiq7KfQ';
  }
  return (
    <Container className={'pb-10'}>
      <div className='flex flex-col lg:flex-row mb-16'>
        <div className='w-[300px] mb-10 lg:mb-0 mr-10 lg:mr-28'>
          <Logo />
          <p className='mt-5'>
            An open-source platform by the students of DCRUST for welfare of the open-source community. <br /> <br />
            We thrive for PRs.
          </p>
        </div>
        <div className='flex-1 grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <p className='font-bold text-xl mb-5'>About</p>
            <div className='flex flex-col'>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Course</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Resource</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Term & Condition</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>FAQ</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Company</p>
            <div className='flex flex-col'>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Our Team</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Partner With Us</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Privacy & Policy</a>
              </Link>
              <Link href='/'>
                <a className='mb-4 opacity-50'>Features</a>
              </Link>
            </div>
          </div>
          <div>
            <p className='font-bold text-xl mb-5'>Contact</p>
            <div className='flex flex-col'>
              <Link href='tel:+91 9999009805'>
                <a className='mb-4 opacity-50'>+91 9999009805</a>
              </Link>
              <Link href='mailto:sambhavsaxena02@gmail.com'>
                <a className='mb-5 opacity-50'>sambhavsaxena02@gmail.com</a>
              </Link>
              <div className='flex items-center'>
                <div className='mr-10 cursor-pointer'>
                  <Image
                    src='/icons/discord.svg'
                    width={34}
                    height={34}
                    alt='discord'
                    onClick={discord}
                  />
                </div>
                <div className='mr-10 cursor-pointer'>
                  <Image
                    src='/icons/instagram.svg'
                    width={28}
                    height={28}
                    alt='instagram'
                    onClick={ig}
                  ></Image>
                </div>
                <div className='cursor-pointer'>
                  <Image
                    src='/icons/youtube.svg'
                    width={30}
                    height={30}
                    alt='youtube'
                    onClick={yt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center mb-8'>
        With love, Sambhav Saxena
      </div>
      <div
        onClick={scrollToTop}
        className='animate-bounce  h-14 w-14 cursor-pointer shadow-lg shadow-[#671AE4]/40 rounded-full bg-gradient-to-b font-bold from-[#B75CFF] to-[#671AE4] mx-auto flex justify-center items-center'
      >
        UP
      </div>
    </Container>
  );
};

export default Footer;
