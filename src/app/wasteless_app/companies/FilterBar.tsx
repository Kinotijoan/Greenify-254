import React from 'react';

interface FilterBarProps {
    wasteType: string | null;
    facilityType: string | null;
    onWasteTypeFilter: (type: string | null) => void;
    onFacilityTypeFilter: (type: string | null) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
    wasteType,
    facilityType,
    onWasteTypeFilter,
    onFacilityTypeFilter,
}) => {
    return (
        <div className="flex justify-evenly mb-6">
            <div className='flex flex-row gap-3 border rounded-lg mt-3 p-2'>

                <button
                    className={`px-4 py-2 rounded-md ${wasteType === null ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onWasteTypeFilter(null)}
                >
                    All Waste Types
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${wasteType === 'organic' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onWasteTypeFilter('organic')}
                >
                    Organic Waste
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${wasteType === 'plastic' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onWasteTypeFilter('plastic')}
                >
                    Plastic Waste
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${wasteType === 'paper' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onWasteTypeFilter('paper')}
                >
                    Paper Waste
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${wasteType === 'paper' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onWasteTypeFilter('electronic')}
                >
                    Electronic Waste
                </button>
            </div>
            <div className='flex flex-row gap-2 border rounded-lg mt-3 p-2'>

                <button
                    className={`px-4 py-2 rounded-md ${facilityType === null ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onFacilityTypeFilter(null)}
                >
                    All Facility Types
                </button>
                <button
                    className={`px-4 py-2 rounded-md ${facilityType === 'recycling' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onFacilityTypeFilter('recycling')}
                >
                    Recycling
                </button>
                
                <button
                    className={`px-4 py-2 rounded-md ${facilityType === 'compost' ? 'bg-green-500  text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    onClick={() => onFacilityTypeFilter('compost')}
                >
                    Compost
                </button>
            </div>
        </div>
    );
};

export default FilterBar;