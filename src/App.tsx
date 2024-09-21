import ResultCard from "./components/ResultCard";
import SummaryCard from "./components/SummaryCard";
import { type ClassValue } from "clsx";

const App = () => {
    const cardStyles: ClassValue = "w-full";

    return (
        <div className="text-foreground grid min-h-screen place-items-center font-sans text-base">
            <div className="flex h-full w-full flex-col lg:h-fit lg:w-[660px] lg:flex-row lg:rounded-3xl lg:shadow-2xl">
                <ResultCard className={cardStyles} />
                <SummaryCard className={cardStyles} />
            </div>
        </div>
    );
};
export default App;
