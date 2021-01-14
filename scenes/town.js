import Cursor from '../entities/Cursor'
import Label from '../entities/Label'
import Button from '../entities/Button'

export const entities = async () => {
  return {
    cursor: {
      x: 0,
      y: 0,
      width: 30,
      height: 30,
      renderer: <Cursor />
    },
    label: {
      text: 'Welcome to first town',
      align: 'center',
      fontSize: '2em',
      width: 500,
      height: 200,
      y: 100,
      layout: {
        horizontal: 'center'
      },
      renderer: <Label />
    },
    back: {
      text: 'Back',
      fontSize: '1.2em',
      width: 200,
      height: 50,
      y: 350,
      layout: {
        horizontal: 'center'
      },
      isButton: true,
      onClick(dispatch) {
        dispatch({ type: 'switchScene', target: '/' })
      },
      renderer: <Button />
    }
  }
}
