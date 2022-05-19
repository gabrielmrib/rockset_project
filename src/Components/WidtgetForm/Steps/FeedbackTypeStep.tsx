import { ArrowArcLeft, ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: feedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {

    return (<>
        <header>
            <button type="button">
                <ArrowLeft weight='bold' className='w-4 h-4 top-5 left-5 absolute text-zinc-400 hover:text-zinc-100' />
            </button>

            <span className="text-xl leading-6">
                Deixe seu Feedback
            </span>
            <CloseButton />
        </header>
        <div className='flex py-8 gap-2 w-full '>
            {Object.entries(feedbackTypes).map(([key, value]) => {
                return (
                    <button
                        onClick={() => onFeedbackTypeChanged(key as feedbackType)}
                        key={key}
                        className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex  flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none'

                    >
                        <img src={value.image.source} alt={value.image.alt} />
                        <span>{value.title}</span>
                    </button>
                )
            })}
        </div>
    </>)
}