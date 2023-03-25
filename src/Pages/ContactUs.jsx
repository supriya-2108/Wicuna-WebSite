import React from 'react'
import styled from 'styled-components';

const ContactUs = () => {
    return (
        <ContactSection>
            <p>To connect with us </p>
            <span>Email Us On - wicunakraft@gmail.com</span><br />
            <span>Call or Whatsapp on - 9311823017</span>
        </ContactSection>

    )
}

const ContactSection = styled.section`
font-size:2rem;
justify-content:center;
text-align:center;
margin-top:10rem;
margin-bottom:30rem;
`;

export default ContactUs