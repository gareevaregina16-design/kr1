// let button = document.querySelector('.button');
//
// function transliterate(text) {
//     const translitMap = {
//         'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'G', 'Д': 'D', 'Е': 'E', 'Ё': 'YO',
//         'Ж': 'ZH', 'З': 'Z', 'И': 'I', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M',
//         'Н': 'N', 'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U',
//         'Ф': 'F', 'Х': 'KH', 'Ц': 'TS', 'Ч': 'CH', 'Ш': 'SH', 'Щ': 'SHCH', 'Ъ': '',
//         'Ы': 'Y', 'Ь': '', 'Э': 'E', 'Ю': 'YU', 'Я': 'YA',
//         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
//         'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
//         'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
//         'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '',
//         'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
//     };
//     return text.split('').map(char => translitMap[char] || char).join('');
// }
//
// function convertToLatin() {
//     const elements = document.querySelectorAll('.hfamilia, .hname, .hfname, .hborn, .hpborn1, .hpborn2');
//
//     elements.forEach(element => {
//         element.innerText = transliterate(element.innerText);
//     });
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//     const button = document.querySelector('.button');
//     button.addEventListener('click', convertToLatin);
// });

//
// document.getElementById('readDomBtn').addEventListener('click', ()=>{
//     try{
//         // Evaluate the expression exactly as requested
//         const val = document.getElementsByTagName('p')[2].childNodes[1].innerText;
//         let out = '<strong>Полученное значение (document.getElementsByTagName("p")[2].childNodes[1].innerText):</strong> ' + val;
//         // Also read name and yob by IDs
//         const name = document.getElementById('name') ? document.getElementById('name').innerText : '';
//         const yob = document.getElementById('yob') ? document.getElementById('yob').innerText : '';
//         out += '<br>Имя (из #name): ' + name + '<br>Год рождения (из #yob): ' + yob;
//         document.getElementById('domResult').innerHTML = out;
//     }catch(e){
//         document.getElementById('domResult').innerText = 'Ошибка при чтении DOM: ' + e;
//     }
// });
//
// // File inputs for screenshots (page1)
// function handleFileInput(inpId,imgId){
//     var inp = document.getElementById(inpId);
//     inp.addEventListener('change', function(){
//         var f = this.files[0];
//         if(!f) return;
//         var reader = new FileReader();
//         reader.onload = function(e){
//             document.getElementById(imgId).src = e.target.result;
//         }
//         reader.readAsDataURL(f);
//     });
// }
// handleFileInput('ss2','img2');
// handleFileInput('ss3','img3');



const trMap = {
    'А':'A','Б':'B','В':'V','Г':'G','Д':'D','Е':'E','Ё':'E','Ж':'Zh','З':'Z','И':'I','Й':'Y','К':'K','Л':'L','М':'M','Н':'N','О':'O','П':'P','Р':'R','С':'S','Т':'T','У':'U','Ф':'F','Х':'Kh','Ц':'Ts','Ч':'Ch','Ш':'Sh','Щ':'Shch','Ъ':'','Ы':'Y','Ь':'','Э':'E','Ю':'Yu','Я':'Ya',
    'а':'a','б':'b','в':'v','г':'g','д':'d','е':'e','ё':'e','ж':'zh','з':'z','и':'i','й':'y','к':'k','л':'l','м':'m','н':'n','о':'o','п':'p','р':'r','с':'s','т':'t','у':'u','ф':'f','х':'kh','ц':'ts','ч':'ch','ш':'sh','щ':'shch','ъ':'','ы':'y','ь':'','э':'e','ю':'yu','я':'ya'
};
function transliterate(s){
    return s.split('').map(ch=> trMap[ch]!==undefined ? trMap[ch] : ch).join('');
}
document.getElementById('translitBtn').addEventListener('click', ()=>{
    const elements = document.querySelectorAll('#p2 .cyr, #p3 .cyr');
    elements.forEach(el=>{
        const txt = el.innerText;
        el.innerText = transliterate(txt);
    });
    document.getElementById('translitResult').innerText = 'Транслитерация выполнена.';
});