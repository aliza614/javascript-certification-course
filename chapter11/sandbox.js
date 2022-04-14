//dates and times
const now=new Date();
console.log(now);
console.log(typeof now);

//year, months, days, times
console.log(now.getFullYear());
console.log(now.getMonth());//gives a zero based number january=0
console.log(now.getDate());//day of the month
console.log(now.getDay());//gives day in integer zero based sunday=0
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//timestamps
console.log('time stamp', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


//timestamps
const before = new Date('February 1 2019 7:30:00');

console.log(now.getTime(), before.getTime());
const diff= now.getTime()-before.getTime();
console.log(diff);

const mins=Math.round(diff/1000/60);
const hours=Math.round(mins/60);
const days=Math.round(hours/24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} ago`);

//converting timestamp to date
const timestamp=1675938474990;
console.log(new Date(timestamp));