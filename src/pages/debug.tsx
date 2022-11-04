export default function DebugPage(props: any) {
  return (
    <>
      <pre>{JSON.stringify(props.env, null, 4)}</pre>
    </>
  );
}


export async function getStaticProps() {
  return {
    props: {
      env: { ...process.env }
    }
  }
}
