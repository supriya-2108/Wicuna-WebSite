import React from 'react'
import styled from 'styled-components'

const Description = ({ text, para }) => {
    return (
        <Wrapper>
            <h3>{text}</h3>
            <p>{para}</p>

        </Wrapper >
    )
}

const Wrapper = styled.section`
// text-align:center;
padding:2rem 0 0;
margin-left:10rem;
margin-right:10rem;
margin-bottom:3rem;
h3{
    font-size:4rem;
    font-weight:bold;
    text-align:center;
}
p{
    font-size:1.7rem;
}

`

export default Description