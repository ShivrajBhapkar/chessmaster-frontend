const NumberNotation = ({
    label,
    isMainBoxColor,
}: {
    label: string;
    isMainBoxColor: boolean;
}) => {
    return (
        <div
            className={`font-bold absolute ${isMainBoxColor ? 'text-[#547732]' : 'text-[#a1a755]'} left-0.5`}
        >
            {label}
        </div>
    );
};

export default NumberNotation;
