import { Field, Form, FormRenderProps } from 'react-final-form';
import { Form as UIForm } from 'semantic-ui-react';
import './App.css';

interface User {
  email: string;
  name: string;
}

const initialValues: User = { name: '', email: '' };

const required = (value: unknown) => (value ? undefined : 'Required');
const validEmail = (value: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

function App() {
  const onSubmit = (values: Record<string, string>, form: unknown) => {
    console.log(values);
    console.log(form);
  };

  return (
    <main className="container">
      <section className="page-container">
        <h1 className="title">React Final Form</h1>

        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({ handleSubmit, form, pristine }: FormRenderProps) => (
            <form className="form-container" onSubmit={handleSubmit}>
              <Field name="email" validate={validEmail}>
                {({ input, meta }) => (
                  <div className="form-control">
                    <label className="label">Email</label>
                    <input {...input} placeholder="Email"></input>
                    {/* // ? Controlled form input */}
                    {/* <UIForm.Input
                      {...input}
                      type="text"
                      placeholder="Last Name"
                    /> */}
                    {meta.error && meta.touched && (
                      <span className="error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <div className="form-control">
                <label className="label">Name</label>
                <Field
                  name="name"
                  placeholder="Name"
                  component="input"
                  validate={required}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={pristine}>
                  Submit
                </button>
                <button type="button" onClick={form.reset} disabled={pristine}>
                  Reset
                </button>
              </div>
            </form>
          )}
        />
      </section>
    </main>
  );
}

export default App;
