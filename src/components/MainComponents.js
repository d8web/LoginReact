import styled from 'styled-components'

export const Template = styled.div``

export const PageContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    margin: auto;
`

export const PageTitle = styled.h1`
    font-weight: bold;
    font-size: 26px;
    margin: 10px 0px 20px 0px;
    text-align: ${props => props.center ?? 'left'};
    color: #333;
`

export const PageBody = styled.div``

export const ErrorMessage = styled.div`
    background: linear-gradient(90deg,#ed6292 25%,#ed5760 87.5%);
    padding: 14px;
    margin: 20px 0px 40px 0px;
    border-radius: 5px;
    color: #fff;
    font-size: 1.1em;
    text-align: center;
`