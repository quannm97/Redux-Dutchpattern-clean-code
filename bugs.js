/**
 * Action creator with createAction
 */

import {createAction} from "@reduxjs/toolkit"

const action = createAction("bugUpdated");
console.log(action); // { type: "bugUpdated", payload: undefined }
console.log(action(1)); // { type: "bugUpdated", payload: 1 }
console.log(action({id: 1})); // { type: "bugUpdated", payload: { id: 1 } }


const bugUpdated = createAction("bugUpdated")
console.log(bugUpdated.type);

/**
 * Action Types
 * We do not need export Action Types because we only use them in this module
 */

export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

/**
 * Action creator
 */

export const bugAdded = (description) => ({
    type: BUG_ADDED,
    payload: {
        description,
    },
});

export const bugResolved = (id) => ({
    type: BUG_ADDED,
    payload: {
        id,
    },
});

/**
 * Reducer, note that reducer have to be the default export
 */

let lastId = 0;

export default function reducer(state = [], action) {
    switch (action.type) {
        case BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolve: false,
                },
            ];
        case BUG_REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id);
        case BUG_RESOLVED:
            return state.map((bug) =>
                bug.id !== action.payload.id ? bug : { ...bug }
            );
    }
}
