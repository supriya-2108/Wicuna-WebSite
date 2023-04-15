import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import styled from 'styled-components';

import brandname from '../assets/brandname.png';

const Header = () => {
  return (
    <Mainheader>
      <NavLink to="/">
        <img src={brandname} className="brandname" alt="brandname" />
      </NavLink>
      <Navbar />
    </Mainheader>
  );
};

const Mainheader = styled.header`
  padding: 0.4rem;
  padding-right: 2rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.greyshade};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
  .brandname {
    height: auto;
    max-width: 65%;
    margin-left: 10%;
  }
`;

export default Header;
