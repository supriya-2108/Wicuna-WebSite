import React from 'react'
import Image from '../assets/SampleImage1.jpg'
import { Button } from '../Styles/Button'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Slider = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <h1 className="hero-top-data">HOUSE OF DESIGNERS AND TAILORS</h1><br /><br />
          <p className="hero-para">
            YOU THINK AND WE STITCH<br />
            WE ALSO PROVIDE PICK UP AND DROP FACILITY
          </p><br />
          <Button className="btn hire-me-btn">
            <NavLink to="/booking">BOOK NOW</NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={Image} alt="hero image" className="hero-img" />
          </picture>
        </div>
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.section`
background-color:${({ theme }) => theme.colors.white};
// height:45rem;
.section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-top-data,
  .hero-heading,
  .hero-para{
    color: ${({ theme }) => theme.colors.black};
    margin-top:10rem;

  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    margin-top: 7.5rem;
    text-transform: uppercase;
    font-weight: 500;
    color:${({ theme }) => theme.colors.orange};
    font-size: 4.3rem;
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 9.4rem;
    color:${({ theme }) => theme.colors.orange};
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 1.4rem;
    max-width: 60rem;
    font-weight:bold;
    font-size:2rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    margin-top:10%;
    height: auto;
    max-width:50%;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 4.2rem;
    }
    .hero-img{
      margin-top:0;
    }
  }
`;
export default Slider