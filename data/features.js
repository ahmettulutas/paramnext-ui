import Bnpl from "@/assets/images/featurecards/bnpl.svg";
import Campaign from "@/assets/images/featurecards/campaign.svg";
import CreditCard from "@/assets/images/featurecards/creditCard.svg";
import IdMobile from "@/assets/images/featurecards/idMobile.svg";
import PosMobile from "@/assets/images/featurecards/posMobile.svg";
import RealTimeReport from "@/assets/images/featurecards/realTimeReporting.svg";
import SendMoney from "@/assets/images/featurecards/sendMoneyMobile.svg";
import UniqueBin from "@/assets/images/featurecards/uniqueBin.svg";

export const features = [
  {
    id: 1,
    title: "label.createCard",
    description: "message.createCardDescription",
    image: <CreditCard />,
    customStyle: {
      top: "3.5rem"
    },
    overflow: "visible"
  },
  {
    id: 2,
    title: "label.makeOrGetPayment",
    description: "message.makeOrGetPaymentDescription",
    image: <PosMobile />,
    customStyle: {
      width: "266px"
    }
  },
  {
    id: 3,
    title: "label.sendandDepositMoney",
    description: "message.senandDepositMoney",
    image: <SendMoney />,
    customStyle: {
      width: "268px"
    }
  },
  {
    id: 4,
    title: "label.bnpl",
    description: "message.createCardDescription",
    image: <Bnpl />,
    customStyle: {
      width: "366px",
      marginBottom: "3rem"
    }
  },
  {
    id: 5,
    title: "label.createCard",
    description: "message.createCardDescription",
    image: <Campaign />,
    customStyle: {
      width: "566px"
    }
  },
  {
    id: 6,
    title: "label.createCard",
    description: "message.createCardDescription",
    image: <UniqueBin />,
    customStyle: {
      width: "480px",
      marginBottom: "3rem"
    }
  },
  {
    id: 7,
    title: "label.createCard",
    description: "message.createCardDescription",
    image: <IdMobile />,
    customStyle: {
      width: "266px"
    }
  },
  {
    id: 8,
    title: "label.createCard",
    description: "message.createCardDescription",
    image: <RealTimeReport />,
    customStyle: {
      width: "533px"
    }
  }
];
