import type { CaseStudy } from "./types";

const dir = "/work/mark-and-snip";

export const markAndSnip: CaseStudy = {
  slug: "mark-and-snip",
  title: "Mark & Snip",
  subline: "A video editing platform that transforms employee training through social media-inspired content management",
  meta: [
    { label: "My roles", value: "Sprint Leader, UIUX Designer, UX Researcher, Project Manager" },
    { label: "Tools", value: "Figma, User Research, Competitor Analysis, Wireframe / Prototype, User Testing" },
    { label: "Team members", value: "Saie Wable, Dimple, Shruti, Shihao Lan, Yu-Chi Mei" },
    { label: "Duration", value: "Aug. 2024-May 2025 (10 months)" },
  ],
  hero: { src: `${dir}/hero.png`, width: 1320, height: 707, alt: "Mark & Snip editor on desktop and mobile", rounded: false },
  sections: [
    {
      title: "The problem area",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/problem.png`, width: 400, height: 400, alt: "Illustration of lengthy training material" },
          blocks: [
            {
              kind: "text",
              text: [
                "Guide is a learning management system that streamlines employee training and onboarding experience.",
                "Currently, to corporate training materials are lengthy and unengaging, making employee onboarding and continuous learning inefficient.",
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Goal",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          reverse: true,
          media: { src: `${dir}/goal.png`, width: 400, height: 400, alt: "Illustration of condensed snippets" },
          blocks: [{ kind: "text", text: "To simplify the process of extracting and condensing information into manageable snippets." }],
        },
      ],
    },
    {
      title: "The design solution",
      blocks: [
        { kind: "text", text: "You can see, inspect, and download the entire project on website and mobile version in Figma" },
        { kind: "tags", items: ["home - Professional", "home - client", "upload", "library", "editing", "media", "chapters", "text", "effect", "publish"] },
        { kind: "slot", label: "Final screens (website and mobile)", height: 640 },
        { kind: "link", label: "See the prototype →" },
      ],
    },
    {
      title: "Design process",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          reverse: true,
          media: { src: `${dir}/design-sprint.png`, width: 600, height: 328, alt: "Google Ventures design sprint" },
          blocks: [{ kind: "text", text: "We used Google Ventures Design Sprint Methodology to help us rapidly generate and test solutions within our timeline." }],
        },
      ],
    },
    {
      title: "To design video editing features of a LMS, we gather insights from these sources:",
      aside: 480,
      small: true,
      blocks: [
        {
          kind: "list",
          items: [
            { icon: "content-creators", title: "Content creators", description: "Transform complex materials into engaging video content" },
            { icon: "employers", title: "Employers", description: "Create onboarding materials that align with organizational goals and reduce training time" },
            { icon: "employees", title: "Employees", description: "Discover how onboarding videos improve engagement over traditional methods" },
          ],
        },
      ],
    },
    {
      title: "User research",
      blocks: [
        { kind: "text", text: "The four key questions before our design sprints:" },
        {
          kind: "list",
          items: [
            { number: "01", title: "How can we optimize file upload processes and potential automation opportunities?" },
            { number: "02", title: "What is the optimal placement and integration of the “Mark & Snip” feature based on user behavior?" },
            { number: "03", title: "What are the critical pain points users face when using the Guide app?" },
            { number: "04", title: "How can we enhance the video editing experience and address any performance issues?" },
          ],
        },
        {
          kind: "grid",
          items: [
            { title: "Semi-structured interview", description: "Through informal conversations with video creators, HR personnels, and employees, we gained deeper insights into our participants’ experiences." },
            { title: "Competitor analysis", description: "We identified current trends and video editing functionalities in the market, reviewed existing platforms, analyzed features, watched product demos, and analyzed tools for inspiration." },
          ],
        },
      ],
    },
    {
      title: "Pain points and key findings from user interviews",
      aside: 400,
      blocks: [
        {
          kind: "list",
          items: [
            { icon: "time-consuming", title: "Time-consuming editing tasks", description: "It is time consuming to plan workflow, select videos, and apply customization in editing tools ." },
            { icon: "mobile-editing", title: "Mobile editing apps limitations", description: "Phone apps frequently fall short in customization, resulting in limited workflow flexibility." },
            { icon: "ai-limitations", title: "Built-in tools & AI limitations", description: "Complex editing decisions and accurate captioning remain challenging for AI." },
          ],
        },
      ],
    },
    {
      title: "Competitor analysis",
      blocks: [
        { kind: "text", text: "We analysed Video Editing & Uploading Software to collect value propositions, potential features, and prepare for design wireframes." },
        { kind: "media", items: [{ src: `${dir}/competitor-table.png`, width: 1320, height: 880, alt: "Feature comparison of video editing software", rounded: false }] },
      ],
    },
    {
      title: "Mapping",
      blocks: [
        { kind: "quote", text: "“How might we enable the user to upload and manage multiple videos?”" },
        { kind: "text", text: "With the HMW question, we developed 2 personas and an ideal journey with major steps to access the guide app, upload and edit videos and track performance" },
        { kind: "media", items: [{ src: `${dir}/mapping.png`, width: 1320, height: 944, alt: "Trainer and trainee personas with a journey map", rounded: false }] },
      ],
    },
    {
      title: "Sketching ideas",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          reverse: true,
          media: { src: `${dir}/sketches.png`, width: 640, height: 515, alt: "Crazy 8s sketches" },
          blocks: [{ kind: "text", text: "Followed the Mapping stage, we first doodled out hot ideas, and followed with crazy 8s to brainstorm and generate variety of ideas." }],
        },
      ],
    },
    {
      title: "Decide stage",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/decide.png`, width: 640, height: 554, alt: "Voted sketches" },
          blocks: [{ kind: "text", text: "During the Decide stage, we rapidly evaluated and voted on each team members’ sketches to identify preferred features, with the client's “supervote” to determine the direction to pursue for prototyping." }],
        },
      ],
    },
    {
      band: true,
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/change-of-direction.png`, width: 360, height: 360, alt: "Illustration of a change in direction", rounded: false },
          blocks: [
            { kind: "heading", text: "Change of direction" },
            { kind: "text", text: "At the end of Sprint 2, the Guide app changed their business proposition from a learning management system to a post therapy mental healthcare app" },
          ],
        },
        {
          kind: "columns",
          items: [
            { title: "Challenges", text: "Research Misalignment:\nWe need further research to understand the new target audience and ensure our work aligns with their needs" },
            { title: "Solution", text: "We conducted Thematic Analysis, Secondary Research, and Competitive Analysis of different apps and websites in the market to gain insights on video editing tools for mental health platform" },
          ],
        },
      ],
    },
    {
      title: "Research on mental health apps",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          reverse: true,
          media: { src: `${dir}/mental-health-research.png`, width: 480, height: 627, alt: "Forum threads from therapists", rounded: false },
          blocks: [
            {
              kind: "list",
              items: [
                { title: "Secondary research" },
                { title: "Thematic analysis", description: "We conducted secondary research on video based social media\nWe conducted a thematic analysis of forum discussions to identify the patterns in therapists’ experiences on Post Session" },
              ],
            },
          ],
        },
        {
          kind: "sub",
          title: "Key findings from research",
          blocks: [
            {
              kind: "list",
              items: [
                { title: "Post-session enhances progress, but flexibility is the key", description: "Some therapists use structured platforms like Blueprint for progress tracking, while others focus on collaborative problem-solving and adapting to the client’s pace" },
                { title: "Visual Progress tracking and practical tools increase motivation", description: "Platforms should incorporate features that enable visual progress tracking and provide access to easily accessible tools and resources" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Competitive analysis",
      blocks: [
        { kind: "text", text: "We conducted competitive analysis on therapist and patient applications, identifying TeenTalk as a close competitor. We also analyzed social media video editing tools like Reels and TikTok to streamline our feature set, focusing on core video editing functionalities" },
        {
          kind: "media",
          items: [
            { src: `${dir}/competitive-apps.png`, width: 560, height: 417, alt: "Therapist and patient apps compared" },
            { src: `${dir}/competitive-video-tools.png`, width: 720, height: 547, alt: "Social video editing tools compared" },
          ],
        },
      ],
    },
    {
      title: "Information architecture",
      blocks: [
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/information-architecture.png`, width: 640, height: 667, alt: "Desktop information architecture" },
          blocks: [{ kind: "text", text: "We created the information architecture for both desktop and mobile version to produce user flows and main functionalities" }],
        },
      ],
    },
    {
      title: "Wireframes (low fidelity)",
      blocks: [
        { kind: "text", text: "We translated our top-voted design ideas from sketches into mid-fidelity wireframes." },
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/wireframes.png`, width: 600, height: 1005, alt: "Create, edit and publish wireframes", rounded: false },
          blocks: [
            {
              kind: "list",
              items: [
                { title: "Create a new course", description: "Users could start creating a new course by choosing either upload new content or choosing from existing templates/ libraries" },
                { title: "Editing the course video", description: "Users could edit the course video from adding media, chapters, captions, effects, to trimming, cropping, or deleting videos" },
                { title: "Publish the course video", description: "Users could publish the course video with details such as title, description, tags, and add to series." },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Usability testing",
      blocks: [
        { kind: "text", text: "We conducted usability test using the Useberry Software. We designed 6 scenarios to gather users insights before proceeding, and based on the test results, we gained feedbacks and iterated designs accordingly." },
        { kind: "media", items: [{ src: `${dir}/usability-testing.png`, width: 588, height: 491, alt: "Useberry test scenario" }] },
      ],
    },
    {
      title: "Iterations",
      blocks: [
        {
          kind: "list",
          items: [
            { title: "Side menu reorder", description: "Users expect the editing features to be placed at the top of the side menu and the settings features at the bottom, as editing is used more frequently." },
            { title: "Terminology clarify", description: "Users found “Mark” difficult to understand what is this feature and how it works\nWe conducted card sorting to explore users’ expectation in terminologies and the order of navigation menu\nWith improvements, time was significantly reduced by 20%" },
          ],
        },
        { kind: "media", items: [{ src: `${dir}/iterations.png`, width: 1042, height: 1115, alt: "Before and after iterations" }] },
      ],
    },
    {
      title: "Reflection",
      blocks: [
        { kind: "text", text: "Through this project, I gained deep insights on the importance of collaborating with cross-functional teams and clients to make sure our design direction aligns with the overall project goal. While different teams are working on different features, to maintain a cohesive UI becomes extremely important. In addition, fully communication is also a important key in ensure consistency." },
      ],
    },
  ],
};
