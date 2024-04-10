// Style your elements here
import styled from 'styled-components/macro'

export const DirectionContainer = styled.li`
  width: 46%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const DirectionButton = styled.button`
  font-family: 'Roboto';
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffff;
  border: none;
  font-weight: 600;
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 10px;
  border-radius: 6px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
`
