export default function PageSecond() {
  const codeColor = '#98c9f4';

  return (
    <>
      <h1>Второй вопрос</h1>
      <h2>
        Для чего используется метод preventDefault объекта события при работе с
        DOM
        <code style={{ color: codeColor }}>(event.preventDefault())</code>?
      </h2>

      <h2>Ответ:</h2>
      <p>
        <code style={{ color: codeColor }}>(preventDefault())</code> — это метод
        отмены стандартного поведения браузера при событии. Например, у тега
        ссылки <code style={{ color: codeColor }}>&lt;a&gt;</code> стандартным
        поведением является переход по ссылке. Если мы хотим предотвратить этот
        переход, используем{' '}
        <code style={{ color: codeColor }}>preventDefault()</code> в обработчике
        события.
      </p>

      <h2>Пример использования:</h2>
      <pre
        style={{ background: '#1e1e1e', padding: '10px', borderRadius: '5px' }}
      >
        <code style={{ color: codeColor, display: 'block' }}>
          {`import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => `}
          <span style={{ color: 'white', fontWeight: 'bold' }}>
            e.preventDefault()
          </span>{`;`}
          {`
    alert("Сообщение отправлено!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "300px", margin: "20px auto", display: "flex", flexDirection: "column", gap: "10px" }}>
      <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Ваш email" value={formData.email} onChange={handleChange} required />
      <textarea name="message" placeholder="Сообщение" rows="4" value={formData.message} onChange={handleChange} required />
      <button type="submit">Отправить</button>
    </form>
  );
}`}
        </code>
      </pre>
    </>
  );
}
