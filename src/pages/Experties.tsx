import React, { Suspense, useEffect, useState } from 'react';
import { OrbitControls, Plane } from '@react-three/drei';
import { Canvas } from 'react-three-fiber';
import styled from 'styled-components';
import LoadingBar from 'react-top-loading-bar';
import { Gun3D } from '../components/meshes';
import CustomBtn from '../components/customBtn/CustomBtn';
import { useTranslation } from 'react-i18next';

const E = {
  Wrapper: styled.section`
    width: 100%;
    background: #1c0522;
    color: white;
    padding-bottom: 120px;

    @media (max-width: 450px) {
      padding: 0 30px;
    }
  `,
  Title: styled.div`
    font-size: 42px;
    height: 80px;
    font-weight: 700;
    line-height: 50px;
    max-width: 1140px;
    margin: 0 auto;
    margin-bottom: 15px;
  `,
  Text: styled.div`
    &.gun {
      position: absolute;
      top: 20px;
      left: 20%;
      font-weight: 700;
      animation: blink 800ms infinite alternate;
    }
  `,
  GunWrapper: styled.div`
    width: 100%;
    height: 30vh;
    background: #0a0a0a;
    position: relative;
    margin-bottom: 100px;

    @media (max-width: 450px) {
      height: 40vh;
    }
  `,
  BtnWrapper: styled.div`
    max-width: 1140px;
    margin: 0 auto;
  `,
  BtnLine: styled.div`
    display: flex;

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
    }
  `,
};

const Experties: React.FC = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  const LazyCall = ({ setProgress }: any) => {
    useEffect(() => {
      setProgress(20);
      return () => {
        setProgress(100);
      };
      //eslint-disable-next-line
    }, []);
    return 'Loading...';
  };
  return (
    <E.Wrapper>
      <LoadingBar
        color={'#00BCCE'}
        height={6}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        loaderSpeed={700}
      />
      <E.GunWrapper>
        {/* @ts-ignore */}
        <Suspense fallback={<LazyCall setProgress={setProgress} />}>
          <Canvas camera={{ position: [10, 12, 25], fov: 33 }}>
            <fog attach="fog" args={['#1c1c1c', 5, 100]} />
            <directionalLight intensity={1} />
            <ambientLight intensity={2} />
            <Gun3D />
            <Plane />
            <gridHelper args={[100, 30]} />
            <OrbitControls enableZoom={false} autoRotate={true} />
          </Canvas>
        </Suspense>
        <E.Text className="gun"> Drag Screen!</E.Text>
      </E.GunWrapper>
      <E.Title>
        <E.Text className="title">{t('expertise')}</E.Text>
      </E.Title>
      <E.BtnWrapper>
        <E.BtnLine>
          <CustomBtn text="NodeJS" customColor="green" />
          <CustomBtn text="NestJS" customColor="red" />
          <CustomBtn text="Typescript" customColor="type" />
          <CustomBtn text="React" customColor="yellow" />
          <CustomBtn text="NextJS" customColor="red" />
        </E.BtnLine>
        <E.BtnLine>
          <CustomBtn text="Go" customColor="blue" />
          <CustomBtn text="MySQL" customColor="green" />
          <CustomBtn text="AWS" customColor="orange" />
          <CustomBtn text="Azure" customColor="blue" />
        </E.BtnLine>
      </E.BtnWrapper>
    </E.Wrapper>
  );
};

export default Experties;
