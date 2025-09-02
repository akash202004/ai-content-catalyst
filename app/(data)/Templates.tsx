export default [
  // Blog
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "You are an expert content strategist with over 15 years of experience in SEO-optimized writing. Generate 5 compelling and attention-grabbing blog title ideas in bullet points. Base the ideas strictly on the provided blog niche and outline. Ensure the tone is engaging and click-worthy. Format the results as plain text with bullet points.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Intro",
    desc: "An AI tool that crafts engaging introductions for your blog posts.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1008/1008032.png",
    aiPrompt:
      "You are a senior blog copywriter with 15+ years of experience in crafting hook-driven intros. Based on the given niche and outline, write a captivating blog introduction that clearly presents the topic, engages readers from the first line, and hints at the value of the content. Keep the tone professional and curious. Output should be formatted as plain text.",
    slug: "generate-blog-intro",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Conclusion",
    desc: "An AI tool that creates impactful conclusions to wrap up blog posts effectively.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/219/219983.png",
    aiPrompt:
      "As a professional content writer with 15 years of experience, generate a strong and thoughtful conclusion for a blog based on the provided niche and outline. Ensure the ending includes a summary of key takeaways, encourages further thought or action, and leaves a lasting impression. Write in a concise, motivational tone. Format the result as plain text.",
    slug: "generate-blog-conclusion",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Paragraph",
    desc: "An AI tool that writes detailed and informative blog paragraphs based on a sub-topic.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/84/84380.png",
    aiPrompt:
      "You are a professional blog content creator with 15+ years of writing experience. Based on the provided niche and sub-topic, write a detailed and well-structured blog paragraph. Ensure the writing is informative, SEO-friendly, and maintains clarity and engagement throughout. The paragraph should feel natural and human-written. Return the content in plain text format.",
    slug: "generate-blog-paragraph",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog sub-topic",
        field: "input",
        name: "subtopic",
        required: true,
      },
    ],
  },
  // Instagram
  {
    name: "Instagram Post Generator",
    desc: "Generate 3 Instagram post ideas based on the given keywords, with the result in Rich Text Editor format.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post ideas based on the given keywords and provide the result in plain text format.",
    form: [
      {
        label: "Enter keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Caption",
    desc: "An AI tool that generates captivating Instagram captions based on your content.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/2329/2329065.png",
    aiPrompt:
      "You are a seasoned social media strategist with over 15 years of experience creating engaging Instagram captions. Based on the provided image, niche, and theme, generate 5 unique and creative Instagram captions that resonate with the target audience. Ensure the captions are catchy, engaging, and relevant to the brand's voice. Provide results in plain text format for easy copy-paste.",
    slug: "generate-instagram-caption",
    form: [
      {
        label: "Enter your Instagram niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your post theme or content description",
        field: "textarea",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hashtags",
    desc: "An AI tool that suggests relevant hashtags for your Instagram posts.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/870/870667.png",
    aiPrompt:
      "As a seasoned social media expert with over 15 years of experience, generate 10 relevant and trending Instagram hashtags based on the provided niche and content. Ensure the hashtags are a mix of popular and niche-specific tags to maximize engagement and reach. Format the result as a list of hashtags in rich text for easy copy-pasting.",
    slug: "generate-instagram-hashtags",
    form: [
      {
        label: "Enter your Instagram niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your content description or theme",
        field: "textarea",
        name: "theme",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Bio Ideas",
    desc: "An AI tool that generates unique and creative Instagram bio ideas.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/3062/3062613.png",
    aiPrompt:
      "You are an expert Instagram profile designer with 15+ years of experience. Generate 5 creative and attention-grabbing Instagram bio ideas based on the given niche and personality type. Ensure the bios reflect the brand's voice and create a strong first impression. Keep them concise, witty, and appealing. Format the result in rich text for easy use.",
    slug: "generate-instagram-bio",
    form: [
      {
        label: "Enter your Instagram niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your brand's tone or personality (optional)",
        field: "input",
        name: "tone",
      },
    ],
  },
  {
    name: "Instagram Post Ideas",
    desc: "An AI tool that generates Instagram post ideas based on your niche and content theme.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/1057/1057042.png",
    aiPrompt:
      "You are a social media expert with 15 years of experience creating engaging Instagram post ideas. Based on the given niche and content theme, generate 5 unique Instagram post ideas that are creative, relevant to the audience, and designed to boost engagement. Include post types (e.g., carousel, story, reel) and potential calls-to-action. Provide the results in rich text format.",
    slug: "generate-instagram-post-ideas",
    form: [
      {
        label: "Enter your Instagram niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter your content theme or goal",
        field: "textarea",
        name: "theme",
        required: true,
      },
    ],
  },
  // Youtube
  {
    name: "Youtube SEO Title",
    desc: "An AI tool for generating SEO optimized, high-ranked YouTube titles based on keywords and description.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Generate the best 5 SEO optimized title ideas in bullet points based on keywords and outline. Provide results in HTML tags format.",
    form: [
      {
        label: "Enter your YouTube video topic keywords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter YouTube description outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that generates a catchy and concise YouTube video description with emojis, based on topic and outline.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate a YouTube description with emojis under 4-5 lines based on topic and outline in plain text format.",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter YouTube outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "Generate 10 YouTube tags based on the title and outline in rich text editor format.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 YouTube tags in bullet points based on title and outline in plain text format.",
    form: [
      {
        label: "Enter your YouTube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter YouTube video outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  // LinkedIn
  {
    name: "LinkedIn Post Ideas",
    desc: "Generate engaging LinkedIn post ideas tailored for personal branding, hiring, or thought leadership.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    aiPrompt:
      "You are a LinkedIn content strategist with over 15 years of experience. Based on the provided niche and objective (e.g., personal branding, hiring, thought leadership), generate 5 compelling LinkedIn post ideas. Each idea should include a brief description and suggested format (e.g., text, image, video). Present the results in rich text format.",
    slug: "generate-linkedin-post-ideas",
    form: [
      {
        label: "Enter your niche or industry",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Select your objective",
        field: "select",
        name: "objective",
        options: ["Personal Branding", "Hiring", "Thought Leadership"],
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Bio Generator",
    desc: "Craft a professional LinkedIn headline and 'About' section to enhance your profile.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/847/847969.png",
    aiPrompt:
      "As a seasoned LinkedIn profile expert with 15 years of experience, generate a compelling headline and 'About' section based on the provided career details and goals. Ensure the tone is professional and aligns with the user's industry. Format the output in rich text.",
    slug: "generate-linkedin-bio",
    form: [
      {
        label: "Enter your current role and industry",
        field: "input",
        name: "role_industry",
        required: true,
      },
      {
        label: "Describe your career goals and achievements",
        field: "textarea",
        name: "goals_achievements",
      },
    ],
  },
  {
    name: "LinkedIn Article Intro/Outro",
    desc: "Generate engaging introductions and conclusions for your LinkedIn articles.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/1250/1250615.png",
    aiPrompt:
      "You are an experienced LinkedIn article writer with over 15 years in the field. Based on the provided article topic and key points, craft an engaging introduction and a compelling conclusion. The introduction should hook the reader, and the conclusion should summarize key insights and include a call-to-action. Present the results in rich text format.",
    slug: "generate-linkedin-article-intro-outro",
    form: [
      {
        label: "Enter your article topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "List the key points or outline",
        field: "textarea",
        name: "key_points",
      },
    ],
  },
  {
    name: "LinkedIn Cold Message Generator",
    desc: "Create personalized cold outreach messages for LinkedIn connections.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/725/725643.png",
    aiPrompt:
      "As a LinkedIn outreach specialist with 15 years of experience, generate a personalized cold message based on the provided recipient details and purpose. Ensure the message is professional, concise, and encourages engagement. Format the output in rich text.",
    slug: "generate-linkedin-cold-message",
    form: [
      {
        label: "Enter recipient's name and role",
        field: "input",
        name: "recipient_details",
        required: true,
      },
      {
        label: "Describe the purpose of the message",
        field: "textarea",
        name: "message_purpose",
      },
    ],
  },
  {
    name: "LinkedIn Hashtag Generator",
    desc: "Suggest relevant hashtags to increase the visibility of your LinkedIn posts.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384017.png",
    aiPrompt:
      "You are a LinkedIn content optimization expert with 15 years of experience. Based on the provided post content or topic, generate a list of 10 relevant and trending hashtags to enhance post visibility. Present the hashtags in rich text format.",
    slug: "generate-linkedin-hashtags",
    form: [
      {
        label: "Enter your post content or topic",
        field: "textarea",
        name: "post_content",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Engagement Hooks",
    desc: "Generate compelling opening lines to boost engagement on your LinkedIn posts.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/1250/1250615.png",
    aiPrompt:
      "As a LinkedIn engagement specialist with over 15 years of experience, generate 5 attention-grabbing opening lines (hooks) based on the provided post topic. Each hook should be designed to captivate the audience and encourage them to read further. Present the hooks in rich text format.",
    slug: "generate-linkedin-engagement-hooks",
    form: [
      {
        label: "Enter your post topic or main idea",
        field: "input",
        name: "post_topic",
        required: true,
      },
    ],
  },
  // X (Twitter)
  {
    name: "Twitter Thread Ideas",
    desc: "Generate engaging Twitter thread ideas tailored to your niche and audience.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733635.png",
    aiPrompt:
      "You are a seasoned Twitter strategist with over 15 years of experience. Based on the provided niche and target audience, generate 5 compelling Twitter thread ideas. Each idea should include a captivating hook and a brief outline of the thread's content. Present the results in rich text format.",
    slug: "generate-twitter-thread-ideas",
    form: [
      {
        label: "Enter your niche or industry",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Describe your target audience",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "Viral Tweet Generator",
    desc: "Craft tweets designed to go viral and maximize engagement.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733588.png",
    aiPrompt:
      "As a social media expert with 15 years of experience, generate 5 tweet ideas based on the provided topic that have the potential to go viral. Each tweet should be concise, engaging, and tailored to resonate with a broad audience. Present the tweets in rich text format.",
    slug: "generate-viral-tweets",
    form: [
      {
        label: "Enter your tweet topic or theme",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Hashtag Suggestions",
    desc: "Suggest relevant and trending hashtags to enhance your tweet's visibility.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733601.png",
    aiPrompt:
      "You are a Twitter marketing specialist with over 15 years of experience. Based on the provided tweet content or topic, suggest 10 relevant and trending hashtags to maximize reach and engagement. Present the hashtags in rich text format.",
    slug: "generate-twitter-hashtags",
    form: [
      {
        label: "Enter your tweet content or topic",
        field: "textarea",
        name: "content",
        required: true,
      },
    ],
  },
  {
    name: "Hook Generator for Tweets",
    desc: "Create compelling opening lines to capture your audience's attention.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733621.png",
    aiPrompt:
      "As a copywriting expert with 15 years of experience, generate 5 captivating hooks for tweets based on the provided topic. Each hook should be designed to grab attention and encourage users to read more. Present the hooks in rich text format.",
    slug: "generate-twitter-hooks",
    form: [
      {
        label: "Enter your tweet topic or main idea",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Poll Ideas",
    desc: "Generate engaging poll questions to boost audience interaction.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733559.png",
    aiPrompt:
      "You are a social media engagement expert with over 15 years of experience. Based on the provided topic, generate 3 engaging poll questions suitable for Twitter. Each question should include 2-4 answer options and be designed to encourage audience participation. Present the polls in rich text format.",
    slug: "generate-twitter-poll-ideas",
    form: [
      {
        label: "Enter your poll topic or theme",
        field: "input",
        name: "topic",
        required: true,
      },
    ],
  },
  {
    name: "Call-To-Action Tweet Templates",
    desc: "Craft effective call-to-action tweets to drive user engagement.",
    category: "Twitter",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733586.png",
    aiPrompt:
      "As a seasoned social media strategist with 15 years of experience, generate 5 call-to-action tweet templates based on the provided objective (e.g., website visit, newsletter signup). Each template should be concise, persuasive, and tailored to drive the desired action. Present the templates in rich text format.",
    slug: "generate-twitter-cta-templates",
    form: [
      {
        label: "Enter your call-to-action objective",
        field: "input",
        name: "objective",
        required: true,
      },
    ],
  },
  // Business/Marketing
  {
    name: "Startup Idea Validator",
    desc: "Assess the viability of your startup idea with expert-level AI insights.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/4370/4370689.png",
    aiPrompt:
      "You are a seasoned startup advisor with over 15 years of experience. Evaluate the provided startup idea by analyzing its market potential, target audience, unique value proposition, and potential challenges. Provide a comprehensive assessment highlighting strengths, weaknesses, opportunities, and threats. Present the evaluation in rich text format.",
    slug: "startup-idea-validator",
    form: [
      {
        label: "Describe your startup idea",
        field: "textarea",
        name: "idea_description",
        required: true,
      },
      {
        label: "Identify your target audience",
        field: "input",
        name: "target_audience",
      },
    ],
  },
  {
    name: "Investor Pitch Summary",
    desc: "Craft a compelling investor pitch summary to attract potential investors.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/3405/3405805.png",
    aiPrompt:
      "As an experienced pitch deck consultant with 15 years in the industry, generate a concise and persuasive investor pitch summary based on the provided business details. Highlight the problem, solution, market opportunity, business model, and team strengths. Ensure the summary is tailored to appeal to potential investors. Present the summary in rich text format.",
    slug: "investor-pitch-summary",
    form: [
      {
        label: "Provide your business overview",
        field: "textarea",
        name: "business_overview",
        required: true,
      },
      {
        label: "Outline your key value proposition",
        field: "input",
        name: "value_proposition",
      },
    ],
  },
  {
    name: "Mission & Vision Generator",
    desc: "Develop clear and inspiring mission and vision statements for your business.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/6815/6815043.png",
    aiPrompt:
      "You are a brand strategist with over 15 years of experience. Based on the provided company values, goals, and target audience, craft compelling mission and vision statements that reflect the organization's purpose and aspirations. Ensure the statements are clear, inspiring, and aligned with the company's strategic direction. Present the statements in rich text format.",
    slug: "mission-vision-generator",
    form: [
      {
        label: "Describe your company values and goals",
        field: "textarea",
        name: "company_values_goals",
        required: true,
      },
      {
        label: "Identify your target audience",
        field: "input",
        name: "target_audience",
      },
    ],
  },
  {
    name: "USP (Unique Selling Proposition) Generator",
    desc: "Define what sets your product or service apart from the competition.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/1041/1041916.png",
    aiPrompt:
      "As a marketing expert with 15 years of experience, generate a unique selling proposition (USP) based on the provided product or service details. Highlight the key differentiators that make the offering stand out in the market. Ensure the USP is clear, concise, and compelling. Present the USP in rich text format.",
    slug: "usp-generator",
    form: [
      {
        label: "Describe your product or service",
        field: "textarea",
        name: "product_service_description",
        required: true,
      },
      {
        label: "List your key differentiators",
        field: "input",
        name: "key_differentiators",
      },
    ],
  },
  {
    name: "Product Feature List Generator",
    desc: "Generate a comprehensive list of product features to showcase your offering.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/10621/10621616.png",
    aiPrompt:
      "You are a product manager with over 15 years of experience. Based on the provided product details, generate a detailed list of features that highlight the product's capabilities and benefits. Ensure the features are clearly described and organized logically. Present the feature list in rich text format.",
    slug: "product-feature-list-generator",
    form: [
      {
        label: "Provide your product details",
        field: "textarea",
        name: "product_details",
        required: true,
      },
      {
        label: "Specify the target audience or user persona",
        field: "input",
        name: "target_audience",
      },
    ],
  },
  {
    name: "Problem-Solution Statement",
    desc: "Articulate the core problem your business addresses and your solution.",
    category: "Business / Startup",
    icon: "https://cdn-icons-png.flaticon.com/128/3106/3106773.png",
    aiPrompt:
      "As a business analyst with 15 years of experience, craft a clear and concise problem-solution statement based on the provided information. Define the specific problem faced by the target audience and detail how your product or service offers a solution. Ensure the statement is structured to highlight the value proposition effectively. Present the statement in rich text format.",
    slug: "problem-solution-statement",
    form: [
      {
        label: "Describe the problem your business addresses",
        field: "textarea",
        name: "problem_description",
        required: true,
      },
      {
        label: "Explain your solution",
        field: "textarea",
        name: "solution_description",
        required: true,
      },
    ],
  },
];
