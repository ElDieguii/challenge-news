import styled from "styled-components";

export const NewsContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px 9.375rem;
  @media (max-width: 768px) {
    padding: 0px 1rem;
  }
`

export const Container = styled.div`
  display:flex;
  flex-direction:column;
`

export const LoadingText = styled.div`
  text-align: center;
`