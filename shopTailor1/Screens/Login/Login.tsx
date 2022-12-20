import {SafeAreaView} from "react-native";
import InputField from "../../Components/InputField/InputField";
import {
    MainContainer,
    Container,
    StyledButtonText,
    StyledTouchableOpacity,
    Divider,
    StyledSignupButton, SignupButtonContainer, StyledSignupButtonText, StyledText
} from "./Login.style";
import {screens} from "../../Constants/routes";

const Login = ({navigation}) => {

    return (
        <SafeAreaView
            style={{
                height: '100%',
                backgroundColor: '#FCFFE7',
            }}>
            <MainContainer>

                <InputField label="Username" placeHolderText="Enter your username"/>

                <InputField label="Password" placeHolderText="Enter your Password"/>

                <Container>
                    <StyledTouchableOpacity onPress={() => {
                    }}>
                        <StyledButtonText> Done</StyledButtonText>
                    </StyledTouchableOpacity>
                </Container>
            </MainContainer>
            <Divider/>
            <MainContainer>
                <StyledText> Don't have an account yet,Signup to create one </StyledText>
                <SignupButtonContainer>

                    <StyledSignupButton onPress={() => {
                        navigation.navigate(screens.SIGNUP)
                    }}>
                        <StyledSignupButtonText> Signup</StyledSignupButtonText>
                    </StyledSignupButton>
                </SignupButtonContainer>
            </MainContainer>
        </SafeAreaView>);
}
export default Login;
