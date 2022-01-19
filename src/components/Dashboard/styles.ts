import styled from 'styled-components';

export const Container = styled.main`
  height: calc(100vh - 7rem);
  min-height: 37.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 77vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  background-color: var(--gray);
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
`

export const Row = styled.div`
  width: 30.75rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  
  & + & {
    margin-top: 1.5rem;
  }

  &:last-child {
    margin-top: 4.5rem;

    button {
      width: 8rem;
      color: var(--white);
      background-color: var(--navy);
    }
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  span {
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  input {
    padding: 0 1.5rem;
    height: 2.5rem;
    border: 0;
    border-radius: 0.15rem;
    background: var(--white);

    &:focus {
      outline: 1px solid var(--aqua);
    }
  }

  & + * {
    margin-left: 2rem;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  width: 10rem;
  border: 0;
  border-radius: 0.15rem;
  color: var(--navy);
  background-color: var(--aqua);
  font-weight: 400;

  transition: filter 0.2s;
  
  &:hover {
    filter: brightness(0.9);
  }

  &:active {
    transform: translateY(3px);
  }

  & + & {
    margin-left: 2rem;
  }
`