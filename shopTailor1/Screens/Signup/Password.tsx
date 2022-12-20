import {Container, StyledButtonText, StyledInput, StyledTouchableOpacity} from "./Signup.style";
import {useState} from "react";
import {View} from "react-native";

const Password = ({navigate, setter}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const OnPress = () => {
        navigate();
        setter();
    }
    return (<View>
            <StyledInput value={password} label="Password" placeHolderText="Enter your password"
                         onChangeText={setPassword}/>
            <StyledInput value={confirmPassword} label="Confirm Password" placeHolderText="Confirm your password"
                         onChangeText={setConfirmPassword}/>
            <Container>
                <StyledTouchableOpacity disabled={password.length === 0 || setConfirmPassword.length === 0}
                                        onPress={OnPress}>
                    <StyledButtonText> Done</StyledButtonText>
                </StyledTouchableOpacity>
            </Container>
        </View>
    )
}
export default Password;
