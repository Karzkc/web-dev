import Script from 'next/script'
import React from 'react'

const Contact = () => {
    return (
        <>
            <div>
                <Script>
                    {`alert("Wecome to contact page");`}
                </Script>
                I am contact
            </div>
        </>
    )
}

export default Contact
