export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter and setter for code
  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  // Method to display the full currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
