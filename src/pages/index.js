// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>ホームページ</h1>
      <Link href="/about">
        私たちについて
      </Link>
    </div>
  );
}