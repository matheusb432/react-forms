import { Button } from 'semantic-ui-react';
import './App.css';

interface User {
  firstName: string;
  lastName: string;
}

const initialValues: User = { firstName: '', lastName: '' };

function App() {
  return (
    <main className="container">
      <section className="page-container">
        <h1 className="title">Formik</h1>

        <div>
          <label className="label">Last Name</label>
          {/* <Field name="lastName" placeholder="Last Name" component="input" /> */}
        </div>
        <div className="buttons">
          <Button type="submit">Submit</Button>
          <Button type="button">Reset</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
