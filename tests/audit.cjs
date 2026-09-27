const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync(__dirname+'/../script.js','utf8');
const els=new Map();function el(id){if(!els.has(id))els.set(id,{innerHTML:'',textContent:'',value:'',setAttribute(){},classList:{add(){},remove(){}}});return els.get(id)}
const ctx=vm.createContext({document:{documentElement:{},querySelector:el,querySelectorAll:()=>[]},localStorage:{getItem:()=>null,setItem(){}},setTimeout,clearTimeout,setInterval,clearInterval,Date,console});
vm.runInContext(src.slice(0,src.indexOf("document.addEventListener('click'")),ctx);
const run=s=>vm.runInContext(s,ctx);let checks=0;
for(const language of ['ar','en']){
 run(`lang='${language}'`);
 for(const [m,st,d,total,hot,ice] of [['v60','balanced',20,320,320,0],['v60','iced',21,365,215,150],['espresso','balanced',18,36,36,0],['aeropress','balanced',15,200,200,0],['chemex','balanced',50,800,800,0],['french','balanced',56,850,850,0],['cold','balanced',55,700,700,0]]){
 const r=run(`method='${m}';style='${st}';dose=${d};recipe()`);assert.equal(r.total,total);assert.equal(r.hot,hot);assert.equal(r.ice,ice);assert.equal(r.scaled,false);assert(r.source.url.startsWith('https://'));run('renderBrew()');const copy=run('recipeText()');assert(copy.includes(r.source.url));assert(!/undefined|NaN/.test(copy));if(ice){assert(copy.includes('215 g'));assert(copy.includes('150 g'));assert(!copy.includes('365 g water'));}checks++;
 const bounds=run('config[method]');for(let n=bounds.min;n<=bounds.max;n++){run(`dose=${n}`);const p=run('recipe()');assert(Number.isInteger(p.total)&&p.total>0);assert.equal(p.total,p.hot+p.ice);assert.equal(p.scaled,n!==p.baseDose);run('renderBrew()');assert(!/NaN|undefined/.test(el('#metrics').innerHTML));if(p.scaled)assert(!el('#metrics').innerHTML.includes(p.time[language==='ar'?0:1]));checks++;}
 }
 run('translate()');for(const f of ['all','ET','CO','BR','UG']){run(`filter='${f}';renderCollection()`);const html=el('#coffeeGrid').innerHTML;assert.equal((html.match(/class="coffee-card"/g)||[]).length,f==='all'?6:f==='ET'?3:1);assert(!html.includes('Jasmine'));checks++;}
 for(const a of ['floral','balanced','rich','curious'])for(const b of ['filter','espresso','press','new'])for(const c of ['black','milk','iced','both']){run(`quizStep=3;answers=['${a}','${b}','${c}'];renderQuiz()`);assert(el('#quiz').innerHTML.includes('https://wa.me/966599721275?text='));assert(!el('#quiz').innerHTML.includes('data-detail='));checks++;}
 run("cart=[{id:'guji',qty:2,grind:'filter'},{id:'mogiana',qty:1,grind:'whole'}];renderCart()");const msg=decodeURIComponent(el('#sendOrder').href);assert(msg.includes('× 2'));assert(msg.includes('× 1'));assert.equal(el('#cartCount').textContent,3);checks++;
}
const html=fs.readFileSync(__dirname+'/../index.html','utf8');const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(x=>x[1]);assert.equal(new Set(ids).size,ids.length);for(const m of html.matchAll(/href="#([^"]+)"/g))assert(ids.includes(m[1]));for(const m of html.matchAll(/(?:src|href)="((?:assets\/|style\.css|script\.js)[^"]*)"/g))assert(fs.existsSync(__dirname+'/../'+m[1].split('?')[0]));assert(!/\bSAMRA\b/.test(html));
console.log(`PASS: ${checks} bilingual recipe, scaling, copy, source-link, catalogue, finder and order checks; unique IDs, anchors, asset files and brand spelling.`);
