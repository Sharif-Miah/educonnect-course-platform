"use client";

import { useEffect, useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { Grip, Pencil } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CirclePlay } from "lucide-react";

export const LessonList = ({ items, onReorder, onEdit }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [modules, setModules] = useState(items);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setModules(items);
  }, [items]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(modules);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const startIndex = Math.min(result.source.index, result.destination.index);
    const endIndex = Math.max(result.source.index, result.destination.index);

    const updatedModules = items.slice(startIndex, endIndex + 1);

    setModules(items);

    const bulkUpdateData = updatedModules.map((module) => ({
      id: module.id,
      position: items.findIndex((item) => item.id === module.id),
    }));

    onReorder(bulkUpdateData);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="modules">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {modules.map((module, index) => (
              <Draggable key={module.id} draggableId={module.id} index={index}>
                {(provided) => (
                  <div
                    className={cn(
                      "flex items-center gap-x-2 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 border text-slate-800 dark:text-slate-100 rounded-xl mb-3 text-xs sm:text-sm font-medium",
                      module.active &&
                        "bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/80 text-[#4A3AFF] dark:text-indigo-300"
                    )}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                  >
                    <div
                      className={cn(
                        "px-2.5 py-3 border-r border-r-slate-200 dark:border-r-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-l-xl transition cursor-grab",
                        module.active &&
                          "border-r-indigo-200 dark:border-r-indigo-800 hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
                      )}
                      {...provided.dragHandleProps}
                    >
                      <Grip className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    </div>
                    <div className="flex items-center gap-2 font-semibold">
                      <CirclePlay size={16} className="text-[#4A3AFF] dark:text-indigo-400" />
                      <span>{module.title}</span>
                    </div>
                    <div className="ml-auto pr-3 flex items-center gap-x-2.5">
                      <span
                        className={cn(
                          "text-[10px] font-bold py-0.5 px-2.5 rounded-full uppercase tracking-wider",
                          module.active 
                            ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800" 
                            : "bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        )}
                      >
                        {module.active ? "Published" : "Draft"}
                      </span>
                      <Pencil
                        onClick={() => onEdit(module.id)}
                        className="w-4 h-4 text-slate-400 hover:text-[#4A3AFF] dark:hover:text-indigo-300 cursor-pointer transition"
                      />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
