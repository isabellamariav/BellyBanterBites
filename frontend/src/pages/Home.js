const home = () => {
    return (

        <div className="carousel w-full h-full">
            <img src="/backgroundBBB.jpg" className="object-cover w-full" />


            <div className="absolute top-1/4 left-2/3">
                <h1 className="text-6xl text-center">Welcome</h1>
                <p className="text-4xl text-center">Let us choose what to eat</p>

                <div className="flex content-center">
                    <div className="space-x-4 mt-5 mx-auto">
                        <a href="/questionaire" className="btn btn-secondary">Get started</a>
                        <a href="/all-recipes" className="btn btn-secondary">Check our delicious recipes</a>
                    </div>
                </div>
            </div>
        </div>
          );
};

export default home;
