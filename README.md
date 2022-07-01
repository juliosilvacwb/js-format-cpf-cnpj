# js-format-cpf-cnpj

Lib to format CPF or CNPJ

#### Javascript CNPJ example:
```js
const format = require('js-format-cpf-cnpj');  
console.log(format.formatCPForCNPJ("49623477000112"))
``` 
Output:
49.623.477/0001-12

#### Typescript CNPJ example:
```ts 
import { formatCPForCNPJ } from 'js-format-cpf-cnpj'
console.log(formatCPForCNPJ("49623477000112")
```

Output:
49.623.477/0001-12

#### Javascript CPF example:
```js
const format = require('js-format-cpf-cnpj');  
console.log(format.formatCPForCNPJ("49075215029"))
``` 
Output:
490.752.150-29

#### Typescript CPF example:
```ts 
import { formatCPForCNPJ } from 'js-format-cpf-cnpj'
console.log(formatCPForCNPJ("49075215029")
```

Output:
490.752.150-29