import TourismSvg from "@/assets/images/sectors/tourism.svg";
export const data = [
  {
    id: 1,
    title: "label.tourism",
    description: "message.tourismDescription",
    features: [
      "label.walletService",
      "label.physcorVirtCar",
      "label.physcorVirtPos",
      "label.fraudMonitoring"
    ],
    icon: <TourismSvg />
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
    icon: <TourismSvg />
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
    icon: <TourismSvg />
  }
];
