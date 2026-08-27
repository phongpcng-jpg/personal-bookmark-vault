export const authSchemas={
 register:{body:{type:'object',required:['username','password'],additionalProperties:false,properties:{username:{type:'string',minLength:3,maxLength:80},password:{type:'string',minLength:8,maxLength:128}}}},
 login:{body:{type:'object',required:['username','password'],additionalProperties:false,properties:{username:{type:'string',minLength:3,maxLength:80},password:{type:'string',minLength:1,maxLength:128}}}}
};
export const bookmarkSchema={body:{type:'object',required:['title','url'],additionalProperties:false,properties:{title:{type:'string',minLength:1,maxLength:200},url:{type:'string',minLength:1,maxLength:2048},description:{type:'string',maxLength:10000},tags:{type:'array',items:{type:'string',maxLength:50},maxItems:30}}}};
