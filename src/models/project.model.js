const uuidv1 = require('uuid/v1');

class ProjectModel {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
    this.id = uuidv1();
  }

  set name(n) {
    const validator = RegExp(/^\w{3,}$/);
    if (!validator.test(n)) throw new Error('Invalid name, only alphanumeric, min 3.');

    this.privateName = n;
  }

  get name() {
    return this.privateName;
  }
}

export default ProjectModel;