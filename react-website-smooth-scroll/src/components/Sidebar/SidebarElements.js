import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: deeppink;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: black;
`;

export const Icon = styled.div`
position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
color: black;
`;

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 90px);
  text-align: center;
  
  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
 display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: black;
  cursor: pointer;
  
  &:hover {
    color: grey;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: black;
  white-space: nowrap;
  padding: 16px 64px;
  color: deeppink;
  font-size: 16px;
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: grey;
    color: black;
  }
`