import AppStoreIcon from "@/assets/icons/nav/app-store.svg";
import DemoIcon from "@/assets/icons/nav/demo.svg";
import DeveloperIcon from "@/assets/icons/nav/developer.svg";
import PricingIcon from "@/assets/icons/nav/pricing.svg";
import RoadMapIcon from "@/assets/icons/nav/road-map.svg";
import WhatsNewIcon from "@/assets/icons/nav/whats-new.svg";

const navList = [
  {
    title: "Produce",
    children: [
      {
        title: "Demo",
        href: "#",
        Icon: DemoIcon,
      },
      {
        title: "Roadmap",
        href: "#",
        Icon: RoadMapIcon,
      },
      {
        title: "What's New",
        href: "#",
        Icon: WhatsNewIcon,
      },
      {
        title: "Pricing",
        href: "#",
        Icon: PricingIcon,
      },
      {
        title: "App store",
        href: "#",
        Icon: AppStoreIcon,
      },
      {
        title: "Developers (later)",
        href: "#",
        Icon: DeveloperIcon,
      },
    ],
  },
  {
    title: "Use cases",
    children: [],
  },
  {
    title: "Learn",
    children: [],
  },
  {
    title: "About",
    children: [],
  },
  {
    title: "Jobs",
    children: [],
  },
];

const socialList = [
  {
    url: "#",
    Icon: DemoIcon,
    color: "#",
  },
];

export { navList };
