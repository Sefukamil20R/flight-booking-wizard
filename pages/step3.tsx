import { useRouter } from 'next/router';
import { useForm } from '../context/FormContext';
import { useState } from 'react';

export default function Step3() {
  const router = useRouter();
  const { form } = useForm();
  const [error, setError] = useState<string>("");

  const handleNext = () => {
    if (!form.from || !form.to || !form.departDate || !form.returnDate || !form.type) {
      setError("Some required information is missing. Please go back and complete all steps.");
      return;
    }
    setError("");
    router.push('/miles');
  };

  return (
    <div className="container">
      <h2>Search Flights, Cheapest Flights</h2>
      <p className="subtitle">All the plane tickets you are looking for together!</p>

      <div className="progress-bar">
        <div className="progress-circle">
          <img src="/location.png" alt="Step 1" />
        </div>
        <div className="progress-circle">
          <img src="/type.png" alt="Step 2" />
        </div>
        <div className="progress-circle active">
          <img src="/plan.png" alt="Step 3" />
        </div>
        <div className="progress-circle">
          <img src="/bx_bx-detail.png" alt="Step 4" />
        </div>
        <div className="progress-circle">
          <img src="/love.png" alt="Step 5" />
        </div>
      </div>

      <h3 style={{ textAlign: 'center', margin: '24px 0 12px 0' }}>Ticket Information</h3>

      <table className="summaryTable">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Type</th>
            <th>Depart Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.from}</td>
            <td>{form.to}</td>
            <td>{form.type}</td>
            <td>{form.departDate}</td>
            <td>{form.returnDate}</td>
          </tr>
        </tbody>
      </table>

      {error && <span className="error-message">{error}</span>}

      <div className="buttons">
        <button
          className="before-btn"
          type="button"
          onClick={() => router.back()}
        >
          Before
        </button>
        <button
          type="button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}