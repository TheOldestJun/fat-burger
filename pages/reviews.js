import Head from "next/head";

export default ({ reviews }) => {
  return (
    <>
      <Head>
        <title>Ресторан Жирный бюргер | Отзывы</title>
      </Head>
      <div>
        <h1>Отзывы клиентов</h1>
        <div className='reviews'></div>
        {!!reviews.length &&
          reviews.map((review) => {
            return (
              <div className='review' key={review.id}>
                Имя клиента: {review.name}
                <br />
                Email: {review.email}
                <br />
                {`${review.body}`}
                <br />
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}
