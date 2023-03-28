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

function Controller({ check, setCheck, setShowSettings, showSettings }) {
  const handleFont = (e) => {
    setCheck({
      ...check,
      font: e.target.value,
    });
  };
  const handleBackground = (e) => {
    setCheck({
      ...check,
      background: e.target.value,
    });
  };
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
          {/*-------Generellt------*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Generellt</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <TextField
                  id="standard-basic"
                  label="Bredd (cm)"
                  variant="standard"
                  type="number"
                  value={check.width}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      width: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Höjd (cm)"
                  variant="standard"
                  type="number"
                  value={check.height}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      height: e.target.value,
                    })
                  }
                />
              </Stack>
              <FormControl fullWidth style={{ marginTop: "1em" }}>
                <InputLabel id="demo-simple-select-label">Bakgrund</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-background"
                  value={check.background}
                  label="Bakgrund"
                  onChange={handleBackground}
                >
                  <MenuItem value={"checkPrimary"}>Original</MenuItem>
                  <MenuItem value={"checkBlackWhite"}>Svart och Vit</MenuItem>
                </Select>
              </FormControl>
            </AccordionDetails>
          </Accordion>
          {/*-------Ram------*/}
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
                  value={check.margin}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      margin: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Tjocklek (px)"
                  variant="standard"
                  type="number"
                  value={check.thickness}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      thickness: e.target.value,
                    })
                  }
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
          {/*-------Typsnitt------*/}
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
                  label="Textstorlek"
                  variant="standard"
                  type="number"
                  value={check.fontSize}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      fontSize: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Textstorlek - handskrivet"
                  variant="standard"
                  type="number"
                  value={check.handwrittenSize}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      handwrittenSize: e.target.value,
                    })
                  }
                />
                <TextField
                  id="standard-basic"
                  label="Textstorlek - kod botten"
                  variant="standard"
                  type="number"
                  value={check.codeSize}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      codeSize: e.target.value,
                    })
                  }
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Typsnitt
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={check.font}
                    label="Typsnitt"
                    onChange={handleFont}
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
          {/*-------Text------*/}
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Text</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="column" spacing={1}>
                <TextField
                  id="standard-basic"
                  label="Datum Text"
                  variant="standard"
                  value={check.dateText}
                  onChange={(e) =>
                    setCheck({
                      ...check,
                      dateText: e.target.value,
                    })
                  }
                />
              </Stack>
            </AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Tråknummer</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack direction="column" spacing={1}>
                  <TextField
                    id="standard-basic"
                    label="Datum Text"
                    variant="standard"
                    type="number"
                    value={check.aba}
                    onChange={(e) =>
                      setCheck({
                        ...check,
                        aba: e.target.value,
                      })
                    }
                  />
                </Stack>
              </AccordionDetails>
            </Accordion>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default Controller;
