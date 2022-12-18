import {
  CircleContainer,
  Content,
  Divider,
  Index,
  MainContainer,
} from './Circle.style';

const Circle = ({state}) => {
  const noOfCircles = new Array(3).fill(0);
  const circleContainer = (_value, index) => {
    if (index < 2) {
      return (
        <Content key={index}>
          <CircleContainer state1={state} index={index}>
            <Index>{index}</Index>
          </CircleContainer>
          <Divider />
        </Content>
      );
    } else {
      return (
        <CircleContainer state1={state} index={index} key={index}>
          <Index>{index}</Index>
        </CircleContainer>
      );
    }
  };
  return <MainContainer>{noOfCircles.map(circleContainer)}</MainContainer>;
};
export default Circle;
