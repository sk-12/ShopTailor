import styled from "styled-components";
import InputField from "../../Components/InputField/InputField";

export const MainContainer = styled.SafeAreaView`
margin:40px;
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
export const StyledInput = styled(InputField)`
`
export const StyledButtonText = styled.Text`
font-weight:600;
font-size:18px;
`
