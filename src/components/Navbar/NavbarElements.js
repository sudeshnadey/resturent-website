import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaPizzaSlice } from 'react-icons/fa';


export const Nav = styled.nav`
background: transparent;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
`;


export const NavLink = styled(Link)`
  color: #fff;
  font-size: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
export const NavIcon =styled.div`
display: block;
position: absolute;
top: 10px;
right: 100px;
cursor: pointer;
color: #fff;


p {
  margin-left: -100px;
  font-weight: bold;
}
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 3rem;
  transform: translate(-50%, -23%);
`;