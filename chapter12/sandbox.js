// console.log(1);
// console.log(2);

// setTimeout(()=>{
//     console.log('callback function fired');
// })
// console.log(3);
// console.log(4);
const getTodos=(resource, callback)=>{
    const request =new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        //console.log(request, request.readyState)
        if (request.readyState === 4 && request.status===200){
            //console.log(request, request.responseText);
            const data=JSON.parse(request.responseText);
            //callback(undefined,request.responseText);
            callback(undefined, data);
        }else if (request.readyState===4){
            //console.log('could not fetch the data')
            callback('could not fetch data', undefined)
        }
    });

    //request.open('GET', 'https://jasonplaceholder.typicode.com/todos/');
    request.open('GET', resource);//'todos.json');
    request.send();
};

console.log(1);
console.log(2);
//callback h-ll
getTodos('todos/luigi.json',(err, data)=>{
    console.log(data);
    getTodos('todos/mario.json',(err,data)=>{
        console.log(data);
        getTodos('todos/shaun.json', (err,data)=>{
            console.log(data);
        });
    });
    
    // console.log('callback fired');
    // //console.log(err,data);
    // if (err){
    //     console.log(err);
    // }else{
    //     console.log(data);
    // }
});

console.log(3);
console.log(4);

//promise example

const getSomething=()=>{
    return new Promise((resolve, reject)=>{
        //fetch something
        resolve('some data');
        //reject('some error');
    });
}

// getSomething().then((data)=>{
//     console.log(data);//if resolve
// },(err)=>{
//     console.log(err);//if reject
// });

getSomething().then(data=>{
    console.log(data);

}).catch (err=>{
    console.log(err);
});