import React , {useState} from 'react';
import Axios from 'axios';

export default function SearchApi() {

    const [query , setQuery] = useState("");
    const [reciepes , getReciepes] = useState([]);

    const API_KEY = "b41baefbe282da07beb71e4e37248c4f";

    const APP_ID = "49431765";

    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`;

    const getData = async () => {
        const result = await Axios.get(url);

        console.log(result);
        getReciepes(result.data.hits);
        setQuery(" ");
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();

    };

    const onChange= (e) => {
        setQuery(e.target.value);
    }



    return (
        <>
            <div className="App">
                <h1>Food Reciepe App</h1>
                <form onSubmit={onSubmit} className="search-form">
                    <input
                        type="text"
                        name="query"
                        placeholder="Search Food"
                        autoComplete="off"
                        value={query}
                        onChange={onChange}

                    />

                    <input
                        type="submit"
                        value="search"
                        />
        </form>

        <div className="reciepes">

           
        </div>
            
        </div>
        </>
            )
}


