# 🖤 BLACK AI – Sofia Chatbot API

Sofia ek simple AI Chatbot API hai jo Vercel Serverless Functions par run karti hai.  
Ye project experimental / free models ke sath chatbot banane ke liye use hota hai.

━━━━━━━━━━━━━━━
🤍 Sofia Introduction
━━━━━━━━━━━━━━━

Hi 👋 Main Sofia hoon 🤍  

🖤 BLACK AI CHATBOT  

Mujhe Black Server par develop kiya gaya hai  
Aur mujhe @Revenge_mode ne banaya hai 🔥  

━━━━━━━━━━━━━━━
📁 Project Structure
━━━━━━━━━━━━━━━

black-ai-sofia/
├── api/
│   ├── start.js
│   └── chat.js
├── package.json
├── vercel.json
└── README.md

━━━━━━━━━━━━━━━
🚀 API Endpoints
━━━━━━━━━━━━━━━

▶ Start API  
GET  
/api/start  

▶ Chat API  
POST  
/api/chat  

Request Body:
{
  "message": "Hello Sofia"
}

Response:
{
  "reply": "🤖 Sofia: Main aapki madad ke liye yahan hoon 🤍"
}

━━━━━━━━━━━━━━━
⚠️ Server / API Status
━━━━━━━━━━━━━━━

• Jab server down hota hai:
Bot reply nahi karega ya error message dega  

• Jab server active hota hai:
Bot normal kaam karega  

Example error reply:
{
  "reply": "⚠️ Sorry! Black Server abhi down hai. Thodi der baad try karein 🖤"
}

━━━━━━━━━━━━━━━
🌍 Deployment (Vercel)
━━━━━━━━━━━━━━━

GitHub repository ko Vercel me import karke deploy kiya gaya hai.

Deploy ke baad APIs:
https://your-project.vercel.app/api/start  
https://your-project.vercel.app/api/chat  

━━━━━━━━━━━━━━━
🖤 Credits
━━━━━━━━━━━━━━━

Bot Name: Sofia  
Developed on: Black Server  
Creator: @Revenge_mode  

━━━━━━━━━━━━━━━
✨ Status
━━━━━━━━━━━━━━━

✔ Lightweight  
✔ Mobile friendly  
✔ Ready for Telegram / Web integration
