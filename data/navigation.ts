interface NavigationType {
    id: number;
    name: string;
    path?: string;
    dropdown?: {
        id: number;
        name: string;
        path?: string | undefined;
        dropdown?: {
            id: number;
            name: string;
            path: string;
        }[];
    }[];
}

export const navigation: NavigationType[] = [
    {
        id: 1,
        name: "Home",
        path: '/'
    },
    {
        id: 2,
        name: "Explore",
        path: '/explore'
    },
    {
        id: 3,
        name: "Activity",
        path: '/activity'
    },
    {
        id: 4,
        name: "Community",
        dropdown: [
            {
                id: 1,
                name: "Blog",
                path: "/blog",
            },
            {
                id: 2,
                name: "Blog Details",
                path: "/blog-details",
            },
            {
                id: 3,
                name: "Help Center",
                path: "/help-center",
            },
        ],
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact",
    },
];
