export function isPasswordValid(value) {
  let error;
  if (!value) {
    error = "required";
  } else if (value.length < 6) {
    error = "password must be at least 6 character";
  } else if (value.length > 16) {
    error = "password must be less than 16 character";
  }
  return error;
}
export function isUserEmailValid(value) {
  let error;
  if (!value) {
    error = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "invalid email address";
  }
  return error;
}
export function isUserNameValid(value) {
  let error;
  if (!value) {
    error = "required";
  } else if (value.length <= 3) {
    error = "too Short";
  } else if (value.length > 16) {
    error = "too Long";
  }
  return error;
}
