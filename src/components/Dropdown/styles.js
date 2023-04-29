import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 2.3rem;
  padding: 0px 9.375rem;
  @media (max-width: 768px) {
    padding: 0px 1rem;
  }
`;

export const DropdownButton = styled.button`
  background-color: #fff;
  width: 15rem;
  display: flex;
  color: #000;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-width: 5px 5px 0 5px;
    border-style: solid;
    border-color: #000 transparent transparent transparent;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  width: 15rem;
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  margin: 0px 9.375rem;
  @media (max-width: 768px) {
    margin: 0px 1rem;
  }
`;

export const DropdownItem = styled.div`
  padding: 10px;
  font-size: 16px;
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;