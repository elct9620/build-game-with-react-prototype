import Transform from '../components/Transform'
import Label from './Label'
import styles from '../styles/Button.module.css'

const Button = props  => {
  const { isPressed, isHover } = props;

  if (isPressed) {
    return <Label className={styles.pressedButton} {...{...props, align: 'center' }} />
  }

  if (isHover) {
    return <Label className={styles.hoverButton} {...{...props, align: 'center' }} />
  }

  return <Label className={styles.button} {...{...props, align: 'center' }} />
}

export default Button;
