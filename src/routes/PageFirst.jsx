export default function PageFirst() {
  const codeColor = '#98c9f4';

  return (
    <>
      <h1>Первый вопрос</h1>
      <br />
      <h2>
        Как избавиться от&nbsp;переменной{' '}
        <code style={{ color: codeColor }}>that</code> в&nbsp;этом примере?
        То&nbsp;есть не&nbsp;сохранять явно контекст родителя в&nbsp;переменную.
      </h2>

      <pre>
        <code style={{ color: codeColor }}>
          {`function parent() {
  var that = this;
  that.multiplier = 3;
  return [33, 77, 99, 81, 55].map(function(I) { 
    return I * that.multiplier;
  });
}`}
        </code>
      </pre>

      <br />
      <h2>Ответ:</h2>
      <p>
        В&nbsp;начальном варианте у&nbsp;нас представлена обычная функция,
        которая объявляет переменную <b>that</b> с&nbsp;функциональной областью
        видимости и присваивает ей&nbsp;значение текущего контекста. <br />
        <br />
        В&nbsp;<b>that</b> мы&nbsp;храним ссылку на&nbsp;тот объект, где была
        вызвана функция. <br />
        <br />
        <b>var that</b> имеет функциональную область видимости, то&nbsp;есть
        доступна всей функции <code style={{ color: codeColor }}>parent</code>.{' '}
        <br />
        <br />
        <code style={{ color: codeColor }}>that.multiplier = 3;</code> создаёт
        или изменяет свойство{' '}
        <code style={{ color: codeColor }}>multiplier</code>
        объекта, на&nbsp;который ссылается{' '}
        <code style={{ color: codeColor }}>that</code>. <br />
        <br />
        .map(...) создаёт новый массив, где каждый элемент&nbsp;&mdash;
        результат выполнения callback-функции. <br />
        <br />
        Внутренняя функция{' '}
        <code style={{ color: codeColor }}>{`function(I) { ... }`}</code>
        замыкает переменную <code style={{ color: codeColor }}>that</code>{' '}
        из&nbsp;внешней.
      </p>

      <p>
        Можно использовать стрелочную функцию, которая не&nbsp;создает
        собственного контекста <code style={{ color: codeColor }}>this</code>,
        а&nbsp;наследует его из&nbsp;окружающей области видимости: <br />
        <br />
      </p>

      <pre>
        <code style={{ color: codeColor }}>
          {`function parent() {
  this.multiplier = 3;
  return [33, 77, 99, 81, 55].map(I => I * this.multiplier);
}`}
        </code>
      </pre>
    </>
  );
}
