import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 48px;
  background: var(--primary-dark-cyan);
  color: var(--white);

  font-family: var(--montserrat);
  font-weight: 700;
  font-size: 14px;

  border: 0;
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--dark-green);
  }
`;
