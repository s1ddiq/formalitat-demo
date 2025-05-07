interface Button {
    text: string;
    route?: string;
    className?: string;
    arrow: boolean;
    onClick?: () => void;
}

interface ClothingCard {
    url: string;
    text: string;
    description: string;
    onClick?: () => void;
}

interface ReviewCard {
    url: string;
    text: string;
    description: string;
    onClick?: () => void;
}