// import { GetServerSideProps } from "next";

// const generateSiteMap = (pages) => {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//      <!--We manually set the two URLs we know already-->
//      <url>
//        <loc>https://jsonplaceholder.typicode.com</loc>
//      </url>
//      <url>
//        <loc>https://jsonplaceholder.typicode.com/guide</loc>
//      </url>
//      ${pages
//        .map(({ id }) => {
//          return `
//        <url>
//            <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
//        </url>
//      `;
//        })
//        .join('')}
//    </urlset>
//  `;
// }

// const SiteMap = () => {}

// export const getServerSideProps: GetServerSideProps = async ({res}) => {
//   const req = await fetch('')
//   const pages = await req.json()

//   const sitemap = generateSiteMap(pages)
// }

// export default SiteMap
