import { Grid, Skeleton, Stack } from "@mui/material";
import { BouncingSkeleton } from "../styles/StyledComponents";
import { motion } from "framer-motion";
// const LayoutLoader = () => {
//   return (
//     <Grid container height={"calc(100vh - 4rem)"} spacing={"1rem"}>
//       <Grid
//         item
//         sm={4}
//         md={3}
//         sx={{
//           display: { xs: "none", sm: "block" },
//         }}
//         height={"100%"}
//       >
//         <Skeleton variant="rectangular" height={"100vh"} />
//       </Grid>
//       <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
//         <Stack spacing={"1rem"}>
//           {Array.from({ length: 10 }).map((_, index) => (
//             <Skeleton key={index} variant="rounded" height={"5rem"} />
//           ))}
//         </Stack>
//       </Grid>

//       <Grid
//         item
//         md={4}
//         lg={3}
//         height={"100%"}
//         sx={{
//           display: { xs: "none", md: "block" },
//         }}
//       >
//         <Skeleton variant="rectangular" height={"100vh"} />
//       </Grid>
//     </Grid>
//   );
// };

const LayoutLoader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #BFF098 , #6FD6FF)",
        zIndex: 9999, // Ensure the loader stays on top
      }}
    >
      <motion.div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        <BouncingDot delay={0} />
        <BouncingDot delay={0.2} />
        <BouncingDot delay={0.4} />
      </motion.div>
    </div>
  );
};

const BouncingDot = ({ delay }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-20, 20, -20] }}
      transition={{ duration: 1.2, repeat: Infinity, delay }}
      style={{
        width: 20,
        height: 20,
        backgroundColor: "white",
        borderRadius: "50%",
      }}
    />
  );
};

const TypingLoader = () => {
  return (
    <Stack
      spacing={"0.5rem"}
      direction={"row"}
      padding={"0.5rem"}
      justifyContent={"center"}
    >
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.1s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.2s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.4s",
        }}
      />
      <BouncingSkeleton
        variant="circular"
        width={15}
        height={15}
        style={{
          animationDelay: "0.6s",
        }}
      />
    </Stack>
  );
};

export { TypingLoader, LayoutLoader };
