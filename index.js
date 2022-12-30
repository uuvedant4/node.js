const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful."))
  .catch((err) => console.log(err));

const student = new mongoose.Schema({
  name: { type: String, required: true },
  workout: Boolean,
  height: Number,
});

const Student = new mongoose.model("Student", student);

const adder = async () => {
  //   const ss = await Student.create({
  //     name: "Raj",
  //     workout: false,
  //     height: 5.5,
  //   });

  //   const ss = await Student.find();
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $eq: 5.5 } });
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $gt: 5.5 } });
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $gte: 5.5 } });
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $lte: 5.5 } });
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $lt: 5.5 } });
  //   console.log(ss);

  //   const ss = await Student.find({ height: { $in: [5.5, 5.9] } });
  //   console.log(ss);

  const ss = await Student.find({ height: { $nin: [5.5, 5.9] } });
  console.log(ss);
};

adder();
