let remove1 = { x: 'x' }
let remove2 = { x() {} }
let remove3 = { get x() {} }
let remove4 = { set x(_) {} }
let remove5 = { async x() {} }
let remove6 = { ['x']: 'x' }
let remove7 = { ['x']() {} }
let remove8 = { get ['x']() {} }
let remove9 = { set ['x'](_) {} }
let remove10 = { async ['x']() {} }
let remove11 = { [0]: 'x' }
let remove12 = { [null]: 'x' }
let remove13 = { [undefined]: 'x' }
let remove14 = { [false]: 'x' }
let remove15 = { [0n]: 'x' }
let remove16 = { toString() {} }

let keep1 = { x }
let keep2 = { x: x }
let keep3 = { ...x }
let keep4 = { [x]: 'x' }
let keep5 = { [x]() {} }
let keep6 = { get [x]() {} }
let keep7 = { set [x](_) {} }
let keep8 = { async [x]() {} }
let keep9 = { [{ toString() {} }]: 'x' }