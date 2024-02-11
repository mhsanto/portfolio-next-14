import { unstable_noStore } from "next/cache";

export default async function Quotes({ styles }) {
  unstable_noStore();

  const res = await fetch("http://api.quotable.io/random/")
    .then((res) => res.json())
    .catch((error) => console.error(error.message));

  return (
    <>
      {res?.content ? (
        <div className={styles.quote}>
          <p>❝{res?.content}❞</p>
          <p>〞{res?.author} 〟</p>
        </div>
      ) : null}
    </>
  );
}
