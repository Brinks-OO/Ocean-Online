import LoadingDemo from "../../../components/LoadingDemo";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  // return <LoadingDemo />
  return (
    <>
    <div className="flex justify-content-center">
      {/* <h1>Loading</h1> */}
      <LoadingDemo />
      {/* <h1>Hi</h1> */}
    </div>
    </>
  );
}
