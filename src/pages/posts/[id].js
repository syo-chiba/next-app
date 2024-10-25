// pages/posts/[id].js
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query; // URLのパラメータを取得

  return <h1>ポストID: {id}</h1>;
}