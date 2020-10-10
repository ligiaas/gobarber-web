import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  height: 56px;
  border: 0;
  border-radius: 10px;
  padding: 0 16px;
  color: #321e38;
  width: 98%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.3s;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
