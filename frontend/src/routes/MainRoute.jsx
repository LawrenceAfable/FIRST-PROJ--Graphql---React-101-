import { Route, Routes } from "react-router-dom";

// Importing pages
import Dashboard from "../pages/users/dashboard-page/Dashboard";
import Ticket from "../pages/users/ticket-page/Ticket";
import TicketDetail from "../pages/users/ticket-detail-page/TicketDetail";

export default function MainRoute() {
  return(
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/ticket/details" element={<TicketDetail />} />
    </Routes>
  )
}