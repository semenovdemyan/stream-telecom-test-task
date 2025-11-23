import Toggle from '@/components/Toggle/Toggle';
import TaskContent from '@/components/TaskContent/TaskContent';

export default function PageThird() {
  const codeColor = '#535bf2';
  return (
    <>
      <h1>Тестовая задача</h1>
      <section>
        <ul>
          <li>
            Pеализовать отображение списка пользователей в двух режимах, список
            и плитка, с возможностью переключения между ними.
          </li>
          <li>
            Данные для реализации списка - можно использовать статические
            <span style={{ color: codeColor }}>
              {' '}
              (JSON-файл / JS объект)
            </span>{' '}
            не требуется большой объем данных, достаточно 3 - 4 пользователей.
          </li>
          <li>Стилистическое оформление - только необходимый минимум.</li>
          <li>При реализации обязательно должен использоваться React.</li>
          <br />
        </ul>
        <h2>Результат:</h2>
      </section>
      <Toggle />
			<TaskContent />
      <section></section>
    </>
  );
}
