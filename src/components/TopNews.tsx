import retroPCIMG from "/image-retro-pcs.jpg";
import topLaptopsIMG from "/image-top-laptops.jpg";
import gamingGrowthIMG from "/image-gaming-growth.jpg";

const TopNews = () => {
    return (
        <div className="flex flex-col gap-8 pb-10 lg:mt-10 lg:flex-row">
            <NewSection
                number={"01"}
                body="What happens when old PCs are given modern upgrades?"
                image={retroPCIMG}
                title="Reviving Retro PCs"
            />
            <NewSection
                number={"02"}
                body="Our best picks for various needs and budgets."
                image={topLaptopsIMG}
                title="Top 10 Laptops of 2022"
            />
            <NewSection
                number={"03"}
                body="How the pandemic has sparked fresh opportunities."
                image={gamingGrowthIMG}
                title="The Growth of Gaming"
            />
        </div>
    );
};

export default TopNews;

const NewSection = ({ number, title, body, image }) => {
    return (
        <div className="flex">
            <img src={image} className="mr-6 w-28" />
            <div className="">
                <span className="mb-4 block text-4xl font-bold text-neutral-grayBlue">
                    {number}
                </span>
                <a
                    href="/"
                    className="cursor pointer mb-2 block text-lg font-bold hover:text-primary-red"
                >
                    {title}
                </a>
                <p className="text-neutral-darkGrayBlue">{body}</p>
            </div>
        </div>
    );
};
