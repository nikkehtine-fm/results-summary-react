import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const ResultCard = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Your Result</CardTitle>
            </CardHeader>
            <CardContent>
                <p>76 of 100</p>
            </CardContent>
            <CardFooter>
                <p>Great</p>
            </CardFooter>
        </Card>
    );
};

export default ResultCard;
