const config = {
  title: "Train Like an Engineer",
  tagline: "A calm path from command-line fear to distributed-training clarity",
  favicon: "img/logo.svg",
  url: "https://vocabvictor.github.io",
  baseUrl: "/llm-train-docs/",
  organizationName: "VocabVictor",
  projectName: "llm-train-docs",
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn"
    }
  },
  trailingSlash: false,
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"]
  },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "learn"
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "blog"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: "Train Like an Engineer",
      items: [
        {to: "/learn/intro", label: "Learn", position: "left"},
        {to: "/blog", label: "Blog", position: "left"},
        {href: "https://github.com/VocabVictor/llm-train-demo", label: "Demo", position: "right"},
        {href: "https://github.com/VocabVictor/llm-train-lab", label: "Lab", position: "right"},
        {href: "https://github.com/VocabVictor/llm-train-docs", label: "GitHub", position: "right"}
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {label: "Intro", to: "/learn/intro"},
            {label: "Week 1", to: "/learn/week1"},
            {label: "Task Handoff", to: "/learn/tasks"}
          ]
        },
        {
          title: "Build",
          items: [
            {label: "Demo Repo", href: "https://github.com/VocabVictor/llm-train-demo"},
            {label: "Lab Repo", href: "https://github.com/VocabVictor/llm-train-lab"}
          ]
        }
      ],
      copyright: `Copyright ${new Date().getFullYear()} VocabVictor`
    }
  }
};

module.exports = config;
