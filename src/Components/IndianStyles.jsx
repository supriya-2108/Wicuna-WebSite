import React from 'react'
import styled from 'styled-components'

const IndianStyles = () => {
    return (
        <IndianPrices>
            <p className='heading'>SUITS</p>
            <span>With Pant/Palazzo/Normal Salwar/Chudidar</span><br />
            <span>Without Lining - 1500Rs</span><br />
            <span>Half Lining - 1800Rs</span><br />
            <span>Full Lining - 2200Rs</span>

            <br /><br />
            <span>With Skirt/Sharara/Garara</span><br />
            <span>Without Lining - 1900Rs</span><br />
            <span>Half Lining - 2400Rs</span><br />
            <span>Full Lining - 2900Rs</span>
            <br /><br />

            <p className='heading'>BLOUSE</p>
            <span>Without Lining - 1000Rs</span><br />
            <span>With Lining - 1200Rs</span><br />
            <span>Padded - 2200Rs</span><br />
            <br /><br />
            <p className='heading'>ANARKALI</p>
            <span>Without Lining - 2000Rs</span><br />
            <span>With Lining - 2900Rs</span><br />
            <span>Padded - 3700Rs</span><br />
            <br /><br />
            <p className='heading'>LEHENGA WITH CHOLI</p>
            <span>Starts from 5200Rs</span><br />
            <br /><br />
        </IndianPrices>
    )
}

const IndianPrices = styled.section`
    .heading{
        font-size:2rem;
        font-weight:bold;
        color:${({ theme }) => theme.colors.orange};
    }
`

export default IndianStyles