let http = require('http');
let port = 4000;

const server =  http.createServer(function(req,res){

    let url = req.url;
    let method = req.method;

    let users = [
        {
            "username": "testuser",
            "password": "password"
        }
    ];

    if(url === '/login' && method === 'POST'){

        let requestBody = '';
        req.on('data', function(data){
            requestBody += data;
            console.log(requestBody)
        })

        req.on('end',function(){
            let userObj = JSON.parse(requestBody);

            if(!userObj.username || !userObj.password){
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.write(JSON.stringify({"auth": false}))
                res.end()
            }else{
                console.log(userObj.username)
                let auth = users.some(user => user.username === userObj.username && user.password === userObj.password)

                res.writeHead(200, {'Content-Type': 'application/json'})
                res.write(JSON.stringify({"auth": auth}))
                res.end()
            }

           

        })

      

    }





})


server.listen(port)
console.log(`Server is running at localhost: ${port}`)