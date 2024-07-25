import { CateringMenuItem, OrderCateringItem } from '../types/flight-details';

const newMenu = {
    items: [
        {
            id: 'e88ecb3d-aa98-4808-87b7-7d70b8ec7fae',
            categories: ['BREAKFAST'],
            name: 'Three Egg Starter',
            description: 'Three eggs with bacon or sausage.',
        },
        {
            id: '1bd255cc-b40a-4b19-a8ea-af75498e5fa8',
            categories: ['BREAKFAST'],
            name: 'Breakfast Burrito',
            description: 'Scrambled eggs, cheese, and sausage in a burrito.',
        },
        {
            id: '88fb9bc3-ca64-4d88-a80d-c0b76688b385',
            categories: ['BREAKFAST', 'SANDWICH'],
            name: 'Breakfast Sandwich',
            description:
                'Scrambled eggs, cheese, and sausage in a flaky croissant.',
        },
        {
            id: '0b991ad3-9fbb-4ef3-9ee5-8d567f2e240c',
            categories: ['LUNCH', 'SANDWICH', 'ENTREE'],
            name: 'Bacon Cheeseburger',
            description:
                'Burger with bacon and cheddar cheese and a side of fries.',
        },
        {
            id: 'b686b2c9-9380-4913-b4ed-bf72f5e6151a',
            categories: ['LUNCH', 'ENTREE'],
            name: 'Chicken Strips',
            description: 'Chicken strips with french fries.',
        },
        {
            id: '7adb0efb-cea6-4b5c-9ac1-c2ac349c05bd',
            categories: ['STARTER'],
            name: 'Caesar Salad',
            description:
                'Romaine lettuce with caesar dressing, croutons, and parmesan cheese.',
        },
        {
            id: '94f0a254-b091-4d62-bdb2-97def57a5327',
            categories: ['STARTER'],
            name: 'Garden Salad',
            description:
                'Tomatoes, cucumber, and lettuce with italian dressing.',
        },
        {
            id: 'f0fca186-4937-4e2c-b957-047724794afe',
            categories: ['ENTREE'],
            name: 'Tofu Bowl',
            description: 'Stir fried tofu with rice and vegetables.',
        },
        {
            id: '8fe36993-f024-40d2-ab3c-f045d16b565b',
            categories: ['SANDWICH'],
            name: 'Tuna Sandwich',
            description: 'Tuna salad sandwich with chopped celery.',
        },
    ],
};

[
    {
        categoryName: 'SANDWICH',
        positions: [
            {
                categories: ['SANDWICH'],
                description: 'Tuna salad sandwich with chopped celery.',
                id: '87b4cd6f-672f-456a-b7bc-da5d0e696d16',
                name: 'Tuna Sandwich',
            },
            {
                categories: ['BREAKFAST', 'SANDWICH'],
                description:
                    'Scrambled eggs, cheese, and sausage in a flaky croissant.',
                id: '0dd83195-b99f-4627-92f9-07c1c49c55ce',
                name: 'Breakfast Sandwich',
            },
            {
                id: '0b991ad3-9fbb-4ef3-9ee5-8d567f2e240c',
                categories: ['LUNCH', 'SANDWICH', 'ENTREE'],
                name: 'Bacon Cheeseburger',
                description:
                    'Burger with bacon and cheddar cheese and a side of fries.',
            },
        ],
    },
    {
        categoryName: 'BREAKFAST',
        positions: [
            {
                categories: ['SANDWICH'],
                description: 'Tuna salad sandwich with chopped celery.',
                id: '87b4cd6f-672f-456a-b7bc-da5d0e696d16',
                name: 'Tuna Sandwich',
            },
            {
                categories: ['BREAKFAST', 'SANDWICH'],
                description:
                    'Scrambled eggs, cheese, and sausage in a flaky croissant.',
                id: '0dd83195-b99f-4627-92f9-07c1c49c55ce',
                name: 'Breakfast Sandwich',
            },
        ],
    },
    {
        categoryName: 'SANDWICH',
        positions: [
            {
                categories: ['SANDWICH'],
                description: 'Tuna salad sandwich with chopped celery.',
                id: '87b4cd6f-672f-456a-b7bc-da5d0e696d16',
                name: 'Tuna Sandwich',
            },
        ],
    },
    {
        categoryName: 'LUNCH',
        positions: [
            {
                id: '0b991ad3-9fbb-4ef3-9ee5-8d567f2e240c',
                categories: ['LUNCH', 'SANDWICH', 'ENTREE'],
                name: 'Bacon Cheeseburger',
                description:
                    'Burger with bacon and cheddar cheese and a side of fries.',
            },
        ],
    },
    {
        categoryName: 'ENTREE',
        positions: [
            {
                id: '0b991ad3-9fbb-4ef3-9ee5-8d567f2e240c',
                categories: ['LUNCH', 'SANDWICH', 'ENTREE'],
                name: 'Bacon Cheeseburger',
                description:
                    'Burger with bacon and cheddar cheese and a side of fries.',
            },
            {
                id: 'b686b2c9-9380-4913-b4ed-bf72f5e6151a',
                categories: ['LUNCH', 'ENTREE'],
                name: 'Chicken Strips',
                description: 'Chicken strips with french fries.',
            },
        ],
    },
];

export const formatCateringMenu = (
    menu: CateringMenuItem[],
    existOrder?: OrderCateringItem[],
) => {
    const positionsByCategory: any = {};

    menu.forEach(item => {
        if (item.categories?.length && Array.isArray(item.categories)) {
            item.categories.forEach(category => {
                if (!positionsByCategory[category]) {
                    positionsByCategory[category] = [];
                }
                const currentItem = existOrder.find(
                    order => item.id === order.item.id,
                );
                positionsByCategory[category].push({
                    id: item.id,
                    categories: item.categories,
                    name: item.name,
                    description: item.description,
                    count: currentItem?.count || 0,
                });
            });
        }
    });

    const result = Object.keys(positionsByCategory).map(category => ({
        categoryName: category,
        positions: positionsByCategory[category],
    }));

    return result;
};
