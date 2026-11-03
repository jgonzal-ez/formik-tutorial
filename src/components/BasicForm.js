import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const BasicForm = () => {

  const onSubmit = (values, actions) => {
    actions.resetForm()
  }

  // Touched: Each key corresponds to a field that has been touched/visited, simil to "isFocus"
  const {values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit} = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: basicSchema,
    onSubmit
  })

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        value={values.email}
        onChange={handleChange}
        id="email"
        type="email"
        placeholder="Enter your email"
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error": ""}
      />
      {errors.email && touched.email && (
        <p className="error">{errors.email}</p>
      )}

      <label htmlFor="age">Age</label>
      <input
        value={values.age}
        onChange={handleChange}
        id="age"
        type="number"
        placeholder="Enter your age"
        onBlur={handleBlur}
        className={errors.age && touched.age ? "input-error": ""}
      />
      {errors.age && touched.age && (
        <p className="error">{errors.age}</p>
      )}

      <label htmlFor="password">Password</label>
      <input
        value={values.password}
        onChange={handleChange}
        id="password"
        type="password"
        placeholder="Enter your password"
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error": ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">confirmPassword</label>
      <input
        value={values.confirmPassword}
        onChange={handleChange}
        id="confirmPassword"
        type="password"
        placeholder="Enter your confirmPassword"
        onBlur={handleBlur}
        className={errors.confirmPassword && touched.confirmPassword ? "input-error": ""}
      />
       {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        >Submit</button>

    </form>
  );
};
export default BasicForm;
