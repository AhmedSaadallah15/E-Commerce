import { AbstractControl, ValidationErrors } from "@angular/forms";

export let passwordMatch = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const rePassword = control.get('rePassword');

  if (!password || !rePassword) {
    return null;
  }

  if (password.value === rePassword.value) {
    return null;
  } else {
    return { passwordIsMatch: true };
  }
};
