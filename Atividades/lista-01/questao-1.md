# Lista 01 — Introdução ao JavaScript

**Disciplina:** Programação Web II — IFCE Campus Tauá
**Professor:** Lucas Mendes

Respostas das questões teóricas (Questão 1, itens a–f).

---

## Questão 1 — Tipagem de dados em linguagens de programação e em JavaScript

### a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre?

Uma linguagem de tipagem estática exige que o tipo de cada variável, parâmetro e retorno seja conhecido antes da execução, geralmente em tempo de compilação.
O tipo é associado à variável e, em geral, não pode mudar depois de declarado. A declaração pode ser explícita (`int x = 10;`) ou por inferência (`let x = 10` com `auto``var` tipado).
O compilador analisa o código-fonte e rejeita operações incompatíveis antes de gerar o executável. Por exemplo: se tentar somar `string + int` sem converter vai gerar um erro de compilação.


### b) Principais benefícios da tipagem estática em performance e segurança

- Detecção precoce de erros
- Documentação executável
- Menos verificações defensivas em tempo de execução.

- O compilador conhece o layout dos dados (ex.: `int32` ocupa 4 bytes), podendo alocar memória de forma eficiente, usar registradores e gerar código de máquina especializado, sem precisar testar o tipo a cada operação.
- Permite otimizações agressivas (inlining, eliminação de boxing/unboxing, vetorização).
- Evita o custo de dicionários dinâmicos e de checagem de tipo a cada acesso (típico de linguagens dinâmicas).

### c) Tipagem dinâmica, verificação em tempo de execução e desafios de performance

Em linguagens de tipagem dinâmica, o tipo está associado ao valor em tempo de execução, não à variável. Uma mesma variável pode referenciar um número, depois uma string, depois um objeto:

```js
let x = 10;      // number
x = "texto";     // agora string — válido em JS/Python
```

A verificação ocorre durante a execução, a cada operação, o interpretador consulta a tag de tipo do valor para decidir se a operação é válida e qual implementação usar. Se for inválida, o erro só aparece na hora (ex.: `TypeError`).

Desafios de performance:

- Overhead por operação: checar tipos, fazer dispatch dinâmico e boxing/unboxing a cada operação custa CPU.
- Dificuldade de otimização estática: o compilador não sabe de antemão o layout dos objetos, então gera código genérico.
- Polimorfismo e caches: motores modernos (V8 do JS) usam JIT, *hidden classes*, *inline caches* e compilação especulativa, mas se o tipo mudar (“polimorfismo”), ocorre *deopt* (desotimização) e o código volta a rodar lento.
- Erros tardios: falhas de tipo só aparecem nos caminhos executados nos testes, exigindo mais testes.

### d) Diferenças entre tipagem forte e fraca

Essa ideia de  forte × fraca trata de quão permissiva é em relação à conversão implícita entre tipos, independente de ser estática ou dinâmica:

- A tipagem forte não permite operar ou misturar tipos incompatíveis sem conversão explícita.
  - Ex.: Python (dinâmica e forte): `"10" + 5` gera `TypeError`; é preciso `int("10") + 5`.
- A tipagem fraca permite muitas coerções implícitas, convertendo automaticamente um tipo em outro, o que é prático mas pode ter um resultado diferente do esperado.
  - Ex.: JavaScript (dinâmica e fraca): `"10" + 5` resulta em `"105"` (número vira string); `"10" - 5` resulta em `5` (string vira número); `[] + []` resulta em `""`.


### e) Linguagens híbridas e o papel da inferência de tipos

Linguagens híbridas combinam os dois mundos para equilibrar segurança e produtividade;

- Núcleo estático com escape dinâmico: C# tem `dynamic`, Java tem reflexão/`var`, TypeScript tem `any`/`unknown`, com verificação estática onde possível e dinâmica onde necessário.
- Dinâmica com anotações opcionais: Python com *type hints* e `mypy`, PHP com declarações de tipo, JavaScript com TypeScript/Flow/JSDoc. O código vai rodar dinamicamente, mas as ferramentas vai verificar os tipos estaticamente no CI/IDE.
- Compilação gradual / JIT tipado: motores inferem tipos em tempo de execução para gerar código rápido no caminho comum.

Papel da inferência de tipos (em linguagens estáticas);

- Permite omitir a anotação sem perder a segurança, o compilador deduz o tipo a partir do valor/expressão (`let nome = "Ana"` → infere `string` no TypeScript; `auto x = 5` no C++).
- Reduz a verbosidade, mantém a verificação em compilação e ainda possibilita as otimizações, pois o tipo continua conhecido estaticamente.
- É a ponte que traz parte da ergonomia das linguagens dinâmicas para dentro do mundo estático.

### f) Como o JavaScript lida com a tipagem de dados?

O JavaScript é de tipagem dinâmica e fraca:

- Dinâmica: as variáveis (`var`, `let`, `const`) não têm tipo fixo, já que o tipo pertence ao valor e pode mudar. A checagem é em tempo de execução pelo motor.
   ```js
   let dado = 42;      // typeof "number"
   dado = "quarenta";  // agora typeof "string"
   ```
- Fraca: faz muita conversão automática. Com `+`, se um operando for string, concatena; com `-`, `*`, `/`, tenta converter para número. Comparação solta `==` coage; comparação estrita `===` não coage (compara valor e tipo).
   ```js
   "5" + 2;   // "52"
   "5" - 2;   // 3
   0 == false;  // true (coerção)
   0 === false; // false (sem coerção)
   ```
- Tipos primitivos + objetos: primitivos são `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol` e `null`; o resto são objetos (`Object`, `Array`, `Function`, etc.). `typeof null === "object"` é uma peculiaridade da linguagem.
- Verificação manual: usa-se `typeof`, `instanceof`, `Array.isArray()` e conversões explícitas (`Number()`, `String()`, `Boolean()`, `parseInt`/`parseFloat`) para ter comportamento previsível.
Na prática, em projetos grandes tentam reduzir os riscos da tipagem fraca/dinâmica com TypeScript, testes, ESLint e boas práticas.

Fontes de estudo: slides da disciplina, [MDN Web Docs — JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) e [W3Schools — JavaScript Data Types](https://www.w3schools.com/js/js_datatypes.asp).

