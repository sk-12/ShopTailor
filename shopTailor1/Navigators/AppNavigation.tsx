import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AppParamList} from "../Constants/paramlist";
import {screens} from "../Constants/routes";
import Signup from "../Screens/Signup/Signup";
import Login from "../Screens/Login/Login";

const AppNavigation = () => {
    const Stack = createNativeStackNavigator<AppParamList>();
    return (

        <Stack.Navigator>
            <Stack.Screen name={screens.LOGIN} component={Login}/>
            <Stack.Screen name={screens.SIGNUP} component={Signup}/>
        </Stack.Navigator>

    )
}
export default AppNavigation;
