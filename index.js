const puppeter = require('puppeteer');

async function start() {

async function getComments(page, selector){ 
    const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
    return comments
}

const browser = await puppeter.launch(  { headless: false } );
const page = await browser.newPage();
// Acessa o site
page.setDefaultNavigationTimeout(0); //Acessa a página sem esperar o timeout
await page.goto('https://parceirohypera.com.br');

await page.waitForSelector('input[name="usr"]');

await page.type('input[name="usr"]', '15986565000167',{delay:100}); // Email

await page.type('input[name="psw"]', 'plus2021', {delay:100}); // Senha

await page.keyboard.press('Enter');  // Clica no botão de login

 await page.waitForNavigation();
 
 await page.goto('https://parceirohypera.com.br/ItensProdutoPedido');
 
 await page.click('#prosseguirPolitCookie');
 const comments = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments2 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments3 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments4 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);


const comments5 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments6 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments7 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments8 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments9 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments10 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments11 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments12 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments13 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments14 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments15 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments16 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments17 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments18 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments19 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments20 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments21 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments22 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments23 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments24 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments25 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments26 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments27 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments28 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments29 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments30 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments31 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments32 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments33 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments34 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments35 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments36 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments37 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments38 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments39 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments40 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments41 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments42 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments43 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments44 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments45 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments46 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments47 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments48 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments49 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments50 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments51 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments52 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments53 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments54 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments55 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);

const comments56 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments57 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments58 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);
const comments59 = await getComments(page,'#DataTables_Table_0 ');
await page.click('#DataTables_Table_0_next > a');
await page.waitForTimeout(500);


console.log(comments);
console.log(comments2);
console.log(comments3);
console.log(comments4);
console.log(comments4);
console.log(comments5);
console.log(comments6);
console.log(comments7);
console.log(comments8);
console.log(comments9);
console.log(comments10);
console.log(comments11);
console.log(comments12);
console.log(comments13);
console.log(comments14);
console.log(comments15);
console.log(comments16);
console.log(comments17);
console.log(comments18);
console.log(comments19);
console.log(comments20);
console.log(comments21);
console.log(comments22);
console.log(comments23);
console.log(comments24);
console.log(comments25);
console.log(comments26);
console.log(comments27);
console.log(comments28);
console.log(comments29);
console.log(comments30);
console.log(comments31);
console.log(comments32);
console.log(comments33);
console.log(comments34);
console.log(comments35);
console.log(comments36);
console.log(comments37);
console.log(comments38);
console.log(comments39);
console.log(comments40);
console.log(comments41);
console.log(comments42);
console.log(comments43);
console.log(comments44);
console.log(comments45);
console.log(comments46);
console.log(comments47);
console.log(comments48);
console.log(comments49);
console.log(comments50);
console.log(comments51);
console.log(comments52);
console.log(comments53);
console.log(comments54);
console.log(comments55);
console.log(comments56);
console.log(comments57);
console.log(comments58);
console.log(comments59);

await browser.close();
}
function count(comments){
    const count ={}
comments.forEach(arroba=>{count[arroba] = (count[arroba] || 0) + 1})
return count
}

//Ordenar comentarios

function sort(counted){
    const entries = Object.entries(counted)
    const sorted = entries.sort((a,b) => b[1] - a[1])
    console.log(sorted);
}

start();
