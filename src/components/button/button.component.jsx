import { ButtonContainer } from './button.styles';

const Button = () => {
  return (
    <ButtonContainer>
      <img
        src={require('../../assets/images/icon-cart.svg').default}
        style={{ width: 14 }}
        alt=''
      />
      Add to Cart
    </ButtonContainer>
  );
};

export default Button;
