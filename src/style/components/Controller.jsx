import React from "react";
import { IconButton, CardContent, Card, Stack } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

function Controller({ setShowSettings, showSettings }) {
  return (
    <div className="controller">
      <Card sx={{ width: " fit-content" }} className="controllerContent">
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            aria-label="close"
            component="label"
            onClick={() => setShowSettings(!showSettings)}
          >
            <CancelIcon />
          </IconButton>
        </Stack>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}

export default Controller;
