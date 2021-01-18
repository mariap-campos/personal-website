import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <S.FooterContainer>
            <p> <FontAwesomeIcon icon={faCode} className="icon-Marker"/> by mashpaula</p>
        </S.FooterContainer>
    )
}

export default Footer;