import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Konnect",
  description = "This a web based chat application name as Konnect",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
