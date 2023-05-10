import './App.css';
import { Form, Field, FormRenderProps } from 'react-final-form';
import { Button, Form as UIForm } from 'semantic-ui-react';

interface User {
  firstName: string;
  lastName: string;
}

const initialValues: User = { firstName: '', lastName: '' };

const required = (value: unknown) => (value ? undefined : 'Required');

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
            <UIForm className="form-container" onSubmit={handleSubmit}>
              <Field name="firstName" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label className="label">First Name</label>
                    <UIForm.Input
                      {...input}
                      type="text"
                      placeholder="Last Name"
                    />
                    {meta.error && meta.touched && (
                      <span className="error">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <div>
                <label className="label">Last Name</label>
                <Field
                  name="lastName"
                  placeholder="Last Name"
                  component="input"
                />
              </div>
              <div className="buttons">
                <Button type="submit" disabled={pristine}>
                  Submit
                </Button>
                <Button type="button" onClick={form.reset} disabled={pristine}>
                  Reset
                </Button>
              </div>
            </UIForm>
          )}
        />
      </section>
    </main>
  );
}

export default App;
