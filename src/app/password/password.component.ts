import { Component } from "@angular/core";

@Component({
  selector: "password-app",
  templateUrl: "./password.component.html",
  styleUrls: ["./password.component.css"]
})

export class PasswordComponent {
  password: string = '';
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  updatePasswordStrength() {
    const password = this.password;
    const isAlphaNumeric = /^[a-zA-Z0-9]*$/.test(password);
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*]/.test(password);

    if (password.length === 0) {
      this.setSectionColors('gray', 'gray', 'gray');
    } else if (password.length < 8) {
      this.setSectionColors('red', 'red', 'red');
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.setSectionColors('green', 'green', 'green');
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      this.setSectionColors('yellow', 'yellow', 'gray');
    } else if (isAlphaNumeric) {
      this.setSectionColors('red', 'gray', 'gray');
    }
  }

  setSectionColors(first: string, second: string, third: string) {
    this.sectionColors[0] = first;
    this.sectionColors[1] = second;
    this.sectionColors[2] = third;
  }
}