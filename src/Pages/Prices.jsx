import React, { useState } from 'react'
import styled from 'styled-components'
import IndianStyles from '../Components/IndianStyles'
import WesternStyles from '../Components/WesternStyles'
const Prices = () => {
    const [WesState, WesSetState] = useState(false);
    const [state, setState] = useState(false);
    function HandleChange(event) {
        setState(true);
        WesSetState(false);
    }

    function HandleWesternChange(event) {
        setState(false);
        WesSetState(true);
    }



    return (
        <PriceSection>
            <input type="radio" value="Indian" name="style" onChange={HandleChange} /> Indian
            <input type="radio" value="Western" name="style" onChange={HandleWesternChange} className="leftMargin" /> Western<br />
            {/* <IndianStyles /> */}
            {state && <IndianStyles />}
            {WesState && <WesternStyles />}
        </PriceSection>
    )

}
const PriceSection = styled.section`
text-align:center;
font-size:2rem;
font-weight:bold;
margin-top:5%;
width:auto;
margin-bottom:30rem;

.leftMargin{
    margin-left:2rem;
}
`

export default Prices;