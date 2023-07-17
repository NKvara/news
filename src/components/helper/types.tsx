export interface newsCollection {
    title: string;
    author: string;
    date: {
      seconds: number;
    };
    category: string;
    main_image: string;
    description: string;
    blogText: string;
    minified?: boolean;
  }