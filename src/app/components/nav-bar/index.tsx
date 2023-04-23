import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';
import { NavItems } from './nav-items';

const NavBarContainer = styled.div`
    min-height: 68px;
    ${tw`
        w-full
        min-w-full
        max-w-2xl
        flex
        flex-row
        items-center
        lg:pl-12
        lg:pr-12
        justify-between
    `}
`;

const LogoContainer = styled.div`

`

export const NavBar = () => {
    return <NavBarContainer>
        <LogoContainer>
            <Logo />
        </LogoContainer>
        <NavItems />
    </NavBarContainer>
};
