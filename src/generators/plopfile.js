const fs = require('fs');
const { resolve } = require('path');

const pascalCaseTransform = str => {
  return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
    return g1.toUpperCase() + g2.toLowerCase();
  });
};

module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Criar componente',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '1 - Qual é o nome do componente?',
      },
    ],
    actions: data => {
      const nameOfNewFile = pascalCaseTransform(data.name);

      const content = `export { default as ${nameOfNewFile} } from './${nameOfNewFile}';\nexport * from './${nameOfNewFile}';\n`;

      const pathFile = resolve(__dirname, '../components/index.ts');

      fs.appendFileSync(pathFile, content);

      return [
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/component.tsx.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/index.ts.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
          templateFile: 'templates/component.styles.ts.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/component.stories.tsx.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/{{pascalCase name}}.spec.tsx',
          templateFile: 'templates/component.spec.tsx.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/interfaces.ts',
          templateFile: 'templates/interfaces.ts.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/readme.md',
          templateFile: 'templates/readme.md.hbs',
        },
        {
          type: 'add',
          path: '../components/{{pascalCase name}}/notes/notes.md',
          templateFile: 'templates/notes/notes.md.hbs',
        },
      ];
    },
  });
};
