document.getElementById('solveBtn').addEventListener('click', ()=>{
    try{
        const A = parseFloat(document.getElementById('A').value);
        const H = parseFloat(document.getElementById('H').value);
        const R = parseFloat(document.getElementById('R').value);
        const M = parseFloat(document.getElementById('M').value);
        if([A,H,R,M].some(x=>isNaN(x) || x < 0)){
            document.getElementById('solveResult').innerText = 'Введите корректные числа.'; return;
        }
        const vCube = Math.pow(A,3);
        const vCyl = Math.PI * Math.pow(R,2) * H;
        const fitsCube = M <= vCube + 1e-9;
        const fitsCyl = M <= vCyl + 1e-9;
        var msg = 'Объём куба: ' + vCube.toFixed(6) + '\nОбъём цилиндра: ' + vCyl.toFixed(6) + '\n\n';
        if(fitsCube && fitsCyl) msg += 'Результат: жидкость поместится в ОБЕ ёмкости.';
        else if(fitsCube) msg += 'Результат: поместится ТОЛЬКО в куб.';
        else if(fitsCyl) msg += 'Результат: поместится ТОЛЬКО в цилиндр.';
        else msg += 'Результат: ни в одну ёмкость не поместится.';
        document.getElementById('solveResult').innerHTML = '<pre>' + msg + '</pre>';
    }catch(e){
        document.getElementById('solveResult').innerText = 'Ошибка: ' + e;
    }
});