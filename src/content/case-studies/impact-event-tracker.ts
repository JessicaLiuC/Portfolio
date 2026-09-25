import type { CaseStudy } from "./types";

const dir = "/work/impact-event-tracker";

export const impactEventTracker: CaseStudy = {
  slug: "impact-event-tracker",
  title: "Impact Event Tracker",
  subline: "An internal web tool for tracking employee contributions to customer savings",
  intro:
    "Impact Event Tracker is a web tool for internal employees to track their contributions on customer savings periodically. I worked as a software engineer, redesigned and developed this web tool for optimizing the user experience.",
  meta: [
    { label: "Duration", value: "2.5 months" },
    { label: "My role", value: "Software Engineer, UI/UX Designer, UX Researcher" },
    { label: "Tools", value: "User research, Data Cleaning, Python, React, Javascript, AWS" },
  ],
  hero: { src: `${dir}/hero.png`, width: 505, height: 317, alt: "Impact Event Tracker data display page", rounded: true },
  sections: [
    {
      title: "Problem",
      aside: true,
      blocks: [
        { kind: "text", text: "While the company is contributing customer's savings, it is also important to track the amount of saving numbers in order to optimize the solutions. The Product Management Team noticed some impactful issues on the current impact event tracker tool:" },
        {
          kind: "list",
          items: [
            { number: "01", title: "Hard to handle", description: "Current Impact Event Tracker uses Excel sheet to do recording works, which may cause huge issues in accidentally delete/edit the data" },
            { number: "02", title: "Lack of privacy", description: "All employees using the sheet could see the whole data" },
            { number: "03", title: "Easy to break", description: "As the data increasing, Excel sheet could not afford the data, and cause the data to lost/break/hard to track" },
          ],
        },
      ],
    },
    {
      title: "Goal",
      blocks: [
        { kind: "text", text: "Redesign and develop a web tool that consists of several pages for employees to enter, view, and edit their data:" },
        { kind: "tags", items: ["Log in page", "Data entry", "Data display", "Power BI analysis"] },
      ],
    },
    {
      title: "Research",
      blocks: [
        {
          kind: "text",
          text: "The primary audience of Impact Event Tracker web tool is the internal employees of the company. The way we approach to the audience is to conduct meetings, receiving feedbacks, and reviewing the pros and cons of user experiences on current web.\nAfter collecting the data, we concluded pain points and goals to improve the user experience:",
        },
        {
          kind: "grid",
          items: [
            { icon: "authentication", title: "Authentication", description: "Users prefer to see their data privately and securely, without being accessed by other users." },
            { icon: "stabilization", title: "Stabilization", description: "Users need stable database for storing enormous amount of data, and well-functioned edit/delete options for better processing." },
            { icon: "consistency", title: "Consistency", description: "Data needs to remain consistency for users to process further data comparing and organizing." },
            { icon: "performance", title: "Performance", description: "A well-displayed platform increases the efficiency and user experience for users to perform the results to customers." },
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
            "Following pain points and goals, our team brainstormed how the integration and improvement that Impact Event Tracker could be. We began with proposing ideas on the big frame. After discussions, we concluded with developing several sub-pages instead of one single page in order to maintain each function without breaking them accidentally.",
            "For the detail of each page, we utilized Material UI as our base frame. Since we only have approximately 5 weeks to program and finalize this capstone project, we inherited template from Material UI, an online open source for developing web application, as our initial concept, and we added details with making changes to maintain the stability and consistency.",
          ],
        },
      ],
    },
    {
      title: "Final product",
      blocks: [
        { kind: "text", text: "Besides the four main pages, several filtering functions were added in data display page:" },
        { kind: "tags", items: ["Select columns", "Filter factors", "Table density", "File export"] },
        { kind: "text", text: "Added functions benefit users in easier browsing savings for displaying to the customers. Normally, when the user is showing the data to customer, he/she has to open a separate PowerBI page. Considering the situation, I added another page that embedded the PowerBI into our subpage for increasing efficiency." },
        { kind: "media", items: [{ src: `${dir}/power-bi.png`, width: 1320, height: 527, alt: "Embedded Power BI page" }] },
      ],
    },
    {
      title: "Result and next step",
      blocks: [
        { kind: "text", text: "The Capstone Project is being recognized, and our team won the Top 8 best projects of all internship groups. Based on the feedbacks from stakeholders and employees, a software team is currently developing the project based on our capstone. The project will take several months to develop, and propose to the whole company’s internal web tool system." },
      ],
    },
  ],
};
