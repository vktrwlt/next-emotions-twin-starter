module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
      {
        type: 'list',
        name: 'componentTemplate',
        message: 'Component Template',
        default: 'none',
        choices: [
          { name: 'Default', value: 'props' },
          { name: 'With Variants', value: 'variants' },
        ],
      },
    ],
    actions: (data) => {
      let actions = [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.ts',
          templateFile: 'templates/ComponentIndex.ts.hbs',
        },
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'templates/test.ts.hbs',
        },
      ];

      if (data.componentTemplate === 'props') {
        actions = actions.concat([
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/Component.ts.hbs',
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/storiesWithProps.ts.hbs',
          },
        ]);
      }

      if (data.componentTemplate === 'variants') {
        actions = actions.concat([
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'templates/ComponentWithVariants.ts.hbs',
          },
          {
            type: 'add',
            path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
            templateFile: 'templates/storiesWithVariants.ts.hbs',
          },
        ]);
      }

      // Return the array of actions to take.
      return actions;
    },
  });
};
