import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: relative;
  display: flex;
  gap: 15px;
`;

export const FilterBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  background-color: ${props => props.theme.colors.main};
  text-transform: uppercase;
  border-radius: 10px;
  line-height: 1;
  padding: 6px;
  transition: ${props => props.theme.transition.hover};
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.btn};

  &:hover {
    border-radius: 18px;
    background-color: ${props => props.theme.colors.active};
  }
`;

