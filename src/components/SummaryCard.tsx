import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SummaryCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Great</p>
            </CardContent>
            <CardFooter>
                <Button>Continue</Button>
            </CardFooter>
        </Card>
    );
};

export default SummaryCard;
