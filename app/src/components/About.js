import React from 'react'

import * as styled from '../styles/styled-components'

// imgs
import flag from '../images/karate-boy.png'

export default function About() {
    return (
        <styled.AboutContainer>
            <styled.Section>
                <styled.TextContainer>
                    <h1>What is American Karate?</h1>
                    <p>
                        American Karate combines the best techniques of TAE KWAN DO, SHOTO KAN, KUNG FU, AMERICAN BOXING, JUDO, JU JUITSU, and many other styles into the strongest most effective means of Self-Defense and Martial Arts training available today.  It instills in its' students, self-confidence, high self-esteem, discipline, and most importantly the ability to feel and demonstrate a sincere respect for others.
                    </p>

                </styled.TextContainer>
                <img src={flag} style={{height: '500px' }}/>
            </styled.Section>
        </styled.AboutContainer>
    )
}
