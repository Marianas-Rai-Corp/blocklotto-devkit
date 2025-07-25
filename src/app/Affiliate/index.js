import React from "react";

// core functions
import { useApp } from "blocklotto-sdk";

// react components
import Header from "@components/Header";
import { Container, Flex } from "@components/Common";
import Typography from "@components/Typography";
import QrCode from "./components/QrCode";
import CopyLink from "./components/CopyLink";

export default function Affiliate() {
  const { getAffiliateLink } = useApp();

  const affUrl = getAffiliateLink({
    path: "/#/home"
  });

  return (
    <Flex direction="column" gap={3} marginTop={2}>
      <Flex justifyContent="center" alignItems="center">
        <QrCode value={affUrl} />
      </Flex>

      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        gap={1}
      >
        <Typography variant="h3">Refer & Earn Money</Typography>
        <Typography variant="body2">
          Instantly earn an affiliate fee with every ticket sale generated by
          your referral, forever. Simply share your link or QR code to start
          earning today.
        </Typography>
      </Flex>

      <CopyLink value={affUrl} />
    </Flex>
  );
}
