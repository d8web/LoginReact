import React, { useState, useEffect } from 'react'
import {
    LoginArea,
    LoginContent,
    FormElement,
    ItemLabel,
    AreaTitle,
    AreaInput,
    InputDefault,
    InputCheck,
    InputSub,
    SelectItem,
    OptionSelect
} from './SignupElements'
import { ErrorMessage, PageContainer, PageTitle } from '../../components/MainComponents'
import { doLogin } from '../../handlers/AuthHandler'
import useApi from '../../handlers/OlxApi'

const SignUp = () => {

    const api = useApi()

    const [ name, setName ] = useState('')
    const [ stateLoc, setStateLoc ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const [ stateList, setStateList ] = useState([])

    const [ disabled, setDisabled ] = useState(false)
    const [ error, setError ] = useState('')

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        if(password !== confirmPassword) {
            setError('A senhas não são iguais!')
            setDisabled(false)
            return
        }

        const json = await api.register(name, email, password, stateLoc);
        if(json.error) {
            setError(json.error)
        } else {
            doLogin(json.token)
            window.location.href = "/"
        }

        setDisabled(false)
    }

    return (
        <LoginArea>
            <PageContainer>
                <PageTitle center="center">Cadastro</PageTitle>
                <LoginContent>

                    {error &&
                        <ErrorMessage>
                            {error}
                        </ErrorMessage>
                    }

                    <FormElement onSubmit={handleSubmit}>
                        <ItemLabel>
                            <AreaTitle>Nome Completo</AreaTitle>
                            <AreaInput>
                                <InputDefault
                                    type="text"
                                    disabled={disabled}
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                    required
                                />
                            </AreaInput>
                        </ItemLabel>
                        <ItemLabel>
                            <AreaTitle>Estado</AreaTitle>
                            <AreaInput>
                                <SelectItem
                                    value={stateLoc}
                                    onChange={e=>setStateLoc(e.target.value)}
                                    required
                                >
                                    <OptionSelect></OptionSelect>
                                    {stateList.map((i,k)=>
                                        <OptionSelect key={k} value={i._id}>
                                            {i.name}
                                        </OptionSelect>
                                    )}
                                </SelectItem>
                            </AreaInput>
                        </ItemLabel>
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
                            <AreaTitle>Confirmar Senha</AreaTitle>
                            <AreaInput>
                                <InputDefault
                                    type="password"
                                    disabled={disabled}
                                    value={confirmPassword}
                                    onChange={e=>setConfirmPassword(e.target.value)}
                                    required
                                />
                            </AreaInput>
                        </ItemLabel>
                        <ItemLabel>
                            <AreaTitle></AreaTitle>
                            <AreaInput>
                                <InputSub type="submit" disabled={disabled} value="Cadastrar" />
                            </AreaInput>
                        </ItemLabel>
                    </FormElement>
                </LoginContent>
            </PageContainer>
        </LoginArea>
    )
}

export default SignUp