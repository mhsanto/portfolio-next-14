import { unstable_noStore } from "next/cache";

export default async function Quotes({ styles }) {
  unstable_noStore();
  const res = await fetch("https://api.quotable.io/random/").then((res) =>
    res.json()
  );
  if (!res.ok) {
    console.error("something went wrong");
  }
  return (
    <div className={styles.quote}>
      <p>❝{res?.content}❞</p>
      <p>〞{res?.author} 〟</p>
    </div>
  );
}
