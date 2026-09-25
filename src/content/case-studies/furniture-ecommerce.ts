import type { CaseStudy } from "./types";

const dir = "/work/furniture-ecommerce";

export const furnitureEcommerce: CaseStudy = {
  slug: "furniture-ecommerce",
  title: "Furniture E-commerce Mobile App",
  subline: "A mobile shopping app to complement the furniture web store",
  intro:
    "A mobile application for customers to purchase furniture in addition to web application. In this project, I worked as a UI/UX designer and a software engineer, designed the application interface, testing the user flow, and developed the application for delivering an overall user experience.",
  meta: [
    { label: "Duration", value: "3 months" },
    { label: "My role", value: "Software Engineer, UI/UX Designer" },
    { label: "Tools", value: "Figma, React Native, Typescript" },
  ],
  hero: { src: `${dir}/hero.png`, width: 341, height: 527, alt: "Category page on a phone" },
  sections: [
    {
      title: "Problem",
      aside: true,
      blocks: [
        {
          kind: "list",
          items: [
            { number: "01", title: "Limited accessibility", description: "Without a mobile app, customers are restricted to shopping on desktop or mobile web browsers, which can be cumbersome on smaller screens." },
            { number: "02", title: "Personalized experience", description: "Mobile apps can leverage user data to offer personalized recommendations based on browsing history and preferences." },
            { number: "03", title: "Reduced customer engagement", description: "Without push notifications and personalized recommendations, the web version misses opportunities to re-engage customers and drive sales." },
          ],
        },
      ],
    },
    {
      title: "Research",
      blocks: [
        { kind: "text", text: "We conducted competitive analysis on E-commerce mobile applications in the market, and we concluded with the following key design points." },
        {
          kind: "grid",
          items: [
            { icon: "simplified-navigation", title: "Simplified navigation", description: "Use a bottom navigation bar to provide easy access to main sections of the app" },
            { icon: "search-bar", title: "Search bar", description: "Place the research function above the fold, making it easily accessible for users to find products quickly" },
            { icon: "clear-cta-buttons", title: "Clear call-to-action buttons", description: "Include prominent and easily tappable CTA buttons for important actions like “Add to Cart”" },
            { icon: "personalization", title: "Personalization", description: "Implement personalized recommendations based on user browsing and purchase history" },
            { icon: "clear-product-categories", title: "Clear product categories", description: "Implement an intuitive category structure for easy product browsing" },
            { icon: "visual-hierarchy", title: "Visual hierarchy", description: "Use appropriate font sizes, colors, and spacing to guide users’ attention to important elements" },
          ],
        },
      ],
    },
    {
      title: "Design process",
      blocks: [
        {
          kind: "steps",
          items: ["Define", "Ideate", "Prototype", "Test", "Develop"].map((title, i) => ({ number: `0${i + 1}`, title })),
        },
      ],
    },
    {
      title: "Prototype",
      blocks: [
        {
          kind: "split",
          media: { src: `${dir}/prototype.png`, width: 640, height: 489, alt: "Prototype flows in Figma" },
          gap: "5xl",
          blocks: [
            {
              kind: "text",
              text: [
                "With the research key pain points in mind, I focused the e-commerce platform on providing an intuitive user experience.",
                "The prototype features a simplified bottom navigation bar that enables quick access to main sections, along with a prominent search function for product discovery. To enhance user engagement, I implemented recommendations based on browsing categories, and clear product categorization for seamless navigation.",
                "The visual hierarchy was delivered using consistent sizing, spacing, and color contrasts to guide users’ attention. At the same time, we delivered clear CTA buttons for immediately notice and accessibility.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Development and final product",
      blocks: [
        { kind: "text", text: "The client is satisfied with the prototype, and the product has been delivered to the development stage. Currently, the product is under development. The front-end product has been developed successfully using React and Typescript. At the moment, we are working on the back-end data cleaning and database integration." },
        { kind: "media", items: [{ src: `${dir}/final.png`, width: 1320, height: 881, alt: "Final app screens", rounded: false }] },
      ],
    },
  ],
};
