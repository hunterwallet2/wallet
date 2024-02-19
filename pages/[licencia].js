import { useParams } from "next/navigation";
import React, { useState } from "react";
import { licencias } from ".";
import Licencia from "../componentes/Licencia";
import { Box, Button, Select, Stack, Typography } from "@mui/material";
import CustomSelect from "../componentes/CustomSelect";
import { useRouter } from "next/router";
import Link from "next/link";

export default function licencia() {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [copied, setCopied] = useState(false); // Estado para rastrear si se ha copiado el texto
  const params = useParams();
  const router = useRouter();

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    setCopied(false); // Reiniciar el estado de copia cuando se cambia la moneda
  };

  const currencies = [
    {
      value: "BTC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      name: "BTC",
      red: "btc",
    },
    {
      value: "LTC",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LTC-400.png/800px-LTC-400.png",
      name: "LTC",
    },
    {
      value: "ETH",
      image:
        "https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png",
      name: "ETH",
      red: "eth",
    },
    {
      value: "USDT",
      image:
        "https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon.png",
      name: "USDT",
      red: "usdt",
    },
    {
      value: "USDT TRC20",
      image:
        "https://w7.pngwing.com/pngs/840/253/png-transparent-usdt-cryptocurrencies-icon.png",
      name: "USDT TRC20",
    },
  ];

  const wallet = () => {
    if (selectedCurrency === "BTC")
      return "bc1q3pm7953mdveylj9w07hkjfyju5hzlf04zc4hv0";

    if (selectedCurrency === "LTC")
      return "ltc1qz2t9s6ty3kldfcmutltz97d2xh2grc30aeumpw";

    if (selectedCurrency === "ETH" || selectedCurrency === "USDT")
      return "0xd5c764E1713e33e36F9d638a9fcE60bf85f656aa";

    if (selectedCurrency === "USDT TRC20")
      return "TLs7NNuXDbp3w54hT5o8XXdnfDNEHbZ7R1";
  };

  const red = () => {
    if (selectedCurrency === "BTC") return "BTC";

    if (selectedCurrency === "LTC") return "LTC";

    if (selectedCurrency === "ETH" || selectedCurrency === "USDT") return "ETH";

    if (selectedCurrency === "USDT TRC20") return "TRC20";
  };

  const copyTextToClipboard = async (text) => {
    return await navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true); // Establecer el estado de copia a verdadero cuando se copie el texto
      })
      .catch((error) => {
        console.error("Error al copiar texto:", error);
      });
  };

  const licencia = licencias.find((x) => x.link === params?.licencia);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#181a20",
        color: "#e5e7eb",
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <Stack py={5}>
        <Stack
          mb={4}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Typography fontWeight={600} fontSize={25}>
            Vas a adquirir
          </Typography>
          <Button
            style={{
              backgroundColor: "#fcd535",
              color: "#1e2329",
              fontWeight: 700,
            }}
            variant="contained"
            onClick={() => router.push("/")}
          >
            VOLVER
          </Button>
        </Stack>
        <Stack direction={{ base: "column", md: "row" }} gap={8}>
          <Box width={{ base: "100%", md: "30%" }}>
            <Licencia nombre={licencia?.nombre} boton={false} />
            <Link
              href="https://t.me/wallethunterr?text=Hola%20estoy%20interesado"
              target="_blank"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#e5e7eb",
                fontWeight: 600,
                userSelect: "none",
                backgroundColor: "#fcd535",
                color: "#1e2329",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Typography fontWeight={600} p={1}>
                Contactarse
              </Typography>
            </Link>
          </Box>
          <Box>
            <Typography mb={1} fontWeight={600} fontSize={18}>
              Paso 1: Elige la moneda en que pagarás
            </Typography>
            <Box mb={4}>
              <CustomSelect
                options={currencies}
                onChange={handleCurrencyChange}
                selectedCurrency={selectedCurrency}
              />
            </Box>
            <Typography mb={1} fontWeight={600} fontSize={18}>
              Paso 2: Deposita la cantidad del plan ({licencia?.precio}) en la
              siguiente billetera
            </Typography>
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems="center"
              gap={2}
              mb={wallet() && 4}
            >
              {wallet() && (
                <Typography fontWeight={600} fontSize={15}>
                  Red: {red()} {wallet()}
                </Typography>
              )}

              {wallet() && (
                <Button
                  variant="link"
                  color="primary"
                  style={{ backgroundColor: "#fcd535", color: "#1e2329" }}
                  mb={4}
                  fontWeight={600}
                  fontSize={18}
                  onClick={() => copyTextToClipboard(wallet())}
                  disabled={copied} // Deshabilitar el botón si el texto ya se ha copiado
                >
                  {copied ? "COPIADO" : "COPIAR"}
                </Button>
              )}
            </Stack>

            <Typography mb={1} fontWeight={600} fontSize={18}>
              Paso 3: Una vez realizaste el pago aprieta el boton de CONTACTARSE para ir a telegram y pasarnos tu email y billetera donde hiciste el deposito asi poder mandarte el programa y las instrucciones de instalacion
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </main>
  );
}
