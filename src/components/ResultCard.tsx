import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ResultCard = ({ className }: { className: string }) => {
    return (
        <Card
            className={cn(
                "rounded-t-none bg-indigo-600 text-center text-white lg:rounded-3xl",
                className
            )}
        >
            <CardHeader>
                <CardTitle className="text-lavender">Your Result</CardTitle>
            </CardHeader>
            <CardContent>
                <p>76 of 100</p>
            </CardContent>
            <CardFooter className="text-lavender">
                <h1 className="text-3xl font-bold text-white">Great</h1>
                You scored higher than 65% of the people who have taken these
                tests.
            </CardFooter>
        </Card>
    );
};

export default ResultCard;
