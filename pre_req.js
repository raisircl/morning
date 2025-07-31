const {createServer} = require('node:http');
const hostname='127.0.0.1';
const port=3500;

const server=createServer((req,res)=>{
    const url=req.url;
    if(url=='/') //root
    {
        const person={
            uid:1,
            name:'Ram',
            age:20
        };
        
        console.log(`Name of person is ${person.name}`); // dot notation
       
        // bracket notation key should be in quotes
         console.log(`Age of ${person.name} is ${person['age']}`); // age geeting by bracket notation
         
         for(let key in person)
         {
            console.log(`${key}:${person[key]}`);
         }

         res.setHeader('Content-Type','text/html');
         res.statusCode=200;   
         res.end(`<h1>Age of ${person.name} is ${person['age']}</h1>`);
        
    }
    else if(url=='/map')
    {
        var persons=[
            {id:101,name:'Ram',age:20},
            {id:102,name:'Sham',age:22},
            {id:103,name:'Anil',age:21}
        ];
        //first principle to print name 
        // for(let i in persons)
        // {
        //     let person = persons[i];
        //     console.log(person.name);
        // }
        const names=persons.map(person=>person.name);
        console.log(names);

    }
});

server.listen(port,hostname,()=>{
    console.log(`Server start listining at http://${hostname}:${port}`);
});
