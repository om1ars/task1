"use strict";
console.clear();

((w) => {
  function dscount(text, s1, s2) {
    //флаг i - поиск не чувствительный к регистру, g - глобальный поиск
    let exp = new RegExp(s1 + s2, "gi");
    let result = text.match(exp);
    //если не будет найдено ни одного совпадения, то match в result вернет не пустой массив, а null
    if (!result) return 0;
    //длина массива найденных совпадений - как раз искомый результат
    return result.length;
  }

  // Для удобства можно использовать эти тесты:
  try {
    test(dscount, ["ab___ab__", "a", "b"], 2);
    test(dscount, ["___cd____", "c", "d"], 1);
    test(dscount, ["de_______", "d", "e"], 1);
    test(dscount, ["12_12__12", "1", "2"], 3);
    test(dscount, ["_ba______", "a", "b"], 0);
    test(dscount, ["_a__b____", "a", "b"], 0);
    test(dscount, ["-ab-аb-ab", "a", "b"], 2);

    console.info("Congratulations! All tests success passed.");
  } catch (e) {
    console.error(e);
  }

  function test(call, args, count, n) {
    let r = call.apply(n, args) === count;
    console.assert(r, `Finded items count: ${count}`);
    if (!r) throw "Test failed!";
  }

  return "--- End ---";
})(window);
