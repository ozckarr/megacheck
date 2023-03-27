import React from "react";
import {
  IconButton,
  CardContent,
  Card,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import CancelIcon from "@mui/icons-material/Cancel";

function Controller({
  checkSettings,
  setCheckSettings,
  setShowSettings,
  showSettings,
}) {
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
        <CardContent>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Storlek</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <TextField
                  id="standard-basic"
                  label="Bredd (cm)"
                  variant="standard"
                  type="number"
                  value={checkSettings.width}
                  onChange={(e) =>
                    setCheckSettings({
                      ...checkSettings,
                      width: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Höjd (cm)"
                  variant="standard"
                  type="number"
                  value={checkSettings.height}
                  onChange={(e) =>
                    setCheckSettings({
                      ...checkSettings,
                      height: e.target.value,
                    })
                  }
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Ram</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <TextField
                  id="standard-basic"
                  label="Margin (cm)"
                  variant="standard"
                  type="number"
                  value={checkSettings.margin}
                  onChange={(e) =>
                    setCheckSettings({
                      ...checkSettings,
                      margin: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Tjocklek (px)"
                  variant="standard"
                  type="number"
                  value={checkSettings.thickness}
                  onChange={(e) =>
                    setCheckSettings({
                      ...checkSettings,
                      thickness: e.target.value,
                    })
                  }
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Typsnitt</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" spacing={1}>
                <TextField
                  id="standard-basic"
                  label="Margin (cm)"
                  variant="standard"
                  type="number"
                  value={checkSettings.margin}
                  onChange={(e) =>
                    setCheckSettings({
                      ...checkSettings,
                      margin: e.target.value,
                    })
                  }
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={checkSettings.font}
                    label="Typsnitt"
                    onChange={(e) =>
                      setCheckSettings({
                        ...checkSettings,
                        font: e.target.font,
                      })
                    }
                  >
                    <MenuItem value={"fontDancing"}>Dancing Script</MenuItem>
                    <MenuItem value={"fontDelicious"}>
                      Delicious Handrawn
                    </MenuItem>
                    <MenuItem value={"fontZeyada"}>Zeyada</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default Controller;
