import { UseFormProps, useForm } from 'react-hook-form';
import './App.css';

interface User {
  name: string;
  email: string;
}

const initialValues: User = { name: '', email: '' };

const formOptions: UseFormProps<User> = {
  // ? validation before submit mode, defaults to 'onSubmit'
  mode: 'all',
  // ? validation after submit mode, defaults to 'onChange'
  reValidateMode: 'onChange',
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, touchedFields },
  } = useForm<User>(formOptions);

  const onSubmit = (data: User) => console.log(data);

  const resetForm = () => {
    reset(initialValues);
  };

  // ? Subscribing to individual fields or the entire form
  const email = watch(['email']);
  const form = watch();

  console.log(email);
  console.log(form);

  return (
    <main className="container">
      <section className="page-container">
        <h1 className="title">React Hook Form</h1>

        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">Email</label>
            <input
              defaultValue={initialValues.email}
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && touchedFields.email && (
              <span className="error">Invalid email.</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">Name</label>
            <input
              type="name"
              defaultValue={initialValues.name}
              {...register('name', { required: true })}
            />
            {errors.name && touchedFields.name && (
              <span className="error">Name is required.</span>
            )}
          </div>
          <div className="buttons">
            <button type="submit" disabled={isSubmitting || !!errors.email}>
              Submit
            </button>
            <button type="button" onClick={resetForm} disabled={isSubmitting}>
              Reset
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default App;
