const grpc = require("grpc");
const protoLoader  = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("contract.proto",{});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const calculatorPackage = grpcObject.calculatorPackage;


const server = new grpc.Server();

server.bind('localhost:9080',grpc.ServerCredentials.createInsecure());

server.addService(calculatorPackage.Calculator.service,{
  'addition': add,
  'soustraction' : soust,
  'multiplication': mult,
  'division': div
});

server.start();

function add(call,callback){
   const result = call.request.a + call.request.b;
   callback(null,{value : result});
}


function soust(call,callback){
   const result = call.request.a  - call.request.b;
   callback(null,{value : result});
}


function mult(call,callback){
   const result = call.request.a * call.request.b;
   callback(null,{value : result});
}


function div(call,callback){
  const result = call.request.a / call.request.b;
  callback(null,{value : result});
}


function readTodos(call,callback) {
    callback(null,{
     'items' : todos
   });
}