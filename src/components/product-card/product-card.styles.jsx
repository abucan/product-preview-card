import styled from 'styled-components';

export const ProductCardContainer = styled.section`
  .product-box {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .box-image {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 300px;
  }

  .box-info {
    background: var(--white);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 300px;
  }

  .product-category {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 12px;
    color: var(--dark-grayish-blue);
    text-transform: uppercase;
  }

  .product-tile {
    font-family: var(--fraunces);
    font-weight: 700;
    font-size: 32px;
    color: var(--very-dark-blue);
  }

  .description {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 14px;
    color: var(--dark-grayish-blue);
    line-height: 1.75;
  }

  .current-price {
    font-family: var(--fraunces);
    font-weight: 700;
    font-size: 32px;
    color: var(--primary-dark-cyan);
  }

  .previous-price {
    font-family: var(--montserrat);
    font-weight: 500;
    font-size: 13px;
    color: var(--dark-grayish-blue);
    text-decoration: line-through;
  }

  .product-price {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .box-image-mobile {
    width: 300px;
    display: none;
  }

  @media (max-width: 660px) {
    .product-box {
      grid-template-columns: minmax(0, 1fr);
    }

    .box-image {
      display: none;
    }

    .box-image-mobile {
      display: block;
      border-radius: 10px 10px 0 0;
    }

    .box-info {
      gap: 10px;
      border-radius: 0 0 10px 10px;
    }
  }
`;
