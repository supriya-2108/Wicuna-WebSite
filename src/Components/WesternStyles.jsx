import React from 'react'
import styled from 'styled-components'

const WesternStyles = () => {
    return (
        <WesternPrices>
            <p className='heading'>Top</p>
            <span>With Pant/Palazzo/Normal Salwar/Chudidar</span><br />
            <span>Without Lining - 1000Rs</span><br />
            <span>Full Lining - 1500Rs</span>

            <br /><br />


            <p className='heading'>Corset</p>
            <span>Starts from 3200Rs</span><br />
            <br /><br />
            <p className='heading'>Dresses</p>
            <span>Without Lining - 1700</span><br />
            <span>With Lining - 2500Rs</span><br />
            <br /><br />
            <p className='heading'>Gown</p>
            <span>Starts from 5200Rs</span><br />
            <br /><br />
        </WesternPrices>
    )
}

const WesternPrices = styled.section`
    .heading{
        font-size:2rem;
        font-weight:bold;
        color:${({ theme }) => theme.colors.orange};
    }
`

export default WesternStyles