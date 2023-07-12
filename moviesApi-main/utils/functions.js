
// remove _ from id & __v  from schema
export function setSchema(schemaName) {
  schemaName.set("toJSON", {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;
      delete returnedObject.passwordHash;
    },
  });
}



export async function post(req, res, data, METHOD_PASSWORD) {
  if (METHOD_PASSWORD === request.headers.authorization) {
    try {
      const newData = new data(req.body);
      const savedData = await newData.save();
      res.json(savedData);
    } catch (error) {
      res.send(error.message);
    }
  } else {
    res.send("You do not have access to this address");
  }
}
