import './App.css';
import { Form, Field, FormRenderProps } from 'react-final-form';

interface User {
  firstName: string;
  lastName: string;
}

const initialValues: User = { firstName: '', lastName: '' };

function App() {
  const onSubmit = (
    values: Record<string, string>,
    form: unknown,
    callback: unknown
  ) => {
    console.log(values);
    console.log(form);
    console.log(callback);
  };

  return (
    <main className="container">
      <section className="page-container">
        <h1 className="title">React Final Form</h1>

        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
          }: FormRenderProps) => (
            <form className="form-container" onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}>
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
