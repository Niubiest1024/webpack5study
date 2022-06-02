import count from "./js/count";
import sum from "./js/sum";
import './css/index.css'

// 想要webpack打包资源，必须引入该资源


const result = count(2, 2);
console.log(result);
console.log(sum(1, 2, 3, 4));
