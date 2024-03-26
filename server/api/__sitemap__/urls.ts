// import type { SitemapUrlInput } from "@nuxtjs/sitemap/dist/runtime/types";

// export default defineSitemapEventHandler(
//   async (): Promise<SitemapUrlInput[]> => {
//     const apiUrl =
//       "https://api.storyblok.com/v2/cdn/links?token=5BPLR1IRtWmAD0Thtqd4mgtt&version=published";

//     const { links } = await $fetch<{ links: Record<string, Link> }>(apiUrl);

//     const linksArray: Link[] = Object.values(links);
//     return linksArray.map((link) => {
//       return {
//         loc: link.real_path,
//         _sitemap: "pages",
//         _i18nTransform: true,
//         url: link?.real_path,
//         lastmod: new Date(),
//         changefreq: "weekly",
//         priority: 0.8,
//       };
//     });
//   }
// );
// interface Link {
//   id: number;
//   uuid: string;
//   slug: string;
//   path: string;
//   parent_id: number | null;
//   name: string;
//   is_folder: boolean;
//   published: boolean;
//   is_startpage: boolean;
//   position: number;
//   real_path: string;
// }

export default defineSitemapEventHandler(async (e) => {
  const posts = await Promise.all([
    {
      _path: "/dauercamping",
      modifiedAt: new Date(),
    },
    {
      _path: "/events",
      modifiedAt: new Date(),
    },
    {
      _path: "/back2basic",
      modifiedAt: new Date(),
    },
    {
      _path: "/back2basic",
      modifiedAt: new Date(),
    },
    {
      _path: "/umgebung",
      modifiedAt: new Date(),
    },
    {
      _path: "/termine",
      modifiedAt: new Date(),
    },
    {
      _path: "/galerie",
      modifiedAt: new Date(),
    },
  ]);
  return posts.map((p) => {
    return {
      loc: p._path,
      lastmod: p.modifiedAt,
      _i18nTransform: true,
    };
  });
});
