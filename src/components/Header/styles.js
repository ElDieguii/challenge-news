import styled from "styled-components";

export const Container = styled.div`
  height: 7rem;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  padding: 0px 9.375rem;
  @media (max-width: 768px) {
    padding: 0px 1rem;
  }
`

export const Title = styled.div`
  font-family: Baskerville;
  font-size: 1.75rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
`