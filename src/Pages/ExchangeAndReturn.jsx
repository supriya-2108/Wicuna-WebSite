import React from 'react'
import Description from '../Components/Description'
import Title from '../Components/Title'

const ExchangeAndReturn = () => {
    const heading = "Exchange & Return"
    return (
        <>
            <Title title="WicunaKraft - Exchange And Return Policy " />
            <Description text={heading} para={
                <>i) Once the outfit is delivered client's can give request for alteration within 7 days.<br />

                    ii) The item to be given for alteration must be unwashed,unworn, and undamaged with no smell of perfume, deodorant,
                    or any detergent.<br />

                    iii) Refund is not valid on any customised outfits.<br />

                    iv) Alteration is done only once, you'll share the picture of the issue in your outfit.<br />
                    v) Alterated outfit will be delivered within 2-4 working days.<br />
                    vi) After 7 days of delivery alteration will be chargeable.<br />
                </>} />
        </>


    )
}

export default ExchangeAndReturn