import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  LanguageSidebar: [
    // {
    //   type: "html",
    //   value: "Python",
    //   className: "sidebar-title",
    // },
    {
      label: "Python",
      type: "category",
      link: {
        type: "generated-index",
        image: '/img/Python.png',
      },
      items: [
        'language/Python/python-basic',
        'language/Python/python-data-type',
        'language/Python/indexing-and-slicing',
        'language/Python/assignment-and-copying',
        'language/Python/operator',
        'language/Python/derivation',
        'language/Python/iteration-problem',
        'language/Python/python-function',
        'language/Python/packaging-and-unpacking',
        'language/Python/namespaces-and-scopes',
        'language/Python/object-oriented',
        'language/Python/errors-and-exceptions',
        'language/Python/magic-method',
        'language/Python/closures-and-decorators',
        'language/Python/python-iteration-mechanism',
        'language/Python/module-and-package',
        'language/Python/python-io',
        'language/Python/regular-expression',
        'language/Python/numpy',
        'language/Python/pandas',
        'language/Python/matplotlib',
      ]
    },
  ],

  MLSiderbar: [
    {
      label: "Machine Learning",
      type: "category",
      link: { type: "generated-index", },
      items: [
        'ai/ml/overview',
        'ai/ml/linear-regression',
        'ai/ml/logistic-regression',
        'ai/ml/svm',
        'ai/ml/naive-bayes',
        'ai/ml/decision-tree',
      ]
    },
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
