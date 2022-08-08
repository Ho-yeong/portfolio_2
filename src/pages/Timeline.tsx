import React from 'react';
import { useTranslation } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { MdOutlineSchool } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

const T = {
  Wrapper: styled.section`
    width: 100%;
    background: #1c0522;
    color: white;
    padding: 0 30px;
  `,
  Container: styled.article`
    max-width: 1140px;
    margin: 0 auto;
    padding: 100px 0;
  `,
  Title: styled.div`
    font-size: 42px;
    font-weight: 700;
    height: 80px;
  `,
};

const I = {
  Job: styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 5px;
  `,
  Company: styled.div`
    margin-bottom: 2px;
  `,
  Location: styled.div`
    font-size: 14px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  `,
  Box: styled.div`
    margin-bottom: 10px;
  `,
  Desc: styled.div`
    margin-left: 20px;
    font-size: 15px;
    line-height: 17px;
    word-break: keep-all;
  `,
  Title: styled.div`
    margin-bottom: 4px;
  `,
};

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  return (
    <T.Wrapper>
      <T.Container>
        <T.Title>{t('timeline')}</T.Title>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021.08 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<HiOutlineOfficeBuilding />}
          >
            <I.Job>{t('vic_job')}</I.Job>
            <I.Company>Vic Game Studios</I.Company>
            <I.Location>{t('vic_loca')}</I.Location>
            <I.Box>
              <I.Title>{t('vic_manage_tool')}</I.Title>
              <I.Desc>{t('vic_manage_tool_desc')}</I.Desc>
              <I.Desc>{t('vic_manage_tool_desc_2')}</I.Desc>
              <I.Desc>GraphQL</I.Desc>
            </I.Box>
            <I.Box>
              <I.Title>{t('vic_brand')}</I.Title>
              <I.Desc>{t('vic_brand_desc')}</I.Desc>
              <I.Desc>{t('vic_brand_desc_2')}</I.Desc>
              <I.Desc>RestAPI</I.Desc>
            </I.Box>
            <I.Box>
              <I.Title>{t('vic_inhouse')}</I.Title>
              <I.Desc>{t('vic_inhouse_desc')}</I.Desc>
              <I.Desc>{t('vic_inhouse_desc_2')}</I.Desc>
              <I.Desc>{t('vic_inhouse_desc_3')}</I.Desc>
            </I.Box>
            <I.Box>
              <I.Title>{t('vic_desc')}</I.Title>
              <I.Title>{t('vic_desc_2')}</I.Title>
              <I.Title>docker-compose, docker, jenkins</I.Title>
            </I.Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(255, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2021.08"
            iconStyle={{ background: 'rgb(255, 150, 243)', color: '#fff' }}
            icon={<MdOutlineSchool />}
          >
            <I.Job>Computer Science degree</I.Job>
            <I.Company>bank</I.Company>
            <I.Desc>이것 저것</I.Desc>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020.10 - 2021.07"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<HiOutlineOfficeBuilding />}
          >
            <I.Job>Back Office / Game Server</I.Job>
            <I.Company>Treenod</I.Company>
            <I.Location>Hae-un-dae, Busan</I.Location>
            <I.Desc className="title">운영툴</I.Desc>
            <I.Desc className="title">게임 서버</I.Desc>
            <I.Desc>Golang 웹 기반 게임 컨텐츠 개발</I.Desc>
            <I.Desc>Gin 프레임워크</I.Desc>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(255, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2020.01 - 2020.08"
            iconStyle={{ background: 'rgb(255, 150, 243)', color: '#fff' }}
            icon={<MdOutlineSchool />}
          >
            <I.Job>마이크로 서비스 기반 웹 개발자 양성</I.Job>
            <I.Company>KG 아이티뱅크</I.Company>
            <I.Desc>이것 저것</I.Desc>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </T.Container>
    </T.Wrapper>
  );
};

export default Timeline;
