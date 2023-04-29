import styled from 'styled-components'

export const Tab = styled.div`
  width: 6.125rem;
  height: 1.938rem;
  border-radius: 2px;
  border: solid 1px ${props => props.isSelected ? "#1797ff" : "#d6d6d6"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: #606060;
  &:hover{
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 4.3rem 0px;
`