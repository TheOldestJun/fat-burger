import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Burgers.module.css";

export default ({ burgers }) => {
  return (
    <div>
      <h1>Наши бургеры</h1>
      {burgers.map((burger) => {
        return (
          <Link href={`/burgers/${burger.id}`}>
            <a className={styles.burgerCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={burger.image}
                  alt={burger.name}
                  width='100%'
                  height='100%'
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
              <div>
                <h3>{burger.name}</h3>
                <p>{burger.desc}</p>
              </div>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const result = await fetch("http://localhost:5000/items");
  const data = await result.json();
  return {
    props: {
      burgers: data,
    },
  };
}
