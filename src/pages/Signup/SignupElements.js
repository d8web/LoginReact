import styled from 'styled-components'

export const LoginArea = styled.section`
    padding: 10px 0px;
`

export const LoginContent = styled.div`
    max-width: 500px;
    margin: auto;
    margin-bottom: 20px;
    padding: 30px;
    box-shadow: 0px 6px 20px rgb(93 93 93 / 23%);
`

export const FormElement = styled.form``

export const ItemLabel = styled.label`
    display: flex;
    align-items: center;
    margin: 15px 0px;
    cursor: pointer;
`

export const AreaTitle = styled.div`
    width: 130px;
    font-size: 16px;
    color: #333;
`

export const AreaInput = styled.div`
    flex: 1;
`

export const InputDefault = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid #999;
    outline: none;
    padding: 0 8px;
    font-size: 16px;
    color: #333;
    transition: all 0.3s ease-in-out;

    &:focus {
        border-color: #0070f3;
    }
`

export const InputCheck = styled.input`
    width: 18px;
    height: 18px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
`

export const InputSub = styled.input`
    background: #0070f3;
    color: #fff;
    transition: all 0.3s ease-in-out;
    font-size: 17px;
    padding: 8px 32px;
    border-radius: 20px;
    box-shadow: 0 4px 14px 0 rgb(0 118 255 / 39%);
    border: none;
    cursor: pointer;
    margin: 10px 0px 0px 0px;

    &:hover {
        background: rgba(0,118,255,0.9);
        box-shadow: 0 6px 20px rgb(0 118 255 / 23%);
    }
`

export const SelectItem = styled.select`
    width: 100%;
    height: 30px;
    border: 1px solid #999;
    outline: none;
    padding: 0 8px;
    font-size: 16px;
    color: #333;
    transition: all 0.3s ease-in-out;
`

export const OptionSelect = styled.option``