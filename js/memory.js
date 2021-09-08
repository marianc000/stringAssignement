import { MB } from './constants.js';

let history = [];
let previousTime;


export function getHistory(){
    return history;
}

export async function printMemory(title) {
    if (title==='baseline')history=[];
    return performance.measureUserAgentSpecificMemory()
        .then(obj => {
            const memoryMB = obj.bytes / MB;
            const now=Date.now();
            console.log(title, memoryMB.toFixed(3),now-previousTime);
            history.push([title,memoryMB]);
            previousTime=now;
        });
}


