/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
  this.countBig = 0;
  this.countMed = 0;
  this.countSma = 0;
  this.big = big;
  this.medium = medium;
  this.small = small;
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
  if (carType === 1) {
    if (this.countBig < this.big) {
      this.countBig++;
      return true;
    }
    return false;
  }
  if (carType === 2) {
    if (this.countMed < this.medium) {
      this.countMed++;
      return true;
    }
    return false;
  }
  if (carType === 3) {
    if (this.countSma < this.small) {
      this.countSma++;
      return true;
    }
    return false;
  }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
