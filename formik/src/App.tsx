import { Button, Form } from 'semantic-ui-react';
import './App.css';
import { Formik, FormikErrors } from 'formik';

interface User {
  name: string;
  email: string;
}

const initialValues: User = { name: '', email: '' };

function App() {
  return (
    <main className="container">
      <section className="page-container">
        <h1 className="title">Formik</h1>

        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: FormikErrors<User> = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label className="label">Email</label>
                <Form.Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <span className="error"> {errors.email}</span>
                )}
              </div>
              <div>
                <label className="label">Name</label>
                <Form.Input
                  type="name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div className="buttons">
                <Button type="submit" disabled={isSubmitting || !!errors.email}>
                  Submit
                </Button>
                <Button type="button" disabled={isSubmitting}>
                  Reset
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </section>
    </main>
  );
}

export default App;
