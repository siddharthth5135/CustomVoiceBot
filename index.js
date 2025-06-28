const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors()); 

app.use(express.json());

// Log .env variables to make sure they are loaded
console.log('✅ VAPI_API_KEY:', process.env.VAPI_API_KEY);
console.log('✅ VAPI_PHONE_NUMBER_ID:', process.env.VAPI_PHONE_NUMBER_ID);
console.log('✅ VAPI_ASSISTANT_ID:', process.env.VAPI_ASSISTANT_ID);

app.post('/call', async (req, res) => {
  const { phoneNumber } = req.body;
  console.log('📞 Initiating call to:', phoneNumber);

  try {
    const response = await axios.post(
      'https://api.vapi.ai/call/phone',
      {
        customer: {
          number: phoneNumber
        },
        phoneNumberId: process.env.VAPI_PHONE_NUMBER_ID,
        assistantId: process.env.VAPI_ASSISTANT_ID
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.VAPI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Call initiated:', response.data);
    res.status(200).send('Call initiated successfully!');
  } catch (error) {
    console.error('❌ Error initiating call:');
    console.error('Status:', error.response?.status);
    console.error('Data:', error.response?.data);
    console.error('Message:', error.message);
    res.status(500).send('Error initiating call');
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

