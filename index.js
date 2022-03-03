const puppeter = require('puppeteer');

async function start() {

async function getComments(page, selector){ 
    const comments = await page.$$eval(selector, links => links.map(link => link.innerText))
    return comments
}

const browser = await puppeter.launch({headless: false});
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

let clicou = await page.click('#DataTables_Table_0_next > a');

for (clicou = 0; clicou < 59; clicou++) {
    const comments = await getComments(page, '#DataTables_Table_0 > tbody')
    await page.click('#DataTables_Table_0_next > a')
    await page.waitForTimeout(500);
    const counted = count(comments);
    sort(counted);
    console.log(comments);
    
}  // Faz o loop até o final da página



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
