// node modules
import React, { useState, useEffect } from "react";

import { useApp, CheckoutProvider } from "blocklotto-sdk";

// react components
import Jackpot from "./components/Jackpot";
import Tickets from "./components/Ticket";
import TicketSummary from "./components/TicketSummary";
import Checkout from "./Checkout";

export default function Home() {
  const { setTicketsToRedeem, setGameTickets } = useApp();
  const [openCheckout, setOpenCheckout] = useState(false);

  // reset ticketsToRedeem and gameTickets
  useEffect(() => {
    setTicketsToRedeem([]);
    setGameTickets([]);
  }, []);

  // handle checkout close
  const handleCheckoutClose = () => {
    setOpenCheckout(false);
  };

  return (
    <>
      <Jackpot />
      <Tickets />
      <TicketSummary setOpenCheckout={setOpenCheckout} />
      <CheckoutProvider>
        <Checkout open={openCheckout} handleClose={handleCheckoutClose} />
      </CheckoutProvider>
    </>
  );
}
