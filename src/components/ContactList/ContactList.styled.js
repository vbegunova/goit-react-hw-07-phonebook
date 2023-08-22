import styled from 'styled-components';

const Loading = styled.p`
  margin-bottom: 25px;
  font-weight: 700;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  button {
    margin-left: 10px;
  }
`;

export { Loading, Item };
