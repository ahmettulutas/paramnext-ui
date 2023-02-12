import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import paramLoading from "@/assets/images/param-loading.gif";

const Loading = ({ children }) => {
  const router = useRouter(),
    [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const handleStart = url => (url !== router.asPath) && setLoading(true),
      handleComplete = url => (url === router.asPath || router.isReady) && setTimeout(() => setLoading(false), 500); // I added router.isReady to omit when url is with locale and doesn't match the asPath. Need to be checked if it is best practice.

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <>
      {
        loading ?
          <div className="loading-container">
            <Image src={paramLoading} />
          </div>
          :
          <>{children}</>
      }
    </>
  );
};
export default Loading;
