import React from 'react'
import sample1 from '../assets/sample1.jpg';
import sample2 from '../assets/sample2.jpg';
import sample3 from '../assets/sample3.jpg';
import sample4 from '../assets/sample4.jpg';
import styled from 'styled-components';
const WorkSamples = () => {
    return (
        <Wrapper>
            <h2 className="process-heading">WORK SAMPLES</h2>
            <div className='container grid grid-four-column'>
                <div>
                    <img className='samples' src={sample1} />
                </div>
                <div>
                    <img className='samples' src={sample2} />
                </div>
                <div>
                    <img className='samples' src={sample3} />
                </div>
                <div>
                    <img className='samples' src={sample4} />
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
text-align: center;
.process-heading{
    margin-top:6rem;
    font-size:3.5rem;
    // background-color:${({ theme }) => theme.colors.greyshade};
    color:${({ theme }) => theme.colors.orange};
}
.samples{
  
        margin-top:15%;
        // align-item: center;
        height: 35rem;
        max-width:100%;
        margin-bottom:15%;
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .samples{
        margin-top:3%;
        margin-bottom:3%;
    }
}



`;

export default WorkSamples