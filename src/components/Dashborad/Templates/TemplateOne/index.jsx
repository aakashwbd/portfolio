import { Box } from "@material-ui/core";

import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import { useStyle } from "./style";

const TemplateOne = () => {
  const classes = useStyle();

  return (
    <Box>
      <Profile />
      <Contact />
      <Education />
    </Box>
  );
};

export default TemplateOne;
