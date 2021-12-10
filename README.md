# DS Mobile

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

<!-- <img alt="expo examples" src="https://i.imgur.com/j253BeR.png"> -->

## Features

- Expo
- Typescript
- Storybook web/mobile
- Shopify/Restyle
- Eslint/Prettier
- Theme-based
- Husky
- Bob - Builder

Biblioteca de componentes em React native feita com a biblioteca Restyle do Shopify, permitindo e facilitando **desenvolvimento baseado em temas** e **props utilitárias de estilo**.

```tsx
<Box backgroundColor="primary" mt={2} p={3}>
  <Text color="textInverted" fontFamily="Roboto, sans-serif">
    Branded box with white text inside
  </Text>
</Box>
```

> Este setup utiliza Storybook com Expo.

## Iniciando

1. `yarn` - Instala as dependências
1. `yarn web` - Inicia o Storybook em visualização Web no browser padrão
1. `yarn android` - Inicia o Storybook em visualização no dispositivo ou emulador Android
1. `yarn ios` - Inicia o Storybook em visualização no dispositivo ou emulador ios

## Consumindo a lib como cliente

1. `yarn add @ds/mobile --registry=http://verdaccio.mateus/` - Instalando a biblioteca
1. `yarn add typeface-{font-name}` ou `import /font/*.ttf` - Instalando a fonte de sua preferência react-native-vector-icons
1. `yarn add react-native-vector-icons` - Instale o pacote de icones
1. `npx react-native link react-native-vector-icons` faça o link dos icones e reinecie o emulador
1. Faça o import do `themeProvider` e o tema de sua preferência utilizando o exemplo destacado abaixo:

```tsx
import React from 'react';
import App from './App';

import {ThemeProvider, themeInstitucional, Box} from 'coral-ui';

const App = () => {
  return (
    <ThemeProvider theme={themeInstitucional}>
      <App />
    </ThemeProvider>
  );
};

export default App;
```

1. `yarn start --reset-cache` inicie o servidor limpando o cache do metro bundle
2. `yarn android` instale o .apk em modo debug
3. Enjoy 😎!

### Rodando em dispositivos nativos (Android/IOS)

1. `yarn start` - Inicia o Expo no browser
1. Espere o bundle da aplicação. Pode demorar um pouco.
1. Use o QR code do Expo para abrir a aplicação em um dispositivo (ou pressione `i` para abrir um simulador, caso esteja disponível)

### 📁 Estrutura de Arquivos

```
Storybook com Expo CLI
├── assets ➡️ Assets estáticos do projeto
├── App.tsx ➡️ Entry Point universal para aplicações Expo
├── app.config.js ➡️ Arquivo de configuração do Expo
└── babel.config.js ➡️ Configuração do Babel (utiliza `babel-preset-expo`)
```

### Adicionando stories ao Storybook

1. Crie um arquivo no diretório do componente chamado `ComponentName.stories.tsx`.
2. Utilizamos CSF (Component Story Format), que nos permite exportar stories e testar em outros contextos:

```js
// Text.stories.tsx

import React from "react";
import { storiesOf } from "@storybook/react-native";
// Import your component
import Text from "./Text";

// Define your component and it's name
export default {
  title: "Text",
  component: Text,
};

// Stories
export const Basic = () => <Text>What's up</Text>;
export const Colored = () => <Text color="red">What's up</Text>;

// Isto é necessário para ser mostrado no Expo
// Adiciona todos os stories ao Storybook RN/Expo
storiesOf("Text", module).add("Basic", Basic).add("Colored", Colored);

```

3. Você deve conseguir visualizar o Storybook na web apenas com o comando `expo web`. Mas para vê-los nativamente, deve importar os stories diretamente no arquivo `stories/index.js`.

Pronto! Agora você já deve ser capaz de visualizar os stories do seu componente no Storybook web e nativo.

### Semantic Release

Este projeto está configurado com Semantic-release para versionar automaticamente baseado nos commits e banches. Está configurado também com a CLI do Commitzen (`yarn commit`), que cria um commit convencional padronizado.

1. Crie sua branch de trabalho: `git checkout -b name-here`
2. Faça suas mudanças.
3. `git add` seus arquivos.
4. `yarn commit` para rodar a CLI do Commitzen.

Você poderá escolher entre feature, bug fix ou CI update, por exemplo. E adicionar sua mensagem de commit, assim como uma mensagem detalhada.

Após criar sua branch, crie um pull request (PR). Uma vez aprovado, será movido para uma branch de release (como `next`), e eventualmente mergeado na master.
## Todo

- [ ] Snapshot testing
- [ ] Unit testing

## 📝 Notas

- [Storybook React Native](https://storybook.js.org/docs/guides/guide-react-native/)
