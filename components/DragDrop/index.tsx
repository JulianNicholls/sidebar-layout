'use client';

import { useState, useEffect, ReactNode } from 'react';
import { Button, Card, CardHeader, CardBody } from '@nextui-org/react';
import { faker } from '@faker-js/faker';

import {
  DragDropContext,
  Droppable,
  DroppableProps,
  Draggable,
  DropResult,
  DraggingStyle,
  NotDraggingStyle,
  DraggableLocation,
} from 'react-beautiful-dnd';

type Item = {
  id: string;
  content: ReactNode;
};

type Column = {
  title: string;
  items: Item[];
};

// fake data generator
const getItems = (count: number, offset = 0): Item[] =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: (
      <div>
        {faker.person.fullName()}
        <br />
        <span className="text-xs">({faker.internet.email()})</span>
      </div>
    ),
  }));

const reorder = (list: Item[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: Item[],
  destination: Item[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: Record<string, Item[]> = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (
  isDragging: boolean,
  draggableStyle: DraggingStyle | NotDraggingStyle | undefined
) => ({
  // some basic styles to make the items look a bit nicer
  // userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? '#22d3ee' : 'lightskyblue',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const StrictModeDroppable = ({ children, ...props }: DroppableProps) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return <Droppable {...props}>{children}</Droppable>;
};

function AnalysisPage() {
  const [columns, setColumns] = useState<Column[]>([
    { title: 'Issues Begun', items: getItems(10) },
    { title: 'Issues Specified', items: getItems(5, 10) },
  ]);

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) return;

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(columns[sInd].items, source.index, destination.index);
      const newState = [...columns];
      newState[sInd].items = items;
      setColumns(newState);
    } else {
      const result = move(columns[sInd].items, columns[dInd].items, source, destination);
      const newState = [...columns];
      newState[sInd].items = result[sInd];
      newState[dInd].items = result[dInd];

      // Previously, empty columns were removed
      // setColumns(newState.filter((group) => group.items.length > 0));
    }
  }

  return (
    <div>
      <Button
        color="primary"
        className="me-2 mb-2"
        onPress={() => {
          setColumns([...columns, { title: faker.company.buzzPhrase(), items: [] }]);
        }}
      >
        Add new Column
      </Button>

      <Button
        color="primary"
        onPress={() => {
          const copy = [...columns];
          const randCol = Math.floor(Math.random() * columns.length);
          copy[randCol].items.push(getItems(1)[0]);
          setColumns(copy);
        }}
      >
        Add new Consumer
      </Button>

      <div className="flex mt-4 gap-2">
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((col, idx) => (
            <Card key={col.title}>
              <CardHeader>
                <div className="w-full text-center text-blue-800">{col.title}</div>{' '}
              </CardHeader>
              <CardBody>
                <StrictModeDroppable key={idx} droppableId={`${idx}`}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      className={`w-84 p-2 ${snapshot.isDraggingOver ? 'bg-blue-100' : 'bg-white'}`}
                      {...provided.droppableProps}
                    >
                      {col.items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              className="rounded-lg"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                            >
                              <div className="flex justify-between px-2 items-center">
                                {item.content}
                                <Button
                                  size="sm"
                                  color="danger"
                                  onClick={() => {
                                    const newColumns = [...columns];
                                    newColumns[idx].items.splice(index, 1);
                                    setColumns(newColumns);
                                  }}
                                >
                                  delete
                                </Button>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </StrictModeDroppable>
              </CardBody>{' '}
            </Card>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default AnalysisPage;
