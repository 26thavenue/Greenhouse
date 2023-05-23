import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

<Formik
  initialValues={{
    name: '',
    email: '',
    password: '',
  }}
  validationSchema={validationSchema}
  // onSubmit={}
>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <Field type="text" name="name" />
        <ErrorMessage name="name" component="div" />
      </div>

      <div>
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="div" />
      </div>

      <button type="submit">Submit</button>
    </form>
  )}
</Formik>
