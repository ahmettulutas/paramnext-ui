import { createClient } from "contentful";
import React from "react";

const withData = WrappedComponent => props => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    (async () => {
      const client = createClient({
          space: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }),
        solutionItemsResponse = await client.getEntries({ content_type: "solutions", locale: "*" });
      setData(solutionItemsResponse);
    })();
  }, []);

  return <WrappedComponent data={data} {...props} />;
};
export default withData;