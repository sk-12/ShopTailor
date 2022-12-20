import {Container, StyledButtonText, StyledInput, StyledTouchableOpacity} from "./Signup.style";
import {useState} from "react";
import {View} from "react-native";

const PhoneNumber = ({setter}) => {
    const [phoneNum, setPhoneNum] = useState('');
    const [dob, setDob] = useState('');


    return (<View>
            <StyledInput value={phoneNum} label="Mobile Number" placeHolderText="Enter your mobile number"
                         onChangeText={setPhoneNum}/>
            <StyledInput value={dob} label="Date of birth" placeHolderText="Enter your dob" onChangeText={setDob}/>
            <Container>
                <StyledTouchableOpacity disabled={phoneNum.length === 0 || dob.length === 0} onPress={setter}>
                    <StyledButtonText> CONTINUE</StyledButtonText>
                </StyledTouchableOpacity>
            </Container>
        </View>
    )
}
export default PhoneNumber;
