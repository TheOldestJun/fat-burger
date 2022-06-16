import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ресторан Жирный бюргер | Главная</title>
        <meta name='title' content='Ресторан Жирный бюргер' />
      </Head>
      <div className={styles.container}>
        <h1 className={`${styles.title} font-effect-fire-animation`}>
          Главная
        </h1>
        <div className={styles.mainImage}>
          <Image
            src='/fatburger.png'
            alt='our-burger-photo'
            width={400}
            height={300}
          />
        </div>
        <p className={styles.text}>
          Что такое идеальный бургер? Лист свежего салата, мягкие булочки,
          сочное мясо. О других составляющих начинки можно поспорить, ведь это
          дело вкуса.
        </p>
        <p className={styles.text}>
          Есть ещё пара-тройка факторов, влияющих на аппетит: цены, качество
          обслуживания, правильная атмосфера заведения.
        </p>
        <Link href='/burgers'>
          <a className={styles.btn}>Все бургеры</a>
        </Link>
      </div>
    </>
  );
}
