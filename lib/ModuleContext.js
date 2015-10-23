export default class ModuleContext {
  constructor(moduleName, exampleBuilder) {
    console.log(`New ModuleContext '${moduleName}'`, exampleBuilder);
    this.moduleName = moduleName;
    this.exampleBuilder = exampleBuilder;
    this.examples = [];
  }

  buildExamples() {
    this.exampleBuilder({
      example: this.addExample.bind(this),
    });
  }

  addExample(exampleTitle, exampleRender) {
    console.log(`Adding Example '${exampleTitle}' to '${this.moduleName}'`, exampleRender);

    var nextExample = {
      exampleTitle,
      exampleRender,
    };
    this.examples = this.examples.concat([nextExample]);
  }

}
