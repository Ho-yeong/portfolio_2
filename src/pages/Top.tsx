import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { GitHub, Moon, MountainsBehind, MountainsFront, Stars, LinkedIn } from '../assets';
import TypingEffect from '../components/TypeEffect';

const T = {
  Wrapper: styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #1c0522, transparent);
      z-index: 999;
    }
  `,
  Moon: styled.img`
    mix-blend-mode: screen;
  `,
  Stars: styled.img``,
  MountainBehind: styled.img``,
  MountainFront: styled.img`
    z-index: 10;
  `,
  Text: styled.div`
    position: absolute;
    color: #fff;
    white-space: nowrap;
    font-size: 72px;
    font-weight: 700;
    z-index: 9;
    margin-bottom: 150px;

    @media (max-width: 450px) {
      font-size: 36px;
    }
  `,
  Btn: styled.div`
    display: inline-block;
    padding: 8px 24px;
    border-radius: 36px;
    background: #fff;
    color: #2b1055;
    z-index: 11;
    transform: translateY(100px);

    @media (max-width: 450px) {
      padding: 4px 12px;
    }
  `,
  A: styled.a`
    margin-right: 12px;

    &:last-child {
      margin: 0;
    }
  `,
  BtnImg: styled.img`
    width: 50px;
    height: auto;
    object-fit: contain;
    transition: 0.2s all;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 450px) {
      width: 44px;
    }
  `,
};

const Top: React.FC = () => {
  const starRef = useRef<HTMLImageElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const frontRef = useRef<HTMLImageElement>(null);
  const behindRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let value = window.scrollY;
      if (
        starRef.current &&
        moonRef.current &&
        behindRef.current &&
        frontRef.current &&
        textRef.current &&
        buttonRef.current
      ) {
        starRef.current.style.left = `${value * 0.25}px`;
        moonRef.current.style.top = `${value * 1.05}px`;
        behindRef.current.style.top = `${value * 0.5}px`;
        frontRef.current.style.top = `${value * 0}px`;
        textRef.current.style.marginRight = `${value * 2}px`;
        textRef.current.style.marginTop = `${value * 1.5}px`;
        buttonRef.current.style.marginTop = `${value * 1.5}px`;
      }
    });
  }, []);

  return (
    <T.Wrapper>
      <T.Stars src={Stars} ref={starRef} />
      <T.Moon src={Moon} ref={moonRef} />
      <T.MountainBehind src={MountainsBehind} ref={behindRef} />
      <T.Text ref={textRef}>
        <TypingEffect
          text={["I'm Hoyeong."]}
          speed={120}
          eraseDelay={10000}
          eraseSpeed={150}
          typingDelay={0}
        />
      </T.Text>
      <T.Btn ref={buttonRef}>
        <T.A target="__blank" href="https://github.com/Ho-yeong">
          <T.BtnImg src={GitHub} />
        </T.A>
        <T.A target="__blank" href="https://www.linkedin.com/in/hoyeong-jo-7547351a7/">
          <T.BtnImg src={LinkedIn} />
        </T.A>
      </T.Btn>
      <T.MountainFront src={MountainsFront} ref={frontRef} />
    </T.Wrapper>
  );
};

export default Top;
