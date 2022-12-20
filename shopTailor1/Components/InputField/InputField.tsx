import {TextInput} from "react-native";
import {Container, LabelText, OuterContainer, StyledInputFeild} from "./Input.style";

type AdditionalProps = {
    label: string,
    placeHolderText: string,

}
type Props = AdditionalProps & TextInput;
const InputField = ({placeholder, style, label, placeHolderText, ...rest}: Props) => {
    return (<>

        <LabelText>{label}</LabelText>
        <OuterContainer>
            <Container>

                <StyledInputFeild style={style} placeholder={placeHolderText}
                                  placeholderTextColor="#2B346760" {...rest}/>
            </Container>
        </OuterContainer></>)

}
export default InputField;
