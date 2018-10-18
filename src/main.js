import { findNumbers } from 'libphonenumber-js';

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()[\]\\]/g, '\\$&');
}

export default class CleanText {
  constructor(text) {
    this.emailReg = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;

    this.setText(text);
  }

  setText(text) {
    if (typeof text == 'string') {
      this.text = text;
    } else {
      this.text = '';
    }

    return this;
  }

  emailExist() {
    const match = this.text.match(this.emailReg);

    return match != null && match.length > 0;
  }

  phoneExist() {
    const numbers = typeof this.text == 'string' ? findNumbers(this.text, 'MX', { v2: true }) : [];

    return numbers.length > 0;
  }

  clearEmail() {
    this.setText(this.text.replace(this.emailReg, ''));

    return this;
  }

  clearPhone() {
    const numbers = typeof this.text == 'string' ? findNumbers(this.text, 'MX', { v2: true }) : [];
    let patron = [];
    let numbersToReplace = '';

    if (numbers.length > 0) {
      for (let number of numbers) {
        patron.push(this.text.substring(number.startsAt, number.endsAt));
      }

      numbersToReplace = new RegExp(escapeRegExp(patron.join('|')), 'g');
    }

    this.setText(this.text.replace(numbersToReplace, ''));

    return this;
  }
}

