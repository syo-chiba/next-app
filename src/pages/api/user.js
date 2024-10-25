// pages/api/user.js
export default function handler(req, res) {
  if (req.method === 'GET') {
    // 例: ユーザー情報を返す
    res.status(200).json({ name: 'John Doe', age: 30 });
  } else {
    // GETリクエスト以外は許可しない
    res.status(405).json({ message: 'Method not allowed' });
  }
}