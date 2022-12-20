import {SafeAreaView} from "react-native";
import {useState} from "react";
import Circle from "../../Components/Stepper/Circle";
import {MainContainer} from "./Signup.style";
import {Password, PhoneNumber, Username} from "./index";
import {screens} from "../../Constants/routes";

const Signup = ({navigation}) => {
    const [state, setState] = useState(0);
    const setter = () => {
        setState(state + 1);
    }
    const navigateToLogin = () => {
        navigation.navigate(screens.LOGIN);
    }
    return (
        <SafeAreaView
            style={{
                height: '100%',
                backgroundColor: '#FCFFE7',
            }}>
            <Circle state={state}/>
            <MainContainer>
                {state === 0 && <Username setter={setter}/>}
                {state === 1 && <PhoneNumber setter={setter}/>}
                {state === 2 && <Password navigate={navigateToLogin} setter={setter}/>}

            </MainContainer>

        </SafeAreaView>
    );
}
export default Signup;
