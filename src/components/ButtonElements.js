import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#fff' : '#6699FF')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: ${({ fontWeight }) => (fontWeight ? '700' : '400')};
  outline: none;
  margin-right: 27px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#6699FF' : '#fff')};
    color: ${({ dark }) => (dark ? '#fff' : '#000')};
  }
`