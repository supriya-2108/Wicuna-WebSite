import React from 'react'
import styled from 'styled-components'
const About = () => {
    return (
        <Divabout>
            <h2>ABOUT US</h2>
            <p className='para'>
                Wicuna Kraft was endowed in 2019 to serve the people who love customization with digital medium. We design and make quality, cost-effective and stylish outfits. It's a platform where people can easily come and customize their outfit on their own. We have made one step customization to give ease and comfort to the people who are busy in their lives and has no time to go out for searching tailors and boutiques
            </p>
        </Divabout>
    )
}

const Divabout = styled.section`
    margin-top:5rem;
    margin-bottom:17rem;
        text-align:center;
        .para{
            font-size:1.7rem;
        }
`

export default About