import { UserIcon } from "@heroicons/react/24/outline";
import ReplyContent from "../models/ReplyContent";

function Reply(reply: ReplyContent) {
    return (
        <div>
            <div className="flex justify-between mb-4">

                {/* heading */}
                <div>
                    <UserIcon className="inline-block h-5 pr-2"/>
                    <a href="#!" className="inline-block font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { reply.displayName + " @" + reply.username } </a>
                </div>

                <a href="#!" className="font-medium text-teal-600 hover:text-teal-900 focus:text-slate-400 duration-300 transition ease-in-out text-sm"> { reply.replied } </a>
            </div>

            <p className="text-gray-700 mb-6 break-all"> {reply.reply} </p>
            <img src = { reply.imgUrl } alt = ""/>
        </div>
    )
}

export default Reply;