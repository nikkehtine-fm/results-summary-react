import { create } from "zustand";
import data from "@/assets/data.json";

type DataItem = {
    category: string;
    score: number;
    icon: string;
    color: string;
};

type DataStore = {
    data: Array<DataItem>;
    average: number;
    updateData: (newData: Array<DataItem>) => void;
};

const useDataStore = create<DataStore>((set) => ({
    data: data,
    average: calculateAverage(data),
    updateData: (newData) =>
        set(() => ({
            data: newData,
            average: calculateAverage(newData),
        })),
}));

function calculateAverage(vals: typeof data) {
    return vals.reduce((sum, item) => sum + item.score, 0) / data.length;
}

export { useDataStore, type DataItem };
