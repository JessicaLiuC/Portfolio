import type { CaseStudy } from "./types";

const dir = "/work/map-your-journey";

export const mapYourJourney: CaseStudy = {
  slug: "map-your-journey",
  title: "Map Your Journey",
  subline: "A Simple Guide for International Software Developers on Job Opportunities and Living in the U.S",
  meta: [
    { label: "Duration", value: "3 months" },
    { label: "My role", value: "Data engineer, data analyst" },
    { label: "Datasets", value: "US Software Engineer Jobs, Best States" },
    { label: "Tools", value: "SQL Server, Power BI" },
  ],
  hero: { src: `${dir}/hero.png`, width: 1320, height: 738, alt: "Power BI dashboard overview" },
  sections: [
    {
      title: "About",
      blocks: [
        {
          kind: "text",
          text: [
            "After Covid-19 pandemic, the job market experienced an unexpected resilience and transformation. The labor market rebounded sharply from the initial blow dealt by Covid-19, defying many predictions. With the changes of job market, international students are facing significantly challenges in locating their desired job.",
            "In this study, I worked on deliver actionable insights that will assist international students in making strategic decisions regarding their job search and relocation.",
          ],
        },
      ],
    },
    {
      title: "Goal",
      aside: true,
      blocks: [
        { kind: "text", text: "To target the three business questions and deliver the conclusion analysis based on the questions." },
        {
          kind: "list",
          items: [
            { number: "01", title: "Availability and salary", description: "How are the software development jobs distributed across states? How about the average annual salary?" },
            { number: "02", title: "Visa sponsorship", description: "What is the distribution of visa sponsorship for software engineering roles across different states, and how does it relate to salary?" },
            { number: "03", title: "Best states for international software developers", description: "Which states provide the best combination of sponsored job availability, competitive salaries, and livability for international software developers?" },
          ],
        },
      ],
    },
    {
      title: "Preparation",
      blocks: [
        { kind: "text", text: "To prepare for the analysis, we conducted four main steps." },
        {
          kind: "steps",
          items: [
            { number: "01", title: "Data Profiling", description: "Analyze datasets to identify patterns and inconsistencies." },
            { number: "02", title: "ETL Process", description: "Remove unnecessary columns and standardize salary data across different payment types" },
            { number: "03", title: "Data Integration", description: "Integrated multiple datasets using 'State' as the joining key" },
            { number: "04", title: "PowerBI Analysis", description: "Create visualizations including heat maps, donut charts, and bar charts" },
          ],
        },
      ],
    },
    {
      title: "Data profiling",
      blocks: [
        { kind: "text", text: "During data profiling, we discovered several challenges, which informs us about what we could do in the ETL process, so that we could address the issues systematically and create a clean, consistent, and reliable dataset for the analysis." },
        {
          kind: "list",
          items: [
            { title: "Salary Data", description: "Multiple salary formats (annual, hourly, weekly, daily)\nSalary ranges using hyphen (e.g., \"45000-55000\")\nMedian salaries around 12k\nMissing salary values" },
            { title: "Job Posting", description: "1000+ empty value records\nUnnecessary/ duplicate columns (ie. review_count, relative_time, etc.)\nMultiple employment types (full-time, part-time, contract, etc.)" },
            { title: "Data Quality", description: "Null values across various columns\nDuplicate columns requiring removal\nInconsistent data formats requiring standardization\nEmpty fields in certain categories" },
          ],
        },
      ],
    },
    {
      title: "ETL process",
      blocks: [
        { kind: "text", text: "After the data profiling, we understand what we need to address in during the ETL process." },
        {
          kind: "list",
          items: [
            { number: "01", title: "Extract", description: "Removed unnecessary/duplicate columns\nRenamed columns for better clarity\nValidated and corrected data types" },
            { number: "02", title: "Transform", description: "Relationship between salary and visa sponsorship" },
            { number: "03", title: "Load", description: "Created calculated columns\nGrouped related data\nVisualization\nIntegrated dataset for PowerBI analysis" },
          ],
        },
      ],
    },
    {
      title: "Data integration",
      blocks: [
        { kind: "text", text: "In the data integration phase, we focused on combining multiple datasets to create a unified and comprehensive dataset for analysis. We used the State as the primary joint key between the data sets." },
        {
          kind: "grid",
          items: [
            { title: "Integration", description: "Used \"State\" as primary joining key between datasets\nExcluded Washington DC due to missing retirement statistics\nAllowed null values to preserve important records" },
            { title: "Data Cleaning", description: "Standardized state names across datasets\nCreated consistent state-level aggregations" },
          ],
        },
      ],
    },
    {
      title: "Power BI analysis",
      blocks: [
        { kind: "text", text: "After Data Profiling and ETL process, we dived into data analysis and visualization using PowerBI. Our analysis consists of three major aspects: job availability, average salary and visa sponsorship. By combining these results, we propose the top 5 states for international student to land a job in software development." },
        {
          kind: "sub",
          title: "Job availability",
          blocks: [
            { kind: "text", text: "California leads with the highest number of job postings, followed by Texas and New York. It also shows that job satisfaction is not directly correlate with the number of opportunities available. On the other hand, the cities on the East Coast, especially in New York, Massachusetts, and Virginia, appears more intense in hiring activity compared to the Midwest, while California still remain its significant hiring activity." },
            { kind: "media", items: [{ src: `${dir}/job-availability.png`, width: 1320, height: 517, alt: "Job postings by state" }] },
          ],
        },
        {
          kind: "sub",
          title: "Average salary",
          blocks: [
            { kind: "text", text: "California, Texas, New York, Massachusetts, and Virgina offer a high number of job opportunities, which shows on their high average annual salary. In addition, remote jobs also show its competitive salaries, providing an attractive option for professionals." },
            { kind: "media", items: [{ src: `${dir}/average-salary.png`, width: 1320, height: 397, alt: "Average salary by state" }] },
          ],
        },
        {
          kind: "sub",
          title: "Visa sponsorship",
          blocks: [
            { kind: "text", text: "California leads significantly, nearly 19% of all sponsored jobs, followed by Texas with 9% and New York with 7%. On the other hand, remote positions also form a substantial portion of the sponsored jobs, demonstrating the flexibility and inclusivity of remote work in addressing talent shortages. For states with a high count of sponsored jobs, the average salaries are relatively high." },
            { kind: "media", items: [{ src: `${dir}/visa-sponsorship.png`, width: 1320, height: 728, alt: "Sponsored jobs by state" }] },
          ],
        },
      ],
    },
    {
      title: "Result and next steps",
      blocks: [
        {
          kind: "sub",
          title: "Top states",
          blocks: [
            {
              kind: "text",
              text: [
                "In the analysis, we prioritized the number of sponsored job over state ranking.",
                "California scores high in weather but falls short in affordability and crime. Massachusetts excels in healthcare and well-being. In contrasts, Texas and Virginia provide a balanced mix of affordability and crime. Washington and New York performs strongly in well-being and weather.",
              ],
            },
            { kind: "media", items: [{ src: `${dir}/top-states.png`, width: 1320, height: 599, alt: "Top five states compared" }] },
          ],
        },
        {
          kind: "sub",
          title: "Next step: future scope",
          blocks: [
            {
              kind: "text",
              text: [
                "We had the ambition to predict next year's software development job post numbers using Azure ML lab. However, this requires additional data points beyond the current dataset, such as economic indicators and stock market data.",
                "In addition, the project could be enhanced by incorporating several key types of supplementary data.\nEconomic indicators (GDP, tech sector growth rates, regional economic metrics) would provide valuable context for job market trends\nCost of living data (housing costs and regional price indices) would enable more nuanced salary comparisons across different locations",
              ],
            },
          ],
        },
      ],
    },
  ],
};
