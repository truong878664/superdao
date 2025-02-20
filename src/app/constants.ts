import AppStoreIcon from "@/assets/icons/nav/app-store.svg";
import DemoIcon from "@/assets/icons/nav/demo.svg";
import DeveloperIcon from "@/assets/icons/nav/developer.svg";
import PricingIcon from "@/assets/icons/nav/pricing.svg";
import RoadMapIcon from "@/assets/icons/nav/road-map.svg";
import WhatsNewIcon from "@/assets/icons/nav/whats-new.svg";

import DiscordIcon from "@/assets/icons/social-network/discord.svg";
import TelegramIcon from "@/assets/icons/social-network/telegram.svg";
import TwitterIcon from "@/assets/icons/social-network/twitter.svg";
import YoutubeIcon from "@/assets/icons/social-network/youtube.svg";

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
    children: [
      {
        title: "Demo",
        href: "#",
        Icon: DemoIcon,
      },
    ],
  },
  {
    title: "Learn",
    children: [
      {
        title: "Demo",
        href: "#",
        Icon: DemoIcon,
      },
    ],
  },
  {
    title: "About",
    children: [
      {
        title: "Demo",
        href: "#",
        Icon: DemoIcon,
      },
    ],
  },
  {
    title: "Jobs",
    children: [
      {
        title: "Demo",
        href: "#",
        Icon: DemoIcon,
      },
    ],
  },
];

const socialNetworkList = [
  {
    url: "#",
    Icon: DiscordIcon,
    color: "#77E6FF",
  },
  {
    url: "#",
    Icon: TelegramIcon,
    color: "#7795FF",
  },
  {
    url: "#",
    Icon: YoutubeIcon,
    color: "#F78787",
  },
  {
    url: "#",
    Icon: TwitterIcon,
    color: "#9277FF",
  },
];

export { navList, socialNetworkList };
