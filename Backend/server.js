import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import Sonu from './models/user.model.js'; // Adjust the import path as necessary

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { name, phone, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new Sonu({ name, phone, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await Sonu.find();
    res.status(200).json({status:1, message: 'Users fetched successfully', data: users});
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  const id = req.params.id;
  let deleteeduser= await Sonu.deleteOne({_id: id});
  res.send({
    status: 1,
    message: "User deleted successfully",
    data: deleteeduser
  });
})

app.put("/api/updateuser/:id", async (req, res) => {
  let id = req.params.id;
  const { name, phone, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await Sonu.updateOne({_id:id}, { name, phone, password: hashedPassword, role }, { new: true });
    res.status(200).json({ status: 1, message: 'User updated successfully', data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
});


// Connect DB and Start Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB Connected');
  app.listen(process.env.PORT , () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})
.catch((err) => console.error('MongoDB connection error:', err));
