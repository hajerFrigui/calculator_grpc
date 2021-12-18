const grpc = require("grpc");
const protoLoader  = require('@grpc/proto-loader');
const packageDef = protoLoader.loadSync("contract.proto",{});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const todoPackage = grpcObject.calculatorPackage;

const client = new todoPackage.Calculator('localhost:9080',grpc.credentials.createInsecure());

client.addition({
   a:5,
   b:6
},(error,response) => {
     console.log('result of '+5+' AND '+6+' = '+response.value);
  }
)


client.soustraction({
    a:4,
    b:2
 },(error,response) => {
    console.log('result of  '+5+' AND '+6+' = '+response.value);
   }
 )


 client.multiplication({
    a:4,
    b:2
 },(error,response) => {
    console.log('result of '+5+' AND '+6+' = '+response.value);
   }
 )


 client.division({
    a:4,
    b:2
 },(error,response) => {
    console.log('result of  '+5+' AND '+6+' = '+response.value);
   }
 )




