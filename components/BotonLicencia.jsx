import { Button } from "@mui/material";
import React from "react";

export default function BotonLicencia({ setLicencia, x, licencia }) {
  return (
    <Button
      variant={licencia === x.nombre ? "contained" : "outlined"}
      color="primary"
      style={{
        backgroundColor: licencia === x.nombre ? "#fcd535" : "transparent",
        color: licencia === x.nombre ? "#1e2329" : "white",
        border: licencia === x.nombre ? "" : "1px solid #fcd535",
      }}
      fullWidth={{ base: false, md: true }}
      onClick={() => setLicencia(x.nombre)}
    >
      {x.nombre}
    </Button>
  );
}
