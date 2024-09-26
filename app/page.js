import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week 2</Link>
      <br />
      <Link href="/week-3">Week 3</Link>
      <br />
      <Link href="/week-4">Week 4</Link>
    </div>
  );
}