export const Skeleton = () => {
    return (

        <div className="animate-pulse">
            <div className="p-4 border-b border-slate-200 w-screen max-w-screen-md pb-4">
                <div className="flex items-center space-x-2">
                    <div className="h-4 bg-gray-200 rounded-full w-48 mb-4"></div>
                    <div className=" text-sm font-medium text-slate-700">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="flex justify-center flex-col">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                    <div className="text-sm text-slate-500">
                        <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    </div>
                </div>
                <div className="mt-2 font-bold text-2xl">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="font-light text-slate-800">
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                </div>
                <div className="mt-10 ml-2 mr-2 flex justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="inline bg-gray-200 rounded-full p-2 text-xs font-normal">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="text-slate-500 text-sm">
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                </div>
            </div>

            <span className="sr-only">Loading...</span>
        </div>


    )
}