export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on your blog information.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points only based on the given niche & outline and provide results in Rich Text Editor format.",
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
    name: "Blog Content",
    desc: "An AI tool that generates blog content based on your topic and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in Rich Text Editor format.",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that generates catchy blog post titles and topic ideas based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet points only, based on niche in Rich Text Editor format.",
    form: [
      {
        label: "Enter your niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
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
      "Generate a YouTube description with emojis under 4-5 lines based on topic and outline in Rich Text Editor format.",
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
      "Generate 10 YouTube tags in bullet points based on title and outline in Rich Text Editor format.",
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
  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing articles or blog posts to bypass AI detectors and make them plagiarism-free.",
    category: "Rewriting Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the given article without any plagiarism in Rich Text Editor format.",
    form: [
      {
        label:
          "🤖 Provide your article/blog post or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This tool refines your writing, eliminating errors and redundancies, with tone analysis and better word suggestions.",
    category: "Writing Assistant",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    slug: "text-improver",
    aiPrompt:
      "Given the input text, rewrite it without any grammar mistakes and professionally in Rich Text Editor format.",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "This tool adds emojis to your text based on the given outline and rewrites it in Rich Text Editor format.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add emojis to the outline text and rewrite it in Rich Text Editor format.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "Generate 3 Instagram post ideas based on the given keywords, with the result in Rich Text Editor format.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post ideas based on the given keywords and provide the result in Rich Text Editor format.",
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
    name: "Instagram Hash Tag Generator",
    desc: "Generate 15 Instagram hashtags based on the given keywords and provide the result in Rich Text Editor format.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hashtags based on the given keywords and provide the result in Rich Text Editor format.",
    form: [
      {
        label: "Enter keywords for your Instagram hashtags",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "Generate new and trending Instagram post/reel ideas based on your niche.",
    category: "Instagram",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram ideas based on your niche and latest trends. Provide the result in Rich Text Editor format.",
    form: [
      {
        label: "Enter keywords/niche for your Instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammar Check",
    desc: "AI model to correct your English grammar by providing the text.",
    category: "English",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the input text by correcting the grammar and provide the output in Rich Text Editor format.",
    form: [
      {
        label: "Enter text to correct the grammar",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI model to generate programming code in any language based on the description provided.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    slug: "write-code",
    aiPrompt:
      "Based on the user code description, write the code and provide the output in a code block in Rich Text Editor format.",
    form: [
      {
        label:
          "Enter description of code you want along with programming language",
        field: "textarea",
        name: "codeDescription",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI model to explain programming code in any language line by line.",
    category: "Coding",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    slug: "explain-code",
    aiPrompt:
      "Based on the user code description, explain the code line by line and provide the output in a code block in Rich Text Editor format.",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeToExplain",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",
    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commerce business give output in rich text editor format",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Headline Generator",
    desc: "Generate professional and impactful LinkedIn headlines that boost your profile visibility and network connections.",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384046.png",
    category: "Professional Networking",
    slug: "linkedin-headline-generator",
    aiPrompt:
      "Based on the provided professional background and career goals, generate a LinkedIn headline. Output in plain text.",
    form: [
      {
        label: "Professional Background",
        field: "input",
        name: "background",
        required: true,
      },
      {
        label: "Career Goals",
        field: "input",
        name: "careerGoals",
        required: true,
      },
    ],
  },
  {
    name: "User Testimonial Generator",
    desc: "Create authentic and impactful user testimonials that build trust and credibility for your brand.",
    icon: "https://cdn-icons-png.flaticon.com/128/149/149070.png",
    category: "Branding",
    slug: "user-testimonial-generator",
    aiPrompt:
      "Based on the user experience and feedback provided, generate a user testimonial. Output in plain text.",
    form: [
      {
        label: "User Experience",
        field: "textarea",
        name: "userExperience",
        required: true,
      },
      {
        label: "Key Feedback Points",
        field: "textarea",
        name: "keyFeedback",
        required: true,
      },
    ],
  },
  {
    name: "Event Invitation Generator",
    desc: "Design compelling event invitations that encourage high attendance and engagement.",
    icon: "https://cdn-icons-png.flaticon.com/128/189/189101.png",
    category: "Event Planning",
    slug: "event-invitation-generator",
    aiPrompt:
      "Based on the event type and details, generate an event invitation. Output in rich text editor format.",
    form: [
      {
        label: "Event Type",
        field: "input",
        name: "eventType",
        required: true,
      },
      {
        label: "Event Details",
        field: "textarea",
        name: "eventDetails",
        required: true,
      },
    ],
  },
  {
    name: "Sales Pitch Generator",
    desc: "Create persuasive sales pitches tailored to your product or service that resonate with your target audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/2079/2079540.png",
    category: "Sales",
    slug: "sales-pitch-generator",
    aiPrompt:
      "Based on the provided product/service and target audience, generate a sales pitch. Output in plain text.",
    form: [
      {
        label: "Product/Service",
        field: "input",
        name: "productService",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Content Generator",
    desc: "Generate engaging content for your newsletters, including articles, announcements, and special offers.",
    icon: "https://cdn-icons-png.flaticon.com/128/1534/1534961.png",
    category: "Email Marketing",
    slug: "newsletter-content-generator",
    aiPrompt:
      "Based on the provided theme and key points, generate newsletter content. Output in rich text editor format.",
    form: [
      {
        label: "Newsletter Theme",
        field: "input",
        name: "theme",
        required: true,
      },
      {
        label: "Key Points",
        field: "textarea",
        name: "keyPoints",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy Generator",
    desc: "Create compelling and high-converting ad copy for various platforms like Google Ads, Facebook Ads, and more.",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055674.png",
    category: "Advertising",
    slug: "ad-copy-generator",
    aiPrompt:
      "Based on the provided product or service and target audience, generate ad copy optimized for the selected platform. Output in rich text editor format.",
    form: [
      {
        label: "Platform",
        field: "input",
        name: "platform",
        required: true,
      },
      {
        label: "Product/Service",
        field: "input",
        name: "productService",
        required: true,
      },
      {
        label: "Target Audience",
        field: "input",
        name: "targetAudience",
        required: true,
      },
    ],
  },
  {
    name: "Customer Review Response Generator",
    desc: "Generate polite and professional responses to customer reviews to maintain a positive brand image.",
    icon: "https://cdn-icons-png.flaticon.com/128/2920/2920075.png",
    category: "Customer Service",
    slug: "customer-review-response-generator",
    aiPrompt:
      "Based on the customer review and the sentiment (positive, neutral, negative), generate a response. Output in plain text.",
    form: [
      {
        label: "Customer Review",
        field: "textarea",
        name: "customerReview",
        required: true,
      },
      {
        label: "Sentiment",
        field: "input",
        name: "sentiment",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Create attention-grabbing email subject lines that increase your open rates and improve email marketing success.",
    icon: "https://cdn-icons-png.flaticon.com/128/126/126510.png",
    category: "Email Marketing",
    slug: "email-subject-line-generator",
    aiPrompt:
      "Based on the provided email content, generate an optimized subject line that is likely to boost open rates. Output in plain text.",
    form: [
      {
        label: "Email Content",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post Generator",
    desc: "Craft engaging and platform-specific social media posts that captivate your audience and increase engagement.",
    icon: "https://cdn-icons-png.flaticon.com/128/102/102016.png",
    category: "Social Media",
    slug: "social-media-post-generator",
    aiPrompt:
      "Based on the platform (e.g., Facebook, Twitter, LinkedIn), generate a social media post using the provided topic and tone. Output in rich text editor format.",
    form: [
      {
        label: "Platform",
        field: "input",
        name: "platform",
        required: true,
      },
      {
        label: "Post Topic",
        field: "input",
        name: "postTopic",
        required: true,
      },
      {
        label: "Tone (Ex: Casual, Professional, Humorous, Inspirational)",
        field: "input",
        name: "tone",
        required: true,
      },
    ],
  },
  {
    name: "Press Release Generator",
    desc: "Craft compelling press releases that attract media attention and effectively communicate your message.",
    icon: "https://cdn-icons-png.flaticon.com/128/1000/1000918.png",
    category: "Public Relations",
    slug: "press-release-generator",
    aiPrompt:
      "Based on the provided event or announcement, generate a press release. Output in rich text editor format.",
    form: [
      {
        label: "Event/Announcement",
        field: "textarea",
        name: "eventAnnouncement",
        required: true,
      },
      {
        label: "Key Details",
        field: "textarea",
        name: "keyDetails",
        required: true,
      },
    ],
  },
  {
    name: "Survey Question Generator",
    desc: "Create effective and targeted survey questions to gather valuable insights from your audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/2144/2144213.png",
    category: "Market Research",
    slug: "survey-question-generator",
    aiPrompt:
      "Based on the provided survey topic, generate relevant and insightful survey questions. Output in plain text.",
    form: [
      {
        label: "Survey Topic",
        field: "input",
        name: "surveyTopic",
        required: true,
      },
    ],
  },
  {
    name: "Customer Feedback Generator",
    desc: "Generate structured and constructive feedback forms to help improve products and services.",
    icon: "https://cdn-icons-png.flaticon.com/128/4294/4294076.png",
    category: "Customer Service",
    slug: "customer-feedback-generator",
    aiPrompt:
      "Based on the provided product or service, generate a feedback form with relevant questions. Output in plain text.",
    form: [
      {
        label: "Product/Service",
        field: "input",
        name: "productService",
        required: true,
      },
    ],
  },
  {
    name: "Product Naming Generator",
    desc: "Create unique and memorable names for your products that resonate with your target audience.",
    icon: "https://cdn-icons-png.flaticon.com/128/1256/1256165.png",
    category: "Branding",
    slug: "product-naming-generator",
    aiPrompt:
      "Based on the product description and target market, generate a list of potential product names. Output in plain text.",
    form: [
      {
        label: "Product Description",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
      {
        label: "Target Market",
        field: "input",
        name: "targetMarket",
        required: true,
      },
    ],
  },
  {
    name: "Slogan Generator",
    desc: "Generate catchy and memorable slogans that effectively convey your brand’s message.",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055697.png",
    category: "Branding",
    slug: "slogan-generator",
    aiPrompt:
      "Based on the brand’s mission and core values, generate a catchy slogan. Output in plain text.",
    form: [
      {
        label: "Brand Mission",
        field: "textarea",
        name: "brandMission",
        required: true,
      },
      {
        label: "Core Values",
        field: "textarea",
        name: "coreValues",
        required: true,
      },
    ],
  },
  {
    name: "Content Outline Generator",
    desc: "Create detailed and structured content outlines for blogs, articles, or reports.",
    icon: "https://cdn-icons-png.flaticon.com/128/1097/1097073.png",
    category: "Content Creation",
    slug: "content-outline-generator",
    aiPrompt:
      "Based on the provided topic and key points, generate a content outline. Output in plain text.",
    form: [
      {
        label: "Topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Key Points",
        field: "textarea",
        name: "keyPoints",
        required: true,
      },
    ],
  },
  {
    name: "Product Feature List Generator",
    desc: "Generate a detailed and compelling list of product features that highlight its value and benefits.",
    icon: "https://cdn-icons-png.flaticon.com/128/1161/1161833.png",
    category: "E-commerce",
    slug: "product-feature-list-generator",
    aiPrompt:
      "Based on the provided product description, generate a list of key features and benefits. Output in plain text.",
    form: [
      {
        label: "Product Description",
        field: "textarea",
        name: "productDescription",
        required: true,
      },
    ],
  },
  {
    name: "Quora Answer Generator",
    desc: "Generate thoughtful and informative answers to Quora questions to build your online presence and authority.",
    icon: "https://cdn-icons-png.flaticon.com/128/888/888879.png",
    category: "Content Creation",
    slug: "quora-answer-generator",
    aiPrompt:
      "Based on the provided question and context, generate a well-researched answer. Output in plain text.",
    form: [
      {
        label: "Question",
        field: "textarea",
        name: "question",
        required: true,
      },
      {
        label: "Context",
        field: "textarea",
        name: "context",
        required: true,
      },
    ],
  },
  {
    name: "Podcast Episode Description Generator",
    desc: "Generate engaging and informative descriptions for your podcast episodes to attract listeners.",
    icon: "https://cdn-icons-png.flaticon.com/128/1642/1642588.png",
    category: "Content Creation",
    slug: "podcast-episode-description-generator",
    aiPrompt:
      "Based on the provided episode title and key points, generate a description for the podcast episode. Output in plain text.",
    form: [
      {
        label: "Episode Title",
        field: "input",
        name: "episodeTitle",
        required: true,
      },
      {
        label: "Key Points",
        field: "textarea",
        name: "keyPoints",
        required: true,
      },
    ],
  },
];
