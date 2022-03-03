const puppeter = require('puppeteer');

async function start() {

async function getComments(page, selector){ 
    const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
    return comments
}

const browser = await puppeter.launch( {headless: false} );
const page = await browser.newPage();
// Acessa o site
page.setDefaultNavigationTimeout(0); //Acessa a página sem esperar o timeout
await page.goto('https://parceirohypera.com.br');

await page.waitForSelector('input[name="usr"]');

await page.type('input[name="usr"]', '',{delay:100}); // Email

await page.type('input[name="psw"]', '', {delay:100}); // Senha

await page.keyboard.press('Enter');  // Clica no botão de login

 await page.waitForNavigation();
 
 await page.goto('https://parceirohypera.com.br/ItensProdutoPedido');
 
await page.click('#prosseguirPolitCookie');

  

const comments = await getComments(page,'#DataTables_Table_0');
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

console.log(
    comments, comments2,comments3, comments4,comments5, comments6,comments7, comments8,comments9, 
    comments10,comments11, comments12,comments13, comments14,comments15, comments15,comments16,
    comments17,comments18, comments20,comments21, comments22,comments23, comments24,comments25,
    comments26,comments27, comments28,comments29,comments29, comments30,comments31, comments32,
    comments33, comments34,comments35, comments36,comments37, comments38,comments39,comments40,
    comments41, comments42,comments43, comments44,comments45, comments46,comments47, comments48,
    comments49, comments50,comments51,comments52,comments53, comments54,comments55,comments56,
    comments57, comments58,comments59);

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
