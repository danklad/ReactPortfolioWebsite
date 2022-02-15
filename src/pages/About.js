import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
// import Button from "../components/Button";
import AboutImg from "../assets/images/about.jpg";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import resume from "../assets/Resume.pdf";
import { Button } from "reactstrap";

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .btn {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? "transperant" : "var(--gray-1)"};
    padding: 0.7em 2em;
    border: 2px solid var(--gray-1);
    border-radius: 8px;
    display: inline-block;
    color: ${(props) => (props.outline ? "var(--gary-1)" : "black")};
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Surya Nune</span>
              </p>
              <h2 className="about__heading">A Full Stack developer</h2>
              <div className="about__info">
                <PText>
                  I am from Bangalore, India. A place of nature and technology.
                  Since my childhood, i loved building gaming computers. I also
                  love to create things that can be usefull to others.
                  <br /> <br />
                  I only started coding from the time I got into my university
                  and i always wished that i had began programming since my
                  childhood. Coding is also an art for me. I love it and now I
                  have the opportunity to design along with the coding. I find
                  it really interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to be one of the well respected programmers by
                  the end of my life. Now almost everything is becoming better
                  than ever. It is time for us to create more good stuff that
                  helps the world to become a better place.
                </PText>
              </div>
              <a href={resume} download="surya.pdf">
                {/* <Button btnText="Download CV" btnLink={resume} /> */}
                <Button
                  color="primary"
                  className="px-4 btn"
                  href={resume}
                  download="surya.pdf"
                >
                  Download CV
                </Button>
              </a>
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={["Bhashyam Public School, Tanuku"]}
              />
              <AboutInfoItem
                title="Pre University"
                items={["Sasi Junior College, Tanuku"]}
              />
              <AboutInfoItem
                title="University"
                items={["Alliance Univeristy, Bangalore"]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "REACT",
                  "React Native",
                  "XML",
                ]}
              />
              <AboutInfoItem
                title="BackEnd"
                items={["Node", "Express", "Python"]}
              />
              <AboutInfoItem
                title="Other Skills"
                items={[
                  "C",
                  "Android",
                  "Java",
                  "REST API's",
                  "JWT",
                  "AWS",
                  "Linux",
                  "noSQL",
                  "JQuery",
                ]}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Work Experience</h1>

              <AboutInfoItem
                title="2019-19"
                items={["Intern at Tesync Technology, Hyderabad"]}
              />

              <AboutInfoItem
                title="2021-22"
                items={["Software Developer at Ecross Technologies (CarX)"]}
              />
              <div style={{ margin: 42 }} />
              <AboutInfoItem
                title="2022-Present"
                items={["Full Stack Developer at Cognnox Intelligent Systems"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
