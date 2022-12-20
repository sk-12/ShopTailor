import {View} from "react-native";
import {Container, StyledButtonText, StyledInput, StyledTouchableOpacity} from "./Signup.style";
import {useState} from "react";

const Username = ({setter}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');


    return (<View>
            <StyledInput value={username} label="Username" placeHolderText="Enter username" onChangeText={setUsername}/>
            <StyledInput value={email} label="Email" placeHolderText="Enter your Email" onChangeText={setEmail}/>
            <Container>
                <StyledTouchableOpacity disabled={email.length === 0 || username.length === 0} onPress={setter}>
                    <StyledButtonText> Continue</StyledButtonText>
                </StyledTouchableOpacity>
            </Container>
        </View>
    )
}
export default Username;
