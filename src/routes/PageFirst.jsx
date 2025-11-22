export default function PageFirst() {
  return (
    <>
      <h1>Первый вопрос</h1>
      <br />
      <h2>
        Как избавиться от&nbsp;переменной <code>that</code> в&nbsp;этом примере?
        То&nbsp;есть не&nbsp;сохранять явно контекст родителя в&nbsp;переменную.
      </h2>
      <pre>
        <code>
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
        В начальном варианте у нас представлена обычная функция, которая
        объявляет переменную <b>that</b> с функциональной областью видимости и
        присваевает ей значение текущего контекста. <br />
        <br />В <b>that</b> мы храним ссылку на тот объект, где была вызвана
        функция. <br />
        <br />
        <b>var that</b> имеет функциональную область видимости, то есть доступна
        всей функции parent. <br />
        <br />
        <code>that.multiplier = 3;</code> cоздаёт или изменяет свойство
        multiplier объекта, на который ссылается <code>that</code>. <br />
        <br />
        .map(...) создаёт новый массив, где каждый элемент — результат
        выполнения callback-функции. <br />
        <br />
        Внутренняя функция <code>{`(function(I) { ... })`}</code>замыкает
        переменную that из внешней
      </p>

      <p>
        Можно использовать стрелочную функцию, которая не&nbsp;создает
        собственного контекста <code>this</code>, а&nbsp;наследует его
        из&nbsp;окружающей области видимости: <br />
        <br />
      </p>
      <pre>
        <code>
          {`function parent() {
  this.multiplier = 3;
  return [33, 77, 99, 81, 55].map(I => I * this.multiplier);
}
`}
        </code>
      </pre>
    </>
  );
}
