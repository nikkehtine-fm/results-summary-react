import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/lib/store";
import { SummaryScoreItem } from "@/components/SummaryScoreItem";

const SummaryCard = ({ className }: { className: string }) => {
    const data = useDataStore((store) => store.data);

    return (
        <Card className={cn("text-summary", className)}>
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {data.map((entry, i) => (
                    <SummaryScoreItem {...entry} i={i} />
                ))}
            </CardContent>
            <CardFooter>
                <Button className="text-summary text-primary-foreground">
                    Continue
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SummaryCard;
