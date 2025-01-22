import { PlayCard } from '../components/Card';
export const Landing = () => {
    return (
        <>
            <div className="max-w-full mt-0">
                <div className="flex flex-col md:flex-row w-full gap-x-16">
                    <img
                        className="rounded-md w-full h-[500px] hidden md:block"
                        src={"https://www.chess.com/bundles/web/images/offline-play/standardboard.1d6f9426.png"}
                        alt="chess-board"
                    />
                    <PlayCard />
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
};