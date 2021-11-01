const user = require("../models/user");
const signin = async (req, res) => {
  const { ...data } = req.body;
  console.log("usercontroller", data);
  const User = await user.findOne({ number: data.number });
  if (User) {
    return res.status(400).json({ message: "already exists" });
  }
  const newUser = new user({
    name: data.name,
    number: data.number,
    email: data.email,
    password: data.password,
  });
  await newUser.save();
  res.json({ message: "user created" });
};

const login = async (req, res) => {
  const { ...data } = req.body;
  console.log(data);
  try {
    const currentuser = await user.findOne({ number: data.number });
    console.log(currentuser);
    if (currentuser) {
      if (data.password == currentuser.password)
        res.status(200).send(currentuser);
      else res.status(400).send({ error: "Incorrected Password" });
    } else res.status(401).send({ error: "User does not exist" });
  } catch (e) {
    res.status(502).send({ message: "error" });
  }
};

const order = async (req, res) => {
  const { ...data } = req.body;
  console.log(data.id);
  try {
    const currentuser = await user.updateOne(
      { _id: data.id },
      {
        $set: {
          address: data.address,
          details: data.checkout_products,
        },
      }
    );
  } catch (e) {
    res.json({ message: e });
  }
};


const admin = async(req,res) =>{
  console.log("working~~~~")
  try{
    const users =  await user.find({});
    console.log(users)
    res.json(users)
  }
  catch (e) {
    res.json({ message: e });
  }

}

module.exports = { signin, login, order,admin };
