//sample code from cc
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
// console.log(halley);
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console

//surgeon class
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    console.log(`${daysOff} day/s off were taken.`);
    this._remainingVacationDays = this._remainingVacationDays - daysOff
  }

}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// console.log(surgeonCurry.name);
// surgeonCurry.takeVacationDays(3);
// console.log(surgeonCurry.remainingVacationDays);

//hospital employee parent/superclass class practice
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return `There are ${this._remainingVacationDays} vacation days remaining.`;
  }

  takeVacationDays(daysOff) {
    console.log(`${daysOff} day/s off were taken.`);
    this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }

}

//nurse child/sub class that extends the hospital employee
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  }

}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

console.log(nurseOlynyk.certifications);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);





























//end
