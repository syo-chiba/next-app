// pages/api/user.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    // クライアントから送られたデータを受け取る
    const { name, age } = req.body;

    // 簡単なバリデーション
    if (!name || !age) {
      res.status(400).json({ message: 'Invalid input' });
      return;
    }

    // 成功レスポンス
    res.status(200).json({ message: `User ${name} aged ${age} created!` });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}