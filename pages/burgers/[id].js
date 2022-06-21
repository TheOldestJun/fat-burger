export default () => {
  return (
    <>
      <h1>Details</h1>
    </>
  );
};

export async function getStaticPaths() {
  const result = await (await fetch("http://localhost:5000/items")).json();
  const paths = result.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
