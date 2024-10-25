import { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // フォームデータの送信
    const res = await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, age }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="年齢"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}