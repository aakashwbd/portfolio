import { Box } from "@material-ui/core";
import About from "./About";

import Contact from "./Contact";
import Education from "./Education";
import Profile from "./Profile";
import Skills from "./Skills";

const TemplateOne = () => {
  return (
    <Box>
      <Profile />
      <About />
      <Skills />
      <Contact />
      <Education />
    </Box>
  );
};

export default TemplateOne;
