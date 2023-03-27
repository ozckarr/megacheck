import React from "react";
import { Button, Stack, CardContent, Card } from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import SearchIcon from "@mui/icons-material/Search";

export default function SideController({ setShowSettings, showSettings }) {
  return (
    <Card sx={{ width: " fit-content" }} className="sideController">
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            endIcon={<TuneIcon />}
            onClick={() => setShowSettings(!showSettings)}
          >
            Inställningar
          </Button>
          <Button variant="contained" endIcon={<SearchIcon />}>
            Zoom
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
