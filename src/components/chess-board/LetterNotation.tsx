const LetterNotation = ({
    label,
    isMainBoxColor,
}: {
    label: string;
    isMainBoxColor: boolean;
}) => {
    return (
        <div
            className={`font-bold absolute ${isMainBoxColor ? 'text-[#364d1f]' : 'text-[#565a1f]'} right-0.5 bottom-0`}
        >
            {label}
        </div>
    );
};

export default LetterNotation;
