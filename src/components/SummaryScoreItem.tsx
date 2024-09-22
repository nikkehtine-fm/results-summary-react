import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { DataItem } from "@/lib/store";

const SummaryScoreItem = (props: DataItem & { i: number }) => {
    const { category, score, icon, color, i } = props;

    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => setProgress(score), 300 + i * 50);
        return () => clearTimeout(timer);
    });

    return (
        <div className="relative h-fit">
            <Progress
                value={progress}
                className="absolute left-0 top-0 z-0 h-full rounded-lg"
                color={color}
            />
            <div
                className={cn(
                    "z-50 flex h-full w-full items-center justify-between p-4 font-semibold",
                    `text-fm-${color}`
                )}
            >
                <div className="flex">
                    <img
                        src={icon}
                        alt={`Icon for ${category}`}
                        className="mr-2 w-5 select-none"
                    />
                    {category}
                </div>
                <div className="flex flex-row font-bold text-foreground/50">
                    <span className="text-foreground">{score}</span>
                    <span className="pl-1.5 pr-1">/</span>
                    <span>100</span>
                </div>
            </div>
        </div>
    );
};

export { SummaryScoreItem };
