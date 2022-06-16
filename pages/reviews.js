import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <title>Ресторан Жирный бюргер | Отзывы</title>
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
      </div>
    </>
  );
};

export async function getServerSideProps() {}
