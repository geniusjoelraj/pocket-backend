// mock-api.js
import express, { json } from 'express';
const app = express();
const PORT = 3000;

import cors from 'cors';

app.use(cors()); // allow all origins
app.use(json());

// Mock user data

const users = [
  {
    id: 1,
    username: 'csk',
    password: '1234',
    name: 'Chennai Super Kings',
    players: {
      'Dhoni': { price: 15000000, type: 'all_rounder' },
      'Bumrah': { price: 12000000, type: 'bowler' },
      'Ruturaj Gaikwad': { price: 8000000, type: 'batsman' },
      'Jadeja': { price: 13000000, type: 'all_rounder' },
      'Moeen Ali': { price: 10000000, type: 'all_rounder' }
    }
  },
  {
    id: 2,
    username: 'mi',
    password: '1234',
    name: 'Mumbai Indians',
    players: {
      'Rohit Sharma': { price: 14000000, type: 'batsman' },
      'Hardik Pandya': { price: 12500000, type: 'all_rounder' },
      'Ishan Kishan': { price: 8500000, type: 'batsman' },
      'Jasprit Bumrah': { price: 12000000, type: 'bowler' },
      'Tilak Varma': { price: 6000000, type: 'batsman' }
    }
  },
  {
    id: 3,
    username: 'rcb',
    password: '1234',
    name: 'Royal Challengers Bangalore',
    players: {
      'Virat Kohli': { price: 15000000, type: 'batsman' },
      'Faf du Plessis': { price: 11000000, type: 'batsman' },
      'Maxwell': { price: 13000000, type: 'all_rounder' },
      'Siraj': { price: 8000000, type: 'bowler' },
      'Dinesh Karthik': { price: 6000000, type: 'wicket_keeper' }
    }
  },
  {
    id: 4,
    username: 'kkr',
    password: '1234',
    name: 'Kolkata Knight Riders',
    players: {
      'Shreyas Iyer': { price: 11000000, type: 'batsman' },
      'Andre Russell': { price: 12000000, type: 'all_rounder' },
      'Sunil Narine': { price: 9500000, type: 'all_rounder' },
      'Varun Chakravarthy': { price: 7000000, type: 'bowler' },
      'Venkatesh Iyer': { price: 6500000, type: 'all_rounder' }
    }
  },
  {
    id: 5,
    username: 'gt',
    password: '1234',
    name: 'Gujarat Titans',
    players: {
      'Shubman Gill': { price: 12000000, type: 'batsman' },
      'Mohammed Shami': { price: 10000000, type: 'bowler' },
      'Rashid Khan': { price: 13000000, type: 'all_rounder' },
      'David Miller': { price: 9000000, type: 'batsman' },
      'Wriddhiman Saha': { price: 5500000, type: 'wicket_keeper' }
    }
  }
];

// POST /nam endpoint
app.post('/nam', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Exclude password from response
  const { password: _, ...userData } = user;
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
});
