const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf-8');
writeFileSync('./content/result-sync.txt','hello',`Here is the result: ${first}`);