import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Link from 'next/link'
import { projects } from '../../constants/constants';


const pj = [
  {
    "title": 'Oribe Eyewear',
    "description": "Oribe Eyewear shop where users can buy, update their order and delete orders and give review about the website. Admins can view all orders and add or delete products",
    "image": '/images/1.png',
    "tags": ['Mongo', 'Express', 'React', 'Node'],
    "source": 'https://github.com/mostakiiiim/niche-website-client',
    visit: 'https://niche-website-cb3be.web.app/home',
    id: 0,
  },
  {
    "title": 'Malay Travels',
    description: "Travel agency website where users can book their favorite travel destination and admin can manage all orders and update them. Site created using ReactJs for Frontend and NodeJs for backend",
    image: '/images/2.png',
    tags: ['React', 'Mongo', 'Express', 'React', 'Node'],
    source: 'https://github.com/mostakiiiim/my-tour-client',
    visit: 'https://my-tour-frontend.web.app/home',
    id: 1,
  },
  {
    "title": 'Idyllic Hospital',
    description: "Hospital landing page using React and Firebase",
    image: '/images/3.png',
    tags: ['React', 'Firebase'],
    source: 'https://github.com/mostakiiiim/my-hospital',
    visit: 'https://my-hospital-cf58c.web.app/home',
    id: 2,
  },
  {
    "title": 'Martial Art Academy',
    description: "Landing page for martial academy using react",
    image: '/images/4.png',
    tags: ['React', 'Bootstrap'],
    source: 'https://github.com/mostakiiiim/panda-commerece',
    visit: 'https://app.netlify.com/sites/elated-bose-5539dc/overview',
    id: 3,
  },
];

console.log(pj.title);
const Projects = () => (
  < Section nopadding id="projects" >
    <SectionDivider />

    <SectionTitle main>Projects </SectionTitle>
    <GridContainer>


      <BlogCard>
        <img className="img-fluid" src='https://i.ibb.co/9bTLyP5/1.png' alt="" />
        <TitleContent>
          <HeaderThree title>Oribe Eyewear</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">Website where you can find the best glasses world wide</CardInfo>
        <div>


        </div>
        <UtilityList>
          <ExternalLinks href='https://niche-website-cb3be.web.app/home'>Visit</ExternalLinks>
          <ExternalLinks href='https://github.com/mostakiiiim/niche-website-client'>Source</ExternalLinks>
          <ExternalLinks href='/project1'>Details</ExternalLinks>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <img className="img-fluid" src='
https://i.ibb.co/hXQhPDf/2.png

' alt="" />
        <TitleContent>
          <HeaderThree title>Malay Tour</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">Travel Agency landing page for Tour lovers</CardInfo>
        <div>


        </div>
        <UtilityList>
          <ExternalLinks href='https://my-tour-frontend.web.app/home'>Visit</ExternalLinks>
          <ExternalLinks href='https://github.com/mostakiiiim/my-tour-client'>Source</ExternalLinks>
          <ExternalLinks href='/project4'>details</ExternalLinks>
        </UtilityList>
      </BlogCard>
      <BlogCard>
        <img className="img-fluid" src='https://i.ibb.co/bWj3tc3/3.png' alt="" />
        <TitleContent>
          <HeaderThree title>Idlyllic Hospital</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">Hospital landing page with services</CardInfo>

        <UtilityList>
          <ExternalLinks href='https://my-hospital-cf58c.web.app/home'>Visit</ExternalLinks>
          <ExternalLinks href='https://github.com/mostakiiiim/my-hospital'>Source</ExternalLinks>
          <ExternalLinks href='/project3'>details</ExternalLinks>

        </UtilityList>
      </BlogCard>
      <BlogCard>
        <img className="img-fluid" src='https://i.ibb.co/7yW948Z/4.png' alt="" />
        <TitleContent>
          <HeaderThree title>Martial Art Academy</HeaderThree>
          <Hr />
        </TitleContent>
        <CardInfo className="card-info">Train your body with the best instructors</CardInfo>
        <div>


        </div>
        <UtilityList>
          <ExternalLinks href='https://app.netlify.com/sites/elated-bose-5539dc/overview'>Visit</ExternalLinks>
          <ExternalLinks href='https://github.com/mostakiiiim/panda-commerece'>Source</ExternalLinks>
          <ExternalLinks href='/project2'>details</ExternalLinks>
        </UtilityList>
      </BlogCard>

    </GridContainer>
  </Section >
);

export default Projects;