export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
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
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
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
