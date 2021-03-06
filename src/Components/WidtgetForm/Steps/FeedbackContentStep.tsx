import { ArrowLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenShotButton";
interface FeedbackContentStepProps {
    feedbackType: feedbackType;
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] =useState<string|null>(null)
    const [comment, setComment] = useState("")
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeeback(event: FormEvent){
        event.preventDefault();
        console.log({
            screenshot,
            comment,
        });

        onFeedbackSent()
        
    }

    return (<>
        <header className="">

            <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
            >
                <ArrowLeft
                    weight='bold'
                    className='w-4 h-4 '
                />
            </button>
<span className=" flex text-xl leading-6 justify-center  gap-3">
            

                <img
                    className="w-6 h-6"
                    src={feedbackTypeInfo.image.source}
                    alt={feedbackTypeInfo.image.alt}
                />
                {feedbackTypeInfo.title}
            </span>
            <CloseButton />
        </header>
        <form onSubmit={handleSubmitFeeback} className="my-4 w-full ">
            <textarea
                onChange={event => setComment(event.target.value)}
                className="min-w-[384px] w-full min-h-[112px] text-sm placeholder:text-bg-zinc-400 text-zinc-100 border-zinc-600  bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
                placeholder="Conte com detalhes o que est?? acontecendo..." />

            <footer className="flex gap-2 mt-2">

                <ScreenshotButton 
                onScreenshotTook={setScreenshot}
                screenshot = {screenshot} />

                <button
                    disabled={comment.length === 0}
                    type="submit"
                    className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500 "
                >
                    Enviar Feedback

                </button>
            </footer>
        </form>
    </>)
}