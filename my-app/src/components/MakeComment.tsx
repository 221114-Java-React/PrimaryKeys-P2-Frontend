import { useContext, useState } from 'react';
import SylvesterAPI from '../utils/ApiConfig';
import TenorSearch from './TenorSearch';
import { PrincipalContext } from '../context/PrincipalProvider';
import { GifIcon } from '@heroicons/react/24/outline'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

function MakeComment(props: any) {
    const [reply, setReply] = useState<string>("");
    const [tenorUrl, setTenorUrl] = useState<string>("");
    const [tenorState, setTenorState] = useState<boolean>(false);
    const principal = useContext(PrincipalContext); 

    //request comments from parent post
    // async function buttonClick(){
    //     //send request with {property.parentId} to replies endpoint
    //     await SylvesterAPI.get("/replies/post?id=f6944fd0-5054-457c-8d58-1602dcadc8c0",{
    //     }).then((response)=>{
    //         console.log(response);
    //     }).catch((error)=>{
    //         console.log(error);
    //     });
    // }

    async function submit(e: any) {
        e.preventDefault();
        //console.log(reply);
        //console.log(props.parentId);

        await SylvesterAPI.post("/replies", {
            reply: reply,
            imgUrl: tenorUrl,
            postId: props.parentId
        }, {
            headers: {
                authorization: principal?.token
            }
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

        console.log("GOT HERE");
        setReply("");
        toggleTenor()
        console.log("GOT HERE");
    }

    function toggleTenor() {
        setTenorState(!tenorState);
    }

    return (
        <form className="block p-6 rounded-lg shadow-lg bg-gray-200 w-full">
            <input className="w-full mb-6" placeholder="I tawt I taw a puddy tat!" value={ reply } onChange={(e) => setReply(e.target.value)}></input>
            
            {tenorState ? <TenorSearch passData={setTenorUrl}/> : <div></div>}

            <div className="border-double border-4 flex justify-end">            
                <GifIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={toggleTenor}/>
                <PencilSquareIcon className="h-6 pr-2 hover:opacity-40 transition duration-150 ease-in-out" onClick={submit}/>
            </div>
        </form>
    )
}

export default MakeComment;