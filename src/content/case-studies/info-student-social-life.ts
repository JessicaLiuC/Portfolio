import type { CaseStudy } from "./types";

const dir = "/work/info-student-social-life";

export const infoStudentSocialLife: CaseStudy = {
  slug: "info-student-social-life",
  title: "INFO Student Social Life",
  subline: "A user research client project for the INFO College at the University of Maryland",
  intro:
    "A user research client project from Dr. Wayne Lutters, focusing on understanding University of Maryland INFO college undergraduate students’ social life, identifying factors and challenges that impact their engagement, and design solutions to enhance their social life experience.",
  meta: [
    { label: "Duration", value: "3 months" },
    { label: "My role", value: "Interviewer, Recorder, Modeler, Moderator" },
    { label: "Tools", value: "Figma, Miro, Survey, Interview" },
    { label: "Project", value: "User Research project of six members" },
  ],
  hero: { src: `${dir}/hero.png`, width: 501, height: 293, alt: "Redesigned TerpLink home page", rounded: true },
  sections: [
    {
      title: "Problem",
      blocks: [
        { kind: "text", text: "The INFO College at the University of Maryland identified a concerning trend: undergraduate students were struggling to connect with and participate in college events and student organizations. Faculty and administrators noticed various obstacles preventing students from engaging in extracurricular activities, leading us to investigate what factors were creating these barriers to participation." },
      ],
    },
    {
      title: "Research questions",
      blocks: [
        { kind: "quote", text: "“What encourages/stops students to join events and organizations? How do they usually decide to participate in the event? Do they get any practical benefits from this?”" },
      ],
    },
    {
      title: "Product concept and low-fi prototype",
      blocks: [
        { kind: "text", text: "Based on our analysis of student feedback and data from the Wall Walk exercise, we redesigned an enhanced version of TerpLink, UMD’s existing events platform. The improved platform aims to reduce participation barriers by 10%. The improvements are designed to foster a stronger sense of community while streamlining the entire event management process." },
        {
          kind: "split",
          gap: "6xl",
          media: [
            { src: `${dir}/prototype-1.png`, width: 600, height: 326, alt: "Low-fi prototype, screens 1 to 10" },
            { src: `${dir}/prototype-2.png`, width: 600, height: 326, alt: "Low-fi prototype, screens 10 to 23" },
          ],
          blocks: [
            {
              kind: "grid",
              columns: 1,
              items: [
                { title: "ELMS Canvas Integration", description: "Adds an \"Events\" category to directly connect students to TerpLink's platform to increase TerpLink visibility" },
                { title: "Homepage Recommendation", description: "Incorporates personalized event recommendations and course-related activities at the top for easier discovery" },
                { title: "Event Filtered System", description: "Introduces simplified category filters (Academic, Career Development, Entertainment)" },
                { title: "Event Attendee List", description: "Informs event participation, enables networking opportunities, and displays faculty recommendations" },
                { title: "RSVP Form", description: "Provides privacy controls for email sharing, anonymous attendance, dietary, and other accommodation preferences" },
                { title: "Calendar Integration", description: "Added events to ELMS calendar automatically after RSVP completion, to assist with students’ event commitments and academic schedule" },
                { title: "Post-Event Feedback System", description: "Assists organizers to collect feedback for future events improvement and understand participant experiences" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Research process",
      blocks: [
        {
          kind: "steps",
          items: ["Research Questions", "Research Methods (Survey & Interview)", "Analysis & Interpretation", "Affinity Diagram", "Modeling", "Wall Walk", "Vision & Prototype"].map((title, i) => ({ number: `0${i + 1}`, title })),
        },
      ],
    },
    {
      title: "Research methods and key findings",
      blocks: [
        { kind: "text", text: "We conducted surveys to collect quantitative and statistical data for analyzing patterns. and interviews to provide in-depth qualitative data for nuances of students’ experiences. Besides, we also interview the events holder in INFO college." },
        {
          kind: "media",
          items: [
            { src: `${dir}/engagement-factors.png`, width: 689, height: 350, title: "Factors that encourage engagement", alt: "Chart of factors that encourage engagement", rounded: false },
            { src: `${dir}/participation-challenges.png`, width: 612, height: 351, title: "Challenges that prevent participation", alt: "Chart of challenges that prevent participation", rounded: false },
          ],
        },
        {
          kind: "stats",
          items: [
            { value: "80%", label: "of participants consider skill development and networking as factors effect their attendance at clubs and events" },
            { value: "80%", label: "of participants encounter scheduling conflicts that hinder their participation" },
            { value: "60%", label: "of participants feel that location and travel time influence their willingness to attend" },
            { value: "10%", label: "of participants feel that certain events lack information" },
          ],
        },
      ],
    },
    {
      title: "Affinity diagram",
      blocks: [
        { kind: "text", text: "We utilized affinity diagram to organize the notes we analyzed from interpretation session. It identifies patterns and categorizes key factors from our research data, helping us understand key themes and user needs across all participants. From the affinity diagram, we identified three key factors:" },
        {
          kind: "split",
          gap: "6xl",
          media: { src: `${dir}/affinity-diagram.png`, width: 640, height: 389, alt: "Affinity diagram in Miro" },
          blocks: [
            {
              kind: "list",
              items: [
                { title: "Motivations to join events and clubs", description: "Students value career-focused events and prefer to connect with peers who share similar interests" },
                { title: "Barriers to participate in activities", description: "Poor event awareness, scheduling conflicts, and location barriers limited student participation" },
                { title: "Participants’ feedback and suggestions", description: "Students prefer career-focused events, industry workshops, and meaningful social gatherings" },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Decision point model",
      blocks: [
        { kind: "text", text: "The decision point model assists the team to conclude with six main factors: time, location, relations, takeaways, interests, and communication." },
        { kind: "media", items: [{ src: `${dir}/decision-point-model.png`, width: 1320, height: 841, alt: "Decision point models", rounded: false }] },
      ],
    },
    {
      title: "Persona and journey map",
      blocks: [
        { kind: "text", text: "We developed two personas that capture our target users' goals and challenges. We mapped their journeys to understand users' emotional experiences and decision-making process when discovering and engaging with campus events and clubs." },
        { kind: "media", items: [{ src: `${dir}/personas.png`, width: 1320, height: 355, alt: "Personas and journey maps", rounded: false }] },
      ],
    },
    {
      title: "Wall walk",
      blocks: [{ kind: "media", items: [{ src: `${dir}/wall-walk.png`, width: 1320, height: 482, alt: "Wall walk session", rounded: false }] }],
    },
    {
      title: "Project vlog",
      blocks: [{ kind: "video", label: "Vlog video" }],
    },
  ],
};
