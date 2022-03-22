import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export const Notes = ({notes, onRemove, search}) => (
    <TransitionGroup component='ul' className="list-group">
        {
            notes.filter((val) => {
                if(search === '') {
                    return val;
                } else if(val.title.toLowerCase().includes(search.toLowerCase())) {
                    return val;
                }
            }).map((note) => (
            <CSSTransition
             key={note.id}
             classNames={'note'}
             timeout={800}
            >
                <li className="list-group-item note">

                    <div>
                        <strong>{note.title}</strong>
                        <small className="date">{new Date().toLocaleDateString()}</small>
                    </div>
                    
                    <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onRemove(note.id)}
                    >
                    &times;
                    </button>
                </li>
            </CSSTransition>
        ))
        }
    </TransitionGroup>
);