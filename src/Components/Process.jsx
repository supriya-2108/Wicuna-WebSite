import React from 'react'
import styled from 'styled-components'
import Appointment from '../assets/business.png';
import Design from '../assets/consulting.png';
import Stitching from '../assets/machine.png';
import Delivery from '../assets/fast-delivery.png';
const Process = () => {
    return (
        <ProcessWrapper>
            <h2 className="process-heading">HOW WE WORK</h2>
            <div className="container grid grid-four-column">
                <div className="card">
                    <p className='steps-heading'>1.APPOINTMENT</p>
                    <img className='logo' src={Appointment} alt="Appointment" />
                    <span className='span-heading'>In this step we'll take your measurements and discuss the designs.
                        For that You can visit our stores or our expert will visit your place for measurements</span>
                </div>
                <div className="card">
                    <p className='steps-heading'>2.DESIGN FINALISATION</p>
                    <img className='logo' src={Design} alt="Designing" />
                    <span className='span-heading'>In this step we share the final outfit style with you for the approval.</span>
                </div>
                <div className="card">
                    <p className='steps-heading'>3.STICHING AND SOURCING</p>
                    <img className='logo' src={Stitching} alt="Stitching" />
                    <span className='span-heading'>In this step we source the raw materials(i.e. Lining ,fabric(if asked for) and accesories) and stitch your outfit.</span>
                </div>
                <div className="card">
                    <p className='steps-heading'>4.DELIVERY</p>
                    <img className='logo' src={Delivery} alt="Delivery" />
                    <span className='span-heading'>In this step we deliver your outfit to your place.If you have given your order at our store then you can also collect from our store.</span>
                </div>
            </div>
        </ProcessWrapper>

    )
}

const ProcessWrapper = styled.section`
    margin:1.5rem;
    margin-bottom:2rem;
    text-align: center;
    vertical-align: middle;
    // height:40rem;
    width:auto;

    .container{
        margin-top:3rem;
    }
    .process-heading{
        margin-top:6rem;
        font-size:3.5rem;
        // background-color:${({ theme }) => theme.colors.greyshade};
        color:${({ theme }) => theme.colors.orange};
    }

    .steps-heading{
        font-size:1.9rem;
        margin-bottom:1.8rem;
    }
    .span-heading{
        font-size:1.6rem;
        color:${({ theme }) => theme.colors.grey};
        
    }

    .logo{
        height:20%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: auto;
        margin-bottom:2rem;
    }

    .card{
        box-shadow: 2px 4px 8px 2px rgba(0,0,0,0.2);
        transition: 0.3s;
        height:250px;
        width:auto;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
       .span-heading{
        font-size:2rem
       }

       .steps-heading{
        font-size:2.5rem;
    }
      }
`

export default Process