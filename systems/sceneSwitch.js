const SceneSwitchSystem = router => (entities, { events }) => {
  const switchSceneEvent = events.find(event => event.type == 'switchScene')

  if (switchSceneEvent) {
    router.replace(switchSceneEvent.target)
  }

  return entities;
}

export default SceneSwitchSystem;
