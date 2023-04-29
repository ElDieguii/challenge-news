import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  width: 48%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.875rem;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:hover{
    opacity: 0.4;
  }
`

export const Content = styled.div`
  padding: 0.875rem 1.625rem;
  &:hover{
    cursor: pointer;
  }
`

export const FavIcon = styled.img`
  &:hover{
    cursor: pointer;
  }
`

export const FavContainer = styled.div`
  background: #F5F5F5;
  min-width: 4.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const Title = styled.div`
  font-family: Roboto;
  font-size: 0.875rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`

export const CreatedAt = styled.div`
  font-family: Roboto;
  font-size: 0.688rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
  display: flex;
  column-gap: 5px;
  align-items: center;
`