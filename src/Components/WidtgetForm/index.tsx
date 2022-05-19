import React from "react"
import { CloseButton } from "../CloseButton"
import bugImage from '../../img/problema.svg'
import ideaImage from '../../img/ideia.svg'
import thoughtImage from '../../img/outro.svg'
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSucessStep } from "./Steps/FeedbakSucessStep"
export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImage,
            alt: "Imagem de um Inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImage,
            alt: "Imagem de um balão de pensamento"
        }
    },
}

export type feedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    function handleRestartFeedback() {
        setFeedbackType(null)
        setFeedbackSent(false)
    }

    const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);

    return (<>
        <div className='bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto text-center'>

            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onFeedbackRestartRequested={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)} />
                    )}
                </>
            )}

            <footer className=" text-xs text-neutral-400 text-center ">
                Todos os direitos reservados

            </footer>
        </div>
    </>)
}