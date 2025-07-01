import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from '../context/FormContext';

export default function Step1() {
  const router = useRouter();
  const { form, setForm } = useForm();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateAndNext = () => {
    const currentErrors: { [key: string]: string } = {};
    if (!form.from) currentErrors.from = "Please enter a departure location.";
    if (!form.to) currentErrors.to = "Please enter a destination.";
    if (!form.departDate) currentErrors.departDate = "Please select a depart date.";
    if (!form.returnDate) currentErrors.returnDate = "Please select a return date.";

    setErrors(currentErrors);

    if (Object.keys(currentErrors).length === 0) {
      router.push('/step2');
    }
  };

  return (
    <div className="container">
      <h2>Search Flights, Cheapest Flights</h2>
      <p className="subtitle">All the plane tickets you are looking for together!</p>

      <div className="progress-bar">
<div className="progress-circle active">
          <img src="/location.png" alt="Step 1" />
        </div>
        <div className="progress-circle">
          <img src="/type.png" alt="Step 2" />
        </div>
        <div className="progress-circle">
          <img src="/plan.png" alt="Step 3" />
        </div>
        <div className="progress-circle">
          <img src="/bx_bx-detail.png" alt="Step 4" />
        </div>
        <div className="progress-circle">
          <img src="/love.png" alt="Step 5" />
        </div>      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            id="from"
            placeholder="Country or City"
            value={form.from}
            onChange={(e) => setForm({ from: e.target.value })}
            className={`inputField${errors.from ? ' error' : ''}`}
          />
          {errors.from && <span className="error-message">{errors.from}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            id="to"
            placeholder="Country or City"
            value={form.to}
            onChange={(e) => setForm({ to: e.target.value })}
            className={`inputField${errors.to ? ' error' : ''}`}
          />
          {errors.to && <span className="error-message">{errors.to}</span>}
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="departDate">Depart Date</label>
          <input
            id="departDate"
            type="date"
            value={form.departDate}
            onChange={(e) => setForm({ departDate: e.target.value })}
            className={`inputField${errors.departDate ? ' error' : ''}`}
          />
          {errors.departDate && <span className="error-message">{errors.departDate}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="returnDate">Return Date</label>
          <input
            id="returnDate"
            type="date"
            value={form.returnDate}
            onChange={(e) => setForm({ returnDate: e.target.value })}
            className={`inputField${errors.returnDate ? ' error' : ''}`}
          />
          {errors.returnDate && <span className="error-message">{errors.returnDate}</span>}
        </div>
      </div>

      <div className="buttons">
        <button onClick={validateAndNext}>Next</button>
      </div>
    </div>
  );
}