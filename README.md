# `@akuko/components`

**`@akuko/components`** is a modular and extensible component library designed for building dynamic, data-driven interfaces. Each component is stateless, receiving its configuration and data from external sources, making it ideal for integration with various applications such as dashboards, websites, and data visualization tools.

## Key Features

- **Modular Architecture**: A set of flexible components that can be used independently or in combination.
- **Config-Driven**: Components receive configuration and data from external props, allowing dynamic updates.
- **Extensible**: Easily extend the core components by overriding them through a component registry.
- **Optimized for Performance**: Components are optimized to re-render only when their specific config or data changes.
- **Separation of Concerns**: Rendering logic is separated from the editing UI (handled by `@akuko/studio`).

## Installation

To use the components in your project, you can install the `@akuko/components` package via npm or yarn:

```bash
yarn add @akuko/components
```

## Customization

You can override default components or inject custom components through a **component registry**. This allows you to extend the library without modifying its core functionality.

## Contributing

We welcome contributions! Please follow the guidelines outlined in our [CONTRIBUTING.md](CONTRIBUTING.md) file for submitting issues, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
