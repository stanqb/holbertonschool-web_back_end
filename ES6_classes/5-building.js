export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Make sure that any class that extends Building implements evacuationWarningMessage
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
