const Transform = Component => props => {
  const { x, y, width, height } = props

  const transform = {
    position: 'absolute',
    // TODO: Support anchor
    left: (x || 0),
    top: (y || 0),
    // TODO: Auto detect component size
    width: (width || 0),
    height: (height || 0)
  }

  return (
    <div style={transform}><Component {...props} /></div>
  )
}

export default Transform;
