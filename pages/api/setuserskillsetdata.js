import { mongoClient } from './mongo';

async function putUserSkillSetData(param) {
  var dataResult = new Array();
  try {
    await mongoClient.connect();
    console.log("connected");
    const database = mongoClient.db('test');
    const collection = database.collection('userskillsetdata');

    var userid = param.userid;
    var skillid = param.skillid;
    var levelid = param.levelid;

    const filter = { userid:userid, skill_id:skillid };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        userid: userid,
        skill_id: skillid,
        level_id: levelid
      },
    };

    const result = await collection.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );

  } finally {
    // Ensures that the client will close when you finish/error
    await mongoClient.close();
  }
  return dataResult;
}

export default async function handler(req, res) {
  var param = req.body;
  console.log(param);
  var data = await putUserSkillSetData(param);
  if(data){
    res.status(200).json({message:"put success",data:data})
  }else{
    res.status(500).json({message:"put fail"})
  }

}
