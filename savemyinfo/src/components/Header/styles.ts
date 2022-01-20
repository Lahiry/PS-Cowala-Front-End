import styled from 'styled-components';

export const Container = styled.header`
  height: 7rem;
  background-color: var(--navy);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 7rem;
  margin-left: 2rem;

  img {
    & + img {
      margin-left: 1.5rem;
    }
  }

  .icone {
    height: 6rem;
    width: 5.5rem;
  }

  .logo {
    height: 3.9375rem;
    width: 15.6875rem;
  }
`;
