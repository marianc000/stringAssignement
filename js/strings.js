import { MB } from './constants.js';

export function makeString(mbs) {
    let str = makeNotFlattenedString(mbs);
    str[0];
    return str;
}
 
export function makeNotFlattenedString(mbs) {
   return 'X'.repeat(mbs * MB);
}