const projects = [
  {
    slug: 'c',
    title: 'Food Delivery Website',
    category: 'Web Development',
    summary: 'A modern food delivery web application built with React.js and Tailwind CSS.',
    description:
      'A responsive food delivery web application featuring restaurant listings, food categories, offers, search, authentication, and API integration. Designed with a modern and user-friendly interface for a smooth ordering experience.',
    image: '/projects/order.png',
    role: 'Frontend Developer',
    year: '2026',
    stack: ['React', 'JavaScript', 'Tailwind CSS', 'React Router', 'Axios'],
    techStack: {
      frontend: ['React', 'JavaScript', 'Tailwind CSS', 'React Router', 'Axios'],
      backend: [],
      tools: ['GitHub', 'Firebase'],
    },
    challenges: [
      'Building a responsive interface for complex restaurant listings and real-time category filtering.',
      'Handling smooth navigation and authentication workflows across pages.',
    ],
    solutions: [
      'Developed a modular component structure with React and Tailwind CSS for a modern look.',
      'Integrated React Router and Axios for seamless API handling and page transitions.',
    ],
    results: [
      'Delivered a smooth and responsive ordering experience for end users.',
      'Successfully integrated API handling, search functionality, and authentication.  ',
    ],
    link: 'https://food-delivery-app-20260918.web.app/',
  },
  {
    slug: 'ecommerce-store',
    title: 'Ecommerce Store',
    category: 'E-commerce',
    summary: 'A modern e-commerce web application built with React.js and Tailwind CSS.',
    description:
      'A modern e-commerce web application featuring product listings, shopping cart, checkout process, and user authentication. Built with React.js and Tailwind CSS for a responsive and visually appealing user experience.',
    image: '/projects/ecommerce.png',
    role: 'Frontend Developer',
    year: '2026',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'Redux'],
    techStack: {
      frontend: ['React', 'Tailwind CSS', 'TypeScript', 'Redux'],
      backend: [],
      tools: ['GitHub', 'Firebase'],
    },
    challenges: [
      'Managing global application state efficiently for cart items and user authentication.',
      'Ensuring type safety and clean architecture across complex store components.',
    ],
    solutions: [
      'Implemented Redux for predictable state management across product catalogs and shopping carts.',
      'Adopted TypeScript to ensure robust type checking and minimize runtime errors.',
    ],
    results: [
      'Created a responsive and visually appealing e-commerce store.',
      'Streamlined cart management and checkout workflows for users.',
    ],
    link: 'https://ecommerce-store-e249a.web.app/',
  },
  {
    slug: 'hr-management-system',
    title: 'HR Management System',
    category: 'Web App',
    summary: 'A comprehensive HR management system built with modern web technologies.',
    description:
      'A comprehensive HR management system featuring employee profiles, attendance tracking, leave management, and performance evaluations. Built with modern web technologies for a seamless user experience.',
    image: '/projects/hr.png',
    role: 'Senior Frontend Engineer',
    year: '2026',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'REST'],
    techStack: {
      frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      backend: ['REST API'],
      tools: ['GitHub', 'Vercel'],
    },
    challenges: [
      'Structuring complex data views for employee profiles, attendance, and leave management.',
      'Ensuring high performance and security for administrative workflows.',
    ],
    solutions: [
      'Leveraged Next.js for optimized routing, fast rendering, and server capabilities.',
      'Built clean, reusable UI components styled with Tailwind CSS and backed by TypeScript.',
    ],
    results: [
      'Provided a seamless user experience for internal HR operations.',
      'Streamlined employee attendance tracking and leave management processes.',
    ],
    link: 'https://hr-management-system-roan.vercel.app/login',
  },
  {
    slug: 'royal-academy-school',
    title: 'Royal Academy School Web',
    category: 'Web Development',
    summary: 'A modern school management web application built with React.js and Tailwind CSS.',
    description:
      'A modern, high-performance School Management Portal built with React and Tailwind CSS. Features a multi-step admission system, interactive academic sections, and a responsive masonry gallery. Fully deployed on Firebase.',
    image: '/projects/royal.png',
    role: 'Frontend Developer',
    year: '2025',
    stack: ['React', 'Redux', 'Tailwind CSS'],
    techStack: {
      frontend: ['React', 'Redux', 'Tailwind CSS'],
      backend: [],
      tools: ['Firebase', 'GitHub'],
    },
    challenges: [
      'Designing a seamless multi-step admission funnel for prospective students and parents.',
      'Displaying media content efficiently through a responsive masonry gallery.',
    ],
    solutions: [
      'Built a robust multi-step form state management using Redux and React.',
      'Implemented a responsive masonry gallery and deployed the complete app on Firebase.',
    ],
    results: [
      'Enhanced the school online presence with a high-performance portal.',
      'Streamlined the student admission inquiry process successfully.',
    ],
    link: 'https://royalacademyschool-36f00.web.app/',
  },
]

export default projects


// const projects = [
// {
//   slug: 'food-delivery',
//   title: 'Food Delivery Website',
//   summary: 'A modern food delivery web application built with React.js and Tailwind CSS.',
//   description:
//     'A responsive food delivery web application featuring restaurant listings, food categories, offers, search, authentication, and API integration. Designed with a modern and user-friendly interface for a smooth ordering experience.',
//   stack: ['React', 'JavaScript', 'Tailwind CSS', 'React Router', 'Axios'],
//   year: '2026',
//   role: 'Frontend Developer',
//   link: 'https://food-delivery-app-20260918.web.app/',
// },
//   {
//     slug: 'Ecommerce-store',
//     title: 'Ecommerce Store',
//     summary: 'A modern e-commerce web application built with React.js and Tailwind CSS.',
//     description:
//       'A modern e-commerce web application featuring product listings, shopping cart, checkout process, and user authentication. Built with React.js and Tailwind CSS for a responsive and visually appealing user experience.',
//     stack: ['React', 'Tailwind CSS', 'Typescript', 'Redux'],
//     year: '2026',
//     role: 'Frontend Developer',
//     link: 'https://ecommerce-store-e249a.web.app/',
//   },
//   {
//     slug: 'Hr-management-system',
//     title: 'HR Management System',
//     summary: 'A comprehensive HR management system built with modern web technologies.',
//     description:
//       'A comprehensive HR management system featuring employee profiles, attendance tracking, leave management, and performance evaluations. Built with modern web technologies for a seamless user experience.',
//     stack: ['React', 'Next.js', 'typescript', 'Tailwind CSS', 'REST'],
//     year: '2026',
//     role: 'Senior Frontend Engineer',
//     link: 'https://hr-management-system-roan.vercel.app/login',
//   },
//   {
//     slug: 'Royal-Academy-School',
//     title: 'Royal-Academy-School Web',
//     summary: 'A modern school management web application built with React.js and Tailwind CSS.',
//     description:
//       'A modern, high-performance School Management Portal built with React and Tailwind CSS. Features a multi-step admission system, interactive academic sections, and a responsive masonry gallery. Fully deployed on Firebase.',
//     stack: ['React', 'Redux', 'Tailwind CSS'],
//     year: '2025',
//     role: 'Frontend Developer',
//     link: 'https://royalacademyschool-36f00.web.app/',
//   },
// ]

// export default projects
