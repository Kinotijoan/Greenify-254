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
        <div className="flex justify-center space-x-4 mb-6">
            <button
                className={`px-4 py-2 rounded-md ${wasteType === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onWasteTypeFilter(null)}
            >
                All Waste Types
            </button>
            <button
                className={`px-4 py-2 rounded-md ${wasteType === 'organic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onWasteTypeFilter('organic')}
            >
                Organic Waste
            </button>
            <button
                className={`px-4 py-2 rounded-md ${wasteType === 'plastic' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onWasteTypeFilter('plastic')}
            >
                Plastic Waste
            </button>
            <button
                className={`px-4 py-2 rounded-md ${wasteType === 'paper' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onWasteTypeFilter('paper')}
            >
                Paper Waste
            </button>
            <button
                className={`px-4 py-2 rounded-md ${facilityType === null ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onFacilityTypeFilter(null)}
            >
                All Facility Types
            </button>
            <button
                className={`px-4 py-2 rounded-md ${facilityType === 'recycling' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onFacilityTypeFilter('recycling')}
            >
                Recycling
            </button>
            <button
                className={`px-4 py-2 rounded-md ${facilityType === 'incinerator' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                onClick={() => onFacilityTypeFilter('incinerator')}
            >
                Incinerator
            </button>
        </div>
    );
};

export default FilterBar;