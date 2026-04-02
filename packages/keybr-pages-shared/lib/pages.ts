import { defaultLocale } from "@keybr/intl";
import {
  mdiCarSide,
  mdiChartAreaspline,
  mdiHelpCircleOutline,
  mdiKeyboard,
  mdiKeyboardOutline,
  mdiSpeedometer,
  mdiTrophyOutline,
} from "@mdi/js";
import { defineMessage, type MessageDescriptor } from "react-intl";
import { type AnonymousUser, type AnyUser, type NamedUser } from "./types.ts";

export type Meta = {
  readonly name?: string;
  readonly property?: string;
  readonly content: string | MessageDescriptor;
};

export type PageInfo = {
  readonly path: string;
  readonly title: MessageDescriptor;
  readonly link: {
    readonly label: MessageDescriptor;
    readonly title?: MessageDescriptor;
    readonly icon?: string;
  };
  readonly meta: Meta[];
};

export namespace Pages {
  const meta: Meta[] = [
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "typer.top" },
    {
      property: "og:title",
      content: defineMessage({
        id: "meta.og.title",
        defaultMessage:
          "Typer | Online Typing Trainer | Learn Touch Typing Free",
      }),
    },
    {
      property: "og:description",
      content: defineMessage({
        id: "meta.og.description",
        defaultMessage:
          "Free online typing trainer with adaptive lessons. Practice touch typing, improve your speed and accuracy. Ukrainian and English keyboard layouts.",
      }),
    },
    { property: "og:image", content: "https://typer.top/cover.png" },
    { property: "og:locale", content: "uk_UA" },
    { name: "twitter:card", content: "summary_large_image" },
    {
      name: "twitter:title",
      content: defineMessage({
        id: "meta.og.title",
        defaultMessage:
          "Typer | Online Typing Trainer | Learn Touch Typing Free",
      }),
    },
    {
      name: "twitter:description",
      content: defineMessage({
        id: "meta.og.description",
        defaultMessage:
          "Free online typing trainer with adaptive lessons. Practice touch typing, improve your speed and accuracy. Ukrainian and English keyboard layouts.",
      }),
    },
    { name: "twitter:image", content: "https://typer.top/cover.png" },
    {
      name: "keywords",
      content: defineMessage({
        id: "meta.keywords",
        defaultMessage:
          "typing trainer, touch typing, typing practice, typing test, learn to type, typing tutor, keyboard trainer",
      }),
    },
  ];

  export const account = {
    path: "/account",
    title: defineMessage({
      id: "t_Account",
      defaultMessage: "Account",
    }),
    link: {
      label: defineMessage({
        id: "t_Account",
        defaultMessage: "Account",
      }),
    },
    meta: [{ name: "robots", content: "noindex" }],
  } satisfies PageInfo;

  export const practice = {
    path: "/",
    title: defineMessage({
      id: "page.practice.title",
      defaultMessage: "Typer | Online Typing Trainer | Learn Touch Typing Free",
    }),
    link: {
      label: defineMessage({
        id: "t_Practice",
        defaultMessage: "Practice",
      }),
      title: defineMessage({
        id: "page.practice.description",
        defaultMessage:
          "Free online typing trainer with adaptive lessons. Practice touch typing, improve your speed and accuracy.",
      }),
      icon: mdiKeyboard,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.practice.description",
          defaultMessage:
            "Free online typing trainer with adaptive lessons. Practice touch typing, improve your speed and accuracy.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const profile = {
    path: "/profile",
    title: defineMessage({
      id: "t_Profile",
      defaultMessage: "Profile",
    }),
    link: {
      label: defineMessage({
        id: "t_Profile",
        defaultMessage: "Profile",
      }),
      title: defineMessage({
        id: "page.profile.description",
        defaultMessage:
          "The detailed statistics regarding your learning progress.",
      }),
      icon: mdiChartAreaspline,
    },
    meta: [{ name: "robots", content: "noindex" }],
  } satisfies PageInfo;

  export const help = {
    path: "/help",
    title: defineMessage({
      id: "t_Help",
      defaultMessage: "Help",
    }),
    link: {
      label: defineMessage({
        id: "t_Help",
        defaultMessage: "Help",
      }),
      title: defineMessage({
        id: "page.help.description",
        defaultMessage: "The instructions for using this application.",
      }),
      icon: mdiHelpCircleOutline,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.help.meta.description",
          defaultMessage:
            "Learn how the adaptive typing algorithm works, discover tips for improving your speed and accuracy, and get started with touch typing.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const highScores = {
    path: "/high-scores",
    title: defineMessage({
      id: "t_High_Scores",
      defaultMessage: "High Scores",
    }),
    link: {
      label: defineMessage({
        id: "t_High_Scores",
        defaultMessage: "High Scores",
      }),
      title: defineMessage({
        id: "page.highScores.description",
        defaultMessage: "The high score table for the fastest users.",
      }),
      icon: mdiTrophyOutline,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.highScores.meta.description",
          defaultMessage:
            "Global leaderboard of fastest typists. See top typing speeds, compare your results, and compete for the highest WPM score.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const multiplayer = {
    path: "/multiplayer",
    title: defineMessage({
      id: "t_Multiplayer",
      defaultMessage: "Multiplayer",
    }),
    link: {
      label: defineMessage({
        id: "t_Multiplayer",
        defaultMessage: "Multiplayer",
      }),
      title: defineMessage({
        id: "page.multiplayer.description",
        defaultMessage: "Online multiplayer type racing game.",
      }),
      icon: mdiCarSide,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.multiplayer.meta.description",
          defaultMessage:
            "Race against other typists in real time. Challenge friends or random opponents in online typing speed competitions.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const typingTest = {
    path: "/typing-test",
    title: defineMessage({
      id: "t_Typing_Test",
      defaultMessage: "Typing Test",
    }),
    link: {
      label: defineMessage({
        id: "t_Typing_Test",
        defaultMessage: "Typing Test",
      }),
      title: defineMessage({
        id: "page.typingTest.description",
        defaultMessage: "Typing speed test: check your WPM and accuracy.",
      }),
      icon: mdiSpeedometer,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.typingTest.meta.description",
          defaultMessage:
            "Measure your typing speed in WPM and accuracy with a quick test. Choose from real book passages or random words.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const layouts = {
    path: "/layouts",
    title: defineMessage({
      id: "t_Layouts",
      defaultMessage: "Layouts",
    }),
    link: {
      label: defineMessage({
        id: "t_Layouts",
        defaultMessage: "Layouts",
      }),
      title: defineMessage({
        id: "page.layouts.description",
        defaultMessage: "Comparison charts of keyboard layouts.",
      }),
      icon: mdiKeyboardOutline,
    },
    meta: [
      ...meta,
      {
        name: "description",
        content: defineMessage({
          id: "page.layouts.meta.description",
          defaultMessage:
            "Compare keyboard layouts side by side - QWERTY, Dvorak, Colemak, AZERTY, and more. Find the best layout for your language.",
        }),
      },
    ],
  } satisfies PageInfo;

  export const termsOfService = {
    path: "/terms-of-service",
    title: defineMessage({
      id: "t_Terms_of_Service",
      defaultMessage: "Terms of Service",
    }),
    link: {
      label: defineMessage({
        id: "t_Terms_of_Service",
        defaultMessage: "Terms of Service",
      }),
    },
    meta: [{ name: "robots", content: "noindex" }],
  } satisfies PageInfo;

  export const privacyPolicy = {
    path: "/privacy-policy",
    title: defineMessage({
      id: "t_Privacy_Policy",
      defaultMessage: "Privacy Policy",
    }),
    link: {
      label: defineMessage({
        id: "t_Privacy_Policy",
        defaultMessage: "Privacy Policy",
      }),
    },
    meta: [{ name: "robots", content: "noindex" }],
  } satisfies PageInfo;

  export function profileOf(arg: string): string;
  export function profileOf(arg: NamedUser): string;
  export function profileOf(arg: AnonymousUser): null;
  export function profileOf(arg: AnyUser): string | null;
  export function profileOf(arg: null): null;
  export function profileOf(arg: any): string | null {
    if (arg == null) {
      return null;
    }
    if (typeof arg === "string") {
      return `${Pages.profile.path}/${arg}`;
    }
    if (typeof arg === "object" && typeof arg.id === "string") {
      return `${Pages.profile.path}/${arg.id}`;
    }
    return null;
  }

  export function intlBase(locale: string): string {
    return locale === defaultLocale ? "" : `/${locale}`;
  }

  export function intlPath(path: string, locale: string): string {
    return locale === defaultLocale
      ? path
      : path === "/"
        ? `/${locale}`
        : `/${locale}${path}`;
  }
}
