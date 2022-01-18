import styled from 'styled-components';

export const Container = styled.header`
  height: 8rem;
  background-color: var(--navy);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 8rem;
  margin-left: 2rem;

  img {
    & + img {
      margin-left: 1.5rem;
    }
  }
`;