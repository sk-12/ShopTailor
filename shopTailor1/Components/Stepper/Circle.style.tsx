import styled from "styled-components";

export const CircleContainer=styled.View<{state1:number,index:number}>`
width:50px;
height:50px;
margin:4px;
align-items:center;
justify-content:center;
border-radius:50px;
background-color:${props => {
    if (props.state1 > props.index) {
        return '#BAD7E9';
    }
    else{
        return '#EB455F';
    }
   
}};
border-width:3px;
border-color:#2B3467;
`
export const Index=styled.Text`
color:#2B3467;
font-weight:600;
font-size:18px;
`
export const MainContainer=styled.View`
flex-direction:row;
justify-content:center;

`
export const Content=styled.View`
flex-direction:row;
align-items:center;

`
export const Divider=styled.View`
align-items:center;
width:0;
width:60px;
border-bottom-width:2px;
border-bottom-color:#2B3467;
justify-content:center;

`
