const News = () => {
    return (
        <div className="my-24 bg-neutral-darkBlue p-6 sm:my-0">
            <h2 className="pb-10 text-5xl font-bold text-primary-orange">
                New
            </h2>
            <NewSection
                title="Hydrogen VS Electric Cars"
                body="Will hydrogen-fueled cars ever catch up to EVs"
            />
            <LineBreak />
            <NewSection
                title="Hydrogen VS Electric Cars"
                body="Will hydrogen-fueled cars ever catch up to EVs"
            />
            <LineBreak />
            <NewSection
                title="Hydrogen VS Electric Cars"
                body="Will hydrogen-fueled cars ever catch up to EVs"
            />
        </div>
    );
};

export default News;

const NewSection = ({ title, body }: { title: string; body: string }) => {
    return (
        <div className="text-white">
            <a className="mb-3 block cursor-pointer text-2xl font-bold hover:text-primary-orange">
                {title}
            </a>
            <p className="text-lg text-neutral-grayBlue">{body}</p>
        </div>
    );
};

const LineBreak = () => {
    return <div className="my-8 h-[1px] w-full bg-neutral-darkGrayBlue"></div>;
};
