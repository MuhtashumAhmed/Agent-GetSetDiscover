import React, { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    useSortable,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CrossIcon, DragIcon } from "../../assets/icons/Icons";

// 🔹 Single draggable node
const SortableItem = ({ id, position, value, onChange, onDelete, topData, bottomData }) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };
    const dec = () => onChange(id, Math.max(0, value - 1));
    const inc = () => onChange(id, value + 1);

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete(id);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="flex items-center gap-2 sm:gap-4  "
        >
            {/* Circle (node) */}
            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${isDragging ? "text-white bg-[#F4F4F4]" : "bg-[#F4F4F4] shadow"
                } flex-shrink-0`}>
                {position}
            </div>

            {/* Horizontal line with minimum width */}
            <div className="flex-1 w-[10px] sm:w-[30px] h-[2px] bg-gray-400 flex-shrink-0  " />

            {/* Content container with constrained growth */}
            <div className="flex flex-col gap-2 max-w-[380px]   bg-myWhite-color shadow-md p-2 sm:p-4 rounded-xl flex-shrink-0   ">
                <div className=" sm:flex    items-center  gap-x-2.5 text-sm font-medium w-full  h-full ">
                    <div className="flex gap-2 items-center " >

                        {/* Drag Handle */}
                        <div {...listeners} {...attributes} className="cursor-grab flex-shrink-0">
                            <DragIcon className="opacity-30" />
                        </div>

                        {/* Data section with constrained width */}
                        <div className="flex-1 min-w-0 max-w-[180px]"> {/* Constrained max width */}
                            <span className="text-[8px] font-manrope text-[#787878] block truncate">
                                {topData}
                            </span>
                            <h2 className=" w-32 font-manrope font-semibold text-[#000000] text-sm truncate">
                                {bottomData?.city}, {bottomData?.country}
                            </h2>
                        </div>
                    </div>
                    <div className="flex mt-2 sm:mt-0 " >
                        {/* Counter buttons - always visible */}
                        <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    dec();
                                }}
                                className="cursor-pointer w-6 h-6 rounded-full border border-[#9E9E9E] text-[#9E9E9E] hover:bg-gray-50 flex items-center justify-center transition text-lg flex-shrink-0"
                            >
                                −
                            </button>
                            <span className="w-8 text-center text-sm text-[#000000] font-semibold flex-shrink-0">
                                {value}
                            </span>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    inc();
                                }}
                                className="cursor-pointer w-6 h-6 rounded-full border border-[#9E9E9E] text-[#9E9E9E] hover:bg-gray-50 flex items-center justify-center transition text-lg flex-shrink-0"
                            >
                                +
                            </button>
                        </div>

                        {/* Delete button */}
                        <button
                            onClick={handleDelete}
                            className="w-6 h-6 flex items-center justify-center rounded-full text-[#9E9E9E] hover:bg-red-50 transition-colors ml-2 flex-shrink-0"
                        >
                            <CrossIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function DirectionGraph({ startTop, startBottom, endTop, endBottom, items, setItems, tripData, setTripData }) {

    // console.log("Direction Grapgh ", tripData);


    const sensors = useSensors(useSensor(PointerSensor));
    // console.log("From Direction graph : ", tripData.departureLocation.label);
    // console.log("From Direction graph : ", tripData.departureLocation.label);

    // update counter
    const handleValueChange = (id, newValue) => {
        // 1️⃣ Update items
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, value: newValue } : item
            )
        );

        // 2️⃣ Update tripData.destinations (if exists)
        if (tripData) {
            setTripData(prev => ({
                ...prev,
                destinations: prev.destinations.map(dest =>
                    dest.id === id ? { ...dest, value: newValue } : dest
                )
            }));
        }
    };

    // delete item
    const handleDeleteItem = (id) => {
        setItems(prevItems => prevItems.filter(item => item.id !== id));
        if (tripData) {
            setTripData(prev => ({
                ...prev,
                destinations: prev.destinations.filter(dest => dest.id !== id)
            }));
        }
    };

    // handle drag reorder
    // handle drag reorder
    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (over && active.id !== over.id) {
            setItems((items) => {
                const oldIndex = items.findIndex((i) => i.id === active.id);
                const newIndex = items.findIndex((i) => i.id === over.id);
                const newOrder = arrayMove(items, oldIndex, newIndex);

                if (tripData) {
                    // ✅ Update destinations in tripData
                    const updatedTripData = {
                        ...tripData,
                        destinations: arrayMove(tripData.destinations, oldIndex, newIndex),
                    };

                    setTripData(updatedTripData);

                    // ✅ Also update CompleteTripData in localStorage
                    const allTrips = JSON.parse(localStorage.getItem("CompleteTripData")) || [];
                    const index = allTrips.findIndex((t) => t.tripId === updatedTripData.tripId);

                    if (index >= 0) {
                        allTrips[index] = updatedTripData;
                    } else {
                        allTrips.push(updatedTripData);
                    }

                    localStorage.setItem("CompleteTripData", JSON.stringify(allTrips));
                }

                // ✅ Save reordered items for DirectionGraph UI
                localStorage.setItem("tripItems", JSON.stringify(newOrder));

                return newOrder;
            });
        }
    };


    return (
        <>
            <div>
                <div className="flex flex-col items-start gap-6 relative">
                    {/* R (top fixed) */}
                    <div className="flex items-center gap-4">
                        <div className="w-[46px] h-[46px] bg-[#F4F4F4] flex items-center justify-center rounded-full text-[#787878] font-manrope text-lg font-bold">
                            D
                        </div>
                        <span className="border w-[35px] border-[#5E5E5E] border-dashed"></span>

                        <span className="flex items-center gap-x-2.5 text-sm font-medium max-w-[328px] h-[56px] bg-myWhite-color shadow-md p-4 rounded-xl ">
                            <DragIcon className="opacity-30" />
                            <div>
                                <span className="text-[8px] font-manrope text-[#787878]">
                                    {startTop}
                                </span>
                                <h2 className="font-manrope font-semibold text-[#000000] text-sm">
                                    {/* {startBottom} */}
                                    {tripData?.departureLocation?.label}
                                </h2>
                            </div>
                        </span>
                    </div>

                    {/* Vertical line container */}
                    <div className="flex flex-col items-start relative ">
                        <div className="absolute top-0 bottom-0 left-[20px] border-l border-[#5E5E5E] border-dashed" />

                        {/* Draggable items */}
                        <DndContext
                            sensors={sensors}
                            collisionDetection={closestCenter}
                            onDragEnd={handleDragEnd}
                        >
                            <SortableContext
                                items={items.map((i) => i.id)}
                                strategy={verticalListSortingStrategy}
                            >
                                <div className="flex flex-col gap-6 mt-4 mb-4 z-10  ">
                                    {items.map((item, index) => (
                                        <SortableItem
                                            key={item.id}
                                            id={item.id}
                                            position={index + 1}
                                            value={item.value}
                                            topData={item.topData}
                                            bottomData={item.bottomData}
                                            onChange={handleValueChange}
                                            onDelete={handleDeleteItem}
                                        />
                                    ))}
                                </div>
                            </SortableContext>
                        </DndContext>
                    </div>

                    {/* D (bottom fixed) */}
                    <div className="flex items-center gap-4">
                        <div className="w-[46px] h-[46px] bg-[#F4F4F4] flex items-center justify-center rounded-full text-[#787878] font-manrope text-lg font-bold">
                            R
                        </div>
                        <span className="border w-[35px] border-[#5E5E5E] border-dashed"></span>

                        <span className="flex items-center gap-x-2.5 text-sm font-medium max-w-[328px] h-[56px] bg-myWhite-color shadow-md p-4 rounded-xl ">
                            <DragIcon className="opacity-30" />
                            <div>
                                <span className="text-[8px] font-manrope text-[#787878]">
                                    {endTop}
                                </span>
                                <h2 className="font-manrope font-semibold text-[#000000] text-sm">
                                    {/* {endBottom} */}
                                    {tripData?.returnDestination?.label}
                                </h2>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

        </>
    );
}