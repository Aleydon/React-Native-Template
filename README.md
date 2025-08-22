<h1 align="center">:iphone: React Native Template :iphone:</h1>

<<<<<<< HEAD

<p align="center">
  <br>
  	<img height="750" width="430" src="/assets/images/app-home.gif">
  <br>
  <br>
</p>
=======
A robust and professional React Native template with Expo, Nativewind, Jest, Testing Library, CommitLint, and more.
>>>>>>> Aleydon

## ✨ Features

- **React Native with Expo:** A framework and a platform for universal React applications.
- **Expo Router:** File-based routing for React Native and web applications.
- **Nativewind:** Use Tailwind CSS for styling your React Native applications.
- **Jest & React Native Testing Library:** For writing unit and component tests.
- **ESLint & Prettier:** For code linting and formatting.
- **CommitLint & Commitizen:** Enforce conventional commit messages.
- **Husky:** For running scripts at different stages of the git process.
- **TypeScript:** For static typing.
- **Absolute Imports:** For cleaner import statements.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- Yarn or npm

### Installation

1. **Clone the repository:**

<<<<<<< HEAD

````sh
  "baseUrl": "."
    "paths": {
      "@components/*": ["src/components/*"],
      "@constants/*": ["src/constants/*"],
      "@utils/*": ["src/utils/*"],
      "@hooks/*": ["src/hooks/*"],
      "@assets/*": ["src/assets/*"],
      "@services/*": ["src/services/*"],
      "@context/*": ["src/context/*"]
    }
=======
   ```bash
   git clone https://github.com/Aleydon/react-native-template.git
````

2. **Navigate to the project directory:**

   ```bash
   cd react-native-template
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode with an interactive CLI.
- `npm run android`: Runs the app on a connected Android device or emulator.
- `npm run ios`: Runs the app on the iOS simulator.
- `npm run web`: Runs the app in a web browser.
- `npm test`: Runs the test suite.
- `npm run test:watch`: Runs the test suite in watch mode.
- `npm run lint`: Lints and fixes files.
- `npm run commit`: A guided commit process to create conventional commits.

## 📁 Folder Structure

```
.
├── src
│   ├── app
│   │   ├── (tabs)
│   │   │   ├── _layout.tsx
│   │   │   ├── about.tsx
│   │   │   └── index.tsx
│   │   ├── _layout.tsx
│   │   └── global.css
│   ├── components
│   │   ├── Loading.tsx
│   │   └── Text.tsx
│   └── __tests__
│       └── home.spec.tsx
├── .jest
│   └── jest.setup.js
...
>>>>>>> Aleydon
```

- **`src/app`**: Contains the application's routes, following the Expo Router convention.
- **`src/components`**: Contains reusable components.
- **`src/__tests__`**: Contains test files.
- **`.jest`**: Contains Jest configuration and setup files.

## ✅ Testing

This template uses [Jest](https://jestjs.io/) and [React Native Testing Library](https://testing-library.com/docs/react-native/getting-started) for testing.

To run the tests, use the following command:

```bash
npm test
```

To run the tests in watch mode, use:

```bash
npm run test:watch
```

## 💅 Linting and Formatting

This project uses [ESLint](https://eslint.org/) for linting and [Prettier](https://prettier.io/) for code formatting.

To lint and fix your files, run:

```bash
npm run lint
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Aleydon/react-native-template/issues).

## 📝 License

<<<<<<< HEAD

<h2>Tests:</h2>

- How to run tests:

```sh
npm run test or npm run test:watch
```

It has an example of tests with Jest + React-Native-Testing-Library in _app/**tests**/home.spec.tsx_

```ts
import { render } from '@testing-library/react-native';

import Home from 'src/app/(tabs)';

describe('Home Test', () => {
  it('should render Home', () => {
    const homeComponent = render(<Home />);
    expect(homeComponent).toBeDefined();
  });

  it('should get text on screen', () => {
    const { getByText } = render(<Home />);
    const text = getByText('React Native Template');
    expect(text).toBeDefined();
  });
});

```

<h2>Test Running:</h2>
<p align="center">
  <br>
  <img width="1200" src="./assets/images/rn-jest-test.png" alt="Image test running">
  <br>
  <br>
</p>
=======
This project is [MIT](./LICENSE) licensed.
>>>>>>> Aleydon
