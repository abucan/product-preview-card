import { ProductCardContainer } from './product-card.styles';
import Button from '../button/button.component';

const ProductCard = () => {
  return (
    <ProductCardContainer>
      <div className='product-box'>
        <img
          src={require('../../assets/images/image-product-desktop.jpg')}
          alt=''
          className='box-image'
        />
        <img
          src={require('../../assets/images/image-product-mobile.jpg')}
          alt=''
          className='box-image-mobile'
        />
        <div className='box-info'>
          <h5 className='product-category'>Perfume</h5>
          <h2 className='product-title'>
            Gabrielle Essence Eau De Parfum
          </h2>
          <p className='description'>
            A floral, solar and voluptuous interpretation composed by
            Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className='product-price'>
            <h2 className='current-price'>$149.99</h2>
            <h5 className='previous-price'>$169.99</h5>
          </div>
          <Button />
        </div>
      </div>
    </ProductCardContainer>
  );
};

export default ProductCard;
