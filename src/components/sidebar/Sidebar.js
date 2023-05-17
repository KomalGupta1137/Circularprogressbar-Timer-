import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import {
  Button,
  LinearProgress,
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from "@mui/material";

const Sidebar = () => {
  const [progress, setProgress] = useState(10);

  //function for  circular progress with label

  function CircularProgressWithLabel(value) {
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress variant="determinate" {...value} />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>{`${Math.round(value.value)}%`}</Typography>
        </Box>
      </Box>
    );
  }

  // function to return this component
  function CircularStatic() {
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10
        );
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
    return <CircularProgressWithLabel value={progress} />;
  }
  return (
    <>
      <div className="button">
        <Box sx={{ display: "flex" }}>{CircularStatic()}</Box>
      </div>
    </>
  );
};

export default Sidebar;
