// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>ホームページ</h1>
      <ul>
        <li>
          <Link href="/posts/1">
            ポスト1へ
          </Link>
        </li>
        <li>
          <Link href="/posts/2">
            ポスト2へ
          </Link>
        </li>
      </ul>
    </div>
  );
}