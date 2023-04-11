let total;
document.getElementById('calculate').addEventListener('click', function(){
    let value = document.getElementById('value').value;
    let fee = (document.getElementById('fee').value) / 100;
    let time = document.getElementById('time').value;
    total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
});

document.getElementById('clean').addEventListener('click', function(){
    total = 0
    document.getElementById('total').innerHTML = (total.toLocaleString('pt-BR', {style : 'currency', currency: 'BRL'}).toFixed(2).replace('.', ','));
    
    

})