import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError() as { statusText: string; message: string };
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-no-repeat bg-cover backgroundImage gap-y-5">
      <h2 className="text-5xl text-teal-900">Page not found...</h2>
      <p className="text-teal-900">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
