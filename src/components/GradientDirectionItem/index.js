// Write your code here
import {DirectionContainer, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsList, onclickDirectionBtn, isActive} = props
  const {value, displayText} = gradientDirectionsList
  const onclickButton = () => {
    onclickDirectionBtn(value)
  }
  return (
    <DirectionContainer>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={onclickButton}
      >
        {displayText}
      </DirectionButton>
    </DirectionContainer>
  )
}

export default GradientDirectionItem
