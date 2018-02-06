
const body = document.getElementsByTagName('body')[0];

/*
Написать​ ​ шаблон,​ ​ который​ ​ выведет​ ​ список​ ​ ( ​ ​ ul​ ​ li​ ​ ),​ ​ каждый​ ​ второй​ ​ элемент​ ​ списка должен​ ​ иметь​ ​ класс​ ​ active
*/
const firstTemplate = "<ul>{{~it.list :value:index}}<li{{? index%2 }} class=\"active\"{{?}}>{{=value}}</li>{{~}}</ul>";
const firstTempFn = doT.template(firstTemplate);
const fitstResultText = firstTempFn({"list": [1, 2, 3, 4, 5]});
body.innerHTML += "<p>1. Написать​ ​ шаблон,​ ​ который​ ​ выведет​ ​ список​ ​ ( ​ ​ ul​ ​ li​ ​ ),​ ​ каждый​ ​ второй​ ​ элемент​ ​ списка должен​ ​ иметь​ ​ класс​ ​ active</p>";
body.innerHTML += fitstResultText;

/*
Найти​ ​ и ​ ​ исправить​ ​ ошибку​ ​ в ​ ​ шаблоне,​ ​ чтобы​ ​ ​ выводился​ ​ Example​ ​ text.
Я просто привожу к строке значение initialTerm.
Еще можно было бы проверять значение, и если оно null, передавать пустую строку.
*/
const secondTemplatte = "{{? it.term.toLowerCase() != (\"\" + it.initialTerm).toLowerCase() }}Example​ ​ text{{?}}";
const secondTempFn = doT.template(secondTemplatte);
const secondResultText = secondTempFn({"term":"Jake","initialTerm":null});
body.innerHTML += "<p>2. Найти​ ​ и ​ ​ исправить​ ​ ошибку​ ​ в ​ ​ шаблоне,​ ​ чтобы​ ​ ​ выводился​ ​ Example​ ​ text.</p>";
body.innerHTML += secondResultText ;