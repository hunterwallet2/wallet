import React from "react";
import { licencias } from "../pages";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

function Licencia({ nombre, boton = true }) {
  const router = useRouter();
  const licencia = licencias.find((x) => x.nombre === nombre);

  return (
    <Box
      border="1px solid #e5e7eb"
      p={2}
      width="100%"
      style={{ borderRadius: "1rem" }}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        <Typography color="#e5e7eb" fontWeight={600} fontSize={22}>
          {licencia?.nombre}
        </Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress
            variant="determinate"
            size={80}
            value={100}
            color="primary"
          />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography color="#e5e7eb" fontWeight={600}>
              {licencia?.poder}
            </Typography>
          </Box>
        </Box>
      </Stack>

      <Stack direction="row" alignItems={"center"} gap={1}>
        <Typography color="#e5e7eb" fontWeight={600} fontSize={18}>
          Precio:
        </Typography>
        <Typography color="#e5e7eb" fontWeight={500} fontSize={16}>
          {licencia?.precio}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} gap={1}>
        <Typography color="#e5e7eb" fontWeight={600} fontSize={18}>
          Duracion:
        </Typography>
        <Typography color="#e5e7eb" fontWeight={500} fontSize={16}>
          {licencia?.duracion}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} gap={1}>
        <Typography color="#e5e7eb" fontWeight={600} fontSize={18}>
          Poder de busqueda:
        </Typography>
        <Typography color="#e5e7eb" fontWeight={500} fontSize={16}>
          {licencia?.poder}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems={"center"} gap={1}>
        <Typography color="#e5e7eb" fontWeight={600} fontSize={18}>
          Tiempo estimado de recompensa:
        </Typography>
        <Typography color="#e5e7eb" fontWeight={500} fontSize={16}>
          {licencia?.tiempoEstimado}
        </Typography>
      </Stack>

      {boton && (
        <Typography fontWeight={600} py={3} fontSize={14} textAlign="center">
          *Entre mayor sea el plan, mayor efectividad tendras a la hora de
          encontrar criptomonedas*
        </Typography>
      )}

      {boton && (
        <Button
          fullWidth
          variant="contained"
          style={{ backgroundColor: "#fcd535", color: "#1e2329" }}
          onClick={() => router.push(licencia?.link)}
        >
          Comprar
        </Button>
      )}
    </Box>
  );
}

export default Licencia;
