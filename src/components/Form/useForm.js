import { useState, useEffect } from "react";
import axios from "axios";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: "",
    number: "",
    email: "",
    status: "",
    activity: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
    axios
      .post("https://api-v2.dynamicfreelancer.ae/email/send", {
        name: values.name,
        email: values.email,
        number: values.number,
        status: values.status,
        activity: values.activity,
        message: values.message,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }, [errors]);
  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
