import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";

const App = () => {
    const cardStyles = "w-full";

    return (
        <div className="grid min-h-screen cursor-default place-items-center font-sans text-base text-foreground">
            <div className="flex h-full w-full flex-col lg:h-fit lg:w-[660px] lg:flex-row lg:rounded-3xl lg:shadow-2xl">
                <ResultCard className={cardStyles} />
                <SummaryCard className={cardStyles} />
            </div>
        </div>
    );
};
export default App;
