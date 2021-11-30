import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from '../components/Header/HeaderStyles';
const About = () => {
    return (
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
                        <Link href="#projects">
                            <NavLink>Projects</NavLink>
                        </Link>
                    </li>
                    <li>
                        <Link href="#tech">
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
                <div className="row">
                    <div className="col-md-6 fs-1">
                        <h1>Welcome To</h1>
                        <h1><span class="orange-highlight">Mostakim's</span> World</h1>

                        <p>I am a self-taught software developer looking to pursue a career in software development. With demonstrable technical proficiency in web design and mobile app development, a proven ability to apply my knowledge to new situations, and the ability to work well under pressure, in new environments and to stringent deadlines, I am an asset to any team. </p>
                        <a class="link-button" target="_blank" href="https://www.linkedin.com/in/mostakim-reza-omey-52b17520a/">HIRE ME</a>

                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" src="https://i.ibb.co/HT2DLgQ/my-bg2-4.png" alt="" />
                    </div>

                </div>

            </div>
        </>
    )

}
export default About;