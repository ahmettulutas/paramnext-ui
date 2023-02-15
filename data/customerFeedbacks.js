import Profile4 from "@/assets/images/userProfile/Profile4.svg";
import Profile5 from "@/assets/images/userProfile/Profile5.svg";
import Profile6 from "@/assets/images/userProfile/Profile6.svg";

export const data = [
  {
    id: 1,
    customerName: "Kübra Taşlı",
    customerTitle: "Param",
    description: "message.tourismDescription",
    icon: <Profile4 />
  },
  {
    id: 2,
    title: "label.saas",
    description: "message.saasDescription",
    features: [
      "label.physcorVirtCar",
      "label.qrPayment",
      "label.campaignManagement",
      "label.3dSecurePayment"
    ],
    icon: <Profile5 />
  },
  {
    id: 3,
    title: "label.ecommerce",
    description: "message.ecommerceDescription",
    features: [
      "label.virtualPos",
      "label.walletService",
      "label.bnplCollectionSolution",
      "label.customerRating"
    ],
    icon: <Profile6 />
  }
];
