import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
    return (
        <Container>Super deal!!!</Container>
    )
}

export default Announcement;