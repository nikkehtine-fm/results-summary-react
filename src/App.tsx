import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";

const App = () => {
    const cardStyles = "w-full";

    return (
        <div className="grid min-h-screen cursor-default place-items-center font-sans text-base text-foreground">
            <div className="flex h-full w-full flex-col md:h-fit md:w-[660px] md:flex-row md:rounded-3xl md:shadow-2xl">
                <ResultCard className={cardStyles} />
                <SummaryCard className={cardStyles} />
            </div>
        </div>
    );
};
export default App;
