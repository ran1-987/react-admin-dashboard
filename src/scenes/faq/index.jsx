import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box>
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Box ml="5px">
        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              An Important Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              eligendi optio natus magnam repellendus molestias sapiente
              distinctio deserunt! Repellat ratione culpa suscipit, provident
              eaque reiciendis sed illo atque vel perspiciatis?
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Some Random Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              eligendi optio natus magnam repellendus molestias sapiente
              distinctio deserunt! Repellat ratione culpa suscipit, provident
              eaque reiciendis sed illo atque vel perspiciatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Another Important Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              eligendi optio natus magnam repellendus molestias sapiente
              distinctio deserunt! Repellat ratione culpa suscipit, provident
              eaque reiciendis sed illo atque vel perspiciatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              Largest Rised Questions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
              eligendi optio natus magnam repellendus molestias sapiente
              distinctio deserunt! Repellat ratione culpa suscipit, provident
              eaque reiciendis sed illo atque vel perspiciatis?
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
export default FAQ;
