import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/nav-bar";

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export const HomePage = () => {
    return <PageContainer>
        <NavBar />
    </PageContainer>
}