import React, {Fragment, useContext, useEffect, useState} from 'react';
import { Form } from '../components/Form'
import { Loader } from '../components/Loader';
import { Notes } from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
    // const notes = new Array(3)
    //     .fill('')
    //     .map((_, i) => ({id: i, title: `Note ${i + 1}`}))

    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type='text' className="form-control" placeholder='Search...' value={search} onChange={event => setSearch(event.target.value)}/>
            </div>

            <hr />

            <Form />

            <hr/>

            {loading
                ? <Loader />
                : <Notes search={search} notes={notes} onRemove={removeNote}/>
            }

            {/* <Notes notes={notes} /> */}

        </Fragment>
    );
}