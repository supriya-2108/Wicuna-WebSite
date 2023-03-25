import React from 'react'
import styled from 'styled-components'

import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      {/* <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section> */}

      {/* footer section  */}

      <footer>
        {/* <div className="container grid grid-tWO-column"> */}
        {/* <div className="footer-about">
            <h3>HOUSE OF PROFESSIONAL TAILORS AND DESIGNERS</h3>
          </div> */}





        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} WICUNAKRAFT. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
background-color:${({ theme }) => theme.colors.black};
position:absolute;
// height:40rem;
width:100%;
bottom-margin:0;
margin-top:1rem;

.contact-short {
  max-width: 60vw;
  margin: auto;
  padding: 5rem 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.colors.shadowSupport};
  transform: translateY(50%);
}
.contact-short-btn {
  justify-self: end;
  align-self: center;
}
footer {
  padding: 1rem 0 9rem 0;
  background-color: ${({ theme }) => theme.colors.orange};
  h3 {
    color: ${({ theme }) => theme.colors.hr};
    margin-bottom: 2.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  .footer-social--icons {
    display: flex;
    gap: 2rem;
    div {
      padding: 1rem;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.white};
      .icons {
        color: ${({ theme }) => theme.colors.white};
        font-size: 2.4rem;
        position: relative;
        cursor: pointer;
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
  
  .contact-short {
    max-width: 95vw;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .contact-short-btn {
      text-align: center;
      justify-self: flex-start;
    }
  }
  footer .footer-bottom--section {
    padding-top: 3.2rem;
  }
}

`
export default Footer