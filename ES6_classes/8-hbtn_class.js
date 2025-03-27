export default class HolbertonClass {
    constructor(size, location) {
      this._size = size;
      this._location = location;
    }
  
    // Convert to Number: return size
    valueOf() {
      return this._size;
    }
  
    // Convert to String: return location
    toString() {
      return this._location;
    }
  }
