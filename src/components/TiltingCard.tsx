import React from 'react';
import styled from 'styled-components';
import { ME } from '../assets';

const T = {
  Wrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    position: relative;
  `,
  Tracker: styled.div`
    position: absolute;
    inset: 0;
    z-index: 2;

    /* 1st, 4th, 7th */
    &:nth-of-type(3n - 2) {
      grid-column: 1 / 2;
    }

    /* 2nd, 5th, 8th */
    &:nth-of-type(3n - 1) {
      grid-column: 2 / 3;
    }

    /* 3rd, 6yh, 9th */
    &:nth-of-type(3n) {
      grid-column: 3 / 4;
    }

    /* 4-6 */
    &:nth-child(n + 1):nth-child(-n + 3) {
      grid-row: 1 / 2;
    }

    /* 4-6 */
    &:nth-child(n + 4):nth-child(-n + 6) {
      grid-row: 2 / 3;
    }

    /* 4-6 */
    &:nth-child(n + 7):nth-child(-n + 9) {
      grid-row: 3 / 4;
    }

    /* hover event */
    &:nth-child(1):hover ~ #contents {
      --rotateX: var(--angle);
      --rotateY: calc(var(--angle) * -1);
    }

    &:nth-child(2):hover ~ #contents {
      --rotateX: var(--angle);
    }

    &:nth-child(3):hover ~ #contents {
      --rotateX: var(--angle);
      --rotateY: var(--angle);
    }

    &:nth-child(4):hover ~ #contents {
      --rotateY: calc(var(--angle) * -1);
    }

    &:nth-child(6):hover ~ #contents {
      --rotateY: var(--angle);
    }

    &:nth-child(7):hover ~ #contents {
      --rotateX: calc(var(--angle) * -1);
      --rotateY: calc(var(--angle) * -1);
    }

    &:nth-child(8):hover ~ #contents {
      --rotateX: calc(var(--angle) * -1);
    }

    &:nth-child(9):hover ~ #contents {
      --rotateX: calc(var(--angle) * -1);
      --rotateY: var(--angle);
    }
  `,
  Contents: styled.div`
    --perspective: 500px;
    --rotateX: 0;
    --rotateY: 0;
    --angle: 12deg;

    --rotateX: calc(var(--angle) * -1);
    --rotateY: var(--angle);

    grid-column: 1 / -1;
    grid-row: 1 / -1;

    display: grid;
    place-content: center;
    text-align: center;
    box-shadow: rgba(255, 255, 255, 0.35) 0px 5px 15px;
    transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(var(--rotateY));
    transition: transform 350ms ease;
  `,
  Img: styled.img`
    width: 100%;
    height: auto;
  `,
};

const TiltingCard: React.FC = () => {
  return (
    <T.Wrapper>
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />
      <T.Tracker />

      <T.Contents id="contents">
        <T.Img src={ME} />
      </T.Contents>
    </T.Wrapper>
  );
};

export default TiltingCard;
