import React, { useState } from 'react'
import {
    LoginArea,
    LoginContent,
    FormElement,
    ItemLabel,
    AreaTitle,
    AreaInput,
    InputDefault,
    InputCheck,
    InputSub
} from './SigninElements'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import { doLogin } from '../../handlers/AuthHandler'
import useApi from '../../handlers/OlxApi'

const SignIn = () => {

    const api = useApi()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ rememberPassword, setRememberPassword ] = useState(false)
    const [ disabled, setDisabled ] = useState(false)
    const [ error, setError ] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        const json = await api.login(email, password);
        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token, rememberPassword)
            window.location.href = "/"
        }

        setDisabled(false)
    }

    return (
        <LoginArea>
            <PageContainer>
                <PageTitle center="center">Login</PageTitle>
                <LoginContent>

                    {error &&
                        <ErrorMessage>
                            {error}
                        </ErrorMessage>
                    }

                    <FormElement onSubmit={handleSubmit}>
                        <ItemLabel>
                            <AreaTitle>Email</AreaTitle>
                            <AreaInput>
                                <InputDefault
                                    type="email"
                                    disabled={disabled}
                                    value={email}
                                    onChange={e=>setEmail(e.target.value)}
                                    required
                                />
                            </AreaInput>
                        </ItemLabel>
                        <ItemLabel>
                            <AreaTitle>Senha</AreaTitle>
                            <AreaInput>
                                <InputDefault
                                    type="password"
                                    disabled={disabled}
                                    value={password}
                                    onChange={e=>setPassword(e.target.value)}
                                    required
                                />
                            </AreaInput>
                        </ItemLabel>
                        <ItemLabel>
                            <AreaTitle>Lembrar senha</AreaTitle>
                            <AreaInput>
                                <InputCheck
                                    type="checkbox"
                                    disabled={disabled}
                                    checked={rememberPassword}
                                    onChange={()=>setRememberPassword(!rememberPassword)}
                                />
                            </AreaInput>
                        </ItemLabel>
                        <ItemLabel>
                            <AreaTitle></AreaTitle>
                            <AreaInput>
                                <InputSub type="submit" disabled={disabled} value="Entrar" />
                            </AreaInput>
                        </ItemLabel>
                    </FormElement>
                </LoginContent>
            </PageContainer>
        </LoginArea>
    )
}

export default SignIn