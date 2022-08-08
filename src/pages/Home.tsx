import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Header from '../components/Header';
import Introduce from './Introduce';
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
    </Layout>
  );
};

export default Home;
