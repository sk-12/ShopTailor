import styled from "styled-components";

export const MainContainer = styled.SafeAreaView`
margin:40px;
`
export const StyledButtonText = styled.Text`
font-weight:600;
font-size:18px;
`
export const StyledText = styled.Text`
font-weight:500;
font-size:14px;
text-align:center;
margin-bottom:10px;
`
export const StyledSignupButtonText = styled.Text`
font-weight:600;
font-size:26px;
`
export const Container = styled.View`
background-color:#EB455F;
width:100%;
border-color:#2B3467;
border-width:1px;
height:42px;
border-radius:4px;
align-items:center;
justify-content:center;

`
export const SignupButtonContainer = styled.View`
background-color:#EB455F;
width:100%;
border-color:#2B3467;
border-width:1px;
height:62px;
border-radius:4px;
align-items:center;
justify-content:center;

`
export const StyledTouchableOpacity = styled.TouchableOpacity<{ disabled }>`
opacity:${props => {
    if (props.disabled) {
        return 0.3;
    } else {
        return 1;
    }

}};

width:100%;
height:40px;
align-items:center;
justify-content:center;
border-color:#2B3467;
border-width:1px;
`
export const StyledSignupButton = styled.TouchableOpacity`
width:100%;
background-color:#EB455F;
height:60px;
align-items:center;
justify-content:center;
border-color:#2B3467;
border-width:1px;
`
export const Divider = styled.View`
width:95%;
align-self:center;
border-bottom-width:3px;
border-bottom-color:#2B3467;
`
