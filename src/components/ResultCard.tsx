import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Circle } from "@/components/ResultCircle";

const ResultCard = ({ className }: { className: string }) => {
    return (
        <Card
            className={cn(
                "rounded-t-none bg-gradient-to-b from-back-slate to-back-royal text-center text-white md:rounded-3xl",
                className
            )}
        >
            <CardHeader>
                <CardTitle className="text-lavender">Your Result</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <Circle />
            </CardContent>
            <CardFooter>
                <h1 className="mb-4 text-3xl font-bold text-white">Great</h1>
                <p className="px-4 leading-6 text-lavender">
                    You scored higher than 65% of the people who have taken
                    these tests.
                </p>
            </CardFooter>
        </Card>
    );
};

export default ResultCard;
