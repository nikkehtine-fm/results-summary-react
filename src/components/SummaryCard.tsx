import { cn } from "@/lib/utils";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SummaryCard = ({ className }: { className: string }) => {
    return (
        <Card className={cn("", className)}>
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Great</p>
            </CardContent>
            <CardFooter>
                <Button className="select-none">Continue</Button>
            </CardFooter>
        </Card>
    );
};

export default SummaryCard;
