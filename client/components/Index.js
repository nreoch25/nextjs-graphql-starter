import { Fragment } from "react";
import { useQuery } from "@apollo/react-hooks";
import MESSAGE_QUERY from "../graphql/message.query";

const Index = () => {
  const { data, loading, error } = useQuery(MESSAGE_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {JSON.stringify(error)}</p>;
  }
  return (
    <Fragment>
      <h1>Index Page: {data.message.text}</h1>
    </Fragment>
  );
};

export default Index;
