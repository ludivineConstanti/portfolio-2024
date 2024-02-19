import { clientIds } from "@/models";
import {
  Adidas,
  Bahlsen,
  BSR,
  Bundesliga,
  BVR,
  Carlsen,
  EBay,
  Ferrero,
  ForumNewEconomy,
  Fraunhofer,
  Leopoldina,
  MateMate,
  MDR,
  Netflix,
  Qi2,
  Rundfunk,
  Swatch,
  Stiftung,
  ThomasHenry,
  Zalando,
} from "@/content";

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
