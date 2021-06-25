interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  protected firstName: string;
  private lastName: string;
  readonly age: number;

  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Admin extends User {
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User('John', 'Doe');
