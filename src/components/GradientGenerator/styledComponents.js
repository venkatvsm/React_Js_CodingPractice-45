// Style your elements here
import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.bgColorAndDirection});
`
export const CardContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #ededed;
  text-align: center;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: #ededed;
  font-size: 21px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const ColorPickerContainer = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`
export const CustominputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  max-width: 150px;
  @media screen and (min-width: 768px) {
    width: 150px;
  }
`
export const ColorValue = styled.p`
  margin-top: 0px;
  font-size: 18px;
  color: #ffff;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`
export const InputEl = styled.input`
  background-color: transparent;
  border: none;
  width: 100%;
  height: 50px;
  @media screen and (min-width: 768px) {
    height: 70px;
  }
`
export const SubmitButton = styled.button`
  margin: 20px;
  height: 45px;
  width: 120px;
  border: none;
  border-radius: 8px;
  background-color: #00c9b7;
  color: ##334155;
  font-weight: bold;
  font-size: 16px;
`
