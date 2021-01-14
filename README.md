Build Game with React Prototype
===

This project is inspired by https://steina.vercel.app which tries to build a game with React.js.

## Library

* Next.js
* React Game Engine

## Architecture

### Components

To create shared property to `GameObject`, for example the `Transform` will extend `x`, `y`, `width` and `height` to allow resize or move it.

### Entities

The `GameObject` instance, it should refactor as a Factory to generate entity.

### Systems

The "React Game Engine" is based on ECS architecture, the `System` will control `GameObject` to move or trigger event.

## Limitation

Currently, the scene switch based on `next/router` and not smooth, it may extend `GameEngine` component and use `#swap` function to replace entities with asynchronize loading assets support.
