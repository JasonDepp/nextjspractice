//import MongoClient from 'mongodb';
import { mongoClient } from './mongo';

async function fetchUser(username, password) {
  var dataResult;
  try {
    await mongoClient.connect();
    console.log("connected");
    const database = mongoClient.db('test');
    const users = database.collection('users');

    const query = {$or:[{userid:username},{email:username}]};
    const user = await users.findOne(query);
    console.log(user);
    dataResult = user;
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoClient.close();
  }
  return dataResult;
}

export default async function handler(req, res) {
  var param = req.body;
  console.log(param);
  var username = param.email;
  var password = param.password;
  var user = await fetchUser(username,password);
  if(user){
    res.status(200).json({message:"login success",user:user})
  }else{
    res.status(500).json({message:"login fail"})
  }

}
