'use strict';

const Validator = {
  patterns: {
    taj : /^(\d{3} ){2}\d{3}$/,
    id: /^\d{6}[A-Z]{2}$/,
    name: /^[A-ZŰÁÉÚŐÓÜÖÍ][a-zűáéúőóüöí]/
  },
  validate(text, type) {
    return text.match(this.patterns[type]) ? true : false;
  }
}

console.log(Validator.validate('123 456 789', 'taj'));
console.log(Validator.validate('978619JA', 'id'));
console.log(Validator.validate('Szoki', 'name'));
