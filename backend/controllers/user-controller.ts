import User from "../models/user-model";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerController = async (req: any, res: any) => {
     try {
          const { name, username, email, password } = req.body;

          if (!name || !username || !email || !password) {
               return res.status(400).json({
                    error: 'All fields (name, username, email, password) are required',
               });
          }

          const user = await User.findOne({ email: email });
          if (user) return res.status(401).send("You already have an account, please login");

          const hashedPassword = await bcrypt.hash(password, 10);

          const newUser = await User.create({
               name,
               username,
               email,
               password: hashedPassword,
          })

          res.status(201).json({
               message: 'User registered successfully',
          })
     } catch (error: any) {
          res.status(400).json({ error: "Something Went Wrong!" })
     }
}

export const loginController = async (req: any, res: any) => {
     try {
          const { email, password } = req.body

          if (!email || !password) {
               return res.status(400).json({ error: "Email and password are required!" })
          }

          const user = await User.findOne({ email });

          if (!user) {
               return res.status(401).json({ error: 'Invalid email or password' });
          }

          // Verify password
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
               return res.status(401).json({ error: 'Invalid email or password' });
          }

          const token = jwt.sign(
               { id: user._id, email: user.email },
               //@ts-ignore
               process.env.JWT_SECRET
          );

          res.status(200).json({
               message: 'Login successful',
               token,
          });
     } catch (error) {
          res.status(400).json({ error: "Something Went Wrong!" })
     }
}

export const logoutController = (req: any, res: any) => {
     try {
          res.clearCookie('token');
          res.status(200).json({ message: 'Logged out successfully' });
     } catch (error: any) {
          console.error('Error during logout:', error);
          res.status(500).json({ error: 'Something went wrong!' });
     }
}

