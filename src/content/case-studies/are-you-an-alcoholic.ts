import type { CaseStudy } from "./types";

const dir = "/work/are-you-an-alcoholic";

export const areYouAnAlcoholic: CaseStudy = {
  slug: "are-you-an-alcoholic",
  title: "Are You An Alcoholic",
  subline: "A web and mobile game that tests your cocktail knowledge",
  intro:
    "Are You An Alcoholic is a web/mobile game for testing users the knowledge of different cocktail types. In this project, I worked as a software engineer, designed the interface and developed the game for delivering an entertain user experience.",
  meta: [
    { label: "Duration", value: "2.5 months" },
    { label: "My role", value: "Software Engineer, UI Designer, 3D Modeler" },
    { label: "Tools", value: "Figma, Blender, React, Javascript, Three js" },
  ],
  hero: { src: `${dir}/hero.png`, width: 486, height: 334, alt: "Game home page with the 3D guide", rounded: true },
  sections: [
    {
      title: "About",
      blocks: [
        {
          kind: "text",
          text: [
            "As a person who has low alcohol tolerance, whenever I go to a bar, I always double check the alcohol by volume of the cocktail. As time goes by, I realize that I gradually recognize more and more different types of cocktails and alcohol knowledge. However, the way I learned about them is through manually Googling, which is bored and not entertain at all.",
            "With that in mind, I decided to design an application that is compatible in both web and mobile, to let users understand the knowledge of cocktail through games. At the same time, providing entertainment and academic purpose for learning knowledges.",
          ],
        },
      ],
    },
    {
      title: "Goal",
      blocks: [
        { kind: "text", text: "To design and develop a game for learning the concept and combinations behind different alcohol types, testing users with interesting audio and animation effects, and establish an entertaining guidance man to bring joyful atmosphere to the game." },
      ],
    },
    {
      title: "Process",
      blocks: [
        {
          kind: "text",
          text: "The primary users of Are You An Alcoholic game is general publics who is interested in alcohol and cocktail knowledges, or who desire to test themselves on the familiarities of bar knowledges. The way I approach to the audience is through online researching including alcohol resources, current applications in the market, and database of alcohol concepts.\nIn this game, I aim to achieve the following goals for delivering smooth user interface and better user experience:",
        },
        {
          kind: "grid",
          items: [
            { icon: "guidance", title: "Guidance", description: "A guidance man brings clear directions to users for easier navigation" },
            { icon: "instructions", title: "Instructions", description: "Clear instructions deliver smoother user experience. At the same time minimize the error occurrence." },
            { icon: "effects", title: "Effects", description: "Sound effects and animation effects provide entertained experience to users, bringing them attractions to stay on the game." },
            { icon: "motivation", title: "Motivation", description: "A resourceful database provides motivations to users for staying in the game" },
          ],
        },
      ],
    },
    {
      title: "Ideation",
      blocks: [
        {
          kind: "text",
          text: [
            "With goals and process in mind, I brainstormed on how to deliver a smooth experience and also entertain enough for users to enjoy in the game. I began with proposing prototypes on scratch in Figma. After several iterations, I concluded with developing several pages with one home page, one game page, a winning page, and a losing page.",
            "In addition to the game pages, I designed and created a 3D model as a guidance in Blender for giving users instructions and adding on exciting atmosphere to the game. For the detail of each page, I utilized ThreeJS to deploy the 3D model up on the canvas, HTML and CSS for website format, and Javascript for animations and data rendering.",
          ],
        },
      ],
    },
    {
      title: "Final product",
      blocks: [
        { kind: "text", text: "In the final design, we have four pages:" },
        { kind: "tags", items: ["Home page", "Game page", "Winning page", "Losing page"] },
        { kind: "text", text: "There is a 3D model in all pages except Game page for increasing entertainment. The animation of 3D model acts different according to the page. In addition, a JSON file is being used for rendering alcohol knowledge to test users. Sound effects are used in all pages as well for increasing the attractions." },
        { kind: "media", items: [{ src: `${dir}/pages.png`, width: 1320, height: 438, alt: "Home, game, winning and losing pages" }] },
      ],
    },
    {
      title: "Next step",
      blocks: [
        { kind: "text", text: "Because of the time constraints, I didn't put a lot of data into JSON for users to play. In order to have better user experience, the next step will be to add more cocktail data inside the game. In addition, another point is to add levels for users to have more motivation to stay in the game." },
      ],
    },
  ],
};
