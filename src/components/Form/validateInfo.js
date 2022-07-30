export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name is Required";
  }
  if (!values.number.trim()) {
    errors.number = "Number is Required";
  }
  if (!values.status.trim()) {
    errors.status = "Status is Required";
  }
  if (!values.activity.trim()) {
    errors.activity = "Activity is Required";
  }
  if (!values.message.trim()) {
    errors.message = "essage is Required";
  }

  //   email
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
}
