/**
 * Контейнер для кода Яндекс.Метрики.
 * Вставьте счётчик в src/index.html или замените этот компонент кодом со страницы
 * https://metrika.yandex.ru — id счётчика подставится в window.ym(...).
 */
export default function YandexMetrika() {
  return <div id="yandex-metrika-container" style={{ display: "none" }} aria-hidden="true" />
}
