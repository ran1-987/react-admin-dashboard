import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const angle = progress * 360;

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.primary[400]} 55%, transparent 56% ),
        conic-gradient(transparent 0deg, ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
        ${colors.greenAccent[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></Box>
  );
};
export default ProgressCircle;
// import { Box, useTheme } from "@mui/material";
// import { tokens } from "../theme";

// const ProgressCircle = ({ progress = 0.75, size = 40 }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const angle = progress * 360;

//   return (
//     <Box
//       sx={{
//         background: `conic-gradient(${colors.greenAccent[500]} ${angle}deg, ${colors.primary[400]} ${angle}deg)`,
//         borderRadius: "50%",
//         width: `${size}px`,
//         height: `${size}px`,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           backgroundColor: colors.blueAccent[500],
//           borderRadius: "50%",
//           width: `${size * 0.8}px`,
//           height: `${size * 0.8}px`,
//         }}
//       />
//     </Box>
//   );
// };

// export default ProgressCircle;
