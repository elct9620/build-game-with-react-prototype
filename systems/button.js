const ButtonSystem = (entities, { input, dispatch }) => {
  const moveEvent = input.find(x => x.name == 'onMouseMove') || {}
  const downEvent = input.find(x => x.name == 'onMouseDown') || {}

  const movePayload = moveEvent.payload
  const downPayload = downEvent.payload

  const buttons =
    Object
    .values(entities)
    .filter(entity => entity.isButton)

    buttons.forEach(button => {

      if (movePayload) {
        let xBuound = movePayload.pageX >= button.x && movePayload.pageX <= (button.x + button.width)
        let yBuound = movePayload.pageY >= button.y && movePayload.pageY <= (button.y + button.height)
        button.isHover = xBuound && yBuound
      }

      if (downPayload && !button.isPressed) {
        let xBuound = downPayload.pageX >= button.x && downPayload.pageX <= (button.x + button.width)
        let yBuound = downPayload.pageY >= button.y && downPayload.pageY <= (button.y + button.height)
        button.isPressed = xBuound && yBuound

        if (button.isPressed) {
          if (button.onClick) { button.onClick(dispatch) }

          if (button.pressedTimer) { clearTimeout(button.PressedTimer) }
          button.pressedTimer = setTimeout(() => button.isPressed = false, 250)
        }
      }
    })

  return entities;
}

export default ButtonSystem;
