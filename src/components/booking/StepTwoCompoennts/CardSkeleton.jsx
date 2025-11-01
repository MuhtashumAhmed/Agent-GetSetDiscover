
// Skeleton Loader Component
export const CardSkeleton = () => {
    return (
        <div className='flex flex-1 gap-3 pl-3 items-center mt-[10px] w-[333px] h-[124px] rounded-[12px] bg-myWhite-color shadow-[4px_8px_100px_0px_#1118270F] animate-pulse'>
            {/* Skeleton Image */}
            <div className='h-[100px] w-[100px] rounded-lg bg-gray-300'></div>
            
            <div className='font-Poppins flex flex-col gap-1 flex-1'>
                {/* Skeleton Text Lines */}
                <div className='h-4 bg-gray-300 rounded w-3/4'></div>
                <div className='h-3 bg-gray-300 rounded w-1/2'></div>
                <div className='h-3 bg-gray-300 rounded w-1/3'></div>
                <div className='h-4 bg-gray-300 rounded w-1/2'></div>
            </div>
            
            {/* Skeleton Icons */}
            <div className='flex-1 flex gap-x-2 justify-end h-full p-4'>
                <div className='h-6 w-6 bg-gray-300 rounded'></div>
                <div className='h-6 w-6 bg-gray-300 rounded'></div>
            </div>
        </div>
    );
};