import React from 'react'
import Description from '../Components/Description'
import Title from '../Components/Title'

const TermsAndConditions = () => {
    const heading = "TERMS AND CONDITIONS"
    return (
        <>
            <Title title="WicunaKraft - Terms And Conditions" />
            <Description text={heading} para={

                <>This page summarises the terms and conditions of use on the WicunaKraft website.
                    This website is owned and operated by WicunaKraft with registered address at WicunaKraft,
                    3rd floor Shubham Shopping complex, Charmwood Village-121010.
                    While browsing the website, you approve that you have properly
                    understood the following terms and conditions<br />

                    i) WicunaKraft reserves the right to modify these terms from time to time depending on the situation.
                    We might permanently or temporarily remove or disallow your access to the service without any notice
                    and liability for any reason.<br />

                    ii)Wicuna's website contains material which is owned by wicuna.<br />

                    iii)Contents created by WicunaKraft or shared by you, including photos, videos, etc may be
                    publicly displayed at the website or our social media platforms including Facebook,Instagram, ,
                    Youtube, Whatsapp etc.<br />
                    iv)We’ll engage in business with all fairness and honesty
                    This feeling is mutual, and we are not liable if something goes really wrong.<br />
                    The above Terms & Conditions are effective since August, 2019.<br />
                </>
            } />
        </>
    )
}

export default TermsAndConditions