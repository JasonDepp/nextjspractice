import { mongoClient } from './mongo';

async function fetchTeamSkillSetData(param) {
  var dataResult = new Array();
  try {
    await mongoClient.connect();
    const database = mongoClient.db('test');
    const collection = database.collection('userskillsetdata');
    // const query = {};
    // const cursor = collection.find(query);
    // if ((await cursor.count()) === 0) {
    //   console.log("No documents found!");
    // }
    // await cursor.forEach(function(row){
    //   dataResult.push(row);
    // });
    const pipeline = [
        {
            '$lookup': {
                'from': 'users',
                'localField': 'userid',
                'foreignField': 'userid',
                'as': 'userdata'
            }
        }, {
            '$lookup': {
                'from': 'dim_skill',
                'localField': 'skill_id',
                'foreignField': 'skill_id',
                'as': 'skill_data'
            }
        }, {
            '$lookup': {
                'from': 'dim_skill_level',
                'localField': 'level_id',
                'foreignField': 'level_id',
                'as': 'skill_level_data'
            }
        }, {
            '$project': {
                '_id': 1,
                'userdata': 1,
                'skill_data': 1,
                'skill_level_data': 1,
                'skillname': 1,
                'skilllevel': 1
            }
        }
    ];
    const cursor = collection.aggregate(pipeline);
    for await (const doc of cursor) {
      dataResult.push(doc);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoClient.close();
  }
  return dataResult;
}

export default async function handler(req, res) {
  var param = req.body;
  var data = await fetchTeamSkillSetData(param);
  if(data){
    res.status(200).json({message:"fetch success",data:data})
  }else{
    res.status(500).json({message:"fetch fail"})
  }

}
