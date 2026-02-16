export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  const message = (req.body.message || "").trim();

  // SIMPLE GREETING
  if (["hi", "hello"].includes(message.toLowerCase())) {
    return res.status(200).json({
      reply:
        "Hi 👋 main Sofia hoon 🤍\n" +
        "mujhe Black @Revenge_mode ne banaya\n" +
        "Kya main aapki kaise madad kar sakti hoon?"
    });
  }

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://your-vercel-app.vercel.app",
          "X-Title": "Sofia AI Bot"
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are Sofia, a helpful AI chatbot. Reply clearly in Hinglish."
            },
            {
              role: "user",
              content: message
            }
          ]
        })
      }
    );

    if (!response.ok) throw new Error("API_DOWN");

    const data = await response.json();

    return res.status(200).json({
      reply: data.choices[0].message.content
    });

  } catch (err) {
    return res.status(200).json({
      reply:
        "⚠️ BLACK Server down hai 😴\n\n" +
        "Sofia abhi reply nahi kar pa rahi.\n" +
        "Black plugins fix ho rahe hain 🔧\n\n" +
        "🙏 Thoda wait karo, server online hote hi Sofia wapas aa jayegi 🚀"
    });
  }
}
