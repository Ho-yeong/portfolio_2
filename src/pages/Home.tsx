import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Experties from './Experties';
import Introduce from './Introduce';
import Timeline from './Timeline';
import Top from './Top';

const Layout = styled.main<{ locale: string }>`
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;

  font-family: ${({ locale }) => (locale === 'ja-JP' ? 'Noto Sans JP' : 'Noto Sans KR')};
`;

const Home: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <Layout locale={i18n.language}>
      <Header />
      <Top />
      <Introduce />
      <Experties />
      <Timeline />
      <Footer />
    </Layout>
  );
};

export default Home;
