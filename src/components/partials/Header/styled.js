import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderArea = styled.header`
    height: 80px;
    border-bottom: 1px solid #eee;
`

export const HeaderFlex = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
`

export const LogoArea = styled.div`
    flex: 1;
`

export const LogoLetter = styled.span`
    font-size: 26px;
    font-weight: bold;
    color: ${props => props.color ?? '#ff0000'};
`

export const NavArea = styled.nav``

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
`

export const NavItem = styled.li`
    margin: 0 16px;

    &:last-child {
        margin-right: 0;
    }
`

export const MenuLink = styled(Link)`
    color: #333;
    transition: all 0.3s ease-in-out;
    font-size: 17px;

    &:hover {
        color: #999;
    }
`

export const ButtonLink = styled(Link)`
    background: #0070f3;
    color: #fff;
    transition: all 0.3s ease-in-out;
    font-size: 17px;
    padding: 8px 22px;
    border-radius: 20px;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);

    &:hover {
        background: rgba(0,118,255,0.9);
        box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
    }
`

export const ButtonLogout = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    background: transparent;
    color: #333;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: #999;
    }
`