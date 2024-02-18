import { clientIds } from "@/models";
import Adidas from "@/content/clients/Adidas";
import Bahlsen from "@/content/clients/Bahlsen";
import BSR from "@/content/clients/BSR";
import Bundesliga from "@/content/clients/Bundesliga";
import BVR from "@/content/clients/BVR";
import Carlsen from "@/content/clients/Carlsen";
import EBay from "@/content/clients/EBay";
import Ferrero from "@/content/clients/Ferrero";
import ForumNewEconomy from "@/content/clients/ForumNewEconomy";
import Fraunhofer from "@/content/clients/Fraunhofer";
import Leopoldina from "@/content/clients/Leopoldina";
import MateMate from "@/content/clients/MateMate";
import MDR from "@/content/clients/MDR";
import Netflix from "@/content/clients/Netflix";
import Qi2 from "@/content/clients/Qi2";
import Rundfunk from "@/content/clients/Rundfunk";
import Swatch from "@/content/clients/Swatch";
import Stiftung from "@/content/clients/Stiftung";
import ThomasHenry from "@/content/clients/ThomasHenry";
import Zalando from "@/content/clients/Zalando";

const ClientLogo = ({ id }: { id: string }) => {
  if (id === clientIds.adidas) {
    return <Adidas />;
  } else if (id === clientIds.bahlsen) {
    return <Bahlsen />;
  } else if (id === clientIds.bsr) {
    return <BSR />;
  } else if (id === clientIds.bundesliga) {
    return <Bundesliga />;
  } else if (id === clientIds.bvr) {
    return <BVR />;
  } else if (id === clientIds.carlsen) {
    return <Carlsen />;
  } else if (id === clientIds.eBay) {
    return <EBay />;
  } else if (id === clientIds.ferrero) {
    return <Ferrero />;
  } else if (id === clientIds.forumNewEconomy) {
    return <ForumNewEconomy />;
  } else if (id === clientIds.fraunhofer || id === clientIds.fraunhoferIao) {
    return <Fraunhofer />;
  } else if (id === clientIds.leopoldina) {
    return <Leopoldina />;
  } else if (id === clientIds.mateMate) {
    return <MateMate />;
  } else if (id === clientIds.mdr) {
    return <MDR />;
  } else if (id === clientIds.netflix) {
    return <Netflix />;
  } else if (id === clientIds.qi2) {
    return <Qi2 />;
  } else if (id === clientIds.rundfunkSinfonieOrchester) {
    return <Rundfunk />;
  } else if (id === clientIds.StiftungKunstUndNatur) {
    return <Stiftung />;
  } else if (id === clientIds.swatch) {
    return <Swatch />;
  } else if (id === clientIds.zalando) {
    return <Zalando />;
  } else if (id === clientIds.thomasHenry) {
    return <ThomasHenry />;
  }
  return null;
};

export default ClientLogo;
