export const profile = {
  email: "zakelmrani@gmail.com",
  phoneDisplay: "+33 6 52 21 57 72",
  phoneHref: "+33652215772",
  github: "https://github.com/zakel912",
  linkedin: "https://www.linkedin.com/in/zakaria-el-mrani/",
  profileImage: "/profile.jpg",
  resumes: [
    {
      id: "general",
      file: "/cv/zakaria-el-mrani-cv-general.pdf",
      available: false
    },
    {
      id: "data-engineering",
      file: "/cv/zakaria-el-mrani-cv-data-engineering.pdf",
      available: true
    },
    {
      id: "data-ai",
      file: "/cv/zakaria-el-mrani-cv-data-ai.pdf",
      available: true
    }
  ]
} as const;
