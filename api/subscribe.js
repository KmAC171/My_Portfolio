export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    
    // API Key එකේ අන්තිම කැබැල්ලෙන් datacenter එක ගන්නවා (උදා: us21)
    const DATACENTER = API_KEY.split('-')[1];

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    const data = await response.json();

    if (response.status >= 400) {
      return res.status(400).json({ 
        error: data.title === "Member Exists" ? "Already Subscribed!" : "Something went wrong" 
      });
    }

    return res.status(201).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}