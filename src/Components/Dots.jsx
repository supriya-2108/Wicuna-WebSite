import React from 'react'
import styled from 'styled-components'
const Dots = () => {
    return (
        <WrapSpan>
            <span className='dot'></span>
        </WrapSpan>
    )
}

const WrapSpan = styled.section`
.dot{
    height:50px;
    width:50px;
    background:${({ theme }) => theme.colors.orange};;
    border-radius:50 %;
    border: 1px solid #000;
    
}
`

export default Dots