import gql from "graphql-tag";

const MESSAGE_QUERY = gql`
  query {
    message {
      text
    }
  }
`;

export default MESSAGE_QUERY;
