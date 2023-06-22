const Specials = () => {
    return (
        <section>
            <div
                className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row md:gap-8 md:my-28"
            >
                <div className="flex flex-col space-y-12 md:w-1/2">
                    <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
                        What's different about Manage?
                    </h2>
                    <p className="max-w-sm text-center text-darkGrayishBlue mx-auto md:mx-0 md:text-left">
                        Manage provides all the functionality your team needs, without the
                        complexity. Our software is tailor-made for modern digital product
                        teams.
                    </p>
                </div>


                <div className="flex flex-col md:w-1/2">



                    <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-7">

                        <div className="flex flex-row rounded-l-full bg-brightRedSupLight gap-3 md:bg-transparent">
                            <div className="bg-brightRed text-white rounded-full pb-3 px-6 pt-2 md:py-1">01</div>
                            <div className="flex items-center font-bold text-darkBlue md:hidden">Track company-wide progress MOBILE</div>
                        </div>

                        <div className="md:flex flex-col">
                            <div className="hidden md:block font-bold text-darkBlue md:py-1">Track company-wide progress PC</div>
                            <p className="py-4 text-darkGrayishBlue">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:gap-6 ">

                        <div className="flex flex-row rounded-l-full bg-brightRedSupLight gap-3 md:bg-transparent">
                            <div className="bg-brightRed text-white rounded-full pb-3 px-6 pt-2 md:py-1">02</div>
                            <div className="flex items-center font-bold text-darkBlue md:hidden">Advanced built-in reports</div>
                        </div>

                        <div className="md:flex flex-col">
                            <div className="hidden md:block font-bold text-darkBlue md:py-1">Advanced built-in reports</div>
                            <p className="py-4 text-darkGrayishBlue">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                        </div>

                    </div>


                    <div className="flex flex-col md:flex-row md:items-start md:gap-6 mb-5">

                        <div className="flex flex-row rounded-l-full bg-brightRedSupLight gap-3 md:bg-transparent">
                            <div className="bg-brightRed text-white rounded-full pb-3 px-6 pt-2 md:py-1">03</div>
                            <div className="flex items-center font-bold text-darkBlue md:hidden">Everything you need in one place</div>
                        </div>

                        <div className="md:flex flex-col">
                            <div className="hidden md:block font-bold text-darkBlue md:py-1">Everything you need in one place</div>
                            <p className="py-4 text-darkGrayishBlue">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}

export default Specials