import {
  Set,
} from 'immutable';

export default class ModuleContext {

  constructor(name) {
    if (__DEV__) {
      console.log(`New ModuleContext '${name}'`);
    }

    this._name = name;
    this._examples = Set();
  }

  getName() {
    return this._name;
  }

  getExamples() {
    return this._examples;
  }

  addExample(exampleTitle, exampleRender, exampleRaw) {
    if (__DEV__) {
      console.log(`Adding Example '${exampleTitle}' to '${this._name}'`, exampleRender, exampleRaw);
    }

    var nextExample = {
      exampleTitle,
      exampleRender,
      exampleRaw,
    };
    this._examples = this._examples.add(nextExample);
  }

}
