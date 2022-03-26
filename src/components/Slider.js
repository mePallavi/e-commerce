import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff7f7;
    border-radius: 50%;
    //foll 3 prop. position the arrow icon in the center
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;  //this prop requires parent to have pos: relative, so that child is positioned absolutely wrt parent
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2; //to put arrow on top of stack
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw); //to move the slider on the x-axis; initially it should be 1st slide so 0vw 
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg}; // value of bg prop given to slider is substituted here
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
`
const Image = styled.img`
    margin-top: 15px;
    margin-left: 55px;
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Description = styled.p`
    margin: 50px 0px;
    font: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
`

const Slider = () => {

    const handleClick = (direction) => {};

    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImageContainer>
                        <Image src="https://cdn.pixabay.com/photo/2019/09/22/08/15/woman-4495395_960_720.png" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>SHOP NOW AND SAVE UPTO 30%</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImageContainer>
                        <Image src="https://cdn.pixabay.com/photo/2019/09/22/08/15/woman-4495395_960_720.png" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>SHOP NOW AND SAVE UPTO 30%</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImageContainer>
                        <Image src="https://cdn.pixabay.com/photo/2019/09/22/08/15/woman-4495395_960_720.png" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>SHOP NOW AND SAVE UPTO 30%</Description>
                        <Button>SHOP</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;