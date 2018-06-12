const UTIL = 
{
    cors_handler : (request, response, next) => 
    {
        response.header("Access-Control-Allow-Origin", "*");
        response.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept, Authorization"
        );
        if (request.method === 'OPTIONS') {
            response.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
            return response.status(200).json({});
        }
        next();
    },
    error_handler : (error, request, response, next) => 
    {
        response.status(error.status || 500);
        response.json(
        {
        error: { message : error.message }
        });
    
    },
    error_404_handler : (request, response, next) => 
    {
        const error = new Error("Welcome to the Eden API, man. You ain't gonna find much here, man.");
        error.status = 404;
        next(error);
    },
    write_mocks : () => 
    {
        let a = [];
        for(var i = 0; i < 4096 ; i++){
            a.push({x: 92233720360, y: 92233720360});
        }
        fs.writeFile('./API/data/mocks.json', JSON.stringify(a, null,4),  (error, received) => {
            if(error) throw error;
            console.log("done")
        });
    }
}
module.exports = UTIL;

