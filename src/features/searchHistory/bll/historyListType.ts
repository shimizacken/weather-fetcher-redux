export type HistoryItem = {
    id: string;
    name: string;
    currentWeather: string;
    description: string;
    country: string;
    temperature: number;
    icon: string;
    tempType: {
        name: string;
        value: string;
        symbol: string;
    };
    date: number;
};
