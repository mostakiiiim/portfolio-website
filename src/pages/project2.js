import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from '../components/Header/HeaderStyles';

const Project2 = () => {
    return ( // https://i.ibb.co/2qfgmz6/screencapture-niche-website-cb3be-web-app-dashboard-manage-Orders-2021-11-30-22-06-40.png
        // https://i.ibb.co/6rhds3D/screencapture-niche-website-cb3be-web-app-dashboard-manage-Products-2021-11-30-22-06-12.png
        // https://i.ibb.co/ygCqgxZ/screencapture-niche-website-cb3be-web-app-home-2021-11-30-22-05-40.png
        <>
            <Container>
                <Div1>
                    <Link href="/">
                        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
                            <DiCssdeck size="3rem" /> <span>Mostakim's Portfolio</span>
                        </a>
                    </Link>
                </Div1>
                <Div2>
                    <li>
                        <Link href="/#projects">
                            <NavLink>Projects</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/#tech">
                            <NavLink>Technologies</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <NavLink>About</NavLink>
                        </Link>
                    </li>
                </Div2>
                <Div3>
                    <SocialIcons href="https://github.com/mostakiiiim">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.linkedin.com/in/mostakim-reza-omey-52b17520a/">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://www.instagram.com/">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                </Div3>
            </Container>
            <div className="container">
                <h1 className='text-center'>Project name: <b> Martial Art Academy</b> </h1>
                <div className="row pb-5">
                    <div className="col-md-60 w-50">
                        <img className="img-fluid" src="https://i.ibb.co/ySdGKmJ/martialart-front.png
" alt="" />
                    </div>
                    <div className="col-md-60 w-50">
                        <h1><a href="https://elated-bose-5539dc.netlify.app/">Live Site </a></h1>
                        <h1><a href="https://github.com/mostakiiiim/niche-website-client">Github</a></h1>
                        <ul style={{ color: "red" }} className="fs-1" >
                            <li className="pb-2">Learn About the trainers and variety of classes offered by Martial Arts Academy</li>

                            <li className="pb-3"> Site created with simple React Js and React-Bootstrap and React-Hook-Form</li>

                            <li className="pb-3">Site created with simple React Js and React-Bootstrap</li>

                            <li className="pb-3"> Hosted on Netlify</li>


                        </ul>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6 ">
                        <img className="img-fluid " src=" https://i.ibb.co/tXFXKdM/martial-art-class.png" alt="" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid " src=" https://i.ibb.co/mTnxC1f/martial-art-trainer.png" alt="" />
                    </div>

                </div>

            </div>
        </>)
}
export default Project2;