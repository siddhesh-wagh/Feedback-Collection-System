import React, { useState } from 'react';
import { saveForm } from '../../services/api';

export default function FormBuilder() {
  const [title, setTitle] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState(null);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: '', type: 'text' }]);
  };

  const updateQuestion = (id, field, value) => {
    setQuestions(
      questions.map(q => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim()) {
      setError('Form title is required!');
      return;
    }
    if (questions.length === 0) {
      setError('Add at least one question!');
      return;
    }
    if (questions.some(q => !q.text.trim())) {
      setError('All questions must have text!');
      return;
    }

    setError(null);

    try {
      await saveForm({ title, questions });
      alert('Form saved successfully!');
      setTitle('');
      setQuestions([]);
    } catch (err) {
      setError(err.message || 'Failed to save form');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 600, margin: 'auto' }}>
      <h2>Create Feedback Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <label>Form Title:</label><br />
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
        />
      </div>

      <div>
        <h3>Questions:</h3>
        {questions.map((q, idx) => (
          <div key={q.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <input
              type="text"
              placeholder={`Question ${idx + 1} text`}
              value={q.text}
              onChange={e => updateQuestion(q.id, 'text', e.target.value)}
              required
              style={{ width: '70%', padding: '6px' }}
            />
            <select
              value={q.type}
              onChange={e => updateQuestion(q.id, 'type', e.target.value)}
              style={{ marginLeft: '10px', padding: '6px' }}
            >
              <option value="text">Text</option>
              <option value="rating">Rating (1-5)</option>
              <option value="multiple-choice">Multiple Choice</option>
            </select>
            <button type="button" onClick={() => removeQuestion(q.id)} style={{ marginLeft: '10px' }}>
              Remove
            </button>
          </div>
        ))}

        <button type="button" onClick={addQuestion} style={{ marginTop: '10px' }}>
          + Add Question
        </button>
      </div>

      <button type="submit" style={{ marginTop: '20px' }}>
        Save Form
      </button>
    </form>
  );
}
