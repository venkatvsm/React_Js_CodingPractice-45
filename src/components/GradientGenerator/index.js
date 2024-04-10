import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  CardContainer,
  Heading,
  Para,
  GradientDirectionList,
  ColorPickerContainer,
  CustominputColorContainer,
  ColorValue,
  InputEl,
  SubmitButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeDirection: gradientDirectionsList[0].value,
    activecolorValueLH: '#8ae323',
    activecolorValueRH: '#014f7b',
    bgColorAndDirection: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onclickDirectionBtn = id => {
    console.log(id)
    this.setState({activeDirection: id})
  }

  onLeftColorChange = event => {
    console.log(event.target.value)
    this.setState({activecolorValueLH: event.target.value})
  }

  onRightColorChange = event => {
    this.setState({activecolorValueRH: event.target.value})
  }

  onGenerateForm = event => {
    const {activeDirection, activecolorValueLH, activecolorValueRH} = this.state
    event.preventDefault()
    this.setState({
      bgColorAndDirection: `to ${activeDirection}, ${activecolorValueLH}, ${activecolorValueRH}`,
    })
  }

  render() {
    const {
      activeDirection,
      activecolorValueLH,
      activecolorValueRH,
      bgColorAndDirection,
    } = this.state
    return (
      <BgContainer
        bgColorAndDirection={bgColorAndDirection}
        data-testid="gradientGenerator"
      >
        <CardContainer>
          <Heading>Generate a Css Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <GradientDirectionList>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                gradientDirectionsList={eachItem}
                onclickDirectionBtn={this.onclickDirectionBtn}
                isActive={eachItem.value === activeDirection}
              />
            ))}
          </GradientDirectionList>
          <Para>Pick the colors</Para>
          <ColorPickerContainer>
            <CustominputColorContainer>
              <ColorValue>{activecolorValueLH}</ColorValue>
              <InputEl
                value={activecolorValueLH}
                type="color"
                onChange={this.onLeftColorChange}
              />
            </CustominputColorContainer>
            <CustominputColorContainer>
              <ColorValue>{activecolorValueRH}</ColorValue>
              <InputEl
                value={activecolorValueRH}
                type="color"
                onChange={this.onRightColorChange}
              />
            </CustominputColorContainer>
          </ColorPickerContainer>
          <SubmitButton type="submit" onClick={this.onGenerateForm}>
            Generate
          </SubmitButton>
        </CardContainer>
      </BgContainer>
    )
  }
}
export default GradientGenerator
