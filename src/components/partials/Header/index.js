import React from 'react'
import { Link } from 'react-router-dom'
import { 
    HeaderArea,
    HeaderFlex,
    LogoArea,
    LogoLetter,
    NavArea,
    NavMenu,
    NavItem,
    MenuLink,
    ButtonLink,
    ButtonLogout
} from './styled'
import { PageContainer } from '../../MainComponents'
import { isLogged, doLogout } from '../../../handlers/AuthHandler'

const Header = () => {

    let logged = isLogged()

    const handleLogout = () => {
        doLogout()
        window.location.href = "/"
    }

    return (
        <HeaderArea>
            <PageContainer>
                <HeaderFlex>
                    <LogoArea>
                        <Link to="/">
                            <LogoLetter color="red">O</LogoLetter>
                            <LogoLetter color="green">L</LogoLetter>
                            <LogoLetter color="blue">X</LogoLetter>
                        </Link>
                    </LogoArea>
                    <NavArea>
                        <NavMenu>
                            {logged &&
                                <>
                                    <NavItem>
                                        <MenuLink to="/my-account">Minha Conta</MenuLink>
                                    </NavItem>
                                    <NavItem>
                                        <ButtonLogout onClick={handleLogout}>Sair</ButtonLogout>
                                    </NavItem>
                                    <NavItem>
                                        <ButtonLink to="/post-an-add">Postar Anúncio</ButtonLink>
                                    </NavItem>
                                </>
                            }
                            {!logged &&
                                <>
                                    <NavItem>
                                        <MenuLink to="/signin">Login</MenuLink>
                                    </NavItem>
                                    <NavItem>
                                        <MenuLink to="/signup">Cadastro</MenuLink>
                                    </NavItem>
                                    <NavItem>
                                        <ButtonLink to="/signin">Postar Anúncio</ButtonLink>
                                    </NavItem>
                                </>
                            }
                        </NavMenu>
                    </NavArea>
                </HeaderFlex>
            </PageContainer>
        </HeaderArea>
    )
}

export default Header