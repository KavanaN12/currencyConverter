function addNew(){
    var Envalue=document.getElementById("Envalue").value;
    var Exrate=document.getElementById("Exrate");
    var fcountry=document.getElementById("fcountry").value;
    var tcountry=document.getElementById("tcountry").value;
    var msg= document.getElementById("msg");
    let fcvalue=new Map();
    fcvalue.set('USD',1);
    fcvalue.set('INR',83.33);
    fcvalue.set('EUR',0.89);
    fcvalue.set('AUD',1.47);
    fcvalue.set('JPY',144.93);
    fcvalue.set('GBP',0.76);
    fcvalue.set('CAD',1.35);
    fcvalue.set('CHF',0.84);
    fcvalue.set('CNH',7.13);
    fcvalue.set('SEK',10.19);
    fcvalue.set('NZD',1.60);
    fcvalue.forEach((value1,key1)=>{
        if (fcountry==key1) {
            fcvalue.forEach((value2,key2)=>{
                if (tcountry==key2) {
                    msg.innerText=String('1'+' '+key1+' '+'='+' '+parseFloat(value2/value1).toFixed(2)+' '+key2);
                    Exrate.innerText=parseFloat(Envalue*(parseFloat(value2/value1).toFixed(2))).toFixed(2);
                }
            });
        }
    });
}