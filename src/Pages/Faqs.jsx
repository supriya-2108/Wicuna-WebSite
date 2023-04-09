import React from 'react'
import styled from 'styled-components'
import Title from '../Components/Title';

const Faqs = () => {
    return (
        <>  <Title title="Frequently Asked Question from WicunaKraft" />
            <Wrapper>
                <div>
                    <p className='ques'>Do you make customised outfits?</p>
                    <p className='ans'>Yes, we make outfits that are custom fit. You can place you order on https://wicunakraft.com/booking or  whatsapp/call on 9311823017 to place your orders.</p>
                </div>
                <div>
                    <p className='ques'>
                        How to I track my order?
                    </p>
                    <p className='ans'>A tracking link will be sent on your whatsapp, where you can track the making of your outfit once your order is accepted.</p>
                </div>
                <div>
                    <p className='ques'>Are there any shipping charges?</p>
                    <p className='ans'>No, we provide free shipping.</p>
                </div>
                <div>
                    <p className='ques'>After placing an order, how long can I expect it?</p>
                    <p className='ans'>i) We deliver in 5-7days after the order is accepted<br />

                        ii) Within 24  hours well update about the outfit.</p>
                </div>
                <div>
                    <p className='ques'>If I need my order urgently, can you deliver it?</p>
                    <p className='ans'>Yes, we can deliver urgently within 36-48 hours and in it will cost additonally.</p>
                </div>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
text-align:center;
margin:3rem 0rem 0rem 3rem;;
.ques{
    font-size:2.3rem;
    font-weight:bold;
}
`;
export default Faqs