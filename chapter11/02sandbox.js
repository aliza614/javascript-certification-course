const clock = document.querySelector('.clock');

const tick=() =>{
    const now = new Date();
    const h=now.getHours();
    const m=now.getMinutes();
    const s=now.getSeconds();
    //console.log(h, m , s);

    const html=`
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span> 
    `
    clock.innerHTML=html;
};

setInterval(tick, 1000);

//date fns
const now2=new Date();
//console.log(dateFns.isToday(now2));//returns true

//formatting options
console.log(dateFns.format(now2, 'YYYY'));
console.log(dateFns.format(now2,'MMM'));
console.log(dateFns.format('dddd'));//day of week
console.log(dateFns.format(now2, 'Do'));//day of month
console.log(dateFns.format(now2, 'dddd Do MMMM YYYY'));

const before=new Date('February 1 2019 12:00:00');

console.log(dateFns.distanceInWords(now, before, (addSuffix, true)));