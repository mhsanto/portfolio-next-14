import { Playfair_Display} from "next/font/google";
import { unstable_noStore } from "next/cache";
const playflair = Playfair_Display({
  subsets: ["latin"],
  weights: ["400","500","600", "700"],
});
export default async function Quotes({ styles }) {
  unstable_noStore();

  const res = await fetch("http://api.quotable.io/random/")
    .then((res) => res.json())
    .catch((error) => console.error(error.message));

  return (
    <>
      {res?.content ? (
        <div className={`${playflair.className} ${styles.quote}`} c>
          <p>❝{res?.content}❞</p>
          <p>〞{res?.author} 〟</p>
        </div>
      ) : null}
    </>
  );
}
