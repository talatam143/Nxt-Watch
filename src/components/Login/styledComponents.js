import styled from 'styled-components'

export const DIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.theme === true ? '#212121' : '#f1f1f1')};
  font-family: 'Roboto';
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.theme === true ? '#0f0f0f' : '#f9f9f9')};
  box-shadow: ${props =>
    props.theme === true ? '0 0 10px 0 #181818;' : '0 0 10px 0 #e2e8f0;'};
  @media (min-width: 768px) {
    padding: 30px 40px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    padding: 20px 20px;
    border-radius: 8px;
  }
`
export const Image = styled.img`
  margin: auto;
  @media (min-width: 768px) {
    width: 15vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
`
export const FORM = styled.form`
  padding: 10px;
  margin-top: 20px;
  @media (min-width: 768px) {
    width: 25vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
  }
`
export const INPUT = styled.input`
  width: ${props => (props.isCheck ? '' : '100%')};
  height: ${props => (props.isCheck ? '13px' : '35px')};
  padding-left: ${props => !props.isCheck && '15px'};
  margin-top: ${props => (props.isCheck ? '15px' : '5px')};
  margin-right: ${props => props.isCheck && '7px'};
  border-radius: 3px;
  border-width: 1px;
  border-color: #94a3b8;
  font-size: 14px;
  background-color: ${props => props.theme === true && 'transparent'};
  color: ${props => props.theme === true && '#ffffff'};
`

export const LABEL = styled.label`
  color: ${props => (props.theme === true ? '#ffffff' : '#64748b')};
  font-size: ${props => (props.isLabel ? '15px' : '14px')};
  font-weight: ${props => (props.isLabel ? '600' : '500')};
`

export const BUTTON = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 5px;
  border-style: none;
  height: 35px;
  font-size: 15px;
  &:hover {
    cursor: pointer;
  }
`

export const PARA = styled.p`
  color: #ff0000;
  font-weight: 500;
  font-size: 14px;
  margin-top: auto;
`
