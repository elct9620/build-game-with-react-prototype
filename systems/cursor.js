const CursorSystem = (entities, { input }) => {
  const cursor = entities['cursor']
  const { payload } = input.find(x => x.name == 'onMouseMove') || {}

  if (cursor && payload) {
    cursor.x = payload.pageX
    cursor.y = payload.pageY
  }

  return entities;
}

export default CursorSystem;
