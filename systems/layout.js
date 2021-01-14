const calculateCoordinate = (type, originValue, size, containerSize) => {
  switch(type) {
    case 'left':
    case 'top':
      return 0;
    case 'right':
    case 'bottom':
      return containerSize - size;
    case 'center':
      return (containerSize / 2) - (size / 2)
    default:
      return originValue;
  }

  return originValue;
}

const getWidth = container => container.width ? container.width : (container.clientWidth ? container.containerWidth : container.innerWidth)
const getHeight = container => container.height ? container.height : (container.clientHeight ? container.containerHeight : container.innerHeight)

const LayoutSystem = (entities, { window }) => {
  const entitiesToMove =
    Object.values(entities)
          .filter(entity => entity.layout)

  entitiesToMove.forEach(entity => {
    const { layout, x, y, height, width, parent } = entity;

    const containerWidth = getWidth(parent || window)
    const containerHeight = getHeight(parent || window)

    entity.x = calculateCoordinate(layout.horizontal, x, width, containerWidth)
    entity.y = calculateCoordinate(layout.vertical, y, height, containerHeight)
  })

  return entities;
}

export default LayoutSystem
